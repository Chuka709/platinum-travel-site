(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(n,s,e){"use strict";function i(n,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}e.r(s);var a=function(){function n(){!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var s,e,a;return s=n,(e=[{key:"events",value:function(){var n=this;this.closeIcon.addEventListener("click",(function(){return n.closeModal()})),document.addEventListener("keyup",(function(s){return n.keyPressHandler(s)}))}},{key:"keyPressHandler",value:function(n){27===n.keyCode&&this.closeModal()}},{key:"openModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n            <div class="modal">\n                <div class="modal__inner">\n                <h2\n                    class="section-title section-title--blue section-title--less-margin"\n                >\n                    <img src="assets/images/icons/mail.svg" class="section-title__icon" />\n                    Хамт <strong>Аялах</strong>\n                </h2>\n                <div class="wrapper wrapper--narrow">\n                    <p class="modal__description">\n                    Бид тун удахгүй онлайнаар захиалга өгөх системийг нээх бөгөөд, та\n                    одоогоор доорхи сошиал платформуудаар дамжиуулж бидэнтэй холбогдох\n                    боломжтой!\n                    </p>\n                </div>\n        \n                <div class="social-icons">\n                    <a href="#" class="social-icons__icon"\n                    ><img src="assets/images/icons/facebook.svg" alt="Facebook"\n                    /></a>\n                    <a href="#" class="social-icons__icon"\n                    ><img src="assets/images/icons/twitter.svg" alt="Twitter"\n                    /></a>\n                    <a href="#" class="social-icons__icon"\n                    ><img src="assets/images/icons/instagram.svg" alt="Instagram"\n                    /></a>\n                    <a href="#" class="social-icons__icon"\n                    ><img src="assets/images/icons/youtube.svg" alt="YouTube"\n                    /></a>\n                </div>\n                </div>\n                <div class="modal__close">X</div>\n            </div>\n        ')}}])&&i(s.prototype,e),a&&i(s,a),n}();s.default=a}}]);