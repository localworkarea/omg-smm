/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

// Swiper.use([Navigation, Autoplay]);
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.main__one-slider')) {
		var swiperOne = new Swiper('.main__one-slider', {
			direction: 'vertical',
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			speed: 2200,
			loop: true,
			autoplay: {
				delay: 700,
				// stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					spaceBetween: 7.5,
				},
				1201: {
					spaceBetween: 12,
				},
			},
			on: {
			},
		});
	
		var swiperContainerOne = document.querySelector('.main__one-slider');
		swiperContainerOne.addEventListener('mouseenter', function() {
				swiperOne.autoplay.stop();
		});
		swiperContainerOne.addEventListener('mouseleave', function() {
				swiperOne.autoplay.start();
		});
	}
	
	
	if (document.querySelector('.main__two-slider')) {
		var swiperTwo = new Swiper('.main__two-slider', {
			direction: 'vertical',
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			speed: 2200,
			loop: true,
			autoplay: {
				delay: 700,
				// reverseDirection: true,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					spaceBetween: 7.5,
				},
				1201: {
					spaceBetween: 12,
				},
			},
			on: {
			},
		});
	
		var swiperContainerTwo = document.querySelector('.main__two-slider');
		swiperContainerTwo.addEventListener('mouseenter', function() {
			swiperTwo.autoplay.stop();
		});
		swiperContainerTwo.addEventListener('mouseleave', function() {
			swiperTwo.autoplay.start();
		});
		
	}
	
	


	if (document.querySelector('.main__three-slider')) {
		var swiperThree =	new Swiper('.main__three-slider', {
			direction: 'vertical',
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			speed: 2200,
			loop: true,
			autoplay: {
				delay: 700,
				disableOnInteraction: false, 
			},
			breakpoints: {
				320: {
					spaceBetween: 7.5,
					direction: 'horizontal',
					autoHeight: false,
				},
				993: {
					direction: 'vertical',
				},
				1201: {
					spaceBetween: 12,
				},
			},
			on: {

			}
		});

		var swiperContainerThree = document.querySelector('.main__three-slider');
		swiperContainerThree.addEventListener('mouseenter', function() {
				swiperThree.autoplay.stop();
		});
		swiperContainerThree.addEventListener('mouseleave', function() {
				swiperThree.autoplay.start();
		});
	}
	if (document.querySelector('.employee-slider-one__slider')) {
		new Swiper('.employee-slider-one__slider', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 14,
			// autoHeight: true,
			speed: 500,
			// freeMode: true,
			//loop: true,
			navigation: {
				prevEl: '.employee-slider-one__slider .swiper-button-prev',
				nextEl: '.employee-slider-one__slider .swiper-button-next',
			},
			// breakpoints: {
			// 	300: {
			// 		slidesPerView: 2,
			// 	},
			// 	1280: {
			// 		slidesPerView: "auto",
			// 	},
			// },
			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});