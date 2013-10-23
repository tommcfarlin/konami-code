/*
 * Konami Code For jQuery Plugin
 * 1.2.1, 23 October 2013
 *
 * Using the Konami code, easily configure and Easter Egg for your page or any element on the page.
 *
 * Copyright 2011 - 2013 Tom McFarlin, http://tommcfarlin.com
 * Released under the MIT License
 */(function(e){"use strict";e.fn.konami=function(t){var n,r,i,s;n=e.extend({},e.fn.konami.defaults,t);return this.each(function(){i=[];e(window).keyup(function(e){s=e.keyCode||e.which;if(n.code.length>i.push(s)){return}if(n.code.length<i.length){i.shift()}if(n.code.toString()!==i.toString()){return}n.cheat()})})};e.fn.konami.defaults={code:[38,38,40,40,37,39,37,39,66,65],cheat:null}})(jQuery)