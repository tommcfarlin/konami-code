# Konami Code For jQuery
By [Tom McFarlin](https://tommcfarlin.com). Last Updated 4 December 2015.

## About

Using the Konami code, easily configure and Easter Egg for your page or any element on the page.

## Parameters

* `code` Personalized code.
* `cheat` The callback function to fire once the cheat code has been entered.
* `eventName` jQuery event name for default callback
* `eventProperties` event property override for default callback

## Installation
```sh
bower install konami-code
```

## Instructions

Include the plugin in the header of your page:

```html
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>`
	<script src="jquery.konami.js" type="text/javascript"></script>
```

### With callback

Apply the plugin to a selector to capture keypresses:

```js
  $( window ).konami();
```

```js
  $( '.konami-sensitive' ).konami();
```

Specify a callback to fire once the code has been entered:

```js
  $( window ).konami({
		cheat: function() {
			alert( 'Cheat code activated!' );
		}
	});
```

### Using jQuery events

Catch the konami code with a jQuery event handler:

```js
  $( window ).konami();
  $( window ).on('konami', function() {
    alert( 'Cheat code activated!' );
  })
```

Add extra data to the jQuery event callback:

```js
  $( window ).konami( { message: 'special message' } );
  $( window ).on('konami', function(evt, extraParam) {
    alert( 'Cheat code activated: ' + extraParam.message + '!' );
  })
```

Use event names:

```js
  $('.type1').konami( { eventName: 'konami.on.type1' } );
  $('.type2').konami( { eventName: 'konami.on.type2' } );
  $( window ).on('konami.on.type2', function(evt, extraParam) {
    alert( 'Cheat code activated on a type2 element' );
  })
```

### Personallizing the code

You can personalize the code too, just entering a array with ASCII codes keys in code param

```js
  $( window ).konami({
  		code : [38,38,40,40,37,39,37,39], // up up down down left right left right
		cheat: function() {
			alert( 'Cheat code activated!' );
		}
	});
```


## Contact

* Web: [Tom McFarlin](https://tommcfarlin.com)
* Twitter: [@tommcfarlin](https://twitter.com/tommcfarlin/)

## License

[MIT license](http://www.opensource.org/licenses/mit-license.php)
