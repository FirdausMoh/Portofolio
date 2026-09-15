/**
 * =====================================================================
 *  MAIN.JS — merender PORTFOLIO_DATA (dari data.js) ke halaman.
 *  Tidak perlu diedit untuk menambah konten — cukup ubah data.js.
 * =====================================================================
 */
(function(){
  const D = PORTFOLIO_DATA;

  /* ---------------------------------------------------------------
   * Util kecil
   * -------------------------------------------------------------- */
  const el = (tag, cls, html) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  const safeImg = (src, alt, cls) => {
    const wrap = el('div', cls);
    if (src){
      const img = el('img');
      img.src = src;
      img.alt = alt || '';
      img.loading = 'lazy';
      wrap.appendChild(img);
    } else {
      wrap.classList.add((cls || '') + '--empty');
    }
    return wrap;
  };

  /* ---------------------------------------------------------------
   * HERO
   * -------------------------------------------------------------- */
  function renderHero(){
    const p = D.profile;
    document.getElementById('heroRole').textContent = p.role;
    document.getElementById('heroHeadline').textContent = p.heroHeadline;
    document.getElementById('heroTagline').textContent = p.tagline;
    document.getElementById('heroPhoto').src = p.photo;
    document.getElementById('heroPhoto').alt = p.name;

    const statsWrap = document.getElementById('heroStats');
    p.stats.forEach(s => {
      const item = el('div', 'hero__stat');
      item.appendChild(el('div', 'hero__stat-value', `${s.value}<span>${s.suffix || ''}</span>`));
      item.appendChild(el('div', 'hero__stat-label', s.label));
      statsWrap.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------
   * ABOUT
   * -------------------------------------------------------------- */
  function renderAbout(){
    document.getElementById('aboutBio').textContent = D.profile.bio;

    const focusWrap = document.getElementById('aboutFocus');
    D.profile.focusAreas.forEach(f => {
      const card = el('div', 'focus-card');
      card.appendChild(el('h4', null, f.title));
      card.appendChild(el('p', null, f.desc));
      focusWrap.appendChild(card);
    });

    const skillsWrap = document.getElementById('skillsWrap');
    D.skills.forEach(group => {
      const g = el('div', 'skill-group');
      g.appendChild(el('h4', null, group.group));
      const ul = el('ul');
      group.items.forEach(item => ul.appendChild(el('li', null, item)));
      g.appendChild(ul);
      skillsWrap.appendChild(g);
    });
  }

  /* ---------------------------------------------------------------
   * EXPERIENCE TIMELINE
   * -------------------------------------------------------------- */
  function renderExperience(){
    const wrap = document.getElementById('experienceTimeline');
    D.experience.forEach(exp => {
      const item = el('div', 'timeline-item reveal');

      const media = safeImg(exp.image, exp.company, 'timeline-item__media');
      item.appendChild(media);

      const body = el('div', 'timeline-item__body');
      body.appendChild(el('span', 'timeline-item__period', exp.period));
      body.appendChild(el('h3', null, exp.role));
      body.appendChild(el('span', 'timeline-item__company', exp.company));
      const ul = el('ul');
      exp.bullets.forEach(b => ul.appendChild(el('li', null, b)));
      body.appendChild(ul);
      item.appendChild(body);

      wrap.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------
   * EDUCATION & ORGANIZATIONS
   * -------------------------------------------------------------- */
  function renderEducation(){
    const eduWrap = document.getElementById('educationCard');
    const e = D.education;
    eduWrap.appendChild(el('h3', null, e.school));
    eduWrap.appendChild(el('span', 'edu__degree', e.degree));

    const meta = el('div', 'edu__meta');
    meta.appendChild(el('div', null, `<span class="label">Periode</span><span class="value">${e.period}</span>`));
    meta.appendChild(el('div', null, `<span class="label">IPK</span><span class="value">${e.gpa}</span>`));
    eduWrap.appendChild(meta);

    eduWrap.appendChild(el('span', 'edu__label', 'Tugas Akhir'));
    eduWrap.appendChild(el('p', null, e.finalProject));

    eduWrap.appendChild(el('span', 'edu__label', 'Sertifikasi'));
    eduWrap.appendChild(el('span', null, e.certification));

    const orgWrap = document.getElementById('organizationsList');
    D.organizations.forEach(org => {
      const card = el('div', 'org-card reveal');
      card.appendChild(safeImg(org.image, org.org, 'org-card__media'));

      const body = el('div', 'org-card__body');
      body.appendChild(el('h4', null, org.role));
      body.appendChild(el('span', 'org-card__meta', `${org.org} — ${org.period}`));
      const ul = el('ul');
      org.bullets.forEach(b => ul.appendChild(el('li', null, b)));
      body.appendChild(ul);
      card.appendChild(body);

      orgWrap.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------
   * PROJECTS
   * -------------------------------------------------------------- */
  function renderProjects(){
    const grid = document.getElementById('projectsGrid');

    function draw(filter){
      grid.innerHTML = '';
      const list = filter === 'all' ? D.projects : D.projects.filter(p => p.category === filter);
      list.forEach((proj) => {
        const card = el('article', 'project-card reveal');
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Lihat detail proyek ${proj.title}`);

        const media = el('div', 'project-card__media');
        const img = el('img');
        const firstImg = proj.images && proj.images[0];
        img.src = (typeof firstImg === 'string' ? firstImg : firstImg && firstImg.src) || proj.image || '';
        img.alt = proj.title;
        img.loading = 'lazy';
        media.appendChild(img);
        card.appendChild(media);

        const body = el('div', 'project-card__body');
        body.appendChild(el('span', 'project-card__tag', proj.tag));
        body.appendChild(el('h3', 'project-card__title', proj.title));

        const imgCount = (proj.images || []).length;
        const toggleLabel = imgCount > 1
          ? `Lihat detail proyek <span class="chev">&#9662;</span> <span class="project-card__count">${imgCount} foto</span>`
          : 'Lihat detail proyek <span class="chev">&#9662;</span>';
        const toggle = el('button', 'project-card__toggle', toggleLabel);
        toggle.type = 'button';
        body.appendChild(toggle);

        card.appendChild(body);

        const open = () => openProjectModal(proj);
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }
        });

        grid.appendChild(card);
        requestAnimationFrame(() => observeReveal(card));
      });
    }

    draw('all');

    document.querySelectorAll('.filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        draw(btn.dataset.filter);
      });
    });
  }

  /* ---------------------------------------------------------------
   * PROJECT MODAL — pop-up detail proyek dengan carousel gambar
   * -------------------------------------------------------------- */
  const projectModal = document.getElementById('projectModal');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselCounter = document.getElementById('carouselCounter');
  const carouselCaption = document.getElementById('carouselCaption');
  let carouselIndex = 0;
  let carouselImages = []; // selalu dinormalisasi jadi [{src, caption}, ...]

  // Menerima "images" dalam bentuk string biasa ATAU object {src, caption},
  // lalu menyeragamkannya jadi {src, caption} supaya render-nya konsisten.
  function normalizeImages(images){
    return (images || []).map(img =>
      typeof img === 'string' ? { src: img, caption: '' } : { src: img.src, caption: img.caption || '' }
    );
  }

  function renderCarousel(){
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
    carouselDots.querySelectorAll('button').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === carouselIndex);
    });
    carouselCounter.textContent = `${carouselIndex + 1} / ${carouselImages.length}`;
    const multi = carouselImages.length > 1;
    carouselPrev.style.display = multi ? 'flex' : 'none';
    carouselNext.style.display = multi ? 'flex' : 'none';
    carouselDots.style.display = multi ? 'flex' : 'none';
    carouselCounter.style.display = multi ? 'block' : 'none';

    const caption = carouselImages[carouselIndex] ? carouselImages[carouselIndex].caption : '';
    carouselCaption.textContent = caption;
    carouselCaption.style.display = caption ? 'block' : 'none';
  }

  function goToSlide(i){
    carouselIndex = (i + carouselImages.length) % carouselImages.length;
    renderCarousel();
  }

  function openProjectModal(proj){
    carouselImages = normalizeImages(proj.images && proj.images.length ? proj.images : (proj.image ? [proj.image] : []));
    carouselIndex = 0;

    carouselTrack.innerHTML = '';
    carouselImages.forEach(item => {
      const img = el('img');
      img.src = item.src;
      img.alt = item.caption || proj.title;
      carouselTrack.appendChild(img);
    });

    carouselDots.innerHTML = '';
    carouselImages.forEach((_, i) => {
      const dot = el('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ke gambar ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      carouselDots.appendChild(dot);
    });

    document.getElementById('modalTag').textContent = proj.tag;
    document.getElementById('modalTitle').textContent = proj.title;

const dl = document.getElementById('modalDetail');
dl.innerHTML = '';

[['Tantangan','challenge'],['Solusi','solution'],['Hasil','impact']].forEach(([label, key]) => {
  if (proj[key]){
    dl.appendChild(el('dt', null, label));
    const dd = el('dd');

    if (typeof proj[key] === 'string') {
      // Split string berdasarkan pola angka di depan kalimat (misal: " 2. ", " 3. ")
      const items = proj[key]
        .split(/(?=\s*\d+\.\s+)/)
        .map(item => item.replace(/^\s*\d+\.\s*/, '').trim())
        .filter(Boolean);

      if (items.length > 1) {
        const ol = el('ol', 'project-list');
        items.forEach(text => {
          const li = el('li', null, text);
          ol.appendChild(li);
        });
        dd.appendChild(ol);
      } else {
        dd.textContent = proj[key];
      }
    }

    dl.appendChild(dd);
  }
});

// Links
const links = [
  ['Dokumen', 'Link2'],
  ['Prototype', 'Link']
];

links.forEach(([label, key]) => {
  if (proj[key]) {
    dl.appendChild(el('dt', null, label));

    const dd = el('dd');
    const a = document.createElement('a');

    a.href = proj[key];
    a.textContent = `Lihat ${label}`;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'project-link';

    dd.appendChild(a);
    dl.appendChild(dd);
  }
});
    renderCarousel();
    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal(){
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  carouselPrev.addEventListener('click', () => goToSlide(carouselIndex - 1));
  carouselNext.addEventListener('click', () => goToSlide(carouselIndex + 1));
  document.getElementById('projectModalClose').addEventListener('click', closeProjectModal);
  projectModal.querySelector('[data-close-modal]').addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (e) => {
    if (!projectModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') goToSlide(carouselIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(carouselIndex + 1);
  });

  // Swipe dasar untuk layar sentuh
  (function initSwipe(){
    let startX = 0;
    const viewport = document.querySelector('.carousel__viewport');
    viewport.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive:true });
    viewport.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 40){
        goToSlide(carouselIndex + (diff < 0 ? 1 : -1));
      }
    }, { passive:true });
  })();

  /* ---------------------------------------------------------------
   * CERTIFICATIONS
   * -------------------------------------------------------------- */
  function renderCerts(){
    const grid = document.getElementById('certsGrid');
    D.certifications.forEach(cert => {
      const card = el('div', 'cert-card reveal');
      const media = el('div', 'cert-card__media');
      if (cert.image){
        const img = el('img');
        img.src = cert.image;
        img.alt = cert.title;
        img.loading = 'lazy';
        media.appendChild(img);
      }
      card.appendChild(media);

      const body = el('div', 'cert-card__body');
      body.appendChild(el('div', 'cert-card__title', cert.title));
      body.appendChild(el('div', 'cert-card__issuer', cert.issuer));
      card.appendChild(body);

      card.addEventListener('click', () => {
        if (cert.image) openLightbox(cert.image, cert.title);
      });

      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------
   * WHY ME
   * -------------------------------------------------------------- */
  function renderWhyMe(){
    const grid = document.getElementById('whyMeGrid');
    D.whyMe.forEach(item => {
      const card = el('div', 'whyme-card reveal');
      card.appendChild(el('h3', null, item.title));
      card.appendChild(el('p', null, item.desc));
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------
   * CONTACT + FOOTER
   * -------------------------------------------------------------- */
  function renderContact(){
    const p = D.profile;
    const wrap = document.getElementById('contactActions');

    const mail = el('a', 'btn btn--primary', `Kirim Email`);
    mail.href = `mailto:${p.email}`;
    wrap.appendChild(mail);

    if (p.linkedin){
      const li = el('a', 'btn btn--ghost', 'LinkedIn');
      li.href = p.linkedin;
      li.target = '_blank';
      li.rel = 'noopener';
      wrap.appendChild(li);
    }
    if (p.cvFile){
      const cv = el('a', 'btn btn--ghost', 'Unduh CV');
      cv.href = p.cvFile;
      cv.setAttribute('download', '');
      wrap.appendChild(cv);
    }

    document.getElementById('footerName').textContent = p.name;
    document.getElementById('footerLocation').textContent = p.location;
    document.getElementById('footerYear').textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------
   * LIGHTBOX
   * -------------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  function openLightbox(src, alt){
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------------------------------------------------------------
   * NAV (mobile toggle + active link on scroll)
   * -------------------------------------------------------------- */
  function initNav(){
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------
   * SCROLL REVEAL (satu observer terkoordinasi)
   * -------------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveal(node){
    revealObserver.observe(node);
  }

  function initRevealAll(){
    document.querySelectorAll('.reveal').forEach(observeReveal);
  }

  /* ---------------------------------------------------------------
   * INIT
   * -------------------------------------------------------------- */
  renderHero();
  renderAbout();
  renderExperience();
  renderEducation();
  renderProjects();
  renderCerts();
  renderWhyMe();
  renderContact();
  initNav();
  initRevealAll();
})();
