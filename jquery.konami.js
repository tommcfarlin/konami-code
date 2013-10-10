/*
 * Konami Code For jQuery Plugin
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2013 8BIT, http://8BIT.io
 * Released under the MIT License
 */

(function( $ ) {
	"use strict";
	
	$.fn.konami = function( options ) {
		
		var opts, masterKey, controllerCode, code, bIsValid, i, l;

		var opts = $.extend({}, $.fn.konami.defaults, options);
		return this.each(function() {
		
			masterKey = [38,38,40,40,37,39,37,39,66,65];
			controllerCode = [];
			$( window ).keyup(function( evt ) {

				code = evt.keyCode ? evt.keyCode : evt.which;
				controllerCode.push( code );
				
				if ( 10 < controllerCode.length ) {
					controllerCode.shift();
				} // end if
				
				if( 10 === controllerCode.length ) {
					
					bIsValid = true;
					for( i = 0, l = masterKey.length; i < l; i++ ) {
					
						if( masterKey[i] !== controllerCode[i] ) {
							bIsValid = false;
						} // end if
						
					} // end for
					
					if( bIsValid ) {
						opts.cheat();
					} // end if

				} // end if
				
			}); // keyup
			
		}); // each
		
	}; // opts
	
	$.fn.konami.defaults = {
		cheat: null
	};
	
}(jQuery))