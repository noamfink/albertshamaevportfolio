/* ==========================================================
   Albert Shamaev, Portfolio · content + interactions
   Photography is served from Albert's existing image CDN.
   ========================================================== */
const wix = (id, w = 1600) =>
  `https://static.wixstatic.com/media/${id}/v1/fit/w_${w},h_${w},al_c,q_85/${id}`;

/* ---------- AI FILMS ---------- */
const FILMS = [
  {
    slug: "bellavista", name: "BellaVista Milano", cat: "Eyewear", dur: "0:23",
    desc: "“True luxury doesn't shout.” Espresso on a cliffside terrace, a vintage convertible along the coast, low sun through the windshield. Quiet Italian luxury, art-directed frame by frame.",
    tags: ["Concept", "Look development", "Generative video", "Edit", "Typography"]
  },
  {
    slug: "noir-vetiver", name: "Noir Vetiver", cat: "Fragrance", dur: "0:30",
    desc: "A sensual fragrance film moving from dark stone and steam to golden-hour interiors, skin-close intimacy and a skyline sunset packshot. Built around texture, warmth and restraint.",
    tags: ["Concept", "Casting", "Generative image & video", "Packshot", "Edit"]
  },
  {
    slug: "aurasync", name: "AuraSync", cat: "Audio", dur: "0:35",
    desc: "“Sound that moves with you.” A day-in-the-life spot that follows one consistent character from a morning ritual to city streets to the running track.",
    tags: ["Narrative", "Character consistency", "Generative video", "VO & captions", "Edit"]
  },
  {
    slug: "solea", name: "Soléa", cat: "Skincare", dur: "0:21",
    desc: "A social-first beauty ad blending a creator-style, to-camera testimonial with sunlit macro product shots among olive trees. The language of UGC with a premium finish.",
    tags: ["UGC format", "Generative video", "Lip-sync & captions", "Product macro", "Edit"]
  }
];

/* ---------- KEYZAR ---------- */
const KEYZAR = [
  ["a25983_5f138260c81e4139a99213a879d9a1f5~mv2.jpg", "cg-a"],
  ["a25983_8719689495704bf0a70c68a1637ba35c~mv2.jpg", "cg-b"],
  ["a25983_ef50b0995f70452d963cb4198c8fa264~mv2.jpg", "cg-w"],
  ["a25983_766262ccb9044c1dbc65fde911d19615~mv2.jpg", "cg-p"],
  ["a25983_f70f2d6f5f224ce6a14d694ae0a00db8~mv2.jpg", "cg-p"],
  ["a25983_1889ba9caa1f42589d117afcabf61905~mv2.jpg", "cg-s"],
  ["a25983_8514d0d4221748a081a9e197667431d5~mv2.jpg", "cg-s"],
  ["a25983_bae0d78798474f65a27a2c7d9e001ce4~mv2.jpg", "cg-s"],
  ["a25983_d3a1b060e2fc4319bfd9634a6ccd39b8~mv2.jpg", "cg-w"]
];

/* ---------- OCTOBER 7 ---------- */
const OCTOBER = [
  ["a25983_7d5a4c2f8bea410fbf916aa3e07e43a6~mv2.jpg", "Teddy bear on a Tel Aviv bench for the kidnapped children"],
  ["a25983_cdc0df4f073847dcb099ada55e686c1d~mv2.jpg", "Hostage Square, Tel Aviv"],
  ["a25983_08998a1f77974c0598edd534ee714595~mv2.jpg", "Protest on Dizengoff"],
  ["a25983_579e7171966e4947afc717a50adff593~mv2.jpg", "Empty yellow chairs installation"],
  ["a25983_4177e5a06bc34ef7abf8bf37028af53b~mv2.jpg", "Info booth at a hostage rally"],
  ["a25983_473f42a99ee34e67af43a9c2a66de6e4~mv2.jpg", "Vigil poster with Israeli flags"],
  ["a25983_f319ced84cca4bf7bf04542f58c1086f~mv2.jpg", "Gaza border, Iron Swords"],
  ["a25983_4332019f3bf7418bbe6d7ee5d7276fcf~mv2.jpg", "Soldier on a bench, supply bags"],
  ["a25983_ef9e62196fbf45578725e0e6e561204c~mv2.jpg", "Rothschild Boulevard memorial"],
  ["a25983_9263af54482544218e8a1eca632b7ccc~mv2.jpg", "Night-long vigil, Tel Aviv"],
  ["a25983_4173be0fcd25499a93666a29577525c9~mv2.jpg", "“Alive” poster on a Tel Aviv pole"],
  ["a25983_987354223cc94fba8efeda5181c806d5~mv2.jpg", "Merkava IV, Gaza envelope"],
  ["a25983_4c56c2645e7d4ed29dde92f28d759e31~mv2.jpg", "Off-duty soldier at dusk"],
  ["a25983_186dfa979d334b53a4f9b0f80a788dfc~mv2.jpg", "“Our brothers are bringing you home”"]
];

/* ---------- PHOTOGRAPHY SERIES ---------- */
const SERIES = [
  {
    key: "fragments", name: "Fragments of Presence",
    desc: "Unstaged street photography from Tel Aviv: gestures, postures and fleeting interactions between strangers.",
    items: [
      ["a25983_84738b3003924b5eac6bd9e9a47e4b13~mv2.jpg", "Fedora, bicycle, green crate"],
      ["a25983_1c68d2abcb804ccaaf72f63d84ed50e6~mv2.jpg", "Waiting to cross Dizengoff"],
      ["a25983_bced3fe18023432ba679a122dbfa0051~mv2.jpg", "Yellow raincoat, hailing a taxi"],
      ["a25983_a2270dbdc998418e884364ae137eeb43~mv2.jpg", "Above the Bauhaus rooftops"],
      ["a25983_8bf26ffa554a411ea4c2b6ea78c64d88~mv2.jpg", "Busker on Rothschild"],
      ["a25983_fc5b053a9da74357b730ff167abf68c6~mv2.jpg", "Chairs on a motorcycle"],
      ["a25983_e772d271ffcc4dc0905a4ae4b624eebe~mv2.jpg", "Reflection, taqueria window"],
      ["a25983_1262d732bf324b20b984b143164eab59~mv2.jpg", "Concrete"],
      ["a25983_aed6ee7616cb42abadecd54c300bae22~mv2.jpg", "Lottery, rainy Allenby"],
      ["a25983_a031acb7255c42ec90ccd19db84ebb04~mv2.jpg", "Rothschild Blvd portrait"],
      ["a25983_1611856fb9eb4b3f9de525ffe4844b9b~mv2.jpg", "Watching, Dizengoff Square"]
    ]
  },
  {
    key: "fashion", name: "Fashion",
    desc: "Editorial, campaign and model sessions. Movement, attitude and presence held in a single frame.",
    items: [
      ["a25983_be6c5478c89548b084bffbe5f9fb388f~mv2.jpg", "Red blazer, pastel shutters"],
      ["a25983_d2ac6511e7514a8e98efae01ecfdc7bf~mv2.jpg", "Leather coat & red fedora, Tel Aviv"],
      ["a25983_42f76f7ebb994640a0cda9a2766de9e1~mv2.jpg", "Dancer on a stone balcony"],
      ["a25983_91d6329a5da04ef6b96bf95a6f4d8e8f~mv2.jpg", "Green dress, neoclassical columns"],
      ["a25983_1e6e5e6eb8434e6787f34a74ff1b9c21~mv2.jpg", "Slip dress, graffiti & cranes"],
      ["a25983_d5380e6b4a194bf89f422392b2f27478~mv2.jpg", "Gingham & white sunglasses"],
      ["a25983_b5c8cd81bcd444f4bacac35d709a2556~mv2.jpg", "Backlit on a coastal path"],
      ["a25983_35d50006567b4c0d9199bd9409b11e6a~mv2.jpg", "Tire swing, blue sky"],
      ["a25983_80b03aa7772e474d8ad9c89ec94c9a27~mv2.jpg", "Motion under blue stage light"],
      ["a25983_e363dcfaf3204331bdb3cf730dd8f817~mv2.jpg", "Climb"]
    ]
  },
  {
    key: "thailand", name: "Thailand",
    desc: "A visual diary of light, colour and human presence across temples, rural roads, night fire shows and jungle mist.",
    items: [
      ["a25983_f294d45c282042198922ebdb6ff54ade~mv2.jpg", "Blessing in a red-gold temple"],
      ["a25983_c21b4e670bfc4bae99396273d615ff68~mv2.jpg", "Monks in saffron robes"],
      ["a25983_d84afc29d40946e1bdb319387c658974~mv2.jpg", "Naga staircase in the mist, Chiang Rai"],
      ["a25983_fee258a2bf474174b2dc937d4a60b3eb~mv2.jpg", "Fire dancer"],
      ["a25983_47b9ce84666446eea87c6bab1c60cb22~mv2.jpg", "Market stall"],
      ["a25983_301fae08657f4dc0b86939495ad1dc43~mv2.jpg", "Terraced paddies at dusk, Pai"],
      ["a25983_6b3018df995c4ff4a09a3f0bd25ec82b~mv2.jpg", "Crossing blazing staffs"],
      ["a25983_f34fbd28e124404fb900e3e174867c11~mv2.jpg", "Monk and motorbike"],
      ["a25983_24fd3046f46741d0a6f728cb57837b95~mv2.jpg", "Arms out, jungle road"],
      ["a25983_ffe570c39c294ff48db126fa94835390~mv2.jpg", "Bamboo fence, hillside farmer"],
      ["a25983_39fdbbaa1b59401393d17c9d53600f0a~mv2.jpg", "Bangla Road, Phuket"]
    ]
  }
];

/* ==========================================================
   RENDER
   ========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const pad = n => String(n).padStart(2, "0");

/* Films */
const filmGrid = $("#filmGrid");
FILMS.forEach((f, i) => {
  const el = document.createElement("article");
  el.className = "film reveal";
  el.innerHTML = `
    <div class="film-frame">
      <img src="assets/img/poster-${f.slug}.jpg" alt="${f.name} still" loading="lazy">
      <video muted loop playsinline preload="none" src="assets/video/${f.slug}.mp4"></video>
      <span class="film-dur mono">${f.dur}</span>
      <div class="film-play"><b></b><span class="mono">Play with sound</span></div>
    </div>
    <div class="film-meta">
      <span class="film-idx mono">${pad(i + 1)}</span>
      <h3 class="film-name">${f.name}</h3>
      <span class="film-cat mono">${f.cat} · Spec</span>
      <p class="film-desc">${f.desc}</p>
      <div class="film-tags">${f.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </div>`;
  const vid = $("video", el);
  const canHover = matchMedia("(hover:hover)").matches;
  if (canHover) {
    el.addEventListener("mouseenter", () => { el.classList.add("previewing"); vid.play().catch(() => {}); });
    el.addEventListener("mouseleave", () => { el.classList.remove("previewing"); vid.pause(); });
  }
  el.addEventListener("click", () => openFilm(i));
  filmGrid.appendChild(el);
});

/* Keyzar */
const kg = $("#keyzarGallery");
KEYZAR.forEach(([id, cls], i) => {
  const fig = document.createElement("figure");
  fig.className = `${cls} reveal`;
  fig.innerHTML = `<img src="${wix(id, 1400)}" alt="Keyzar Jewelry campaign image ${i + 1}" loading="lazy">`;
  fig.addEventListener("click", () => openGallery(KEYZAR.map(([id]) => [id, "Keyzar Jewelry"]), i));
  kg.appendChild(fig);
});

/* October 7 */
const og = $("#octGallery");
OCTOBER.forEach(([id, cap], i) => {
  const fig = document.createElement("figure");
  fig.className = "reveal";
  fig.innerHTML = `<img src="${wix(id, 1200)}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption>`;
  fig.addEventListener("click", () => openGallery(OCTOBER, i));
  og.appendChild(fig);
});

/* Photography tabs */
const tabs = $("#photoTabs"), grid = $("#photoGrid"), sdesc = $("#seriesDesc");
function showSeries(key) {
  const s = SERIES.find(x => x.key === key);
  [...tabs.children].forEach(b => b.setAttribute("aria-selected", b.dataset.key === key));
  sdesc.textContent = s.desc;
  grid.innerHTML = "";
  s.items.forEach(([id, cap], i) => {
    const fig = document.createElement("figure");
    fig.style.animationDelay = `${i * 60}ms`;
    fig.innerHTML = `<img src="${wix(id, 1200)}" alt="${cap}, ${s.name}" loading="lazy"><figcaption>${cap}</figcaption>`;
    fig.addEventListener("click", () => openGallery(s.items, i));
    grid.appendChild(fig);
  });
}
SERIES.forEach(s => {
  const b = document.createElement("button");
  b.role = "tab"; b.dataset.key = s.key;
  b.innerHTML = `${s.name}<sup>${pad(s.items.length)}</sup>`;
  b.addEventListener("click", () => showSeries(s.key));
  tabs.appendChild(b);
});
showSeries("fragments");

/* ==========================================================
   LIGHTBOX
   ========================================================== */
const lb = $("#lightbox"), stage = $("#lbStage"), cap = $("#lbCap");
let list = [], idx = 0, mode = "img";

function render() {
  stage.innerHTML = "";
  if (mode === "film") {
    const f = FILMS[idx];
    const v = document.createElement("video");
    v.src = `assets/video/${f.slug}.mp4`; v.controls = true; v.autoplay = true; v.playsInline = true;
    v.poster = `assets/img/poster-${f.slug}.jpg`;
    stage.appendChild(v);
    cap.textContent = `${pad(idx + 1)} · ${f.name} · ${f.cat}`;
  } else {
    const [id, c] = list[idx];
    const img = new Image(); img.src = wix(id, 2000); img.alt = c;
    stage.appendChild(img);
    cap.textContent = `${pad(idx + 1)} / ${pad(list.length)} · ${c}`;
  }
}
function open() { lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; render(); }
function close() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; stage.innerHTML = ""; }
function step(d) { const n = mode === "film" ? FILMS.length : list.length; idx = (idx + d + n) % n; render(); }
function openFilm(i) { mode = "film"; idx = i; open(); }
function openGallery(items, i) { mode = "img"; list = items; idx = i; open(); }

$("#lbClose").addEventListener("click", close);
$("#lbPrev").addEventListener("click", () => step(-1));
$("#lbNext").addEventListener("click", () => step(1));
lb.addEventListener("click", e => { if (e.target === lb || e.target === stage) close(); });
document.addEventListener("keydown", e => {
  if (!lb.classList.contains("open")) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});
let tx = 0;
lb.addEventListener("touchstart", e => tx = e.touches[0].clientX, { passive: true });
lb.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });

/* ==========================================================
   SCROLL: nav state, reveal, active link
   ========================================================== */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 40), { passive: true });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

const links = document.querySelectorAll(".nav-links a");
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("section[id]").forEach(s => so.observe(s));

/* Mobile: autoplay film previews silently while on screen */
if (!matchMedia("(hover:hover)").matches) {
  const vo = new IntersectionObserver(es => es.forEach(e => {
    const film = e.target, v = $("video", film);
    if (e.isIntersecting) { film.classList.add("previewing"); v.play().catch(() => {}); }
    else { film.classList.remove("previewing"); v.pause(); }
  }), { threshold: .6 });
  document.querySelectorAll(".film").forEach(f => vo.observe(f));
}

$("#yr").textContent = new Date().getFullYear();

/* ==========================================================
   ANCHOR LINKS: land exactly on the section even while
   lazy-loaded photos above it are still changing the layout
   ========================================================== */
let settleTimer = null;
const stopSettle = () => { clearInterval(settleTimer); settleTimer = null; };
["wheel", "touchstart", "keydown"].forEach(ev => addEventListener(ev, stopSettle, { passive: true }));

function goTo(target) {
  stopSettle();
  const top = () => Math.max(0, target.getBoundingClientRect().top + scrollY);
  let last = top();
  scrollTo({ top: last, behavior: "smooth" });
  const start = Date.now();
  settleTimer = setInterval(() => {
    const now = top();
    if (Math.abs(now - last) > 2) { last = now; scrollTo({ top: now, behavior: "smooth" }); }
    if (Date.now() - start > 3000) { stopSettle(); scrollTo({ top: top(), behavior: "auto" }); }
  }, 120);
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    const target = id === "#top" ? document.body : document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    history.replaceState(null, "", id);
    goTo(target);
  });
});
