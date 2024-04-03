const dark = document.querySelector('.checkbox');
const body = document.body;
const navBtnsLang = document.querySelector('.nav__btns-lang');
const navLang = document.querySelector('.nav__lang');
const nav = document.querySelector('.nav');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav__link');
let isDarkMode = false;


function changeLanguage(language) {
  // .nav__lang elementini yopish
  navLang.classList.remove('active');

  // .nav__link va .home__about elementlarini tanlash
  var languageElements = document.querySelectorAll('.nav__link, .home__about');

  // Har bir til elementini o'zgartirish
  languageElements.forEach(function (element) {
    if (element.classList.contains('nav__link')) {
      // .nav__link elementlarini o'zgartirish
      if (language === 'uz') {
        element.innerText = element.getAttribute('data-uz');
      } else if (language === 'ru') {
        element.innerText = element.getAttribute('data-ru');
      } else if (language === 'en') {
        element.innerText = element.getAttribute('data-en');
      }
    } var homeAboutElements = document.querySelectorAll('.home__about');

    // Har bir til elementini o'zgartirish
    homeAboutElements.forEach(function (element) {
      // .home__about elementlarini o'zgartirish
      if (language === 'uz') {
        element.querySelector('.home__about-subtitle').innerText = element.querySelector('.home__about-subtitle').getAttribute('data-uz');
        element.querySelector('.home__about-title').innerText = element.querySelector('.home__about-title').getAttribute('data-uz');
        element.querySelector('.home__about-text').innerText = element.querySelector('.home__about-text').getAttribute('data-uz');
        element.querySelector('.home__about-theme').innerText = element.querySelector('.home__about-theme').getAttribute('data-uz');
        element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-uz');
      } else if (language === 'ru') {
        element.querySelector('.home__about-subtitle').innerText = element.querySelector('.home__about-subtitle').getAttribute('data-ru');
        element.querySelector('.home__about-title').innerText = element.querySelector('.home__about-title').getAttribute('data-ru');
        element.querySelector('.home__about-text').innerText = element.querySelector('.home__about-text').getAttribute('data-ru');
        element.querySelector('.home__about-theme').innerText = element.querySelector('.home__about-theme').getAttribute('data-ru');
        element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-ru');
      } else if (language === 'en') {
        element.querySelector('.home__about-subtitle').innerText = element.querySelector('.home__about-subtitle').getAttribute('data-en');
        element.querySelector('.home__about-title').innerText = element.querySelector('.home__about-title').getAttribute('data-en');
        element.querySelector('.home__about-text').innerText = element.querySelector('.home__about-text').getAttribute('data-en');
        element.querySelector('.home__about-theme').innerText = element.querySelector('.home__about-theme').getAttribute('data-en');
        element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-en');
      }
    });

  });

  // Tanlangan tilni local storage ga saqlash
  localStorage.setItem('selectedLanguage', language);
}

// Saqlangan tilni yuklash va saytni ulgurish
function loadSelectedLanguage() {
  const selectedLanguage = localStorage.getItem('selectedLanguage');
  if (selectedLanguage !== null) {
    changeLanguage(selectedLanguage);
  }
}

// Sahifani yuklashda saqlangan tilni yuklash
loadSelectedLanguage();



// Bu funktsiya dark-mode holatini saqlaydi
function saveDarkModeState() {
  localStorage.setItem('isDarkMode', isDarkMode);
}

// Bu funktsiya dark-mode holatini yuklaydi
function loadDarkModeState() {
  const savedDarkMode = localStorage.getItem('isDarkMode');
  if (savedDarkMode !== null) {
    isDarkMode = JSON.parse(savedDarkMode);
    if (isDarkMode) {
      body.classList.add('dark-theme');
      dark.checked = true; // Toggle checkbox if dark mode is on
    } else {
      body.classList.remove('dark-theme');
      dark.checked = false; // Toggle checkbox if dark mode is off
    }
  }
}

// Sahifani yuklashda dark-mode holatini tekshirish
loadDarkModeState();

// Dark-mode tugmasini bosganda holatni o'zgartirish
dark.addEventListener('change', function () {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
  // Yangi holatni saqlash
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