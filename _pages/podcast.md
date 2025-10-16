---
layout: archive
permalink: /podcast/
title: "Podcast"
author_profile: true
redirect_from:
  - /podcast.html
---

Welcome to my podcast where I explore the intersection of finance, technology, and markets. Each episode features conversations with industry experts, deep dives into market trends, and insights on quantitative finance and digital assets.

## Latest Episodes

{% for post in site.podcast %}
  {% include archive-single.html type="list" %}
{% endfor %}

## Listen on Your Platform

- [Spotify](https://open.spotify.com/show/your-podcast-id)
- [Apple Podcasts](https://podcasts.apple.com/podcast/your-podcast-id)
- [Google Podcasts](https://podcasts.google.com/feed/your-feed-url)
- [RSS Feed]({{ site.url }}/feed.xml)

## Topics Covered

- **Crypto Markets**: Analysis of digital asset trends and blockchain technology
- **Macro Economics**: Global economic trends and their impact on markets
- **Quantitative Finance**: Systematic trading strategies and risk management
- **Market Insights**: Interviews with industry professionals and thought leaders

*New episodes released weekly. Subscribe to stay updated on the latest insights.*
