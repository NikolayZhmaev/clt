// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

/*jshint multistr: true*/

/*jshint esversion: 6*/

import Swiper from 'swiper';
import { Parallax, Mousewheel, Controller, Pagination, Navigation, EffectFlip, EffectFade, EffectCube } from 'swiper/modules';
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Navigation, EffectFlip, EffectFade, EffectCube]);

import {
	gsap,
	Power2
} from 'gsap';

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	const swiperIMG = new Swiper('.slider-img', {
		direction: 'vertical',
		loop: false,
		speed: 2400,
		parallax: true,
	})

	const swiperText = new Swiper('.slider-text', {
		direction: 'vertical',
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false,
		},
		allowTouchMove: false,
	})

	const swiperProduct = new Swiper('.product-slider', {
		direction: 'horizontal',
		loop: false,
		speed: 2400,
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',

		},
		allowTouchMove: false,
		effect: 'flip',
		flipEffect: {
			slideShadows: false,
		},






	})



	swiperIMG.controller.control = swiperText
	swiperText.controller.control = swiperIMG


	// menu

	$('.menu-item').click(function () {
		$('.menu-item').removeClass('menu-item__accent');
		swiperText.slideTo($('.menu-item').index(this));
		$(this).addClass('menu-item__accent');
	})


})
