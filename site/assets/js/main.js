/* PM Agent Kit Workbook — main.js
   Features:
   1. Copy-to-clipboard for prompt blocks
   2. Active nav state based on current filename
*/

(function () {
  'use strict';

  /* ============================================================
     Feature 1 — Copy to Clipboard
     Each .copy-btn has a data-target attribute whose value
     matches the id of the corresponding <pre> element.
     ============================================================ */
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
          setTimeout(function () {
            btn.textContent = originalText;
          }, 2000);
        }

        function onFail() {
          // Silently fail — don't change button text
        }

        // Modern Clipboard API
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
      // Avoid scrolling to the bottom of the page
      textarea.style.position = 'fixed';
      textarea.style.top = '0';
      textarea.style.left = '0';
      textarea.style.width = '1px';
      textarea.style.height = '1px';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      var successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        onSuccess();
      } else {
        onFail();
      }
    } catch (err) {
      onFail();
    }
  }

  /* ============================================================
     Feature 2 — Active Nav State
     Reads the current filename from window.location.pathname
     and marks the matching sidebar <a> as active.
     Works under file:// protocol.
     ============================================================ */
  function initActiveNav() {
    var pathname = window.location.pathname;
    var parts = pathname.split('/');
    var filename = parts[parts.length - 1] || 'index.html';

    // Handle edge case: empty string after trailing slash
    if (!filename) filename = 'index.html';

    var links = document.querySelectorAll('.sidebar a, .sidebar-nav a, .week-group a');

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;

      // Normalize the href to just the filename portion
      var hrefParts = href.split('/');
      var hrefFilename = hrefParts[hrefParts.length - 1];

      if (hrefFilename === filename) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* ============================================================
     Init
     ============================================================ */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initCopyButtons();
      initActiveNav();
    });
  } else {
    // DOMContentLoaded already fired
    initCopyButtons();
    initActiveNav();
  }

}());
