(function( $ ) {
	"use strict";

	$(function() {

		$( window ).konami({

			cheat: function() {
				alert( 'Cheat code activated!' );
			} // end cheat

		});

	});
}(jQuery));