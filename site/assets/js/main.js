/* PM Agent Kit Workbook — main.js */

(function () {
  'use strict';

  /* ── Theme toggle ── */
  function initThemeToggle() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('pmakw-theme', next); } catch (e) {}
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
    initThemeToggle();
    initCopyButtons();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
