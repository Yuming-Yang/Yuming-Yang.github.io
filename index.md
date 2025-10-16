---
layout: single
title: "Home"
author_profile: true
---

{% include base_path %}

<div class="home-intro">
  <h2>Welcome</h2>
  <p>{{ site.author.bio }}</p>
  <p>
    <a class="btn btn--primary" href="/year-archive/">Read the Blog</a>
    <a class="btn btn--primary" href="/podcast/">Listen to the Podcast</a>
    <a class="btn" href="/about/">About Me</a>
    <a class="btn" href="/connect/">Connect</a>
  </p>
  <hr />
</div>

<div class="home-section">
  <h2>Latest Blog Post</h2>
  {% assign latest_post = site.posts | first %}
  {% if latest_post %}
    <article class="archive__item">
      <h3 class="archive__item-title"><a href="{{ latest_post.url | relative_url }}">{{ latest_post.title }}</a></h3>
      <p class="page__meta">{{ latest_post.date | date: "%b %d, %Y" }}</p>
      <p>{{ latest_post.excerpt | strip_html | truncate: 200 }}</p>
      <p><a href="/year-archive/">View all posts →</a></p>
    </article>
  {% else %}
    <p>No posts yet. Check back soon!</p>
  {% endif %}
</div>

<div class="home-section">
  <h2>Latest Podcast Episode</h2>
  {% assign latest_episode = site.podcast | first %}
  {% if latest_episode %}
    <article class="archive__item">
      <h3 class="archive__item-title"><a href="{{ latest_episode.url | relative_url }}">{{ latest_episode.title }}</a></h3>
      <p class="page__meta">{{ latest_episode.date | date: "%b %d, %Y" }}</p>
      <p>{{ latest_episode.excerpt | strip_html | truncate: 200 }}</p>
      <p><a href="/podcast/">Browse all episodes →</a></p>
    </article>
  {% else %}
    <p>No podcast episodes yet. Stay tuned!</p>
  {% endif %}
</div>
