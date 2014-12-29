---
title: elasticsearch-rails
date: 2014-12-19 02:52 UTC
tags: Elasticsearch
published: false
---

`brew install elasticsearch`

電腦登入就啟用

`ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents`

Run:

`launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist`

or

`elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml`


gemfile add:

~~~ ruby
gem 'elasticsearch-model'
gem 'elasticsearch-rails'
~~~

`bundle`


新增task
`lib/tasks/elasticsearch.rake`

加入:

~~~ ruby
  require 'elasticsearch/rails/tasks/import'
~~~

加入到你想要做search的model:

~~~ ruby
class Article < ActiveRecord::Base
  include Elasticsearch::Model
~~~

把Article加到elasticsearch的index中

`bundle exec rake environment elasticsearch:import:model CLASS='Article'`

or you can just type in code or rails console

`Place.__elasticsearch__.import`


add this line will set ES log to your development env

~~~ ruby
module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    # WARNING: this will be automatically synchronize the index on elasticsearch.
    # DON'T DO THIS!!!!!!!!
    # include Elasticsearch::Model::Callbacks

  end
end
~~~


如果專案在之前有使用Ransack，search的method會遇到衝突，elasticsearch提供proxy `__elasticsearch__`，可以使用`Article.__elasticsearch__.search(yourquery)`作為替代方案

~~~ ruby
module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    # WARNING: this will be automatically synchronize the index on elasticsearch.
    # DON'T DO THIS!!!!!!!!
    # include Elasticsearch::Model::Callbacks

    # avoid conflict with ransack method 'search'
    def self.es
      self.__elasticsearch__
    end


  end
end
~~~


es_definition
![es_definition](/images/elasticsearch/es_definition.png "es_definition")