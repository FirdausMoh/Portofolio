(function(){
  let D = PORTFOLIO_DATA;
  let lang = getPortfolioLang();

  /* ---------------------------------------------------------------
   * KAMUS LABEL UI
   * -------------------------------------------------------------- */
  const UI = {
    en: {
      'meta.title': 'Moh Fahri Firdaus — IT Design & BI Developer',
      'meta.desc': 'Portfolio of Moh Fahri Firdaus — Data Analyst & Visualization, UI/UX & Web Developer.',
      'nav.about': 'About me', 'nav.experience': 'Professional Experience', 'nav.projects': 'Projects',
      'nav.certs': 'Certifications', 'nav.contact': 'Contact me',
      'hero.projects': 'Projects', 'hero.contact': 'Contact me',
      'sec.about': 'About me', 'sec.experience': 'Professional Experience', 'sec.edu': 'Education & Organization',
      'sec.projects': 'Projects', 'sec.certs': 'Certifications', 'sec.why': 'Why Choose Me',
      'filter.all': 'All', 'filter.bi': 'Data & BI', 'filter.uiux': 'UI/UX / App Dev', 'filter.design': 'Graphic Design',
      'contact.title': "Let's Work Together",
      'contact.text': 'Open to collaboration on Business Intelligence, Data Analytics, UI/UX, and Web/App Development projects.',
      'edu.period': 'Period', 'edu.gpa': 'GPA', 'edu.final': 'Final Project', 'edu.cert': 'Certification',
      'proj.view': 'View project details', 'proj.photos': 'photos', 'proj.viewAria': 'View project details: ',
      'modal.challenge': 'Challenge', 'modal.solution': 'Solution', 'modal.impact': 'Impact',
      'link.view': 'View', 'link.doc': 'Document', 'link.proto': 'Prototype/Code',
      'btn.email': 'Send Email', 'btn.cv': 'Download CV',
      'aria.menu': 'Open menu', 'aria.closeProject': 'Close project details', 'aria.prev': 'Previous image',
      'aria.next': 'Next image', 'aria.close': 'Close', 'aria.goTo': 'Go to image ',
      'aria.toDark': 'Switch to dark mode', 'aria.toLight': 'Switch to light mode'
    },
    id: {
      'meta.title': 'Moh Fahri Firdaus — IT Design & BI Developer',
      'meta.desc': 'Portofolio Moh Fahri Firdaus — Data Analyst & Visualization, UI/UX & Web Developer.',
      'nav.about': 'Tentang Saya', 'nav.experience': 'Pengalaman Profesional', 'nav.projects': 'Proyek',
      'nav.certs': 'Sertifikasi', 'nav.contact': 'Hubungi Saya',
      'hero.projects': 'Proyek', 'hero.contact': 'Hubungi Saya',
      'sec.about': 'Tentang Saya', 'sec.experience': 'Pengalaman Profesional', 'sec.edu': 'Pendidikan & Organisasi',
      'sec.projects': 'Proyek', 'sec.certs': 'Sertifikasi', 'sec.why': 'Mengapa Memilih Saya',
      'filter.all': 'Semua', 'filter.bi': 'Data & BI', 'filter.uiux': 'UI/UX / App Dev', 'filter.design': 'Desain Grafis',
      'contact.title': 'Mari Bekerja Sama',
      'contact.text': 'Terbuka untuk kolaborasi proyek Business Intelligence, Data Analytics, UI/UX, dan pengembangan Web/App.',
      'edu.period': 'Periode', 'edu.gpa': 'IPK', 'edu.final': 'Tugas Akhir', 'edu.cert': 'Sertifikasi',
      'proj.view': 'Lihat detail proyek', 'proj.photos': 'foto', 'proj.viewAria': 'Lihat detail proyek ',
      'modal.challenge': 'Tantangan', 'modal.solution': 'Solusi', 'modal.impact': 'Hasil',
      'link.view': 'Lihat', 'link.doc': 'Dokumen', 'link.proto': 'Prototype',
      'btn.email': 'Kirim Email', 'btn.cv': 'Unduh CV',
      'aria.menu': 'Buka menu', 'aria.closeProject': 'Tutup detail proyek', 'aria.prev': 'Gambar sebelumnya',
      'aria.next': 'Gambar berikutnya', 'aria.close': 'Tutup', 'aria.goTo': 'Ke gambar ',
      'aria.toDark': 'Beralih ke mode gelap', 'aria.toLight': 'Beralih ke mode terang'
    }
  };
  const t = (key) => (UI[lang] && UI[lang][key]) || UI.en[key] || key;

  // Elemen statis di index.html -> kunci kamus (tidak perlu edit HTML)
  const STATIC_TEXT = [
    ['#navLinks a[href="#tentang"]', 'nav.about'], ['#navLinks a[href="#pengalaman"]', 'nav.experience'],
    ['#navLinks a[href="#proyek"]', 'nav.projects'], ['#navLinks a[href="#sertifikasi"]', 'nav.certs'],
    ['#navLinks a[href="#kontak"]', 'nav.contact'],
    ['.hero__actions .btn--primary', 'hero.projects'], ['.hero__actions .btn--ghost', 'hero.contact'],
    ['#tentang h2', 'sec.about'], ['#pengalaman h2', 'sec.experience'], ['#pendidikan h2', 'sec.edu'],
    ['#proyek h2', 'sec.projects'], ['#sertifikasi h2', 'sec.certs'], ['#whyme h2', 'sec.why'],
    ['#kontak h2', 'contact.title'], ['#kontak .contact__inner > p', 'contact.text'],
    ['.filter[data-filter="all"]', 'filter.all'], ['.filter[data-filter="bi"]', 'filter.bi'],
    ['.filter[data-filter="uiux"]', 'filter.uiux'], ['.filter[data-filter="design"]', 'filter.design']
  ];
  const STATIC_ARIA = [
    ['#navToggle', 'aria.menu'], ['#projectModalClose', 'aria.closeProject'],
    ['#carouselPrev', 'aria.prev'], ['#carouselNext', 'aria.next'], ['#lightboxClose', 'aria.close']
  ];

  function applyStatic(){
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
    STATIC_TEXT.forEach(([sel, key]) => {
      const n = document.querySelector(sel);
      if (n) n.textContent = t(key);
    });
    STATIC_ARIA.forEach(([sel, key]) => {
      const n = document.querySelector(sel);
      if (n) n.setAttribute('aria-label', t(key));
    });
    document.querySelectorAll('[data-lang]').forEach(b => {
      const on = b.dataset.lang === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on);
    });
    refreshThemeLabel();
  }

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

  const clear = (id) => { const n = document.getElementById(id); n.innerHTML = ''; return n; };

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

    const statsWrap = clear('heroStats');
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

    const focusWrap = clear('aboutFocus');
    D.profile.focusAreas.forEach(f => {
      const card = el('div', 'focus-card');
      card.appendChild(el('h4', null, f.title));
      if (f.desc) card.appendChild(el('p', null, f.desc));
      focusWrap.appendChild(card);
    });

    const skillsWrap = clear('skillsWrap');
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
    const wrap = clear('experienceTimeline');
    D.experience.forEach(exp => {
      const item = el('div', 'timeline-item reveal');
      item.appendChild(safeImg(exp.image, exp.company, 'timeline-item__media'));

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
    const eduWrap = clear('educationCard');
    const e = D.education;
    eduWrap.appendChild(el('h3', null, e.school));
    eduWrap.appendChild(el('span', 'edu__degree', e.degree));

    const meta = el('div', 'edu__meta');
    meta.appendChild(el('div', null, `<span class="label">${t('edu.period')}</span><span class="value">${e.period}</span>`));
    meta.appendChild(el('div', null, `<span class="label">${t('edu.gpa')}</span><span class="value">${e.gpa}</span>`));
    eduWrap.appendChild(meta);

    eduWrap.appendChild(el('span', 'edu__label', t('edu.final')));
    eduWrap.appendChild(el('p', null, e.finalProject));

    eduWrap.appendChild(el('span', 'edu__label', t('edu.cert')));
    eduWrap.appendChild(el('span', null, e.certification));

    const orgWrap = clear('organizationsList');
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
  let currentFilter = 'all';

  function renderProjects(){
    const grid = clear('projectsGrid');
    const list = currentFilter === 'all' ? D.projects : D.projects.filter(p => p.category === currentFilter);

    list.forEach((proj) => {
      const card = el('article', 'project-card reveal');
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${t('proj.viewAria')}${proj.title}`);

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
        ? `${t('proj.view')} <span class="chev">&#9662;</span> <span class="project-card__count">${imgCount} ${t('proj.photos')}</span>`
        : `${t('proj.view')} <span class="chev">&#9662;</span>`;
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

  // Listener filter dipasang SEKALI (bukan di setiap render)
  function initFilters(){
    document.querySelectorAll('.filter').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        currentFilter = btn.dataset.filter;
        renderProjects();
      });
    });
  }

  /* ---------------------------------------------------------------
   * PROJECT MODAL
   * -------------------------------------------------------------- */
  const projectModal = document.getElementById('projectModal');
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselDots = document.getElementById('carouselDots');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselCounter = document.getElementById('carouselCounter');
  const carouselCaption = document.getElementById('carouselCaption');
  let carouselIndex = 0;
  let carouselImages = [];
  let openProjectIdx = -1;   // indeks proyek yang sedang terbuka (untuk ganti bahasa)

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
    openProjectIdx = D.projects.indexOf(proj);
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
      dot.setAttribute('aria-label', `${t('aria.goTo')}${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      carouselDots.appendChild(dot);
    });

    document.getElementById('modalTag').textContent = proj.tag;
    document.getElementById('modalTitle').textContent = proj.title;

    const dl = document.getElementById('modalDetail');
    dl.innerHTML = '';

    [['modal.challenge','challenge'],['modal.solution','solution'],['modal.impact','impact']].forEach(([labelKey, key]) => {
      if (proj[key]){
        dl.appendChild(el('dt', null, t(labelKey)));
        const dd = el('dd');

        if (typeof proj[key] === 'string') {
          // Pecah teks bernomor ("1. ... 2. ...") menjadi daftar
          const items = proj[key]
            .split(/(?=\s*\d+\.\s+)/)
            .map(item => item.replace(/^\s*\d+\.\s*/, '').trim())
            .filter(Boolean);

          if (items.length > 1) {
            const ol = el('ol', 'project-list');
            items.forEach(text => ol.appendChild(el('li', null, text)));
            dd.appendChild(ol);
          } else {
            dd.textContent = proj[key];
          }
        }
        dl.appendChild(dd);
      }
    });

    [['link.doc', 'Link2'], ['link.proto', 'Link']].forEach(([labelKey, key]) => {
      if (proj[key]) {
        const label = t(labelKey);
        dl.appendChild(el('dt', null, label));
        const dd = el('dd');
        const a = document.createElement('a');
        a.href = proj[key];
        a.textContent = `${t('link.view')} ${label}`;
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
    openProjectIdx = -1;
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Jika modal sedang terbuka saat bahasa diganti, render ulang isinya
  function refreshOpenModal(){
    if (openProjectIdx < 0 || !projectModal.classList.contains('is-open')) return;
    const keep = carouselIndex;
    openProjectModal(D.projects[openProjectIdx]);
    goToSlide(keep);
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
    const grid = clear('certsGrid');
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
    const grid = clear('whyMeGrid');
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
    const wrap = clear('contactActions');

    const mail = el('a', 'btn btn--primary', t('btn.email'));
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
      const cv = el('a', 'btn btn--ghost', t('btn.cv'));
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
   * NAV
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
   * SCROLL REVEAL
   * -------------------------------------------------------------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveal(node){ revealObserver.observe(node); }
  function initRevealAll(){ document.querySelectorAll('.reveal').forEach(observeReveal); }

  /* ---------------------------------------------------------------
   * THEME — mode terang / gelap
   * -------------------------------------------------------------- */
  let refreshThemeLabel = () => {};

  function initTheme(){
    const KEY = 'portfolio-theme';
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const meta = document.querySelector('meta[name="theme-color"]');
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    let timer;

    const saved = () => { try { return localStorage.getItem(KEY); } catch(e){ return null; } };

    refreshThemeLabel = function(){
      const light = root.getAttribute('data-theme') === 'light';
      const label = light ? t('aria.toDark') : t('aria.toLight');
      btn.setAttribute('aria-label', label);
      btn.title = label;
    };

    function apply(theme){
      root.setAttribute('data-theme', theme);
      if (meta) meta.setAttribute('content', theme === 'light' ? '#F4F7FB' : '#0A1220');
      refreshThemeLabel();
    }

    apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.classList.add('theme-anim');
      apply(next);
      try { localStorage.setItem(KEY, next); } catch(e){}
      clearTimeout(timer);
      timer = setTimeout(() => root.classList.remove('theme-anim'), 450);
    });

    const onSystem = (e) => { if (!saved()) apply(e.matches ? 'light' : 'dark'); };
    if (mq.addEventListener) mq.addEventListener('change', onSystem);
    else if (mq.addListener) mq.addListener(onSystem);
  }

  /* ---------------------------------------------------------------
   * PARALLAX (tidak berubah)
   * -------------------------------------------------------------- */
  function initParallax(){
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');

    const items = Array.from(document.querySelectorAll('[data-speed], [data-depth]')).map(node => ({
      node,
      root: node.closest('section, header') || document.body,
      speed: parseFloat(node.dataset.speed) || 0,
      depth: parseFloat(node.dataset.depth) || 0,
      fromTop: node.dataset.origin === 'top'
    }));

    let tx = 0, ty = 0, cx = 0, cy = 0, queued = false;

    function reset(){ items.forEach(it => { it.node.style.translate = ''; }); }

    function frame(){
      queued = false;
      if (reduce.matches){ reset(); return; }

      const vh = window.innerHeight;
      const scale = window.innerWidth < 760 ? 0.5 : 1;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;

      items.forEach(it => {
        const r = it.root.getBoundingClientRect();
        if (r.bottom < -300 || r.top > vh + 300) return;
        const offset = it.fromTop ? -r.top : -(r.top + r.height / 2 - vh / 2);
        const y = offset * it.speed * scale + cy * it.depth;
        const x = cx * it.depth;
        it.node.style.translate = x.toFixed(1) + 'px ' + y.toFixed(1) + 'px';
      });

      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) request();
    }

    function request(){
      if (queued) return;
      queued = true;
      requestAnimationFrame(frame);
    }

    window.addEventListener('scroll', request, { passive:true });
    window.addEventListener('resize', request);
    if (reduce.addEventListener) reduce.addEventListener('change', request);

    if (fine.matches){
      window.addEventListener('mousemove', (e) => {
        tx = e.clientX / window.innerWidth - 0.5;
        ty = e.clientY / window.innerHeight - 0.5;
        request();
      }, { passive:true });
      document.documentElement.addEventListener('mouseleave', () => { tx = 0; ty = 0; request(); });
    }

    request();
  }

  /* ---------------------------------------------------------------
   * RENDER ULANG SEMUA (dipanggil saat awal & saat bahasa diganti)
   * -------------------------------------------------------------- */
  function renderAll(){
    D = PORTFOLIO_DATA;
    lang = getPortfolioLang();
    applyStatic();
    renderHero();
    renderAbout();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCerts();
    renderWhyMe();
    renderContact();
    initRevealAll();
    refreshOpenModal();
  }

  /* ---------------------------------------------------------------
   * INIT (sekali saja)
   * -------------------------------------------------------------- */
  initTheme();
  initNav();
  initFilters();
  document.querySelectorAll('[data-lang]').forEach(b => {
    b.addEventListener('click', () => setPortfolioLang(b.dataset.lang));
  });
  window.addEventListener('portfolio-lang-change', renderAll);
  renderAll();
  initParallax();
})();
