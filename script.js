// Hourgl — minimal scroll-triggered reveal for the HOURGLASS -> HOURGL dissolve.
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
  }, { threshold: 0.5 });

  observer.observe(el);
})();
