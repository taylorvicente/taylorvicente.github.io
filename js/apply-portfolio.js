(function () {
  function each(list, fn) {
    if (!list || !list.length) return;
    for (var i = 0; i < list.length; i++) fn(list[i], i);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var c = window.PORTFOLIO_CONFIG;
    if (!c) return;

    var navBrand = c.nav_brand
      ? String(c.nav_brand)
      : String(c.display_name || '')
          .trim()
          .replace(/\s+/g, '_')
          .toUpperCase();

    each(document.querySelectorAll('[data-pf="nav_brand"]'), function (el) {
      el.textContent = navBrand;
    });

    var year =
      c.copyright_year != null && c.copyright_year !== ''
        ? c.copyright_year
        : new Date().getFullYear();
    var upperName = String(c.display_name || '').toUpperCase();
    each(document.querySelectorAll('[data-pf="copyright"]'), function (el) {
      el.textContent =
        '\u00a9' + year + ' ' + upperName + ' // ALL RIGHTS RESERVED';
    });

    if (c.contact_email) {
      each(document.querySelectorAll('[data-pf="contact_email"]'), function (el) {
        el.setAttribute('href', 'mailto:' + c.contact_email);
        el.textContent = c.contact_email;
      });
    }

    if (c.social_linkedin) {
      each(document.querySelectorAll('[data-pf="social_linkedin"]'), function (el) {
        el.setAttribute('href', c.social_linkedin);
      });
    }

    if (c.social_github) {
      each(document.querySelectorAll('[data-pf="social_github"]'), function (el) {
        el.setAttribute('href', c.social_github);
      });
    }

    each(document.querySelectorAll('[data-pf="social_extra"]'), function (el) {
      var href = c.social_extra_href != null ? String(c.social_extra_href).trim() : '';
      el.setAttribute('href', href || '#');
      if (c.social_extra_label) el.textContent = c.social_extra_label;
      if (c.social_extra_hide) el.setAttribute('hidden', '');
      else el.removeAttribute('hidden');
    });
  });
})();
