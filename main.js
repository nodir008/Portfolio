const dark = document.querySelector('.checkbox');
const body = document.body;
const navBtnsLang = document.querySelector('.nav__btns-lang');
const navLang = document.querySelector('.nav__leng');
const nav = document.querySelector('.nav');

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav__link');
let isDarkMode = false;


function changeLanguage(language) {
  // Close the .nav__lang element
  navLang.classList.remove('active');

  // Select .nav__link, .home__about, and .services__box-item elements
  let languageElements = document.querySelectorAll('.nav__link, .home__about, .services__box-item');

  // Change each language element
  languageElements.forEach(function (element) {
    if (element.classList.contains('nav__link')) {
      // Change .nav__link elements
      if (language === 'uz') {
        element.innerText = element.getAttribute('data-uz');
      } else if (language === 'ru') {
        element.innerText = element.getAttribute('data-ru');
      } else if (language === 'en') {
        element.innerText = element.getAttribute('data-en');
      }
    } else if (element.classList.contains('home__about')) {
      // Change .home__about elements
      element.querySelector('.home__about-subtitle').innerText = element.querySelector('.home__about-subtitle').getAttribute('data-' + language);
      element.querySelector('.home__about-title').innerText = element.querySelector('.home__about-title').getAttribute('data-' + language);
      element.querySelector('.home__about-text').innerText = element.querySelector('.home__about-text').getAttribute('data-' + language);
      element.querySelector('.home__about-theme').innerText = element.querySelector('.home__about-theme').getAttribute('data-' + language);
      element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-' + language);
    } else {
      // Change .services__box-item elements
      element.querySelector('.services__box-title').innerText = element.querySelector('.services__box-title').getAttribute('data-' + language);
      element.querySelector('.services__box-text').innerText = element.querySelector('.services__box-text').getAttribute('data-' + language);
    }
  });

  // Select .about elements
  let aboutElements = document.querySelectorAll('.about');

  // Change language for .about elements
  aboutElements.forEach(function (element) {
    element.querySelector('.about__about-title').innerText = element.querySelector('.about__about-title').getAttribute('data-' + language);
    element.querySelector('.about__about-subtitle').innerText = element.querySelector('.about__about-subtitle').getAttribute('data-' + language);
    element.querySelector('.about__about-text').innerText = element.querySelector('.about__about-text').getAttribute('data-' + language);
    element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-' + language);
  });

  let servisecElements = document.querySelectorAll('.services');

  // Change language for .about elements
  servisecElements.forEach(function (element) {
    element.querySelector('.services-title').innerText = element.querySelector('.services-title').getAttribute('data-' + language);
    // element.querySelector('.about__about-subtitle').innerText = element.querySelector('.about__about-subtitle').getAttribute('data-' + language);
    // element.querySelector('.about__about-text').innerText = element.querySelector('.about__about-text').getAttribute('data-' + language);
    // element.querySelector('.home__about-btn').innerText = element.querySelector('.home__about-btn').getAttribute('data-' + language);
  });

  let contactElements = document.querySelectorAll('.contact');

  // Har bir contact elementini o'zgartirish
  contactElements.forEach(function (element) {
    element.querySelector('.contact__title').innerText = element.querySelector('.contact__title').getAttribute('data-' + language);

    let contactLinks = element.querySelectorAll('.contact__links-link');
    contactLinks.forEach(function (link) {
      link.innerText = link.getAttribute('data-' + language);
    });
  });



  // Save selected language to local storage
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
  console.log('asas');
  navLang.classList.toggle('active');
});