!function(){"use strict";var t={n:function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.jQuery,n=t.n(e),i=function(t,e){0<t.length&&Array.prototype.slice.call(t,0).forEach((function(t,n){e(t,n)}))},r=function(){return-1!==navigator.userAgent.indexOf("Trident")},o=function(t){i(t,(function(t){t.style.minHeight="",r()&&(t.style.height="")}));var e=function(){var e=0;return i(t,(function(t){var n=t.offsetHeight,i=.5625*t.offsetWidth;(e<n||e<i)&&(e=i<n?n:i)})),e}();i(t,(function(t){r()&&(t.style.height="".concat(e,"px")),t.style.minHeight="".concat(e,"px")}))};n()(".wpaw-slider__canvas").each((function(t,e){!function(t){var e=document.documentElement.clientWidth,i=!1;n()(t).on("init",(function(e,n){setTimeout((function(){var e=t.querySelectorAll(".wpaw-slider__item");o(e)}),0)})),n()(t).on("setPosition",(function(n,r){if(r.windowWidth!==e||r.slideWidth!==i){var a=t.querySelectorAll(".wpaw-slider__item");o(a),e=r.windowWidth,i=r.slideWidth}}));var r=n()(t).closest(".wpaw-slider");n()(t).slick({speed:parseInt(r.attr("data-wpaw-slider-duration")),autoplaySpeed:parseInt(r.attr("data-wpaw-slider-interval")),slidesToShow:parseInt(r.attr("data-wpaw-slider-slides-to-show")),slidesToScroll:parseInt(r.attr("data-wpaw-slider-slides-to-scroll")),autoplay:!0,fade:"true"===r.attr("data-wpaw-slider-fade"),dots:!0,infinite:!0,arrows:!1,rows:0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]})}(e)}))}();