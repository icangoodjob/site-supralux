"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  /* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
  function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
      var webP = new Image();

      webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
      };

      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    } // Добавление класса webp или no-webp для HTML


    testWebP(function (support) {
      var className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
    });
  }

  isWebp();
  /* SLIDERS */
  // MAIN SLIDER

  var mainSlider = document.querySelector('.slider-main__body');
  var mainSwiper = new Swiper(mainSlider, {
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 1,
      depth: 150,
      modifier: 1,
      slideShadows: false
    },
    loopAdditionalSlides: 1,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    paginationClickable: true,
    initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: false,
    slideClass: "slider-main__item",
    wrapperClass: "slider-main__wrapper",
    speed: 1100,
    pagination: {
      el: ".main-slider__pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".slider-controls .slider-arrow__next",
      prevEl: ".slider-controls .slider-arrow__prev"
    },
    breakpoints: {
      300: {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        effect: "slide",
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false
      },
      767.98: {
        effect: "coverflow"
      }
    }
  }); // PRODUCT SLIDERS

  var productSliders = document.querySelectorAll('.product__body');

  var _iterator = _createForOfIteratorHelper(productSliders),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var product = _step.value;
      var productSwiper = new Swiper(product, {
        loop: false,
        watchOverflow: true,
        observer: true,
        initialSlide: 0,
        spaceBetween: 10,
        slidesPerView: 5,
        grabCursor: false,
        slideClass: "product__item",
        wrapperClass: "product__wrapper",
        speed: 700,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        navigation: {
          nextEl: ".product__body .slider-arrow__next",
          prevEl: ".product__body .slider-arrow__prev"
        },
        breakpoints: {
          300: {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView: 2,
            spaceBetween: 20
          },
          767.98: {
            slidesPerView: 3
          },
          991.98: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      });
      productSwiper.init();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ; // LIST-CARD SLIDER

  var listCardSlider = document.querySelector('.list-card__body');
  var listCardSwiper = new Swiper(listCardSlider, {
    effect: 'fade',
    effectFade: {
      crossFade: true
    },
    loop: false,
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: false,
    slideClass: "list-card__item",
    wrapperClass: "list-card__wrapper",
    speed: 500,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".list-card__body .slider-arrow__next",
      prevEl: ".list-card__body .slider-arrow__prev"
    },
    breakpoints: {
      320: {
        watchSlidesVisibility: true
      }
    }
  }); // CATALOG SLIDERS

  var catalogSliders = document.querySelectorAll('.catalog-slider__container');

  var _iterator2 = _createForOfIteratorHelper(catalogSliders),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var catalogSlider = _step2.value;
      var catalogSwiper = new Swiper(catalogSlider, {
        loop: false,
        initialSlide: 0,
        watchOverflow: true,
        spaceBetween: 30,
        slidesPerView: 4,
        grabCursor: false,
        simulateTouch: false,
        slideClass: "product__item",
        wrapperClass: "catalog-slider__wrapper",
        speed: 500,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        navigation: {
          nextEl: ".catalog-slider__container .slider-arrow__next",
          prevEl: ".catalog-slider__container .slider-arrow__prev"
        },
        breakpoints: {
          300: {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            spaceBetween: 20,
            slidesPerView: 2
          },
          767.98: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          991.98: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4
          }
        }
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ; // ADVICE SLIDER

  var adviceSlider = document.querySelector('.advice__body');
  var adviceSwiper = new Swiper(adviceSlider, {
    loop: true,
    watchOverflow: true,
    loopAdditionalSlides: 1,
    spaceBetween: 30,
    slidesPerView: 3,
    grabCursor: true,
    simulateTouch: false,
    slideClass: "advice__item",
    wrapperClass: "advice__wrapper",
    speed: 700,
    navigation: {
      nextEl: ".advice__body .slider-arrow__next",
      prevEl: ".advice__body .slider-arrow__prev"
    },
    breakpoints: {
      300: {
        watchSlidesVisibility: true,
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      991.98: {
        slidesPerView: 3
      }
    }
  }); // PRODUCT-CARD SLIDER

  var cardMainSlider = document.querySelector('.card-slider__main');
  var cardNavSlider = document.querySelector('.card-slider__nav');
  var cardNavSwiper = new Swiper(cardNavSlider, {
    watchOverflow: true,
    slidesPerView: 4,
    spaceBetween: 10,
    simulateTouch: true,
    loopedSlides: 5,
    freeMode: true,
    slideClass: "nav-card-slider__item",
    wrapperClass: "nav-card-slider__wrapper",
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // loop: true,
    speed: 600,
    direction: 'horizontal',
    navigation: {
      nextEl: '.card-slider__nav .slider-arrow__next',
      prevEl: '.card-slider__nav .slider-arrow__prev'
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      479.98: {
        slidesPerView: 3
      },
      991.98: {
        slidesPerView: 4
      }
    }
  });
  var cardMainSwiper = new Swiper(cardMainSlider, {
    spaceBetween: 10,
    slidesPerView: 1,
    watchOverflow: true,
    // loop: true,
    loopedSlides: 5,
    simulateTouch: true,
    slideClass: "main-card-slider__item",
    wrapperClass: "main-card-slider__wrapper",
    speed: 600,
    thumbs: {
      swiper: cardNavSwiper
    }
  }); // PHOTO SLIDER

  var photoSlider = document.querySelector('.photo__body');
  var photoSwiper = new Swiper(photoSlider, {
    loop: true,
    watchOverflow: true,
    loopAdditionalSlides: 1,
    spaceBetween: 30,
    slidesPerView: 4,
    simulateTouch: false,
    slideClass: "photo__item",
    wrapperClass: "photo__wrapper",
    speed: 700,
    navigation: {
      nextEl: ".photo__body .slider-arrow__next",
      prevEl: ".photo__body .slider-arrow__prev"
    },
    breakpoints: {
      300: {
        slidesPerView: 1
      },
      479.98: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      767.98: {
        slidesPerView: 3
      },
      991.98: {
        slidesPerView: 4
      }
    }
  });
  /*================== TABS ====================*/

  var tabContent = document.querySelectorAll("[data-tab-content]");
  var tabItem = document.querySelectorAll("[data-tab]");

  var _loop = function _loop(i) {
    tabItem[i].addEventListener("click", function () {
      tabContent.forEach(function (item) {
        item.classList.remove("show-content");
      });
      tabItem.forEach(function (item) {
        item.classList.remove("active");
      });
      tabContent[i].classList.add("show-content");
      tabItem[i].classList.add("active");
    });
  };

  for (var i = 0; i < tabItem.length; i++) {
    _loop(i);
  }

  var deliverytabContent = document.querySelectorAll("[data-tab-content-delivery]");
  var deliverytabItem = document.querySelectorAll("[data-tab-delivery]");

  var _loop2 = function _loop2(_i) {
    deliverytabItem[_i].addEventListener("click", function () {
      deliverytabContent.forEach(function (item) {
        item.classList.remove("show-content");
      });
      deliverytabItem.forEach(function (item) {
        item.classList.remove("active");
      });

      deliverytabContent[_i].classList.add("show-content");

      deliverytabItem[_i].classList.add("active");
    });
  };

  for (var _i = 0; _i < deliverytabItem.length; _i++) {
    _loop2(_i);
  } // Menu burger


  var iconMenu = document.querySelector('.menu__icon');
  var menuBody = document.querySelector('.menu');
  var overlay = document.querySelector('.overlay');
  var body = document.querySelector('body');
  iconMenu.addEventListener("click", function (e) {
    body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    overlay.classList.toggle('show');
    menuBody.closest('.header').classList.toggle('header-active');
  });
  overlay.addEventListener('click', function (e) {
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
    menuBody.closest('.header').classList.remove('header-active');
    e.target.classList.remove('show');
    body.classList.remove('lock');
  }); // Добавление класс null

  var headerValues = document.querySelectorAll('.actions-header__value');

  var _iterator3 = _createForOfIteratorHelper(headerValues),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var headerValue = _step3.value;
      var headerValueText = headerValue.innerText;

      if (headerValueText === '0') {
        headerValue.classList.add('null');
      } else {
        headerValue.classList.remove('null');
      }
    } // Открыть категории

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var categoryBtn = document.querySelector('.category-header__button');
  var categoryBody = document.querySelector('.category-block__body');
  categoryBtn.addEventListener('click', function (e) {
    e.target.classList.toggle('active');
    categoryBody.classList.toggle('category-show');
  }); // Открыть фильтр

  var filterBtn = document.querySelector('.filter__button');
  var filtersBody = document.querySelector('.catalog__filters');

  if (filterBtn != null) {
    filterBtn.addEventListener('click', function (e) {
      filterBtn.classList.toggle('active');

      if (e.target.classList.contains('active')) {
        filterBtn.innerHTML = "Скрыть фильтр";
      } else {
        filterBtn.innerHTML = "Показать фильтр";
      }

      filtersBody.classList.toggle('filters-show');
    });
  }
  /*================== SELECT ====================*/


  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    var dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    var dropDownValue = dropDownWrapper.querySelector('.dropdown__value');
    var dropDownList = dropDownWrapper.querySelector('.dropdown__content');
    var dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    var dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    var dropDownForm = document.querySelector('#dropdown-form');
    dropDownForm.addEventListener('click', function (e) {
      e.stopPropagation();
    }); // Open/close select

    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__content--visible');
      this.classList.toggle('dropdown__button--active');
    });
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownValue.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__content--visible');
        dropDownBtn.classList.remove('dropdown__button--active');
      });
    });
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__content--visible');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__content--visible');
      }
    });
  });
});
/*================== MODALS ====================*/

var modalButtons = document.querySelectorAll('[data-modal-button]');
var modalClosebuttons = document.querySelectorAll('[data-modal-close]');
var allModals = document.querySelectorAll('[data-modal]');

function bodyLock() {
  document.body.classList.add('lock');
}

function bodyUnLock() {
  document.body.classList.remove('lock');
}

function closeModal(currentModal) {
  currentModal.classList.remove('open-modal');
  bodyUnLock();
} // Кнопки - open modal


modalButtons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var modalId = this.dataset.modalButton;
    var modal = document.getElementById(modalId);
    modal.classList.add('open-modal');
    modal.querySelector('.modal__content').addEventListener('click', function (e) {
      e.stopPropagation();
    });
    bodyLock();
  });
}); // Кнопки - close modal

modalClosebuttons.forEach(function (item) {
  item.addEventListener('click', function () {
    var currentModal = this.closest('.modal');
    closeModal(currentModal);
  });
}); // close modal on fade

allModals.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.remove('open-modal');
    bodyUnLock();
  });
});
var profileBody = document.querySelector('.profile__body');
var nullBlock = document.querySelector('.null-block');

if (profileBody) {
  if (profileBody != null) {
    nullBlock.style.display = 'none';
  } else {
    nullBlock.style.display = 'block';
  }

  ;
} // Filter input


var filter = function filter() {
  var input = document.getElementById('filter-input');

  if (input) {
    filterElements = document.querySelectorAll('#filter-list li');
    input.addEventListener('keyup', function () {
      var filter = input.value.toLowerCase();
      filterElements.forEach(function (item) {
        if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
    filterElements.forEach(function (item) {
      item.addEventListener('click', function () {
        item.innerText = this.innerText;
        input.value = item.innerText;
      });
    });
    input.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('show');
      this.closest('.form-box__filter').classList.toggle('active');
    });
    document.addEventListener('click', function (e) {
      if (e.target !== input) {
        input.nextElementSibling.classList.remove('show');
        input.closest('.form-box__filter').classList.remove('active');
      }
    });
  }
};

filter();