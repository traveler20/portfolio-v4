!function(){"use strict";var e,t=function(e,t){0<e.length&&Array.prototype.slice.call(e,0).forEach((function(e,n){t(e,n)}))};function n(){return document.getElementById("body")}var r=function(){n().classList.add("u-noscroll")},o=function(e){var t=document.getElementById("drawer-nav");if(t){var n=t.getAttribute("id");n&&e.setAttribute("data-basis-drawer-toggle-btn",n)}},c=function(t){return t.addEventListener("click",(function(n){document.getElementById("sm-overlay-widget-area")&&(r(),e=t)}),!1)},a=function(t){return t.addEventListener("click",(function(n){document.getElementById("sm-overlay-search-box")&&(r(),e=t)}),!1)},l=function(t){return t.addEventListener("click",(function(){n().classList.remove("u-noscroll"),e&&(e.focus(),e=void 0)}),!1)},u=function(e){if(document.querySelector(".c-overlay-container:target")&&27===e.keyCode){var t=document.querySelector(".c-overlay-container__close-btn");t&&t.click()}};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll('a[href="#sm-drawer"]');t(e,o);var n=document.querySelectorAll('a[href="#sm-overlay-widget-area"]');t(n,c);var r=document.querySelectorAll('a[href="#sm-overlay-search-box"]');t(r,a);var d=document.querySelectorAll(".c-overlay-container__bg, .c-overlay-container__close-btn");t(d,l),document.addEventListener("keydown",u)}),!1)}();