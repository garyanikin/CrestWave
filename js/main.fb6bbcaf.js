parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector(".header__nav-element_menu"),r=document.querySelector(".drop-down-menu"),t=document.querySelector(".header__link-arrow"),o=document.querySelector(".header__burger"),c=document.querySelector(".burger");function n(){r.classList.toggle("drop-down-menu_active"),r.classList.contains("drop-down-menu_active")?(t.src="/coolicon-up.svg",e.setAttribute("style","border-bottom: 1px solid #080E2C")):(t.src="/coolicon-down.svg",e.removeAttribute("style","border-bottom: 1px solid #080E2C"))}function s(){c.classList.toggle("burger_active"),c.classList.contains("burger_active")?o.src="/close.svg":o.src="/burger.svg"}e.addEventListener("click",n),o.addEventListener("click",s);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/CrestWave/styles/main.fb6bbcaf.js.map