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

	const swiperProductMin = new Swiper('.product-min-slider', {
		direction: 'horizontal',
		loop: false,
		speed: 2400,
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',

		},
	})



	swiperIMG.controller.control = swiperText
	swiperText.controller.control = swiperIMG


	// menu


	$('.menu-item').click(function () {
		var num = $('.menu-item').index(this);
		var difference =Math.abs(num - swiperText.activeIndex);		
		$('.menu-item').removeClass('menu-item__accent');


		if (difference <= 2) {
			swiperText.slideTo(num, 2400);
		} else {
			swiperText.slideTo(Math.abs(num-1), 2400);
			setTimeout(function () {
				swiperText.slideTo(num, 2400)
			}, 1900);			
		}
		
		$(this).addClass('menu-item__accent');
	})

	swiperText.on('slideChange', function () {
		$('.menu-item').removeClass('menu-item__accent');
		$('.menu-item').eq(swiperText.activeIndex).addClass('menu-item__accent');
	})

	$('.tab__item').click(function () {
		$('.tab__item').removeClass('menu-item__accent');		
		swiperProduct.slideTo($('.tab__item').index(this));
		$(this).addClass('menu-item__accent');
	})

	swiperProduct.on('slideChange', function () {
		$('.tab__item').removeClass('menu-item__accent');
		$('.tab__item').eq(swiperProduct.activeIndex).addClass('menu-item__accent');
	})

	

	swiperProductMin.on('slideChange', function () {
		$('.tab-min__item').removeClass('menu-item__accent');				

		if (swiperProductMin.activeIndex <= 1) {			
			$('.tab-min__item').eq(0).addClass('menu-item__accent');			
		} else {			
			$('.tab-min__item').eq(1).addClass('menu-item__accent');			
		}	
	})

	//parallax

	$('.parallax-slide').on('mousemove', (e) => {
		const x = e.pageX / $(window).width();
		const y = e.pageY / $(window).height();

		$('.parallax-slide__bg').css(
			'transform',
			'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)'
		);

		$('.parallax-img').css(
			'transform',
			'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
		);
	})

	








})
