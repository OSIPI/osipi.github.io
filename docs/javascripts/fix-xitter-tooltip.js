// Fix the tooltip text for the X / (formerly Twitter) social icon.
// Some icon packs label the icon as "Xitter"; we normalize it to "X".
//
// For MkDocs Material, run on initial load and on page navigation events.
(function () {
  function applyFix(root) {
    var scope = root && root.querySelectorAll ? root : document;

    // Fix tooltips on links/elements.
    var els = scope.querySelectorAll(
      '[title="Xitter"], [aria-label="Xitter"], [data-md-tooltip="Xitter"]'
    );
    for (var i = 0; i < els.length; i++) {
      if (els[i].getAttribute('title') === 'Xitter') els[i].setAttribute('title', 'X');
      if (els[i].getAttribute('aria-label') === 'Xitter') els[i].setAttribute('aria-label', 'X');
      if (els[i].getAttribute('data-md-tooltip') === 'Xitter') els[i].setAttribute('data-md-tooltip', 'X');
    }

    // Fix tooltips embedded inside SVGs.
    var titles = scope.querySelectorAll('svg title');
    for (var j = 0; j < titles.length; j++) {
      if ((titles[j].textContent || '').trim() === 'Xitter') {
        titles[j].textContent = 'X';
      }
    }
  }

  // Initial load.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      applyFix(document);
    });
  } else {
    applyFix(document);
  }

  // MkDocs Material: run on every page change if the theme provides document$.
  try {
    if (window.document$ && typeof window.document$.subscribe === 'function') {
      window.document$.subscribe(function () {
        applyFix(document);
      });
    }
  } catch (e) {
    // best-effort only
  }
})();
