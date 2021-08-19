"use strict";(self.webpackChunkpractice_one=self.webpackChunkpractice_one||[]).push([[780],{3183:(n,e,t)=>{t.d(e,{Z:()=>U});var r=t(1413),o=t(7294);const a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};var i=t(7328),c=t(4942),l=t(5264),u=t(4184),s=t.n(u);const f=(0,o.createContext)({});var y=t(1002),p=t(6500),d=t(4811),b=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function m(n){var e=n.r,t=n.g,r=n.b,o=(0,p.py)(e,t,r);return{h:360*o.h,s:o.s,v:o.v}}function g(n){var e=n.r,t=n.g,r=n.b;return"#".concat((0,p.vq)(e,t,r,!1))}function v(n,e,t){var r=t/100;return{r:(e.r-n.r)*r+n.r,g:(e.g-n.g)*r+n.g,b:(e.b-n.b)*r+n.b}}function h(n,e,t){var r;return(r=Math.round(n.h)>=60&&Math.round(n.h)<=240?t?Math.round(n.h)-2*e:Math.round(n.h)+2*e:t?Math.round(n.h)+2*e:Math.round(n.h)-2*e)<0?r+=360:r>=360&&(r-=360),r}function C(n,e,t){return 0===n.h&&0===n.s?n.s:((r=t?n.s-.16*e:4===e?n.s+.16:n.s+.05*e)>1&&(r=1),t&&5===e&&r>.1&&(r=.1),r<.06&&(r=.06),Number(r.toFixed(2)));var r}function w(n,e,t){var r;return(r=t?n.v+.05*e:n.v-.15*e)>1&&(r=1),Number(r.toFixed(2))}function O(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],r=(0,d.uA)(n),o=5;o>0;o-=1){var a=m(r),i=g((0,d.uA)({h:h(a,o,!0),s:C(a,o,!0),v:w(a,o,!0)}));t.push(i)}t.push(g(r));for(var c=1;c<=4;c+=1){var l=m(r),u=g((0,d.uA)({h:h(l,c),s:C(l,c),v:w(l,c)}));t.push(u)}return"dark"===e.theme?b.map((function(n){var r=n.index,o=n.opacity;return g(v((0,d.uA)(e.backgroundColor||"#141414"),(0,d.uA)(t[r]),100*o))})):t}var k={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Z={},j={};Object.keys(k).forEach((function(n){Z[n]=O(k[n]),Z[n].primary=Z[n][5],j[n]=O(k[n],{theme:"dark",backgroundColor:"#141414"}),j[n].primary=j[n][5]}));Z.red,Z.volcano,Z.gold,Z.orange,Z.yellow,Z.lime,Z.green,Z.cyan,Z.blue,Z.geekblue,Z.purple,Z.magenta,Z.grey;var x=t(334),A=t(4958);function E(n){return"object"===(0,y.Z)(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===(0,y.Z)(n.icon)||"function"==typeof n.icon)}function P(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var r=n[t];switch(t){case"class":e.className=r,delete e.class;break;default:e[t]=r}return e}),{})}function T(n,e,t){return t?o.createElement(n.tag,(0,r.Z)((0,r.Z)({key:e},P(n.attrs)),t),(n.children||[]).map((function(t,r){return T(t,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):o.createElement(n.tag,(0,r.Z)({key:e},P(n.attrs)),(n.children||[]).map((function(t,r){return T(t,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function S(n){return O(n)[0]}function N(n){return n?Array.isArray(n)?n:[n]:[]}var F="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",D=["icon","className","onClick","style","primaryColor","secondaryColor"],_={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var I=function(n){var e,t,a=n.icon,i=n.className,c=n.onClick,u=n.style,s=n.primaryColor,y=n.secondaryColor,p=(0,l.Z)(n,D),d=_;if(s&&(d={primaryColor:s,secondaryColor:y||S(s)}),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=(0,o.useContext)(f).csp;(0,o.useEffect)((function(){(0,A.h)(n,"@ant-design-icons",{prepend:!0,csp:e})}),[])}(),e=E(a),t="icon should be icon definiton, but got ".concat(a),(0,x.ZP)(e,"[@ant-design/icons] ".concat(t)),!E(a))return null;var b=a;return b&&"function"==typeof b.icon&&(b=(0,r.Z)((0,r.Z)({},b),{},{icon:b.icon(d.primaryColor,d.secondaryColor)})),T(b.icon,"svg-".concat(b.name),(0,r.Z)({className:i,onClick:c,style:u,"data-icon":b.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},p))};I.displayName="IconReact",I.getTwoToneColors=function(){return(0,r.Z)({},_)},I.setTwoToneColors=function(n){var e=n.primaryColor,t=n.secondaryColor;_.primaryColor=e,_.secondaryColor=t||S(e),_.calculated=!!t};const R=I;function M(n){var e=N(n),t=(0,i.Z)(e,2),r=t[0],o=t[1];return R.setTwoToneColors({primaryColor:r,secondaryColor:o})}var B=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];M("#1890ff");var z=o.forwardRef((function(n,e){var t,a=n.className,u=n.icon,y=n.spin,p=n.rotate,d=n.tabIndex,b=n.onClick,m=n.twoToneColor,g=(0,l.Z)(n,B),v=o.useContext(f).prefixCls,h=void 0===v?"anticon":v,C=s()(h,(t={},(0,c.Z)(t,"".concat(h,"-").concat(u.name),!!u.name),(0,c.Z)(t,"".concat(h,"-spin"),!!y||"loading"===u.name),t),a),w=d;void 0===w&&b&&(w=-1);var O=p?{msTransform:"rotate(".concat(p,"deg)"),transform:"rotate(".concat(p,"deg)")}:void 0,k=N(m),Z=(0,i.Z)(k,2),j=Z[0],x=Z[1];return o.createElement("span",(0,r.Z)((0,r.Z)({role:"img","aria-label":u.name},g),{},{ref:e,tabIndex:w,onClick:b,className:C}),o.createElement(R,{icon:u,primaryColor:j,secondaryColor:x,style:O}))}));z.displayName="AntdIcon",z.getTwoToneColor=function(){var n=R.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},z.setTwoToneColor=M;const L=z;var q=function(n,e){return o.createElement(L,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:a}))};q.displayName="LoadingOutlined";const U=o.forwardRef(q)},7326:(n,e,t)=>{function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:()=>r})},5671:(n,e,t)=>{function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,{Z:()=>r})},3144:(n,e,t)=>{function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}t.d(e,{Z:()=>o})},8053:(n,e,t)=>{function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}t.d(e,{Z:()=>c});var o=t(1002),a=t(7326);function i(n,e){if(e&&("object"===(0,o.Z)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(n)}function c(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=r(n);if(e){var a=r(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return i(this,t)}}},4942:(n,e,t)=>{function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}t.d(e,{Z:()=>r})},7462:(n,e,t)=>{function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}t.d(e,{Z:()=>r})},1642:(n,e,t)=>{function r(n,e){return(r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function o(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}t.d(e,{Z:()=>o})},1413:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(4942);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}},5264:(n,e,t)=>{function r(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}t.d(e,{Z:()=>r})},7328:(n,e,t)=>{function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,{Z:()=>o})},1002:(n,e,t)=>{function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}t.d(e,{Z:()=>r})}}]);