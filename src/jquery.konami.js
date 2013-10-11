/*
 * Konami Code For jQuery Plugin
 * 1.2.0, 11 October 2013
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2013 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 */

(function ( $ ) {
	"use strict";

	$.fn.konami = function( options ) {

		var opts, masterKey, controllerCode, code;
		opts = $.extend({}, $.fn.konami.defaults, options);

		return this.each(function() {

			masterKey = [38,38,40,40,37,39,37,39,66,65];
			controllerCode = [];

			$( window ).keyup(function( evt ) {

				code = evt.keyCode || evt.which;

				if ( 10 > controllerCode.push( code ) ) {
					return;
				} // end if

				if ( 10 < controllerCode.length ) {
					controllerCode.shift();
				} // end if

				if ( masterKey.toString() !== controllerCode.toString() ) {
					return;
				} // end for

				opts.cheat();

			}); // end keyup

		}); // end each

	}; // end opts

	$.fn.konami.defaults = {
		cheat: null
	};

}(jQuery));