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

//slider
$('.slider').slick({
  infinity: true,
  slidesToShow: 4,
  prevArrow: '.example__prev',
  nextArrow: '.example__next'
});

$('.slider-reviews').slick({
  infinity: true,
  slidesToShow: 4,
  prevArrow: '.reviews__prev',
  nextArrow: '.reviews__next'
});

// faq accordion
function accordion() {
  const accordion = document.querySelector('.accordion');
  accordion.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('faq__item-title')) {
      target.classList.toggle('active');
      let accordionContent = target.nextElementSibling;
      accordionContent.style.height = `${accordionContent.scrollHeight}px`;
      if (!target.classList.contains('active')) {
        accordionContent.style.height = '';
      }
    }
  });
}

accordion();

// send form 

function sendForm() {
  const form = document.querySelector('.request__form');
  if (!form) {
    return;
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let body = {};
    const formData = new FormData(form);
    formData.forEach((val, key) => {
      body[key] = val;
    });
    console.log(body);
  });
}

sendForm();