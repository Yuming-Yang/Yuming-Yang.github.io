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
</div>

Welcome to my blog where I share insights on macro markets, crypto, and quantitative finance.

## Latest Posts

{% for post in site.posts %}
  {% include archive-single.html type="list" %}
{% endfor %}



