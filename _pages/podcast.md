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

Welcome to my podcast where I explore observations on the financial market, crypto, as well as thoughts in personal life.

## Latest Episodes

{% for post in site.podcast %}
  {% include archive-single.html type="list" %}
{% endfor %}