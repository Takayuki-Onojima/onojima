/* Language switch shared by every page. Preference is kept in localStorage. */
(function () {
    var KEY = 'onojima-lang';
    var root = document.documentElement;

    function apply(lang) {
        root.setAttribute('data-lang', lang);
        root.setAttribute('lang', lang);
        var buttons = document.querySelectorAll('.langswitch button');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('aria-pressed',
                buttons[i].getAttribute('data-set-lang') === lang ? 'true' : 'false');
        }
        try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ }
    }

    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
    apply(saved === 'en' || saved === 'ja' ? saved : 'ja');

    document.addEventListener('click', function (event) {
        var button = event.target.closest && event.target.closest('[data-set-lang]');
        if (button) { apply(button.getAttribute('data-set-lang')); }
    });
})();
