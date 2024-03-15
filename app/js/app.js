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

	//parallax

	$('.parallax-slide').on('mousemove', (e) => {
		const x = e.pageX / $(window).width();
		const y = e.pageY / $(window).height();

		$('.parallax-slide__bg').css(
			'transform',
			'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
		);

		$('.parallax-img').css(
			'transform',
			'translate(' + x * 40 + 'px, ' + y * 40 + 'px)'
		);
	})

	//modal 18+

	$(function ($) {
		$(function () {

			if (!$.cookie('was')) {
				$('#info_age_modal').arcticmodal({
					closeOnOverlayClick: false,
					closeOnEsc: true
				});
			}

			$('.modal_but_no').click(function () {
				window.location.href = 'http://www.google.ru/';
				return false
			});
			$('.modal_but_yes').click(function () {
				$.cookie('was', true, {
					expires: 5, // Сколько хранить куки в днях
					path: '/'
				});
				return false
			})
		})
	})(jQuery)




})
