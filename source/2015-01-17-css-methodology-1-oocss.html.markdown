---
title: 重新了解CSS架構(一) - OOCSS
date: 2015-01-17 10:11 UTC
tags: CSS, 前端
published: false
---

>CSS DOESN'T SUCK,  YOU'RE JUST DOING WRONG
><footer>-- Nicole Sullivan(改自Doug Crockford)</footer>

OOCSS的全名是Object-Orientated CSS，物件導向的CSS。物件導向是程式設計中很重要的一個概念，可以理解為將程式包裝成為一個一個的物件，在理想的狀況下，只需要選擇對應的物件組合組合在一起，便能夠完成功能，而不需要編寫多餘的程式碼。

對應到OOCSS，OOCSS提供一種思考方式，如何去組織CSS與HTML，模組化CSS，目標就是讓所有的CSS都可以被重複使用。

## 為什麼需要OOCSS
這個問題其實是在問，為什麼要讓CSS可以重複被使用，有幾個理由:

### 網站效能
假如我們在每個頁面都寫一份CSS檔案的話，隨著專案不斷增長，CSS檔案的大小就會不斷地增長，檔案越大，網頁的載入就越慢，而影響到使用體驗，如果訪客進入網站前就花了超過十秒時間等待，應該會直接跳出吧。

### 網站體驗
全站的樣式要盡可能的統一，五花八門的樣式只會讓使用者困惑，統一的樣式會讓網站的表達更清晰。

### 開發維護
如果我們要更改表單的樣式，竟然要更改五個以上的CSS檔案，那就會無可避免的增加Bug的產生機會，盡可能地減少更改CSS的次數，是防止CSS大爆炸的好方法。

-----
## 聽聽OOCSS怎麼說
現在我們要幫OOCSS做一張名片，HTML會像下面這個樣子：

~~~ html
<div class="block">
   <div class="leftColumn">
    <img src="https://farm9.staticflickr.com/8621/16297796121_7401168493_o.png" alt="OOCSS " />
  </div>
  <div class="rightColumn">
    <h2>OOCSS的兩條原則</h2>
    <ul>
      <li>Separate Container and Content</li>
      <li>Seperate Structure and Skin</li>
    </ul>
    <button>分享到facebook</button>
  </div>
</div>
~~~




目的

減少CSS程式碼
Component like lego
新的頁面不應該增加額外的程式碼

優點：


缺點：


Two Principles
## Separate container and content

## Separate Structure and Skin
必須要先樂高一下
但是！
避免太過相似的元素

block應該要可以被額外的class擴衝


further more
dont't use ids:
  不能夠被重用，因為id在頁面中是單一的
  不能被覆蓋


Origin:
http://www.slideshare.net/stubbornella/object-oriented-css

http://code.tutsplus.com/tutorials/object-oriented-css-what-how-and-why--net-6986

http://takazudo.github.io/presentation-oocss-sass/#/

http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/


http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/

https://github.com/stubbornella/oocss/wiki



https://github.com/gonsakon/Learn-Sass-in-90-days/blob/master/docs/CssDesignPattern/OOCSS.markdown

http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/
譯 http://blog.chibc.net/design/css-tutorial/489


http://nicolasgallagher.com/about-html-semantics-front-end-architecture/
譯http://blog.friendo.com.tw/posts/241809-html-semantics-and-front-end-architecture

----

http://philipwalton.com/articles/the-future-of-oocss-a-proposal/
http://philipwalton.com/articles/css-architecture/



--綜合
https://speakerdeck.com/bblurock/object-oriented-css-cong-oocss-smacss-bem-dao-amcss
