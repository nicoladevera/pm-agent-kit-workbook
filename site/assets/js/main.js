/* PM Agent Kit Workbook — main.js */

(function () {
  'use strict';

  var GA_MEASUREMENT_ID = 'G-L6MZH516QP';

  /* ── Analytics ── */
  function shouldTrackAnalytics() {
    if (!GA_MEASUREMENT_ID) return false;
    if (!/^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID)) return false;
    if (window.location.protocol === 'file:') return false;
    if (/^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(window.location.hostname)) return false;
    try {
      if (localStorage.getItem('pmakw-disable-analytics') === 'true') return false;
    } catch (e) {}
    return true;
  }

  function initAnalytics() {
    if (!shouldTrackAnalytics()) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(script);
  }

  function trackEvent(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params || {});
  }

  function getLinkContext(el) {
    var href = el.getAttribute('href') || '';
    var url;
    try { url = new URL(href, window.location.href); } catch (e) {}

    return {
      link_text: (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 100),
      link_url: url ? url.href : href,
      link_domain: url ? url.hostname : '',
      page_path: window.location.pathname
    };
  }

  function initAnalyticsEvents() {
    if (!shouldTrackAnalytics()) return;

    document.addEventListener('click', function (e) {
      var copyButton = e.target.closest('.copy-btn');
      if (copyButton) {
        trackEvent('copy_prompt', {
          prompt_target: copyButton.getAttribute('data-target') || '',
          page_path: window.location.pathname
        });
        return;
      }

      var cta = e.target.closest('a.btn');
      if (cta) {
        trackEvent('cta_click', getLinkContext(cta));
        return;
      }

      var download = e.target.closest('a[download]');
      if (download) {
        trackEvent('download_click', getLinkContext(download));
        return;
      }

      var outbound = e.target.closest('a[href^="http"]');
      if (outbound && outbound.hostname !== window.location.hostname) {
        trackEvent('outbound_click', getLinkContext(outbound));
      }
    });
  }

  /* ── Theme toggle ── */
  function setThemeIcon(btn, theme) {
    btn.textContent = theme === 'dark' ? '☀︎' : '☽︎';
  }

  function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    setThemeIcon(btn, current);
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('pmakw-theme', next); } catch (e) {}
      setThemeIcon(btn, next);
    });
  }

  /* ── Mobile sidebar toggle ── */
  function initSidebarToggle() {
    var btn = document.getElementById('sidebarToggle');
    if (!btn) return;

    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    function openSidebar() { document.body.classList.add('sidebar-open'); }
    function closeSidebar() { document.body.classList.remove('sidebar-open'); }

    btn.addEventListener('click', function () {
      if (document.body.classList.contains('sidebar-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSidebar();
    });
  }

  /* ── Copy to clipboard ── */
  function initCopyButtons() {
    var buttons = document.querySelectorAll('.copy-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-target');
        var pre = document.getElementById(targetId);
        if (!pre) return;
        var text = pre.textContent;
        var originalText = btn.textContent;

        function onSuccess() {
          btn.textContent = 'Copied ✓';
          setTimeout(function () { btn.textContent = originalText; }, 2000);
        }
        function onFail() {}

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(onSuccess, function () {
            fallbackCopy(text, onSuccess, onFail);
          });
        } else {
          fallbackCopy(text, onSuccess, onFail);
        }
      });
    });
  }

  function fallbackCopy(text, onSuccess, onFail) {
    try {
      var textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (ok) { onSuccess(); } else { onFail(); }
    } catch (err) { onFail(); }
  }

  /* ── Active nav (sidebar) ── */
  function initActiveNav() {
    var pathname = window.location.pathname;
    var parts = pathname.split('/');
    var filename = parts[parts.length - 1] || 'index.html';
    if (!filename) filename = 'index.html';

    var links = document.querySelectorAll('.sidebar a');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var hrefParts = href.split('/');
      var hrefFile = hrefParts[hrefParts.length - 1];
      if (hrefFile === filename) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ── Init ── */
  function init() {
    initAnalytics();
    initAnalyticsEvents();
    initThemeToggle();
    initSidebarToggle();
    initCopyButtons();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
