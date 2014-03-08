/*
 * Konami Code Javascript Object
 * 1.3.0, 7 March 2014
 *
 * Using the Konami code, easily configure an Easter Egg for your page or any element on the page.
 *
 * Options:
 * - code : set your own custom code, takes array of keycodes / default is original Konami code
 * - cheat : the function to call when the proper sequence is entered
 * - elem : the element to set the instance on
 *
 * Copyright 2013 - 2014 Kurtis Kemple, http://kurtiskemple.com
 * Released under the MIT License
 */

var KONAMI = function ( options ) {
	var elem, ret, defaults, keycode, config, cache;

	// set the default code,function, and element
	defaults = {
		code : [38,38,40,40,37,39,37,39,66,65],
		cheat : null,
		elem : window
	};

	// build our return object
	ret = {

		/**
		 * handles the initialization of the KONAMI instance
		 *
		 * @param  {object} options the config to pass in to the instance
		 * @return {none}
		 * @method  init
		 * @public
		 */
		init : function ( options ) {
			cache = [], config = {};

			if ( options ) {

				for ( var key in defaults ) {

					if ( defaults.hasOwnProperty( key ) ) {

						if ( !options[ key ] ) {

							config[ key ] = defaults[ key ];
						} else {

							config[ key ] = options[ key ];
						}
					}
				}
			} else {

				config = defaults;
			}

			ret.bind( config.elem, 'keyup', ret.konami );
		},

		/**
		 * handles disassembling of the instance
		 *
		 * @return {none}
		 * @method  destroy
		 * @public
		 */
		destroy : function () {
			ret.unbind( config.elem, 'keyup', ret.konami );
			cache = config = null;
		},

		/**
		 * handles adding events to elements
		 *
		 * @param   {elem}     elem  DOM element to attach to
		 * @param   {string}   evt   the event type to bind to
		 * @param   {Function} fn    the function to bind
		 * @return  {none}
		 * @method  bind
		 * @private
		 */
		bind : function ( elem, evt, fn ) {
			if ( elem.addEventListener ) {

				elem.addEventListener( evt, fn, false );
			} else if ( elem.attachEvent ) {

				elem.attachEvent( 'on'+ evt, function( e ) {
					fn( e || window.event );
				});
			}
		},

		/**
		 * handles removing events from elements
		 *
		 * @param   {elem}     elem DOM element to remove from
		 * @param   {string}   evt  the event type to unbind
		 * @param   {Function} fn   the function to unbind
		 * @return  {none}
		 * @method  unbind
		 * @private
		 */
		unbind : function ( elem, evt, fn ) {
			if ( elem.removeEventListener ) {

				elem.removeEventListener( evt, fn, false );
			} else if ( elem.detachEvent ) {

				elem.detachEvent( 'on' + evt, function( e ) {
					fn( e || window.event );
				});
			}
		},

		/**
		 * handles the business logic for checking for valid konami code
		 *
		 * @param   {object} e the event object
		 * @return  {none}
		 * @method  konami
		 * @private
		 */
		konami : function( e ) {
			keycode = e.keyCode || e.which;

			if ( config.code.length > cache.push( keycode ) ) {

				return;
			}

			if ( config.code.length < cache.length ) {

				cache.shift();
			}

			if ( config.code.toString() !== cache.toString() ) {

				return;
			}

			config.cheat();
		}
	};

	ret.init( options );
	return ret;
};

/*=========================================
	Example Usage:

	var options = {
		cheat : function() {
			alert( 'KONAMI!!' );
		}
	};

	var example = new KONAMI( options );

		// rebuild with new settings
		example.destroy();
		example.init( newConfig );
==========================================*/