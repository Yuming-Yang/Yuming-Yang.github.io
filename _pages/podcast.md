---
layout: single
permalink: /podcast/
title: "Podcast"
author_profile: true
redirect_from:
  - /podcast.html
---

<div class="cta-bar cluster">
  <strong>Listen on:</strong>
  {% if site.platforms.spotify_url %}<a class="btn btn--primary" href="{{ site.platforms.spotify_url }}" target="_blank" rel="noopener">Spotify</a>{% endif %}
</div>

Welcome to my podcast where I explore the intersection of finance, technology, and markets. Each episode features conversations with industry experts, deep dives into market trends, and insights on quantitative finance and digital assets.

## Latest Episodes

{% for post in site.podcast %}
  {% include archive-single.html type="list" %}
{% endfor %}

## Listen on Your Platform

- {% if site.platforms.spotify_url %}[Spotify]({{ site.platforms.spotify_url }}){% else %}Spotify{% endif %}

## Topics Covered

- **Crypto Markets**: Analysis of digital asset trends and blockchain technology
- **Macro Economics**: Global economic trends and their impact on markets
- **Quantitative Finance**: Systematic trading strategies and risk management
- **Market Insights**: Interviews with industry professionals and thought leaders

*New episodes released weekly. Subscribe to stay updated on the latest insights.*

