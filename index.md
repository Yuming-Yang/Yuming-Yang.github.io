---
layout: single
title: "Home"
author_profile: true
---

{% include base_path %}

<div class="home-intro stack" style="padding: 3rem 0; border-radius: 16px; background:
  radial-gradient(600px 200px at 10% -20%, rgba(0,0,0,.05), rgba(0,0,0,0)),
  radial-gradient(600px 200px at 90% -20%, rgba(0,0,0,.04), rgba(0,0,0,0));">
  <h2>Welcome</h2>
  <p>
    <a class="btn btn--primary" href="/blog/">Read the Blog</a>
    <a class="btn btn--primary" href="/podcast/">Listen to the Podcast</a>
    <a class="btn" href="/about/">About Me</a>
    <a class="btn" href="/connect/">Connect</a>
    {% if site.platforms.substack_url %}<a class="btn" href="{{ site.platforms.substack_url }}" target="_blank" rel="noopener">Substack</a>{% endif %}
    {% if site.platforms.spotify_url %}<a class="btn" href="{{ site.platforms.spotify_url }}" target="_blank" rel="noopener">Spotify</a>{% endif %}
  </p>
  <hr />
</div>

<div class="home-section stack">
  <h2>Latest Blog Post</h2>
  {% assign latest_post = site.posts | first %}
  {% if latest_post %}
    <article class="archive__item will-reveal">
      <h3 class="archive__item-title"><a href="{{ latest_post.url | relative_url }}">{{ latest_post.title }}</a></h3>
      <p class="page__meta">{{ latest_post.date | date: "%b %d, %Y" }}</p>
      <p>{{ latest_post.excerpt | strip_html | truncate: 200 }}</p>
      <p><a href="/blog/">View all posts →</a></p>
    </article>
  {% else %}
    <p>No posts yet. Check back soon!</p>
  {% endif %}
</div>

<div class="home-section stack">
  <h2>Latest Podcast Episode</h2>
  {% assign latest_episode = site.podcast | first %}
  {% if latest_episode %}
    <article class="archive__item will-reveal">
      <h3 class="archive__item-title"><a href="{{ latest_episode.url | relative_url }}">{{ latest_episode.title }}</a></h3>
      <p class="page__meta">{{ latest_episode.date | date: "%b %d, %Y" }}</p>
      <p>{{ latest_episode.excerpt | strip_html | truncate: 200 }}</p>
      <p><a href="/podcast/">Browse all episodes →</a></p>
    </article>
  {% else %}
    <p>No podcast episodes yet. Stay tuned!</p>
  {% endif %}
</div>
