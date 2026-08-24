document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#partners') {
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search,
    );
    window.scrollTo(0, 0);
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('site-navigation');

  if (!menuToggle || !navigation) {
    return;
  }

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Open navigation' : 'Close navigation',
    );
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
});
