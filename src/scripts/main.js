'use strict';
import 'remove-focus-outline';
import SmoothScroll from 'smooth-scroll';
import Swiper from 'swiper';
//
import polyfill from 'polyfill';
polyfill();
document.addEventListener('DOMContentLoaded', function (event) {
  new LazyLoad({
    elements_selector: '.lazy',
    threshold: 400,
  });

  const Scroll = new SmoothScroll('a[href*="#"]');

  AOS.init({
    easing: 'ease-in-out-cubic',
    once: true,
    disable: 'phone',
  });
});
