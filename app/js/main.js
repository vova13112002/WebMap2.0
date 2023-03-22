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
};
// const anotherTexts = {
//   "another_page-title": {
//     ua: "",
//     en: "",
//   },
//   "another_page-1": {
//     ua: "",
//     en: "",
//   },
//   "another_page-2": {
//     Uint16Array: "",
//     en: "",
//   },
//   "another_page-3": {
//     ua: "",
//     en: "",
//   },
//   "another_page-4": {
//     ua: "",
//     en: "",
//   },
// };

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