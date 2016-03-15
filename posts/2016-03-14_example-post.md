---
layout: post
title: Solving Problems in Retail with DATA MINING – Part 1/3
---

Retail is one of the most important business domains for data science and data mining applications because of its prolific data and numerous optimization problems such as optimal prices, discounts, recommendations, and stock levels that can be solved using data analysis methods. 

The rise of omni-channel retail (or interconnected retail) that integrates marketing, customer relationship management, and inventory management across all online and offline channels has produced a plethora of correlated data which increases both the importance and capabilities of data-driven decisions.

Although there are many books on data mining in general and its applications to marketing and customer relationship management in particular, most of them are structured as data scientist manuals focusing on algorithms and methodologies and assume that human decisions play a central role in transforming analytical findings into business actions. 

I decided to follow a different path by trying to take a more rigorous approach and provide a systematic view of econometric models and objective functions that can leverage data analysis to make more automated decisions. 

With this post, I want to describe a hypothetical revenue management platform that consumes a retailer’s data and controls different aspects of the retailer’s strategy such as pricing, marketing, and inventory.

> I decided to follow a different path by trying to take a more rigorous approach and provide a systematic view of econometric models and objective functions that can leverage data analysis to make more automated decisions. 

> With this post, I want to describe a hypothetical revenue management platform that consumes a retailer’s data and controls different aspects of the retailer’s strategy such as pricing, marketing, and inventory.

## The Bacon

There are two major reasons why I focus on a combination of economic frameworks and data mining methods:

* Hundreds of economic models relevant to retail can be found in economic textbooks and articles because markets, discounts, competition were a subject of intensive research over the last century, if not longer. However, many of these models are highly parametric and not flexible enough to model real life with sufficient accuracy. Data mining offers a variety of techniques for nonparametric modeling that helps to create flexible and practical models. Many articles and case studies published during the last decade successfully achieve the balance between abstract models and machine learning.
* Fast data circulation in modern retail enables retailers to make accurate forecasts using relatively simple models because small incremental predictions are generally simpler than big decisions. For instance, it might be difficult to calculate the optimal price for a new disruptive product because its perceived value is not known, but it can be relatively easy to automatically adjust promotion prices in real time depending on demand and inventory levels. Some commercially successful solutions for price optimization discard most of economic modeling simply moving prices up and down depending on closed loop feedback from point of sales.

These two considerations suggest a high potential for automated decision making and dynamic optimization in retail, so we were keen to study this subject.

### Le Code

```
def bacon(yum)
  return 'mmm'
```

### Lists

Most of this article represents an overview of the results published by retailers and researchers who built practical decision making and optimization systems combining abstract economic models with data mining methods. 

The study focuses mainly on optimization problems related to revenue management discipline which includes marketing and pricing questions. More specialized data mining applications like supply chain optimization and fraud detection are out of scope, as well as the implementation details of the data mining process (such as evaluation of model quality).

The rest of the article is organized as follows:

* We first introduce a simple framework that ties together a retailer’s actions, profits and data. This framework will later be used to describe analytical problems in a more uniform way.
* The main body of the article represents a catalog of optimization problems relevant to retail. We describe the problems one by one in separate sections. Each section provides a brief problem statement, a list of business use cases and applications, and a detailed description of how the problem can be decomposed into econometric models and data mining tasks that help to solve the business problem by means of numerical optimization.
* We next provide a section that discusses the economic benefits that can be expected in practice.
* Finally, we conclude the article with a discussion of dependencies between the considered problems to figure out common principles and important cross-cuts.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.

### Images

Quisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.

![placeholder](http://placehold.it/800x400 "Large example image")
![placeholder](http://placehold.it/400x200 "Medium example image")
![placeholder](http://placehold.it/200x200 "Small example image")


#### End

Filet mignon strip steak porchetta.