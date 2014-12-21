---
title: 使用Middleman架部落格(上)
date: 2014-07-20 06:35 UTC
tags: Ruby
---

##安裝 Middleman

Middleman是用Ruby所寫的，在安裝Middleman之前必須先安裝Ruby，安裝可以參考這篇 [Ruby下載安裝](https://www.ruby-lang.org/zh_tw/downloads/)，Mac OS X Mavericks 系統內建 Ruby 2.0.0，可以用```ruby -v```進行確認是否安裝。

在command line中執行以下指令，開始安裝Middleman:

~~~ shell
  $ gem install middleman
~~~

安裝過程會花五到十分鐘...  十分鐘過後...

安裝成功後Middleman會提供三個指令

- 初始化一個新的Middleman專案

  ```
    middleman init
  ```
- 將專案編譯成靜態檔案

  ```
  middleman build
  ```
- 啟動server (預設是<http://localhost:4567>)

  ```
  middleman server
  ```

##建立新的專案
使用以下指令建立Middleman專案:

~~~ shell
  $ middleman init my_middleman_project
~~~

輸入```middleman server```開啓Server，打開browser前往<http://localhost:4567>，看到以下畫面表示成功建立專案：

![alt text](/images/middleman-opening.png "Middleman Opening")

##使用Blogging extension
Middleman有官方的extension支援部落格功能，功能包括:

- 自訂URLs
- tags
- 文章分類
- 依日期產生文章列表
- etc...

部落格的基本功能都已經涵蓋在裡面，另外寫技術文章最需要的Code Syntax Highlight功能也有擴充（Gem）可供安裝，最棒的是這些功能“幾乎”不需要撰寫程式碼就能夠做到，So Cool!

想知道詳細的功能列表可以參考[官方網站關於Blogging的介紹頁](http://middlemanapp.com/basics/blogging/)

###安裝步驟

將以下程式碼加到`Gemfile`中，表示稍後將會安裝此擴充功能(Gem)：

~~~ ruby
gem "middleman-blog"
~~~
command line執行 ```bundle``` 安裝 gem "middleman-blog"


在config.rb進行以下設定，啟用功能：

~~~ ruby
activate :blog do |blog|
  # set options on blog
end
~~~

command line切換到專案目錄，執行

~~~ shell
  $ middleman init --template=blog
~~~
會產生 index.html, tag.html, calendar.html, and feed.xml，分別是不同功能頁面的樣板，可以自行對他進行修改

如果以上步驟都沒有出錯，現在執行 ```middleman server``` ，進到 <http:localhost:4567> 就可以看到畫面了。
![alt "Middleman Index"](/images/middleman-index.png "Middleman Index")

大功告成，接下來我們來寫文章吧

##撰寫文章

新增文章不需要手動開一個新檔，或是進入後台去編輯，而是在command line下指令，middleman會自動依據你的Title與日期自動產生相應的檔案，指令如下：

~~~ shell
  $ middleman article {title}
~~~
{title}為這篇文章的title，鍵入的{title}會跟你的檔案名稱與url相同，不要輸入中文，會發生很恐怖的事情！但如果標題真的為中文呢？ 稍後我們可以在檔案中進行更改標題，下指令只是需要產生檔案與對應的url。

如果剛剛輸入為```middleman article "My First Article"```，會在source的資料夾下產生 _2014-07-28-my-first-article.html.markdown_ 這樣的檔案，檔案內容為

~~~
---
title: My First Article
date: 2014-07-28 09:14 UTC
tags:
---
~~~
- title: 這邊可以更改為任何標題，包括中文標題，這會更改首頁blog列表的顯示

- tags:
這邊可以幫文章加入tags，例：```tags: ruby, blogging, middleman```，打開則可以看到tags相對應的文章列表頁面，例如ruby相關文章就到<http://localhost:4567/tags/ruby>

文章內容則是用markdown接下去寫在下面，```middleman build```重新產生靜態頁面之後，開啓Server就可以看到內容變更。

##未完待續

這篇主要是介紹用Middleman寫部落格的基本設定，但是看那出現的醜醜頁面令人無法忍受，就知道還缺很多東西啊阿啊啊！下篇繼續介紹Middleman blogging extension，如何更改layout與style設定，以及很必要的syntax highlight。


##參考資料
- [Moving to Middleman](http://www.patricklenz.co/blog/2013/6/2/moving-to-middleman)
- [Middleman官方文件](http://middlemanapp.com/)
