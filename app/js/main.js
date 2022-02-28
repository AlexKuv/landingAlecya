// burger

function toggleBurger() {
  const burger = document.querySelector('.header__burger');
  const navMobile = document.querySelector('.header__nav-wrapper');
  if (!burger) {
    return;
  }

  burger.addEventListener('click', e => {
    e.preventDefault();
    burger.classList.toggle('header__burger--active');
    navMobile.classList.toggle('header__nav-wrapper--active');
  });

}


toggleBurger();