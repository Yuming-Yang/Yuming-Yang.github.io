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
  {% if site.platforms.apple_podcasts_url %}<a class="btn" href="{{ site.platforms.apple_podcasts_url }}" target="_blank" rel="noopener">Apple Podcasts</a>{% endif %}
  {% if site.platforms.google_podcasts_url %}<a class="btn" href="{{ site.platforms.google_podcasts_url }}" target="_blank" rel="noopener">Google Podcasts</a>{% endif %}
  {% if site.external_feeds.podcast_rss %}<a class="btn" href="{{ site.external_feeds.podcast_rss }}" target="_blank" rel="noopener">RSS</a>{% endif %}
</div>

Welcome to my podcast where I explore the intersection of finance, technology, and markets. Each episode features conversations with industry experts, deep dives into market trends, and insights on quantitative finance and digital assets.

## Latest Episodes

{% for post in site.podcast %}
  {% include archive-single.html type="list" %}
{% endfor %}

## Listen on Your Platform

- {% if site.platforms.spotify_url %}[Spotify]({{ site.platforms.spotify_url }}){% else %}Spotify{% endif %}
- {% if site.platforms.apple_podcasts_url %}[Apple Podcasts]({{ site.platforms.apple_podcasts_url }}){% else %}Apple Podcasts{% endif %}
- {% if site.platforms.google_podcasts_url %}[Google Podcasts]({{ site.platforms.google_podcasts_url }}){% else %}Google Podcasts{% endif %}
- {% if site.external_feeds.podcast_rss %}[RSS Feed]({{ site.external_feeds.podcast_rss }}){% else %}RSS Feed{% endif %}

## Topics Covered

- **Crypto Markets**: Analysis of digital asset trends and blockchain technology
- **Macro Economics**: Global economic trends and their impact on markets
- **Quantitative Finance**: Systematic trading strategies and risk management
- **Market Insights**: Interviews with industry professionals and thought leaders

*New episodes released weekly. Subscribe to stay updated on the latest insights.*

{% if site.external_feeds.podcast_rss %}
## From My Podcast Feed
<div class="rss-list" data-rss="{{ site.external_feeds.podcast_rss }}" data-limit="8"></div>
{% endif %}
