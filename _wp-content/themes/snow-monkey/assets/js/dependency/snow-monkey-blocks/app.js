!function(){"use strict";var e=function(e,t){0<e.length&&Array.prototype.slice.call(e,0).forEach((function(e,n){t(e,n)}))};function t(){var e=document.getElementsByTagName("html");if(!(1>e.length))return e[0]}function n(){var e=document.getElementsByClassName("l-header");if(!(1>e.length))return e[0]}function r(){var e=document.getElementsByClassName("l-header__drop-nav");if(!(1>e.length))return e[0]}function i(){return document.getElementById("wpadminbar")}function o(e,t){if(e)return window.getComputedStyle(e).getPropertyValue(t)}function a(){var e=n(),t=r();return!(!e||!t)}window.addEventListener("load",(function(){var l=function(l){var u=l.querySelectorAll('.slick-dots > li, .spider__dots[data-thumbnails="true"] > .spider__dot');e(u,(function(e){e.addEventListener("click",(function(e){var u=l.getBoundingClientRect().top;if(0>u){var c=u+window.pageYOffset;window.scrollTo(0,c-function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=i(),u=0;l&&(u="fixed"===o(l,"position")?parseInt(o(t(),"margin-top")):u);var c=n();if(c){var d=o(c,"position");if("fixed"===d||"sticky"===d)return(c.offsetWidth<document.documentElement.clientWidth?0:c.offsetHeight)+u;var f=r();if(f)return(!0===e.forceDropNav||a()?f.offsetHeight:0)+u}return u}())}}),!1)}))},u=document.querySelectorAll(".smb-thumbnail-gallery__canvas");e(u,l);var c=document.querySelectorAll(".smb-spider-slider");e(c,l)}))}();