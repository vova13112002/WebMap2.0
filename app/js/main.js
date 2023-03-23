const langButtons = document.querySelectorAll("[data-btn]");
const allLangs = ["ua", "en",];
const currentPathName = window.location.pathname;
let currentLang =
  localStorage.getItem("language") || checkBrowserLang() || "en";
let currentTexts = {};

const homeTexts = {
  "home_page-title": {
    ua: "Прокладання маршруту",
    en: "Web Map",

  },
  "home_page-1": {
    ua: "Головна",
    en: "Home",

  },
  "home_page-2": {
    ua: "Прокладання маршрутів",
    en: "Creating routes",

  },
  "home_page-3": {
    ua: "Оптимізація доставки",
    en: "Delivery optimization",

  },
  "home_page-4": {
    ua: "Карта",
    en: "Map",

  },
  "home_page-5": {
    ua: "Контакти",
    en: "Contact",

  },

  "home_page-6": {
    ua: "Англійська",
    en: "English",

  }, "home_page-7": {
    ua: "Українська",
    en: "Ukrainian",

  },
  "home_page-8": {
    ua: "Ласкаво просимо на сторінку!",
    en: "Welcome To Page!",

  },
  "home_page-9": {
    ua: "Планування маршрутів та оптимізація процесу доставки",
    en: "Planning routes and optimizing the delivery process",

  

  },
  "home_page-10":{
    ua:"Мета прокладання маршрутів і оптимізації процесу доставки товарів полягає в забезпеченні ефективності та економічної вигоди при здійсненні доставки товарів. Це означає зменшення часу та витрат на доставку, зниження витрат на паливо та інші експлуатаційні витрати, покращення обслуговування клієнтів та забезпечення надійної та швидкої доставки товарів до клієнтів. Мета оптимізації процесу доставки полягає у забезпеченні максимальної ефективності та оптимальності маршруту, забезпечення вчасної доставки та задоволення потреб клієнтів.",
    en:"The purpose of route planning and optimization is to ensure efficiency and cost-effectiveness in the delivery of goods. This means reducing delivery time and costs, lowering fuel and other operating costs, improving customer service, and ensuring that goods are delivered reliably and quickly to customers. The goal of optimizing the delivery process is to maximize efficiency and route optimization, ensure on-time delivery, and meet customer needs."
  },
  "home_page-11":{
    ua:"Оптимізація доставки",
    en:"Delivery optimization"
  }
};


// Проверка пути страницы сайта
function checkPagePathName() {
  switch (currentPathName) {
    case "/index.html":
      currentTexts = homeTexts;
      break;
    // case "/another_page.html":
    //   currentTexts = anotherTexts;
    //   break;

    default:
      currentTexts = homeTexts;
      break;
  }
}
checkPagePathName();

// Изменение языка у текстов
function changeLang() {
  for (const key in currentTexts) {
    let elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      elem.textContent = currentTexts[key][currentLang];
    }
  }
}
changeLang();

// Вешаем обработчики на каждую кнопку
langButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (!event.target.classList.contains("header__btn_active")) {
      currentLang = event.target.dataset.btn;
      localStorage.setItem("language", event.target.dataset.btn);
      resetActiveClass(langButtons, "header__btn_active");
      btn.classList.add("header__btn_active");
      changeLang();
    }
  });
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

// Проверка активной кнопки
function checkActiveLangButton() {
  switch (currentLang) {
    case "ua":
      document
        .querySelector('[data-btn="ua"]')
        .classList.add("header__btn_active");
      break;
    case "en":
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;

    default:
      document
        .querySelector('[data-btn="en"]')
        .classList.add("header__btn_active");
      break;
  }
}
checkActiveLangButton();

// Проверка языка браузера
function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

console.log("navigator.language", checkBrowserLang());

//JS Scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })


  })
}

// //burger
// const burger = document?.querySelector('[data-burger]');
// const nav = document?.querySelector('[data-nav]');
// const navItems = nav?.querySelectorAll('a');
// const body = document.body;
// burger?.addEventListener('click', () => {
//   body.classList.toggle('stop-scroll');
//   burger?.classList.toggle('burger--active');
//   nav?.classList.toggle('nav--visible');
// });
// navItems.forEach(el=>{
//   el.addEventListener('click',()=>{
//     body.classList.remove('stop-scroll');
//     burger?.classList.remove('burger--active');
//     nav?.classList.remove('nav--visible');
//   });
// });