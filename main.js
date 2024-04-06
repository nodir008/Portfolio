const dark = document.querySelector('.checkbox');
const body = document.body;
const navBtnsLang = document.querySelector('.nav__btns-lang');
const navLang = document.querySelector('.nav__leng');
const nav = document.querySelector('.nav');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav__link');
let isDarkMode = false;

function changeLanguage(language) {
  navLang.classList.remove('active');
  let languageElements = document.querySelectorAll('.nav__link, .home__about, .services__box-item');
  languageElements.forEach(function (element) {
    if (element.classList.contains('nav__link')) {
      if (language === 'uz') {
        element.innerText = element.getAttribute('data-uz');
      } else if (language === 'ru') {
        element.innerText = element.getAttribute('data-ru');
      } else if (language === 'en') {
        element.innerText = element.getAttribute('data-en');
      }
    } else if (element.classList.contains('home__about')) {
      element.querySelector('.home__about-subtitle').innerText = element.querySelector('.home__about-subtitle').getAttribute('data-' + language);
      element.querySelector('.home__about-title').innerText = element.querySelector('.home__about-title').getAttribute('data-' + language);
      element.querySelector('.home__about-text').innerText = element.querySelector('.home__about-text').getAttribute('data-' + language);
      element.querySelector('.home__about-theme').innerText = element.querySelector('.home__about-theme').getAttribute('data-' + language);
      element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-' + language);
    } else {
      element.querySelector('.services__box-title').innerText = element.querySelector('.services__box-title').getAttribute('data-' + language);
      element.querySelector('.services__box-text').innerText = element.querySelector('.services__box-text').getAttribute('data-' + language);
    }
  });
  let aboutElements = document.querySelectorAll('.about');
  aboutElements.forEach(function (element) {
    element.querySelector('.about__about-title').innerText = element.querySelector('.about__about-title').getAttribute('data-' + language);
    element.querySelector('.about__about-subtitle').innerText = element.querySelector('.about__about-subtitle').getAttribute('data-' + language);
    element.querySelector('.about__about-text').innerText = element.querySelector('.about__about-text').getAttribute('data-' + language);
    element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-' + language);
  });
  let serviceElements = document.querySelectorAll('.services');
  serviceElements.forEach(function (element) {
    element.querySelector('.services-title').innerText = element.querySelector('.services-title').getAttribute('data-' + language);
  });
  let contactElements = document.querySelectorAll('.contact');
  contactElements.forEach(function (element) {
    element.querySelector('.contact__title').innerText = element.querySelector('.contact__title').getAttribute('data-' + language);
    let contactLinks = element.querySelectorAll('.contact__links-link');
    contactLinks.forEach(function (link) {
      link.innerText = link.getAttribute('data-' + language);
    });
  });
  localStorage.setItem('selectedLanguage', language);
}

function loadSelectedLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage !== null) {
    changeLanguage(selectedLanguage);
  }
}

loadSelectedLanguage();

function saveDarkModeState() {
  localStorage.setItem('isDarkMode', isDarkMode);
}

function loadDarkModeState() {
  const savedDarkMode = localStorage.getItem('isDarkMode');
  if (savedDarkMode !== null) {
    isDarkMode = JSON.parse(savedDarkMode);
    if (isDarkMode) {
      body.classList.add('dark-theme');
      dark.checked = true;
    } else {
      body.classList.remove('dark-theme');
      dark.checked = false;
    }
  }
}

loadDarkModeState();

dark.addEventListener('change', function () {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
  saveDarkModeState();
});

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        let href = links.getAttribute('href').substring(1);
        if (href === id) {
          links.classList.add('active');
        }
      });
    }
  });
};

function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll !== 0) {
    nav.classList.add('active');
    navLang.classList.remove('active');
  } else {
    nav.classList.remove('active');
    navLang.classList.remove('active');
  }
}

window.addEventListener('scroll', handleScroll);

navBtnsLang.addEventListener('click', function () {
  navLang.classList.toggle('active');
});
