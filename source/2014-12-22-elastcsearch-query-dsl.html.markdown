---
title: Elastcsearch Query DSL
date: 2014-12-22 03:37 UTC
tags: Elasticsearch
published: false
---

## match_phrase

~~~ json
{
    "match_phrase" : {
        "message" : "this is a test"
    }
}
~~~

~~~ json
{
    "match" : {
        "message" : {
            "query" : "this is a test",
            "type" : "phrase"
        }
    }
}
~~~

## match_phrase_prefix

用來比對資料的前幾個字，可以設定`max_expansions`

~~~ json
{
    "match_phrase_prefix" : {
        "message" : {
            "query" : "this is a test",
            "max_expansions" : 10
        }
    }
}
~~~

## multi match query

在多個fields之間搜尋字串

~~~ json
{
  "multi_match" : {
    "query":    "this is a test",
    "fields": [ "subject", "message" ]
  }
}
~~~


### wildcards
這樣可以同時比對title last_name first_name

~~~ json
{
  "multi_match" : {
    "query":    "Will Smith",
    "fields": [ "title", "*_name" ]
  }
}
~~~

### boost

如果subject是一個獨立的欄位，可以用`^`增加它的權重，現面的例子表示subject比message重要三倍

~~~ json
{
  "multi_match" : {
    "query" : "this is a test",
    "fields" : [ "subject^3", "message" ]
  }
}
~~~

### types

best_fields

~~~ json
{
  "multi_match" : {
    "query":      "brown fox",
    "type":       "best_fields",
    "fields":     [ "subject", "message" ],
    "tie_breaker": 0.3
  }
}
~~~

most_field

第二第三個field是用來將比較相似的結果推到list的上方

~~~ json
{
  "multi_match" : {
    "query":      "quick brown fox",
    "type":       "most_fields",
    "fields":     [ "title", "title.original", "title.shingles" ]
  }
}
~~~

cross_fields
將兩個欄位結合成一個欄位搜尋