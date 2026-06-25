// Hourgl — minimal scroll-triggered reveal for the HOURGLASS -> HOURGL dissolve.
// Fires only once the word-transform box is well into view (not just touching
// the viewport edge), so the fade plays while the person is actually looking
// at it, not before they've scrolled to it.
// No frameworks, no build step. Degrades safely if IntersectionObserver is unsupported.
(function () {
  var el = document.getElementById('wordTransform');
  if (!el) return;

  if (!('IntersectionObserver' in window)) {
    el.classList.add('is-revealed');
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        el.classList.add('is-revealed');
        observer.disconnect();
      }
    });
  }, { threshold: 0.6, rootMargin: '0px 0px -15% 0px' });

  observer.observe(el);
})();
