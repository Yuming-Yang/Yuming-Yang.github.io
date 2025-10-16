---
layout: archive
permalink: /blog/
title: "Blog"
author_profile: true
redirect_from:
  - /year-archive/
  - /wordpress/blog-posts/
---

Welcome to my blog where I share insights on macro markets, crypto, credit, and quantitative finance.

## Latest Posts

{% for post in site.posts %}
  {% include archive-single.html type="list" %}
{% endfor %}

## Read on Other Platforms

- {% if site.platforms.substack_url %}[Substack]({{ site.platforms.substack_url }}){% else %}Substack{% endif %}
- {% if site.platforms.medium_url %}[Medium]({{ site.platforms.medium_url }}){% else %}Medium{% endif %}
- {% if site.external_feeds.blog_rss %}[Blog RSS]({{ site.external_feeds.blog_rss }}){% else %}Blog RSS{% endif %}

{% if site.external_feeds.blog_rss %}
## From My External Blog Feed
<div class="rss-list" data-rss="{{ site.external_feeds.blog_rss }}" data-limit="8"></div>
{% endif %}


