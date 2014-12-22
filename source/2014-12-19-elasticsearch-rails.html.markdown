---
title: elasticsearch-rails
date: 2014-12-19 02:52 UTC
tags:
---

`brew install elasticsearch`

電腦登入就啟用

`ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents`

Run:

`launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist`

or

`elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml`


gemfile add:

~~~ Ruby
gem 'elasticsearch-model'
gem 'elasticsearch-rails'
~~~

`bundle`


新增task
`lib/tasks/elasticsearch.rake`
加入:
~~~ Ruby
  require 'elasticsearch/rails/tasks/import'
~~~

加入到你想要做search的model:
~~~ Ruby
class Article < ActiveRecord::Base
  include Elasticsearch::Model
~~~

把Article加到elasticsearch的index中
`bundle exec rake environment elasticsearch:import:model CLASS='Article'`
or you can just type in code or rails console
`Place.__elasticsearch__.import`


add this line will set ES log to your development env