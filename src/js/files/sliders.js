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

Swiper.use([Navigation, Autoplay]);
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.main__one-slider')) {
		new Swiper('.main__one-slider', {
			direction: 'vertical',
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			loop: true,
			speed: 2500,
			//touchRatio: 0,
			//simulateTouch: false,
			// autoplay: true,
			autoplay: {
				delay: 0, // Установите задержку в 0 для отключения задержки между слайдами
				disableOnInteraction: true,
			},
			
			//preloadImages: false,
			//lazy: true,
			
		
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.main__two-slider')) {
		new Swiper('.main__two-slider', {
			direction: 'vertical',
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			speed: 3700,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// Ефекти
			// effect: 'fade',
			autoplay: {
				delay: 500, // Задержка между слайдами (3000 миллисекунд = 3 секунды)
				pauseOnMouseEnter: true,
				reverseDirection: true,
				stopOnLastSlide: false,
				disableOnInteraction: true, // Продолжать автопрокрутку после взаимодействия пользователя с слайдером
			},
			
		
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.main__three-slider')) {
		new Swiper('.main__three-slider', {
			direction: 'vertical',
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			spaceBetween: 12,
			autoHeight: true,
			speed: 2000,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			
			// Ефекти
			// effect: 'fade',
			autoplay: {
				// delay: 3000, // Задержка между слайдами (3000 миллисекунд = 3 секунды)
				disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия пользователя с слайдером
			},
			
		
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
	// if (document.querySelector('.swiper')) {
	// 	new Swiper('.swiper', {
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 		speed: 800,
	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,
	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/
	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/
	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/
	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
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