!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}};!function(e,t,n){var r={};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(r),n.d(r,{metadata:function(){return w},name:function(){return b},settings:function(){return g}});var o=window.wp.blocks,c=window.wp.i18n;function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=window.wp.element,l=window.wp.primitives,d=(0,s.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,s.createElement)(l.Path,{d:"M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 1.5c4.1 0 7.5 3.4 7.5 7.5v.1c-1.4-.8-3.3-1.7-3.4-1.8-.2-.1-.5-.1-.8.1l-2.9 2.1L9 11.3c-.2-.1-.4 0-.6.1l-3.7 2.2c-.1-.5-.2-1-.2-1.5 0-4.2 3.4-7.6 7.5-7.6zm0 15c-3.1 0-5.7-1.9-6.9-4.5l3.7-2.2 3.5 1.2c.2.1.5 0 .7-.1l2.9-2.1c.8.4 2.5 1.2 3.5 1.9-.9 3.3-3.9 5.8-7.4 5.8z"})),w=JSON.parse('{"name":"wp-awesome-widgets/site-branding","title":"[WPAW] Site branding","description":"","category":"widgets","textdomain":"inc2734-wp-awesome-widgets","attributes":{"description":{"type":"string"},"clientId":{"type":"string"}},"supports":{"anchor":true,"customClassName":false}}'),u=window.wp.serverSideRender,p=n.n(u),m=window.wp.blockEditor,f=window.wp.components,b=w.name,g={icon:d,edit:function(e){var t=e.setAttributes,n=e.attributes,r=e.clientId,i=n.description;return(0,s.useEffect)((function(){n.clientId||t({clientId:r})}),[r]),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(m.InspectorControls,null,(0,s.createElement)(f.PanelBody,{title:(0,c.__)("Block Settings","inc2734-wp-awesome-widgets")},(0,s.createElement)(f.TextareaControl,{label:(0,c.__)("Site description","inc2734-wp-awesome-widgets"),help:(0,c.__)("HTML use allowed.","inc2734-wp-awesome-widgets"),value:i,onChange:function(e){return t({description:e})}}))),(0,s.createElement)(f.Disabled,null,(0,s.createElement)(p(),{block:"wp-awesome-widgets/site-branding",attributes:n})))},save:function(){return(0,s.createElement)("div",{"data-dynamic-block":"wp-awesome-widgets/site-branding","data-version":"1"})}};!function(e){if(e){var t=e.metadata,n=e.settings,r=e.name;t&&(t.title&&(t.title=(0,c.__)(t.title,"inc2734-wp-awesome-widgets"),n.title=t.title),t.description&&(t.description=(0,c.__)(t.description,"inc2734-wp-awesome-widgets"),n.description=t.description),t.keywords&&(t.keywords=(0,c.__)(t.keywords,"inc2734-wp-awesome-widgets"),n.keywords=t.keywords)),(0,o.registerBlockType)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({name:r},t),n)}}(r)}(0,0,e)}();