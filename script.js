(function init() {
  const nav__link = document.querySelectorAll('.c-nav__item');
  const card = document.querySelectorAll('.c-card');
  const container = document.querySelector('.l-page-wrapper');
  const cardNav = document.querySelectorAll('.c-galery-nav__item');
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const menu = document.querySelector('.l-menu');
  const burger = document.querySelector('.c-hamburger__span');

  console.log(cardNav);
  window.addEventListener('scroll', (e) => {
    if (window.scrollY < 1200) {
      check();
      nav__link[0].classList.add('c-nav__item--on');
    } else if (window.scrollY >= 1200 && window.scrollY < 2300) {
      check();
      nav__link[1].classList.add('c-nav__item--on');
    } else if (window.scrollY >= 2300 && window.scrollY < 3782) {
      check();
      nav__link[2].classList.add('c-nav__item--on');
    } else {
      check();
      nav__link[3].classList.add('c-nav__item--on');
    }
  });

  function check() {
    for (let i = 0; i < nav__link.length; i++) {
      nav__link[i].classList.remove('c-nav__item--on');
    }
  }

  // burger.classList.remove('c-hamburger__span--active');
  // menu.classList.remove('l-menu--active');

  burger.parentElement.addEventListener('click', () => {
    burger.classList.toggle('c-hamburger__span--active');
    menu.classList.toggle('l-menu--active');
  });

  // cardNav.forEach((elem) => {
  //   elem.addEventListener('click', (e) => {
  //     const name = e.target.textContent;

  //   });
  // });

  // const photoStyle = "";

  // card.forEach((element) => {
  //   element.addEventListener('click', (e) => {
  //     const xd = document.createElement('div');
  //     xd.classList.add('c-thumbnail');

  //     const img = document.createElement('img');
  //     img.classList.add('c-thumbnail__img');
  //     img.src = 'style/images/portfolio-01-nature.jpg';

  //     // const exit = document.createElement('i');
  //     // exit.classList.add('fas');
  //     // exit.classList.add('fa-times');

  //     xd.appendChild(img);
  //     xd.appendChild(exit);
  //     xd.toggle('c-thumbnail--off');
  //     body.appendChild(xd);
  //     console.log('xd');
  //   });
  // });
})();
