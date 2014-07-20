---
title: 使用Middleman架部落格
date: 2014-07-20 06:35 UTC
tags:
---

###參考文件
- [Moving to Middleman](http://www.patricklenz.co/blog/2013/6/2/moving-to-middleman)
- [Middleman官方文件](http://middlemanapp.com/)

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

##使用Blog extension


