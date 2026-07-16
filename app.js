/* =====================================================================
   THESUDOLAB ACADEMY — RENDER ENGINE
   ---------------------------------------------------------------------
   This file reads the CONTENT object from content.js and builds the
   page. You should not need to edit this file for normal text/content
   changes — go edit content.js instead.

   Every render function checks whether its target element exists
   before running, so the same app.js can be reused on syllabus pages
   that only have some of these sections (e.g. just a nav + footer).
   ===================================================================== */

function stars(n){ return "★".repeat(n) + "☆".repeat(5 - n); }

function renderBrand(){
  const el = document.getElementById('brandBox');
  if(!el) return;
  el.innerHTML = `
    <div class="brand-mark">${CONTENT.brand.mark}</div>
    <div class="brand-text">
      <div class="name">${CONTENT.brand.name}</div>
      <div class="tag">${CONTENT.brand.tag}</div>
    </div>`;
}

function renderNav(){
  const el = document.getElementById('navBox');
  if(!el) return;
  const current = location.pathname.split('/').pop() || 'index.html';
  el.innerHTML = CONTENT.nav.map(item => {
    const active = item.href === current ? ' class="active"' : '';
    return `<a href="${item.href}"${active}>${item.label}</a>`;
  }).join('');
}

function renderContact(){
  const el = document.getElementById('contactBox');
  if(!el) return;
  el.innerHTML = `
    <a class="contact-pill" href="mailto:${CONTENT.brand.contactEmail}">
      <span>
        <span class="sub">${CONTENT.brand.contactLabel}</span>
        ${CONTENT.brand.contactEmail}
      </span>
      <span class="arrow">↗</span>
    </a>`;
}

function renderBadges(){
  const el = document.getElementById('badgesBox');
  if(!el) return;
  el.innerHTML = `
    <a class="badge" href="#waitlist"><span class="dot"></span> ${CONTENT.badges.cohortText} <b>${CONTENT.badges.cohortDate}</b></a>
    <a class="badge badge-new" href="${CONTENT.badges.announcementLink}">${CONTENT.badges.announcement}</a>`;
}

function renderHero(){
  const el = document.getElementById('heroBox');
  if(!el) return;
  const h = CONTENT.hero;
  const brk = h.titleAccentBreak ? '<br>' : ' ';
  el.innerHTML = `
    <h1>${h.titlePlain}<span class="accent">${h.titleAccent}</span>${brk}${h.titleGlitchPrefix}<span class="glitch">${h.titleGlitch}</span></h1>
    <p class="hero-sub">${h.subtitle}</p>
    <div class="cta-row" id="waitlist">
      <a class="cta-btn" href="#waitlist">${h.ctaText}</a>
      <span class="cta-note">${h.ctaNote}</span>
    </div>`;
}

function renderTestimonial(){
  const el = document.getElementById('testimonialBox');
  if(!el) return;
  const t = CONTENT.testimonial;
  el.innerHTML = `
    <div class="stars">${stars(t.stars)}</div>
    <p>"${t.quote}"</p>
    <div class="float-person">
      <div class="avatar">${t.initials}</div>
      <div>
        <div class="who">${t.name}</div>
        <div class="where">${t.role}</div>
      </div>
    </div>`;
}

function renderSocial(){
  const el = document.getElementById('socialBox');
  if(!el) return;
  const s = CONTENT.social;
  el.innerHTML = `
    <a href="${s.linkedin}" aria-label="LinkedIn">in</a>
    <a href="${s.youtube}" aria-label="YouTube">▶</a>
    <a href="${s.instagram}" aria-label="Instagram">◎</a>`;
}

function renderStats(){
  const el = document.getElementById('statsBox');
  if(!el) return;
  el.innerHTML = CONTENT.stats.map(s => `
    <div class="stat">
      <div class="num">${s.value}<span>${s.suffix}</span></div>
      <div class="label">${s.label}</div>
    </div>`).join('');
}

function renderTracks(){
  const head = document.getElementById('tracksHead');
  const el = document.getElementById('tracksBox');
  if(head){
    head.innerHTML = `
      <div class="eyebrow">${CONTENT.tracksSection.eyebrow}</div>
      <h2 class="section-title">${CONTENT.tracksSection.title}</h2>
      <p class="section-sub">${CONTENT.tracksSection.subtitle}</p>`;
  }
  if(!el) return;
  el.innerHTML = CONTENT.tracks.map(t => `
    <div class="track-card ${t.color}">
      <span class="track-tag">${t.tag}</span>
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <ul class="track-list">
        ${t.items.map(i => `<li>${i}</li>`).join('')}
      </ul>
      <a class="track-link" href="${t.linkHref}">${t.linkText}</a>
    </div>`).join('');
}

function renderCurriculum(){
  const head = document.getElementById('curriculumHead');
  const el = document.getElementById('curriculumBox');
  if(head){
    head.innerHTML = `
      <div class="eyebrow">${CONTENT.curriculumSection.eyebrow}</div>
      <h2 class="section-title">${CONTENT.curriculumSection.title}</h2>
      <p class="section-sub">${CONTENT.curriculumSection.subtitle}</p>`;
  }
  if(!el) return;
  el.innerHTML = CONTENT.phases.map(p => `
    <div class="phase">
      <div class="phase-num">${p.num}</div>
      <div>
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="tools">${p.tools.map(tool => `<span>${tool}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

function renderReviews(){
  const head = document.getElementById('reviewsHead');
  const el = document.getElementById('reviewsBox');
  if(head){
    head.innerHTML = `
      <div class="eyebrow">${CONTENT.reviewsSection.eyebrow}</div>
      <h2 class="section-title">${CONTENT.reviewsSection.title}</h2>
      <p class="section-sub">${CONTENT.reviewsSection.subtitle}</p>`;
  }
  if(!el) return;
  el.innerHTML = CONTENT.reviews.map(r => `
    <div class="review-card">
      <div class="stars">${stars(r.stars)}</div>
      <p>"${r.quote}"</p>
      <div class="float-person">
        <div class="avatar">${r.initials}</div>
        <div><div class="who">${r.name}</div><div class="where">${r.role}</div></div>
      </div>
    </div>`).join('');
}

function renderFooterCta(){
  const el = document.getElementById('footerCtaBox');
  if(!el) return;
  const f = CONTENT.footerCta;
  el.innerHTML = `
    <div class="eyebrow">${f.eyebrow}</div>
    <h2 class="section-title">${f.title}</h2>
    <p class="section-sub" style="margin-bottom:30px;">${f.subtitle}</p>
    <a class="cta-btn" href="#waitlist">${f.ctaText}</a>`;
}

function renderFooter(){
  const el = document.getElementById('footerBox');
  if(!el) return;
  el.innerHTML = `${CONTENT.footer.text} · <a href="mailto:${CONTENT.brand.contactEmail}">${CONTENT.brand.contactEmail}</a>`;
}

function runTerminal(){
  const body = document.getElementById('termBody');
  const titleEl = document.getElementById('termTitle');
  if(!body || !titleEl) return;
  const sessions = CONTENT.terminalSessions;
  let sIndex = 0;

  function typeLine(lineObj, cb){
    const p = document.createElement('div');
    const span = document.createElement('span');
    span.className = lineObj.cls;
    p.appendChild(span);
    body.appendChild(p);
    let i = 0;
    const interval = setInterval(() => {
      span.textContent = lineObj.text.slice(0, i+1);
      i++;
      if(i >= lineObj.text.length){
        clearInterval(interval);
        setTimeout(cb, 380);
      }
    }, 22);
  }

  function runSession(){
    body.innerHTML = "";
    titleEl.textContent = sessions[sIndex].title;
    let li = 0;
    function next(){
      if(li < sessions[sIndex].lines.length){
        typeLine(sessions[sIndex].lines[li], () => { li++; next(); });
      } else {
        const cursorLine = document.createElement('div');
        cursorLine.innerHTML = '<span class="prompt">$</span> <span class="cursor"></span>';
        body.appendChild(cursorLine);
        setTimeout(() => {
          sIndex = (sIndex + 1) % sessions.length;
          runSession();
        }, 1800);
      }
    }
    next();
  }
  runSession();
}

function renderAll(){
  renderBrand();
  renderNav();
  renderContact();
  renderBadges();
  renderHero();
  renderTestimonial();
  renderSocial();
  renderStats();
  renderTracks();
  renderCurriculum();
  renderReviews();
  renderFooterCta();
  renderFooter();
  runTerminal();
}

document.addEventListener('DOMContentLoaded', renderAll);
