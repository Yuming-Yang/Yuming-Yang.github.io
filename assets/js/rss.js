/* Minimal client-side RSS renderer using Fetch + DOMParser.
   Usage: Add a container with data-rss attribute:
   <div class="rss-list" data-rss="{{ site.external_feeds.blog_rss }}" data-limit="5"></div>
*/
(function(){
  function text(node, sel){
    var el = sel ? node.querySelector(sel) : node;
    return el ? (el.textContent || '').trim() : '';
  }
  function first(nodes){ return nodes && nodes.length ? nodes[0] : null; }

  function parseRSS(xmlString){
    var parser = new DOMParser();
    var doc = parser.parseFromString(xmlString, 'application/xml');
    if (doc.querySelector('parsererror')) return { items: [] };
    var channelItems = Array.from(doc.querySelectorAll('channel > item'));
    if (channelItems.length){
      return {
        items: channelItems.map(function(it){
          return {
            title: text(it, 'title'),
            link: text(it, 'link'),
            pubDate: text(it, 'pubDate'),
            description: text(it, 'description')
          };
        })
      };
    }
    // Atom fallback
    var entries = Array.from(doc.querySelectorAll('feed > entry'));
    return {
      items: entries.map(function(en){
        var linkEl = first(en.querySelectorAll('link[rel="alternate"],link[href]'));
        return {
          title: text(en, 'title'),
          link: linkEl ? (linkEl.getAttribute('href') || '') : '',
          pubDate: text(en, 'updated') || text(en, 'published'),
          description: text(en, 'summary') || text(en, 'content')
        };
      })
    };
  }

  function render(container, items, limit){
    var ul = document.createElement('ul');
    ul.className = 'rss-list__items';
    items.slice(0, limit || 5).forEach(function(it){
      var li = document.createElement('li');
      li.className = 'rss-list__item';
      var a = document.createElement('a');
      a.href = it.link; a.textContent = it.title; a.rel = 'noopener noreferrer'; a.target = '_blank';
      var meta = document.createElement('div');
      meta.className = 'rss-list__meta';
      meta.textContent = it.pubDate || '';
      li.appendChild(a);
      if (meta.textContent) li.appendChild(meta);
      ul.appendChild(li);
    });
    container.innerHTML = '';
    container.appendChild(ul);
  }

  function load(container){
    var url = container.getAttribute('data-rss');
    var limit = parseInt(container.getAttribute('data-limit') || '5', 10);
    if (!url) return;
    fetch(url)
      .then(function(r){ return r.text(); })
      .then(function(xml){ return parseRSS(xml); })
      .then(function(feed){ render(container, feed.items || [], limit); })
      .catch(function(){ /* silent fail */ });
  }

  function init(){
    var nodes = document.querySelectorAll('.rss-list[data-rss]');
    Array.prototype.forEach.call(nodes, load);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


