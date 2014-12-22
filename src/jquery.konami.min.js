/*
 * Konami Code For jQuery Plugin
 * 1.3.0, 7 March 2014
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2014 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 */
!function(e){"use strict";e.fn.konami=function(t){var n,i;return n=e.extend({},e.fn.konami.defaults,t),i=[],n.eventProperties=e.extend({},t,n.eventProperties),this.keyup(function(e){var t=e.keyCode||e.which;n.code.length>i.push(t)||(n.code.length<i.length&&i.shift(),""+n.code==""+i&&n.cheat(e,n))}),this},e.fn.konami.defaults={code:[38,38,40,40,37,39,37,39,66,65],eventName:"konami",eventProperties:null,cheat:function(t,n){e(t.target).trigger(n.eventName,[n.eventProperties])}}}(jQuery);