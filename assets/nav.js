// Menuknop voor smalle schermen. Zonder JavaScript blijft het menu gewoon zichtbaar.
(function () {
  var knop = document.querySelector('.menu-knop');
  var menu = document.getElementById('hoofdmenu');
  if (!knop || !menu) return;

  function zet(open) {
    knop.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('open', open);
  }

  knop.addEventListener('click', function () {
    zet(knop.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      zet(false);
      knop.focus();
    }
  });

  // Klik op een anker binnen de pagina (§01, §05) sluit het menu.
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) zet(false);
  });
})();

// Jaargangen in een verslag: op smalle schermen scrolt de rij, het huidige jaar staat in beeld.
(function () {
  var rij = document.querySelector('.jaargangen');
  var huidig = rij && rij.querySelector('[aria-current="page"]');
  if (!huidig || rij.scrollWidth <= rij.clientWidth) return;
  rij.scrollLeft = huidig.offsetLeft - rij.offsetLeft - (rij.clientWidth - huidig.offsetWidth) / 2;
})();
