---
title: Hello ElasticSearch
date: 2014-12-29 07:50 UTC
tags: Elasticsearch
published: false
---




## 判斷詞彙關聯程度

Elasticserach使用TF/IDF

### Term frequency
詞彙出現在這個document(一筆資料)中的頻率，出現越多次表示關聯程度越**高**

### Inverse document frequency
詞彙出現在index(所有資料)的頻率，出現越多次表示關聯程度**低**，像是一些較常見的字，比如說`and`或`the`會常常出現在資料中，表示他們較不重要，不是所要搜尋的結果。

### Field-length norm
欄位長度越長，表示關聯程度越**低**。舉例來說在title的欄位中出現我們要的內容，會比出現在content中更為重要，佔有更多權重。