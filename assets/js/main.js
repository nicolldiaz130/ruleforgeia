/* =============================================================
   RuleForge AI — Interacciones de la landing page
   JavaScript progresivo (vanilla, sin dependencias)
   ============================================================= */
(function () {
  'use strict';

  /* --------- Año dinámico en el footer --------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------- Header con sombra al hacer scroll --------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --------- Menú móvil --------- */
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');

  const closeMenu = () => {
    nav.classList.remove('nav--open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      nav.classList.toggle('nav--open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    // Cerrar al elegir un enlace o presionar Escape
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  /* --------- Animación de aparición al hacer scroll --------- */
  const animated = document.querySelectorAll('[data-animate]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    animated.forEach((el) => io.observe(el));
  } else {
    animated.forEach((el) => el.classList.add('is-visible'));
  }

  /* --------- Contador animado de métricas --------- */
  const counters = document.querySelectorAll('[data-count]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = prefix + target + suffix; return; }
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = prefix + Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animateCount(entry.target); co.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  }

  /* --------- Copiar caption de LinkedIn --------- */
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn && navigator.clipboard) {
    const caption = document.querySelector('.li-post__caption');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(caption.innerText.trim());
        const original = copyBtn.textContent;
        copyBtn.textContent = '✓ ¡Caption copiado!';
        setTimeout(() => { copyBtn.textContent = original; }, 2200);
      } catch (_) {
        copyBtn.textContent = 'No se pudo copiar';
      }
    });
  }

  /* --------- Validación del formulario de demo --------- */
  const form = document.getElementById('demo-form');
  if (!form) return;

  const success = document.getElementById('form-success');

  const validators = {
    nombre: (v) => v.trim().length >= 3 || 'Ingresa tu nombre completo.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Ingresa un correo válido.',
    empresa: (v) => v.trim().length >= 2 || 'Ingresa el nombre de tu empresa.'
  };

  const setError = (field, message) => {
    const small = field.parentElement.querySelector('[data-error]');
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (small) small.textContent = message || '';
  };

  // Validación en vivo al perder el foco
  Object.keys(validators).forEach((name) => {
    const field = form.elements[name];
    if (!field) return;
    field.addEventListener('blur', () => {
      const result = validators[name](field.value);
      setError(field, result === true ? '' : result);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let firstInvalid = null;

    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      const result = validators[name](field.value);
      const message = result === true ? '' : result;
      setError(field, message);
      if (message && !firstInvalid) firstInvalid = field;
    });

    // Política de datos obligatoria
    if (!form.elements['politica'].checked) {
      if (!firstInvalid) firstInvalid = form.elements['politica'];
    }

    if (firstInvalid) { firstInvalid.focus(); return; }

    // Envío simulado (sin backend). Integrar aquí Formspree / API / CRM.
    form.querySelectorAll('input, textarea, button').forEach((el) => (el.disabled = true));
    success.hidden = false;
    success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    form.reset();
  });
})();
