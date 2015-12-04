/*
 * Konami Code For jQuery Plugin
 * 1.3.3, 4 December 2015
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2015 Tom McFarlin, https://tommcfarlin.com
 * Released under the MIT License
 */

(function ( $ ) {
	"use strict";

	$.fn.konami = function( options ) {
		var opts, controllerCode;

		opts = $.extend({}, $.fn.konami.defaults, options);
		controllerCode = [];

		// Note that we use the passed-in options, not the resolved options.
		opts.eventProperties = $.extend({}, options,  opts.eventProperties);

		this.keyup(function( evt ) {
			var code = evt.keyCode || evt.which;

			if ( opts.code.length > controllerCode.push( code ) ) {
				return;
			}

			if ( opts.code.length < controllerCode.length ) {
				controllerCode.shift();
			}

			if ( opts.code.toString() !== controllerCode.toString() ) {
				return;
			}

			opts.cheat(evt, opts);

		});

		return this;
	};

	$.fn.konami.defaults = {
		code : [38,38,40,40,37,39,37,39,66,65],
		eventName : 'konami',
		eventProperties : null,
		cheat: function(evt, opts) {
			$(evt.target).trigger(opts.eventName, [ opts.eventProperties ]);
		}
	};

})( jQuery );