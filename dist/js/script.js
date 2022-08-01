/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/about.js":
/*!*************************!*\
  !*** ./src/js/about.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function about() {
  const wrapperAbout = document.querySelector('.about__wrapper');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 800) {
      wrapperAbout.classList.add('about__wrapper-active');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function header() {
  const wrapper = document.querySelector('.header__wrapper');
  wrapper.style.display = 'none';
  setTimeout(function () {
    wrapper.style.display = '';
    wrapper.classList.add('animate__animated', 'animate__fadeInDown');
  }, 1000);

  function scrollToBlock(selector, point) {
    selector.addEventListener('click', e => {
      e.preventDefault();
      point.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  const aboutBlock = document.querySelector('#about'),
        aboutPoint = document.querySelector('.about'),
        serviceBlock = document.querySelector('#servicing'),
        servicePoint = document.querySelector('.services'),
        portfolioBlock = document.querySelector('#portfolio'),
        portfolioPoint = document.querySelector('.works'),
        blogBlock = document.querySelector('#blog'),
        blogPoint = document.querySelector('.blog'),
        contactsBlock = document.querySelector('#contacts'),
        contactsPoint = document.querySelector('.contacts'),
        teamBlock = document.querySelector('#team'),
        teamPoint = document.querySelector('.team');
  scrollToBlock(aboutBlock, aboutPoint);
  scrollToBlock(serviceBlock, servicePoint);
  scrollToBlock(portfolioBlock, portfolioPoint);
  scrollToBlock(blogBlock, blogPoint);
  scrollToBlock(contactsBlock, contactsPoint);
  scrollToBlock(teamBlock, teamPoint);
}

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/js/about.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/js/header.js");
/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./price */ "./src/js/price.js");
/* harmony import */ var _promo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promo */ "./src/js/promo.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/js/services.js");
/* harmony import */ var _works__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./works */ "./src/js/works.js");






window.addEventListener('DOMContentLoaded', () => {
  Object(_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_promo__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_services__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_works__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_price__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/price.js":
/*!*************************!*\
  !*** ./src/js/price.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function price() {
  const priceBtn = document.querySelectorAll('.price__item-order');
  priceBtn.forEach(btn => {
    btn.addEventListener('mouseover', e => {
      if (btn == e.target) {
        btn.classList.add('price__item-order_active');
      }
    });
    btn.addEventListener('mouseout', e => {
      if (btn == e.target) {
        btn.classList.remove('price__item-order_active');
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (price);

/***/ }),

/***/ "./src/js/promo.js":
/*!*************************!*\
  !*** ./src/js/promo.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function promo() {
  const title = document.querySelector('.promo__title'),
        subtitle = document.querySelector('.promo__subtitle');
  title.style.display = 'none';
  subtitle.style.display = 'none';
  setTimeout(function () {
    title.style.display = '';
    title.classList.add('animate__animated', 'animate__fadeInDown');
    subtitle.style.display = '';
    subtitle.classList.add('animate__animated', 'animate__fadeInDown');
  }, 1700);
  const wrapper = document.querySelector('.promo__wrapper'),
        icon = document.querySelector('.promo__icon');
  wrapper.style.display = 'none';
  icon.style.display = 'none';
  setTimeout(function () {
    wrapper.style.display = '';
    wrapper.classList.add('animate__animated', 'animate__fadeInDown');
    icon.style.display = '';
    icon.classList.add('animate__animated', 'animate__fadeInDown');
  }, 2500);

  function scrollToBlock(selector, point) {
    selector.addEventListener('click', e => {
      e.preventDefault();
      point.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  const servicesBtn = document.querySelector('.promo__services'),
        hireBtn = document.querySelector('.promo__hire'),
        servicesPoint = document.querySelector('.services'),
        hirePoint = document.querySelector('.price'),
        iconPoint = document.querySelector('.about');
  scrollToBlock(servicesBtn, servicesPoint);
  scrollToBlock(hireBtn, hirePoint);
  scrollToBlock(icon, iconPoint);
}

/* harmony default export */ __webpack_exports__["default"] = (promo);

/***/ }),

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function services() {
  const btns = document.querySelectorAll('.services__item-btn'),
        imgPhone = document.querySelectorAll('.services__phone');
  btns.forEach(btn => {
    btn.addEventListener('mouseover', e => {
      e.target.parentNode.classList.add('services__item-active');
      e.target.classList.add('services__item-btn_active');
      imgPhone.forEach(img => {
        if (e.target.parentNode.contains(img)) {
          img.src = 'icons/smartphone.png';
        }
      });
    });
    btn.addEventListener('mouseout', e => {
      e.target.parentNode.classList.remove('services__item-active');
      e.target.classList.remove('services__item-btn_active');
      imgPhone.forEach(img => {
        if (e.target.parentNode.contains(img)) {
          img.src = 'icons/smartphone_main.png';
        }
      });
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

/***/ "./src/js/works.js":
/*!*************************!*\
  !*** ./src/js/works.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function worksTab() {
  const tabs = document.querySelectorAll('.works__btn');
  const itemWorks = document.querySelectorAll('.works__item');

  function hideTab() {
    tabs.forEach(tab => {
      tab.classList.remove('works__btn-active');
    });
  }

  function showTab() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[i].classList.add('works__btn-active');
  }

  hideTab();
  showTab();

  function filterTabs(elem) {
    itemWorks.forEach(item => {
      if (elem.dataset.type !== item.dataset.type) {
        item.style.display = 'none';
      }

      if (elem.dataset.type == "all") {
        item.style.display = '';
      }
    });
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      hideTab();
      showTab(i);
      itemWorks.forEach(item => {
        item.style.display = '';
      });
      filterTabs(tab);
    });
  });
  const titles = ['Hand Watch', 'One Day Pass', 'Modal T-shirt', 'Container', 'Discovery', 'The Kitchens'];
  const subtitles = ['Web Design', 'UI/UX Design', 'Mockups'];
  itemWorks.forEach((item, i) => {
    const block = document.createElement('div'),
          titleBlock = document.createElement('div'),
          subtitleBlock = document.createElement('div');
    item.addEventListener('mouseover', e => {
      block.classList.add('works__block');
      titleBlock.classList.add('works__block-title');
      titleBlock.textContent = titles[i];
      subtitleBlock.classList.add('works__block-subtitle');

      if (item.dataset.type == "ui") {
        subtitleBlock.textContent = subtitles[1];
      } else if (item.dataset.type == "web") {
        subtitleBlock.textContent = subtitles[0];
      } else if (item.dataset.type == "mock") {
        subtitleBlock.textContent = subtitles[2];
      } else {
        subtitleBlock.textContent = "Error";
      }

      block.append(titleBlock);
      block.append(subtitleBlock);
      e.target.parentNode.append(block);
    });
    item.addEventListener('mouseout', e => {
      block.classList.remove('works__block');
      e.target.parentNode.removeChild(block);
    });
  });
  const btnFull = document.querySelector('.works__full');
  btnFull.addEventListener('click', () => {
    itemWorks.forEach(item => {
      if (item.classList.contains('works__item-hide')) {
        item.classList.remove('works__item-hide');
        item.classList.add('works__item-show');
        btnFull.textContent = 'Hide Part';
      } else if (item.classList.contains('works__item-show')) {
        item.classList.remove('works__item-show');
        item.classList.add('works__item-hide');
        btnFull.textContent = 'View All';
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (worksTab);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map