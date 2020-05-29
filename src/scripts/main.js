'use strict';
import polyfill from 'polyfill';
import 'remove-focus-outline';
import SmoothScroll from 'smooth-scroll';
import jQuery from 'jquery';
//
polyfill();
window.$ = jQuery;
window.jQuery = jQuery;
//
document.addEventListener('DOMContentLoaded', function (event) {
  const Scroll = new SmoothScroll('a[href*="#"]');
});
