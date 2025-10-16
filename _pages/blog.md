---
layout: single
permalink: /blog/
title: "Blog"
author_profile: true
redirect_from:
  - /year-archive/
  - /wordpress/blog-posts/
---

<div class="cta-bar cluster">
  <strong>Subscribe or follow:</strong>
  {% if site.platforms.substack_url %}<a class="btn btn--primary" href="{{ site.platforms.substack_url }}" target="_blank" rel="noopener">Substack</a>{% endif %}
  {% if site.platforms.medium_url %}<a class="btn" href="{{ site.platforms.medium_url }}" target="_blank" rel="noopener">Medium</a>{% endif %}
  {% if site.external_feeds.blog_rss %}<a class="btn" href="{{ site.external_feeds.blog_rss }}" target="_blank" rel="noopener">RSS</a>{% endif %}
</div>

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


