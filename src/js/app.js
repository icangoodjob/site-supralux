document.addEventListener("DOMContentLoaded", () => {

	/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
	function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса webp или no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}
isWebp();


/* SLIDERS */

// MAIN SLIDER
const mainSlider = document.querySelector('.slider-main__body');
const mainSwiper = new Swiper(mainSlider, {
	loop: true,
	effect: "coverflow",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 150,
		modifier: 1,
		slideShadows: false,
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
	speed: 1000,
	pagination: {
		el: ".main-slider__pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".slider-controls .slider-arrow__next",
		prevEl: ".slider-controls .slider-arrow__prev",
	},
	breakpoints: {
		300: {
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			effect: "slide",
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: false,
		},
		767.98: {
			effect: "coverflow",
		},
	},
});

// PRODUCT SLIDERS
const productSliders = document.querySelectorAll('.product__body');
for (let product of productSliders) {
	const productSwiper = new Swiper(product, {
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
			prevEl: ".product__body .slider-arrow__prev",
		},
		breakpoints: {
			300: {
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				slidesPerView: 2,
				spaceBetween: 20,
			},
			767.98: {
				slidesPerView: 3,
			},
			991.98: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			}
		},
	});
	productSwiper.init();
};

// LIST-CARD SLIDER
const listCardSlider = document.querySelector('.list-card__body');
const listCardSwiper = new Swiper(listCardSlider, {
	effect: 'fade',
	effectFade: {
		crossFade: true,
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
		prevEl: ".list-card__body .slider-arrow__prev",
	},
	breakpoints: {
		320: {
			watchSlidesVisibility: true,
		}
	},
});

// CATALOG SLIDERS
const catalogSliders = document.querySelectorAll('.catalog-slider__container');
for (let catalogSlider of catalogSliders) {
	const catalogSwiper = new Swiper(catalogSlider, {
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
			prevEl: ".catalog-slider__container .slider-arrow__prev",
		},
		breakpoints: {
			300: {
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
				spaceBetween: 20,
				slidesPerView: 2,
			},
			767.98: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			991.98: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
};

// ADVICE SLIDER
const adviceSlider = document.querySelector('.advice__body');
const adviceSwiper = new Swiper(adviceSlider, {
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
		prevEl: ".advice__body .slider-arrow__prev",
	},
	breakpoints: {
		300: {
			watchSlidesVisibility: true,
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		},
		991.98: {
			slidesPerView: 3,
		},
	},
});

// PRODUCT-CARD SLIDER
const cardMainSlider = document.querySelector('.card-slider__main');
const cardNavSlider = document.querySelector('.card-slider__nav');
let cardNavSwiper = new Swiper(cardNavSlider, {
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
		prevEl: '.card-slider__nav .slider-arrow__prev',
	},
	breakpoints: {
		300: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		479.98: {
			slidesPerView: 3,
		},
		991.98: {
			slidesPerView: 4,
		},
	},
})
let cardMainSwiper = new Swiper(cardMainSlider, {
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
		swiper: cardNavSwiper,
	}
})

// PHOTO SLIDER
const photoSlider = document.querySelector('.photo__body');
const photoSwiper = new Swiper(photoSlider, {
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
		prevEl: ".photo__body .slider-arrow__prev",
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		479.98: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		767.98: {
			slidesPerView: 3,
		},
		991.98: {
			slidesPerView: 4,
		},
	},
});


/*================== TABS ====================*/
let tabContent = document.querySelectorAll("[data-tab-content]");
let tabItem = document.querySelectorAll("[data-tab]");

for (let i = 0; i < tabItem.length; i++) {
	tabItem[i].addEventListener("click", () => {
		tabContent.forEach((item) => {
			item.classList.remove("show-content");
		});
		tabItem.forEach((item) => {
			item.classList.remove("active");
		});
		tabContent[i].classList.add("show-content");
		tabItem[i].classList.add("active");
	});
}

let deliverytabContent = document.querySelectorAll("[data-tab-content-delivery]");
let deliverytabItem = document.querySelectorAll("[data-tab-delivery]");
for (let i = 0; i < deliverytabItem.length; i++) {
	deliverytabItem[i].addEventListener("click", () => {
		deliverytabContent.forEach((item) => {
			item.classList.remove("show-content");
		});
		deliverytabItem.forEach((item) => {
			item.classList.remove("active");
		});
		deliverytabContent[i].classList.add("show-content");
		deliverytabItem[i].classList.add("active");
	});
}

// Menu burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
iconMenu.addEventListener("click", function (e) {
	body.classList.toggle('lock');
	iconMenu.classList.toggle('active');
	menuBody.classList.toggle('active');
	overlay.classList.toggle('show');
	menuBody.closest('.header').classList.toggle('header-active');
});

overlay.addEventListener('click', (e) => {
	iconMenu.classList.remove('active');
	menuBody.classList.remove('active');
	menuBody.closest('.header').classList.remove('header-active');
	e.target.classList.remove('show');
	body.classList.remove('lock');
});

// Добавление класс null
const headerValues = document.querySelectorAll('.actions-header__value');
for (let headerValue of headerValues){
	const headerValueText = headerValue.innerText;
	if (headerValueText === '0'){
		headerValue.classList.add('null');
	} else{
		headerValue.classList.remove('null');
	}
}

// Открыть категории
const categoryBtn = document.querySelector('.category-header__button');
const categoryBody = document.querySelector('.category-block__body');
categoryBtn.addEventListener('click', (e) =>{
	e.target.classList.toggle('active');
	categoryBody.classList.toggle('category-show');
})

// Открыть фильтр
const filterBtn = document.querySelector('.filter__button');
const filtersBody = document.querySelector('.catalog__filters');
if (filterBtn != null){
	filterBtn.addEventListener('click', function(e){
		filterBtn.classList.toggle('active');
		if (e.target.classList.contains('active')) {
			filterBtn.innerHTML = "Скрыть фильтр";
		} else {
			filterBtn.innerHTML = "Показать фильтр";
		}
		filtersBody.classList.toggle('filters-show')
	});
}

/*================== SELECT ====================*/
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownValue = dropDownWrapper.querySelector('.dropdown__value');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__content');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
	const dropDownForm = document.querySelector('#dropdown-form');

	dropDownForm.addEventListener('click', function(e) {
		e.stopPropagation();
	})
	// Open/close select
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
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

function bodyLock(){
	document.body.classList.add('lock');
}
function bodyUnLock(){
	document.body.classList.remove('lock');
}
function closeModal(currentModal){
	currentModal.classList.remove('open-modal');
	bodyUnLock();
}

// Кнопки - open modal
modalButtons.forEach(function(item){
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const modalId = this.dataset.modalButton;
		const modal = document.getElementById(modalId);
		modal.classList.add('open-modal');
		modal.querySelector('.modal__content').addEventListener('click', (e) => {
			e.stopPropagation();
		})
		bodyLock();
	})
})
// Кнопки - close modal
modalClosebuttons.forEach(item =>  {
	item.addEventListener('click', function(){
		let currentModal = this.closest('.modal');
		closeModal(currentModal);
	})
})
// close modal on fade
allModals.forEach(function (item) {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		this.classList.remove('open-modal');
		bodyUnLock();
	});
});


const profileBody = document.querySelector('.profile__body');
const nullBlock = document.querySelector('.null-block');
console.log(profileBody);

if (profileBody){
	if (profileBody != null){
		nullBlock.style.display = 'none';
	} else {
		nullBlock.style.display = 'block';
	};
}

// Filter input
let filter = function () {
	let input = document.getElementById('filter-input'),
	filterElements = document.querySelectorAll('#filter-list li');
	input.addEventListener('keyup', function () {
		let filter = input.value.toLowerCase();
		filterElements.forEach(item => {
			if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
				item.style.display = '';
			} else {
				item.style.display = 'none';
			}
		})
	})
	filterElements.forEach(item => {
		item.addEventListener('click', function(){
			item.innerText = this.innerText;
			input.value = item.innerText;
		})
	})
	input.addEventListener('click', function(){
		this.nextElementSibling.classList.toggle('show');
		this.closest('.form-box__filter').classList.toggle('active');
	});
	document.addEventListener('click', function (e) {
		if (e.target !== input) {
			input.nextElementSibling.classList.remove('show');
			input.closest('.form-box__filter').classList.remove('active');
		}
	});
};

filter();

