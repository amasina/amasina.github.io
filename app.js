/* Amasina digital menu, variant A "Instagram poster menu". Vanilla JS, no framework.
   Data: menu-data.js (window.MENU_DATA, proofread names and prices) and
   marketing-copy.js (window.MARKETING, optional; any missing key renders nothing). */
(() => {
  'use strict';
  const D = window.MENU_DATA;
  if (!D) return;
  const MK = window.MARKETING || {};
  const M = D.marketing, U = M.ui, P = D.photos;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const IMG = D.img_dir || 'assets/img/';
  const PST = 'assets/img/a/';
  const WEIGHTS = ['250', '330'];
  const TITLES = { ar: 'أماسينا | المنيو', he: 'אמסינה | תפריט' };
  /* section posters: atmosphere photos only, never labelled as a dish; null = typographic poster */
  const POSTERS = { starters: 'pst-chef', specials: 'pst-cut', meats: 'pst-meat', fish: 'pst-sea', world: 'pst-world' };
  let lang = 'ar';
  /* lock poster height to the first screen (no jump when the mobile URL bar hides) */
  const lockH = () => document.documentElement.style.setProperty('--sh', window.innerHeight + 'px');
  lockH();
  let lastW = window.innerWidth;
  window.addEventListener('resize', () => { if (window.innerWidth !== lastW) { lastW = window.innerWidth; lockH(); } });

  const pick = (o, k) => (o && o[k + '_' + lang]) || '';
  const str = v => (typeof v === 'string' ? v.trim() : '');
  const mpick = (o, k) => str(o && o[k + '_' + lang]);
  const get = path => path.split('.').reduce((o, k) => (o == null ? o : o[k]), D);
  const isNum = v => typeof v === 'number' && isFinite(v);
  const pad = n => String(n).padStart(2, '0');

  function h(tag, cls, attrs, kids) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (attrs) for (const k in attrs) if (attrs[k] != null) el.setAttribute(k, attrs[k]);
    if (kids) el.append(...kids);
    return el;
  }

  /* *keyword* -> red */
  function rich(el, txt) {
    el.textContent = '';
    String(txt).split('*').forEach((part, k) => {
      if (part) el.append(k % 2 ? h('em', 'kw', null, [part]) : part);
    });
  }
  /* headline + red_word (first occurrence) -> red; falls back to *keyword* syntax */
  function redWord(el, txt, red) {
    el.textContent = '';
    if (!txt) return;
    const i = red ? txt.indexOf(red) : -1;
    if (i < 0) { rich(el, txt); return; }
    if (i) el.append(txt.slice(0, i));
    el.append(h('em', 'kw', null, [red]));
    if (i + red.length < txt.length) el.append(txt.slice(i + red.length));
  }

  /* bindings, re-applied on every language switch */
  const binds = [];
  const renders = [];
  function bind(el, fn, opt = {}) { binds.push({ el, fn, ...opt }); return el; }
  function render(fn) { renders.push(fn); return fn; }
  function applyBinds() {
    for (const b of binds) {
      const v = b.fn();
      if (b.attr) b.el.setAttribute(b.attr, v);
      else if (b.rich) rich(b.el, v);
      else b.el.textContent = v;
      if (b.hide) b.el.hidden = !v;
    }
    renders.forEach(fn => fn());
  }
  const tx = (el, obj, key, opt) => bind(el, () => pick(obj, key), opt);

  /* ---------- static markup ---------- */
  $$('[data-t]').forEach(el => {
    const path = el.dataset.t;
    bind(el, () => get(path + '_' + lang) || '', {
      rich: el.hasAttribute('data-rich'), attr: el.dataset.attr, hide: el.hasAttribute('data-opt')
    });
  });
  $$('[data-price]').forEach(el => {
    const v = M.salad_offer.options[+el.dataset.price].price;
    el.textContent = v == null ? '' : String(v);
  });
  const logoAlt = () => 'Amasina, ' + pick(M.brand, 'slogan');
  $$('img[src*="logo"]').forEach(img => bind(img, logoAlt, { attr: 'alt' }));
  bind($('#lb-x'), () => pick(U, 'close'), { attr: 'aria-label' });
  $('#ig').href = M.footer.instagram_url;
  $('#maps').href = M.footer.maps_url;

  /* logo block with the live slogan */
  function brand() {
    const img = h('img', null, { src: 'assets/logo-mark.webp', srcset: 'assets/logo-mark.webp 360w, assets/logo-mark-720.webp 720w',
      sizes: '128px', width: 720, height: 472, loading: 'lazy', decoding: 'async' });
    bind(img, logoAlt, { attr: 'alt' });
    return h('div', 'brand', null, [img, bind(h('span', 'slogan', { 'aria-hidden': 'true' }), () => pick(M.brand, 'slogan'))]);
  }
  function posterTop(n) {
    return [brand()];   /* no photo counters (owner's request) */
  }
  $('#top-salads').append(...posterTop(1));

  /* ---------- cover, chef, offer, closing: marketing copy ---------- */
  render(() => {
    const c = MK.cover || {};
    const head = mpick(c, 'headline');
    if (head) redWord($('#hero'), head, mpick(c, 'red_word'));
    else rich($('#hero'), pick(M.cover, 'headline'));
    $('#hero-sub').textContent = mpick(c, 'sub') || pick(M.cover, 'subline');

    const ch = MK.chef || {};
    const t = mpick(ch, 'title'), x = mpick(ch, 'text');
    $('#chef-t').textContent = t;
    $('#chef-x').textContent = x;
    $('#chef-x').hidden = !x;
    $('#chef').hidden = !t && !x;

    const o = MK.offer || {};
    const hook = mpick(o, 'hook'), plainHead = pick(M.salad_offer, 'headline').replace(/\*/g, '');
    const hk = $('#offer-hook');
    hk.textContent = hook === plainHead ? '' : hook;   // never repeat the poster headline
    hk.hidden = !hk.textContent;
    const sub = $('#offer-sub');
    sub.textContent = mpick(o, 'sub');
    sub.hidden = !sub.textContent;

    const cl = $('#closing');
    cl.textContent = str((MK.closing || {})[lang]);
    cl.hidden = !cl.textContent;
    $('.foot-thanks').hidden = !!cl.textContent;   /* the closing line already says it */
  });

  /* ---------- images (fade in once loaded) ---------- */
  function fadeImg(attrs) {
    const img = h('img', 'fade', { loading: 'lazy', decoding: 'async', ...attrs });
    const done = () => img.classList.add('ld');
    img.addEventListener('load', done);
    img.addEventListener('error', done);
    if (img.complete) done();
    return img;
  }
  function photoImg(key, sizes, widths, w, hgt) {
    const img = fadeImg({ src: IMG + key + '-' + widths[0] + '.webp',
      srcset: widths.map(x => `${IMG}${key}-${x}.webp ${x}w`).join(', '), sizes, width: w, height: hgt });
    bind(img, () => pick(P[key], 'alt'), { attr: 'alt' });
    return img;
  }

  /* photo strips: salads (named ones carry a caption), one per section, and the kitchen strip */
  function strip(keys, el) {
    const box = el || h('div', 'gal');
    keys.filter(k => P[k]).forEach(k => {
      const fig = h('figure', null, null, [
        h('div', 'ph', null, [photoImg(k, '(min-width:600px) 420px, 76vw', [360, 720], 1080, 1350)])
      ]);
      if (P[k].caption_ar || P[k].caption_he) fig.append(tx(h('figcaption'), P[k], 'caption', { hide: true }));
      box.append(fig);
    });
    return box;
  }
  strip(M.salad_offer.gallery, $('#gallery'));

  /* ---------- prices ---------- */
  const cur = () => h('span', 'cur', null, [U.currency || '₪']);
  const srAsk = () => tx(h('span', 'sr'), U, 'price_aria');

  /* ---------- lightbox ---------- */
  const lb = $('#lb');
  let lbFrom = null, lbItem = null;
  function openLb(item, from) {
    lbItem = item; lbFrom = from;
    $('#lb-img').src = IMG + item.photo + '-1080.webp';
    fillLb();
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function fillLb() {
    if (!lbItem) return;
    $('#lb-img').alt = pick(P[lbItem.photo], 'alt');
    $('#lb-name').textContent = pick(lbItem, 'name');
    const d = $('#lb-desc');
    d.textContent = dishDesc(lbItem);
    d.hidden = !d.textContent;
  }
  $('#lb-x').addEventListener('click', () => lb.close());
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('close', () => { lbItem = null; if (lbFrom) lbFrom.focus(); });

  /* ---------- dish row ---------- */
  const dishDesc = item => mpick((MK.dishes || {})[item.id], 'desc') || pick(item, 'desc');
  /* prices: butcher ticket tags, taken from design C */
  const priceEl = v => h('bdi', 'price', { dir: 'ltr' }, [h('span', 'pn', null, [String(v)]), cur()]);
  function weightTag(prices) {
    const tag = h('div', 'ptag ptag-w');
    WEIGHTS.forEach(w => {
      const cell = h('span', 'tw', null, [bind(h('span', 'tw-w'), () => `${w} ${pick(U, 'weight_unit')}`)]);
      cell.append(isNum(prices[w]) ? priceEl(prices[w]) : srAsk());
      tag.append(cell);
    });
    return tag;
  }
  function dish(item) {
    const ph = item.photo && P[item.photo] ? item.photo : null;
    const li = h('li', 'd' + (ph ? ' feat' : ''));
    if (ph) {
      const btn = h('button', 'feat-ph', { type: 'button' }, [photoImg(ph, '(min-width:600px) 560px, 100vw', [720, 1080], 1080, 1350)]);
      tx(btn, item, 'name', { attr: 'aria-label' });
      btn.addEventListener('click', () => openLb(item, btn));
      li.append(btn);
    }
    const txt = h('div', 'd-t', null, [tx(h('h3', 'd-n'), item, 'name')]);
    const meta = (item.badges || []).filter(b => U[b + '_ar']);
    if (meta.length) txt.append(bind(h('p', 'd-m'), () => meta.map(b => pick(U, b)).join(' · ')));
    txt.append(bind(h('p', 'd-d'), () => dishDesc(item), { hide: true }));
    li.append(txt);
    if (isNum(item.price)) li.append(h('div', 'ptag', null, [priceEl(item.price)]));
    else if (item.prices && WEIGHTS.some(w => isNum(item.prices[w]))) li.append(weightTag(item.prices));
    else txt.append(srAsk());
    return li;
  }

  /* ---------- section posters + dish lists, in data order ---------- */
  const menu = $('#menu');
  D.sections.forEach((sec, si) => {
    if (sec.id === 'salads') return;
    const n = si + 1;
    const items = D.items.filter(i => i.section === sec.id);
    const weighted = items.some(i => i.prices);
    const vals = items.flatMap(i => (i.prices ? WEIGHTS.map(w => i.prices[w]) : [i.price]));
    const mk = (MK.sections || {})[sec.id] || {};

    const head = h('h2', 'pst-h', { id: 'h-' + sec.id });
    const intro = h('p', 'pst-intro');
    render(() => {
      const t = mpick(mk, 'headline');
      if (t) redWord(head, t, mpick(mk, 'red_word')); else rich(head, pick(sec, 'headline'));
      intro.textContent = mpick(mk, 'intro');
      intro.hidden = !intro.textContent;
    });
    const kick = h('p', 'pst-kick', null, [h('span', 'num', null, [pad(n)]), h('span', 'rule', { 'aria-hidden': 'true' }), tx(h('span'), sec, 'title')]);
    const key = POSTERS[sec.id];
    const poster = h('div', 'poster' + (key ? '' : ' type'));
    if (key) {
      const img = fadeImg({ class: 'pst-img fade', src: PST + key + '-720.webp',
        srcset: `${PST}${key}-720.webp 720w, ${PST}${key}-1080.webp 1080w`,
        sizes: '(min-width:600px) 560px, 60vw', width: 1080, height: 1800, alt: '' });   /* phones get the 720 file: half the decode memory, same look under the shade */
      poster.append(img, h('div', 'pst-shade', { 'aria-hidden': 'true' }));
    } else {
      poster.append(h('span', 'pst-ghost', { 'aria-hidden': 'true' }, [pad(n)]));
    }
    poster.append(h('div', 'pst-top', null, posterTop(n)), h('div', 'pst-txt', null, [kick, head, intro]));

    const notes = h('div', 'notes');
    if (weighted) {
      notes.append(h('div', 'wplate', { 'aria-hidden': 'true' }, [
        h('span', 'num', null, [WEIGHTS[0]]), h('span', 'sl', null, ['/']), h('span', 'num', null, [WEIGHTS[1]]),
        bind(h('span', 'u'), () => pick(U, 'weight_unit'))
      ]), tx(h('p', 'sr'), U, 'weight_note'));
    }
    if (vals.some(v => !isNum(v))) notes.append(tx(h('p', 'note'), U, 'price_note'));

    const el = h('section', 'sec', { id: sec.id, 'aria-labelledby': 'h-' + sec.id }, [
      poster, notes, h('ol', 'dl', null, items.map((it, k) => dish(it, k + 1)))
    ]);
    if (sec.gallery && sec.gallery.length) el.append(tx(h('h3', 'gal-title'), sec.gallery_title_ar ? sec : U, sec.gallery_title_ar ? 'gallery_title' : 'strip_title'), strip(sec.gallery));
    menu.append(el);
  });

  const KG = M.kitchen_gallery;
  if (KG && KG.items && KG.items.length) {
    menu.append(h('section', 'sec kitchen', { 'aria-label': 'gallery' }, [tx(h('h3', 'gal-title'), KG, 'title'), strip(KG.items)]));
  }

  /* chef's videos: muted loops that play only while on screen; tap-to-play with controls for reduced motion */
  const RL = M.reels;
  if (RL && RL.items && RL.items.length) {
    const vids = RL.items.map(r => {
      const v = h('video', null, { src: 'assets/video/' + r.file + '.mp4', poster: 'assets/video/' + r.file + '.webp',
        muted: '', playsinline: '', loop: '', preload: 'none', width: 360, height: 640 });
      v.muted = true;
      if (RM) v.controls = true;
      bind(v, () => pick(r, 'alt'), { attr: 'aria-label' });
      return v;
    });
    const box = h('div', 'gal reels', null, vids.map(v => h('figure', null, null, [v])));
    menu.append(h('section', 'sec reels-sec', null, [tx(h('h3', 'gal-title'), RL, 'title'), box]));
    if (!RM && 'IntersectionObserver' in window) {
      /* only the most visible video plays (one decoder at a time keeps phones smooth) */
      const vis = new Map();
      const vio = new IntersectionObserver(es => {
        es.forEach(e => vis.set(e.target, e.isIntersecting ? e.intersectionRatio : 0));
        let best = null, br = 0.6;
        vis.forEach((r, v) => { if (r >= br) { best = v; br = r; } });
        vids.forEach(v => { if (v === best) { const pr = v.play(); if (pr) pr.catch(() => {}); } else if (!v.paused) v.pause(); });
      }, { threshold: [0, 0.6, 0.8, 1] });
      vids.forEach(v => vio.observe(v));
    }
  }

  /* ---------- chips ---------- */
  const track = $('#chips'), line = $('.chip-line', track);
  const chipMap = {};
  D.sections.forEach((sec, si) => {
    const a = h('a', 'chip', { href: '#' + sec.id }, [h('span', 'num', { 'aria-hidden': 'true' }, [pad(si + 1)]), tx(h('span'), sec, 'chip')]);
    chipMap[sec.id] = a;
    track.append(a);
  });
  const bar = $('#bar');
  let activeId = null;
  function placeLine() {
    const a = chipMap[activeId];
    if (!a) { line.style.opacity = 0; return; }
    const tr = track.getBoundingClientRect(), r = a.getBoundingClientRect();
    line.style.opacity = 1;
    line.style.transform = `translateX(${r.left - tr.left + 12}px) scaleX(${Math.max(r.width - 24, 1)})`;
  }
  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    for (const k in chipMap) chipMap[k].classList.toggle('on', k === id);
    placeLine();
    const a = chipMap[id], nav = track.parentElement;
    if (a && bar.classList.contains('on')) {
      const nr = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
      nav.scrollBy({ left: r.left + r.width / 2 - (nr.left + nr.width / 2), behavior: RM ? 'auto' : 'smooth' });
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      bar.classList.toggle('on', e.intersectionRatio < 0.2);
      if (bar.classList.contains('on')) placeLine();
    }, { threshold: [0, 0.2, 0.4] }).observe($('#top'));
    const secIO = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -54% 0px' });
    D.sections.forEach(s => { const el = document.getElementById(s.id); if (el) secIO.observe(el); });
  } else bar.classList.add('on');

  /* ---------- language ---------- */
  function resolveLang() {
    const q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'he') return q;
    let s = null;
    try { s = localStorage.getItem('amasina.lang'); } catch (e) { /* storage blocked */ }
    if (s === 'ar' || s === 'he') return s;
    const first = (navigator.languages || [navigator.language || '']).find(l => /^(ar|he)/i.test(l)) || '';
    return /^he/i.test(first) ? 'he' : 'ar';
  }
  const other = () => (lang === 'ar' ? 'he' : 'ar');
  const ltBar = $('#lt-bar');
  function setLang(l, first) {
    lang = l;
    const root = document.documentElement;
    root.lang = l;
    root.dir = 'rtl';
    try { localStorage.setItem('amasina.lang', l); } catch (e) { /* storage blocked */ }
    applyBinds();
    fillLb();
    document.title = TITLES[l];
    $$('.lt [data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    ltBar.textContent = U['lang_' + other() + '_label'];
    ltBar.lang = other();
    ltBar.setAttribute('aria-label', pick(U, 'lang_label') + ': ' + U['lang_' + other() + '_label']);
    if (!first) requestAnimationFrame(placeLine);
  }
  $$('.lt [data-lang]').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== lang) setLang(b.dataset.lang); }));
  ltBar.addEventListener('click', () => setLang(other()));

  setLang(resolveLang(), true);

  /* ---------- motion: mark elements as they enter; CSS animates (html.mo is unset for reduced motion) ---------- */
  if (document.documentElement.classList.contains('mo')) {
    const els = $$('.poster:not(.cover), .offer, .chef, .gal-title, .gal figure, .note, .wplate, .d, .foot > *');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }), { rootMargin: '0px 0px -5% 0px' });
      els.forEach(el => {
        const sib = Array.prototype.indexOf.call(el.parentElement.children, el);
        el.style.setProperty('--i', Math.min(sib, 5));   /* stagger neighbours that enter together */
        io.observe(el);
      });
    } else els.forEach(el => el.classList.add('in'));
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeLine);
})();
