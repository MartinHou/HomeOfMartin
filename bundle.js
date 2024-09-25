/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("document.getElementById('scrollTop').addEventListener('click', function (e) {\n  e.preventDefault();\n  window.scrollTo({\n    top: 0,\n    behavior: 'smooth' // Smooth scroll to the top\n\n  });\n});\nwindow.addEventListener('scroll', function () {\n  var navbar = document.querySelector('.navigation');\n  var scrollPosition = window.scrollY;\n\n  if (scrollPosition > 0) {\n    navbar.classList.add('scrolled'); // Add the 'scrolled' class when user scrolls down\n  } else {\n    navbar.classList.remove('scrolled'); // Remove the 'scrolled' class when user is at the top\n  }\n});\ndocument.addEventListener('DOMContentLoaded', function () {\n  var sections = document.querySelectorAll('div[id]');\n  var navLinks = document.querySelectorAll('.nav-link');\n\n  function highlightLink() {\n    var navbar = document.querySelector('.navigation');\n    var navbarHeight = navbar.offsetHeight;\n    var currentSection = '';\n    sections.forEach(function (section) {\n      var sectionTop = section.offsetTop;\n      var sectionHeight = section.offsetHeight;\n      var scrollPosition = window.scrollY + navbarHeight;\n\n      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {\n        currentSection = section.getAttribute('id');\n      }\n    }); // Remove active class from all links\n\n    navLinks.forEach(function (link) {\n      link.classList.remove('active');\n\n      if (link.getAttribute('href').substring(1) === currentSection) {\n        link.classList.add('active'); // Add active class to the current section link\n      }\n    });\n  } // Listen for scroll events\n\n\n  window.addEventListener('scroll', highlightLink);\n  window.addEventListener('load', highlightLink); // Call it on page load\n});\ndocument.querySelectorAll('.nav-link').forEach(function (anchor) {\n  anchor.addEventListener('click', function (e) {\n    e.preventDefault(); // Prevent default anchor behavior\n\n    var targetID = this.getAttribute('href'); // Get target section ID\n\n    var targetElement = document.querySelector(targetID); // Get the target element\n\n    var navbar = document.querySelector('.navigation'); // Get the navigation bar\n\n    var navbarHeight = navbar.offsetHeight; // Get the current height of the navigation bar\n    // Adjust for the larger navbar when on the \"Intro\" section\n\n    if (targetID === '#intro' && navbar.classList.contains('at-top')) {\n      navbarHeight = 100; // Assume 100px for larger navbar at the top (change to your actual value)\n    } // Custom smooth scroll behavior\n\n\n    window.scrollTo({\n      top: targetElement.offsetTop - navbarHeight,\n      // Scroll to the section minus the navbar height\n      behavior: 'smooth' // Enable smooth scroll\n\n    });\n  });\n});\nvar currentSlide = 0; // Start with the first slide\n\nfunction showSlide(index) {\n  var slides = document.querySelectorAll('.slide');\n  var totalSlides = slides.length; // Ensure the index loops around when reaching the end or beginning\n\n  if (index >= totalSlides) {\n    currentSlide = 0;\n  } else if (index < 0) {\n    currentSlide = totalSlides - 1;\n  } else {\n    currentSlide = index;\n  } // Calculate the translation amount\n\n\n  var offset = -currentSlide * 100;\n  document.querySelector('.carousel-container').style.transform = \"translateX(\".concat(offset, \"%)\");\n}\n\nfunction nextSlide() {\n  showSlide(currentSlide + 1); // Go to the next slide\n}\n\nfunction prevSlide() {\n  showSlide(currentSlide - 1); // Go to the previous slide\n} // Function to open the modal\n\n\nfunction openModal(modalId) {\n  document.getElementById(modalId).style.display = \"block\";\n} // Function to close the modal\n\n\nfunction closeModal(modalId) {\n  document.getElementById(modalId).style.display = \"none\";\n} // Close the modal when clicking anywhere outside the modal content\n\n\nwindow.onclick = function (event) {\n  var modals = document.querySelectorAll('.modal');\n  modals.forEach(function (modal) {\n    if (event.target === modal) {\n      modal.style.display = \"none\";\n    }\n  });\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/campus.webp */ \"./assets/campus.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".floating-buttons {\\n  position: fixed;\\n  top: 50%;\\n  /* Align the buttons vertically in the middle */\\n  right: 20px;\\n  /* Position the buttons 20px from the right edge */\\n  transform: translateY(-50%);\\n  /* Vertically center the buttons */\\n  z-index: 1000;\\n  /* Ensure the buttons are on top of other elements */\\n}\\n\\n.circle-btn {\\n  display: block;\\n  width: 50px;\\n  height: 50px;\\n  margin: 10px 0;\\n  border-radius: 50%;\\n  background-color: #333;\\n  /* Dark background for buttons */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-decoration: none;\\n  transition: background-color 0.3s;\\n}\\n\\n.circle-btn img {\\n  width: 60%;\\n  /* Adjust size of the icons inside the buttons */\\n  height: 60%;\\n}\\n\\n.circle-btn:hover {\\n  background-color: #555;\\n  /* Lighter background color on hover */\\n}\\n\\n.email img {\\n  content: url(\\\"https://img.icons8.com/ios-filled/50/ffffff/new-post.png\\\");\\n  /* Email Icon */\\n}\\n\\n.linkedin img {\\n  content: url(\\\"https://img.icons8.com/ios-filled/50/ffffff/linkedin.png\\\");\\n  /* LinkedIn Icon */\\n}\\n\\n.github img {\\n  content: url(\\\"https://img.icons8.com/ios-filled/50/ffffff/github.png\\\");\\n  /* GitHub Icon */\\n}\\n\\n.up-arrow img {\\n  content: url(\\\"https://img.icons8.com/ios-filled/50/ffffff/up-squared.png\\\");\\n  /* Up Arrow Icon */\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-family: Arial, sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  font-size: 1.5vw;\\n}\\n\\n.navigation {\\n  display: flex;\\n  flex-flow: row wrap;\\n  justify-content: flex-end;\\n  align-items: center;\\n  list-style: none;\\n  margin: 0;\\n  background: #798777;\\n  padding: 20px 40px;\\n  position: sticky;\\n  top: 0;\\n  z-index: 1000;\\n  transition: padding 0.3s ease, font-size 0.3s ease;\\n}\\n.navigation li:first-child {\\n  flex-grow: 1;\\n  font-size: 2rem;\\n  transition: font-size 0.3s ease;\\n}\\n.navigation a {\\n  font-size: 1.2rem;\\n  transition: font-size 0.3s ease;\\n}\\n.navigation a.active {\\n  background-color: #405f58;\\n  color: #ffffff;\\n}\\n.navigation.scrolled {\\n  padding: 10px 20px;\\n}\\n.navigation.scrolled li:first-child {\\n  font-size: 1.5rem;\\n}\\n.navigation.scrolled a {\\n  font-size: 1rem;\\n}\\n\\n.navigation a,\\n.navigation span {\\n  text-decoration: none;\\n  display: block;\\n  padding: 1em;\\n  color: white;\\n}\\n\\n.intro {\\n  padding: 1em;\\n  text-align: center;\\n  background-color: #F8EDE3;\\n}\\n\\n.bgimg {\\n  position: relative;\\n  height: auto;\\n  /* Adjust height as needed */\\n  color: white;\\n  text-align: center;\\n  padding: 20px;\\n  overflow: hidden;\\n  /* Ensure background doesn't overflow */\\n}\\n\\n.blur {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  /* Make the background static */\\n  filter: blur(8px);\\n  /* Apply the blur to the background image */\\n  z-index: 0;\\n  /* Ensure it is behind the content */\\n}\\n\\n.education-inner {\\n  position: relative;\\n  z-index: 1;\\n  /* Ensure the content is above the blurred background */\\n}\\n\\n.education {\\n  padding: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #BDD2B6;\\n}\\n.education img {\\n  z-index: 1;\\n  height: 8em;\\n  margin: 1em;\\n}\\n\\n.education-inner {\\n  margin: 1em auto;\\n  position: relative;\\n  z-index: 1;\\n}\\n.education-inner ul {\\n  font-size: larger;\\n  line-height: 1.8;\\n}\\n\\n.exp {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #BDD2B6;\\n  align-items: flex-start;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n.exp .row {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n.exp .row .column {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n  margin: 1em;\\n}\\n.exp .row .column img {\\n  height: 5em;\\n  margin: 1.5em;\\n  -o-object-fit: contain;\\n     object-fit: contain;\\n}\\n.exp .row .column p {\\n  margin-top: 0;\\n  font-size: larger;\\n}\\n\\n.footer {\\n  background-color: #333;\\n  padding: 20px 0;\\n  text-align: center;\\n  color: #fff;\\n}\\n.footer a {\\n  color: #FFD700;\\n  text-decoration: none;\\n  font-weight: bold;\\n  margin: 0 0.5em;\\n}\\n.footer a:hover {\\n  text-decoration: underline;\\n}\\n\\n.carousel {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n  /* Hide anything outside the visible slide area */\\n  padding: 0;\\n  /* Navigation arrows */\\n}\\n.carousel .carousel-container {\\n  display: flex;\\n  transition: transform 0.5s ease-in-out;\\n  /* Smooth transition between slides */\\n  width: 100%;\\n}\\n.carousel .slide {\\n  min-width: 100%;\\n  /* Each slide takes 100% of the carousel width */\\n}\\n.carousel img {\\n  width: 100%;\\n  /* Make sure images fill their container */\\n  height: auto;\\n  /* Adjust this to change the height */\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  /* Ensure the images maintain their aspect ratio */\\n}\\n.carousel button {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border: none;\\n  color: white;\\n  font-size: 24px;\\n  padding: 10px;\\n  cursor: pointer;\\n}\\n.carousel button:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n.carousel .prev {\\n  left: 10px;\\n}\\n.carousel .next {\\n  right: 10px;\\n}\\n\\n.skills {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 2em;\\n  background-color: #A2B29F;\\n}\\n\\n.block-container {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  /* 3 columns with equal width */\\n  gap: 5vw;\\n  /* Gap between the blocks */\\n  justify-content: center;\\n  /* Horizontally center the grid */\\n  align-items: center;\\n  /* Vertically center within the grid */\\n  max-width: 1000px;\\n  /* Max width to keep the grid contained */\\n  margin: 0 auto;\\n  /* Center the grid container horizontally */\\n  padding: 20px;\\n  /* Optional padding around the grid */\\n}\\n\\n.block {\\n  background-color: #798777;\\n  /* Soft gray background color */\\n  color: white;\\n  /* White text color */\\n  font-size: 3vw;\\n  /* Font size for the text inside the blocks */\\n  text-align: center;\\n  /* Center the text horizontally */\\n  display: flex;\\n  /* Flexbox to center the content */\\n  justify-content: center;\\n  /* Center content horizontally */\\n  align-items: center;\\n  /* Center content vertically */\\n  height: 20vw;\\n  /* Set a fixed height to make the blocks square */\\n  aspect-ratio: 1/1;\\n  /* Maintain the square aspect ratio */\\n  border-radius: 2vw;\\n  /* Add slightly rounded corners */\\n  box-shadow: 0 2vw 4vw rgba(0, 0, 0, 0.1);\\n  /* Soft shadow for depth */\\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\\n  /* Smooth hover effect */\\n}\\n\\n/* Hover effect for prettiness */\\n.block:hover {\\n  transform: translateY(-10px);\\n  /* Slight movement up on hover */\\n  box-shadow: 0 2vw 4vw rgba(0, 0, 0, 0.2);\\n  /* Stronger shadow on hover */\\n}\\n\\n/* Modal background (hidden by default) */\\n.modal {\\n  display: none;\\n  /* Hidden by default */\\n  position: fixed;\\n  /* Stay in place */\\n  z-index: 1000;\\n  /* On top */\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  /* Full width */\\n  height: 100%;\\n  /* Full height */\\n  background-color: rgba(0, 0, 0, 0.5);\\n  /* Black background with opacity */\\n}\\n\\n/* Modal content box */\\n.modal-content {\\n  background-color: #a1cac0;\\n  margin: 15% auto;\\n  /* 15% from the top, and centered */\\n  padding: 20px;\\n  border-radius: 10px;\\n  width: 50%;\\n  /* Width of the modal */\\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\\n  text-align: center;\\n}\\n.modal-content img {\\n  height: 2.5vw;\\n  width: auto;\\n}\\n\\n/* Close button (X) */\\n.close {\\n  color: #aaa;\\n  float: right;\\n  font-size: 2vw;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\n.close:hover,\\n.close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.resume-link {\\n  display: inline-block;\\n  padding: 15px 30px;\\n  background-color: #4CAF50;\\n  /* Green background */\\n  color: white;\\n  /* White text */\\n  text-align: center;\\n  text-decoration: none;\\n  /* Remove underline */\\n  border-radius: 25px;\\n  /* Rounded corners */\\n  font-size: 18px;\\n  font-weight: bold;\\n  transition: background-color 0.3s ease;\\n}\\n\\n.resume-link:hover {\\n  background-color: #45a049;\\n  /* Darker green on hover */\\n}\\n\\n.word {\\n  width: 30%;\\n  height: auto;\\n}\\n\\n#video-container {\\n  padding: 5vw;\\n}\\n\\n#exp-word {\\n  width: 40%;\\n}\\n\\nvideo {\\n  width: 80vw;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide2.png */ \"./assets/slide2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide3.png */ \"./assets/slide3.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/slide1.png */ \"./assets/slide1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/avatar.png */ \"./assets/avatar.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/uiuc.svg */ \"./assets/uiuc.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/experiences.png */ \"./assets/experiences.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/esri.svg */ \"./assets/esri.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/tencent.png */ \"./assets/tencent.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/mihoyo.svg */ \"./assets/mihoyo.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/momenta.png */ \"./assets/momenta.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/skills.png */ \"./assets/skills.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/video.mp4 */ \"./assets/video.mp4\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <script src=\\\"https://kit.fontawesome.com/07ed936b30.js\\\" crossorigin=\\\"anonymous\\\"></script>\\n    <title>Yunchao (Martin) Hou's Home</title>\\n</head>\\n\\n<body>\\n    <div class=\\\"floating-buttons\\\">\\n        <a href=\\\"mailto:martinhou2020a@gmail.com\\\" class=\\\"circle-btn email\\\" target=\\\"_blank\\\">\\n            <img src=\\\"https://img.icons8.com/ios-filled/50/ffffff/new-post.png\\\" alt=\\\"Email\\\">\\n        </a>\\n        <a href=\\\"https://www.linkedin.com/in/ych\\\" class=\\\"circle-btn linkedin\\\" target=\\\"_blank\\\">\\n            <img src=\\\"https://img.icons8.com/ios-filled/50/ffffff/linkedin.png\\\" alt=\\\"LinkedIn\\\">\\n        </a>\\n        <a href=\\\"https://github.com/MartinHou\\\" class=\\\"circle-btn github\\\" target=\\\"_blank\\\">\\n            <img src=\\\"https://img.icons8.com/ios-filled/50/ffffff/github.png\\\" alt=\\\"GitHub\\\">\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"circle-btn up-arrow\\\" id=\\\"scrollTop\\\">\\n            <img src=\\\"https://img.icons8.com/ios-filled/50/ffffff/up-squared.png\\\" alt=\\\"Scroll to Top\\\">\\n        </a>\\n    </div>\\n\\n\\n    <ul class=\\\"navigation\\\">\\n        <li><span><b>Martin Hou's Home</b></span></li>\\n        <li><a href=\\\"#intro\\\" class=\\\"nav-link\\\">Intro</a></li>\\n        <li><a href=\\\"#education\\\" class=\\\"nav-link\\\">Education</a></li>\\n        <li><a href=\\\"#experience\\\" class=\\\"nav-link\\\">Experience</a></li>\\n        <li><a href=\\\"#skills\\\" class=\\\"nav-link\\\">Skills</a></li>\\n    </ul>\\n\\n    <div class=\\\"banner\\\">\\n        <div class=\\\"carousel\\\">\\n            <div class=\\\"carousel-container\\\">\\n                <div class=\\\"slide\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"Slide 1\\\">\\n                </div>\\n                <div class=\\\"slide\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"Slide 2\\\">\\n                </div>\\n                <div class=\\\"slide\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Slide 3\\\">\\n                </div>\\n            </div>\\n\\n            <button class=\\\"prev\\\" onclick=\\\"prevSlide()\\\">&#10094;</button>\\n            <button class=\\\"next\\\" onclick=\\\"nextSlide()\\\">&#10095;</button>\\n        </div>\\n    </div>\\n\\n    <div id=\\\"intro\\\" class=\\\"intro\\\">\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Martin Hou\\\">\\n        <h1>Martin Hou</h1>\\n        <p>This is Martin (Yunchao) Hou, a skilled backend/fullstack developer!</p>\\n        <p>Completing my M.S. in Computer Science at UIUC in May/Aug/Dec 2025.</p>\\n        <p>Seeking a software engineering internship Jan-May 2025.</p>\\n        <p>Seeking a full-time role starting from May/Aug 2025.</p>\\n\\n        <a class=\\\"resume-link\\\" href=\\\"https://drive.google.com/file/d/1_fpQJKGJvPQ5ONtVfFnZCzezgDQ9O9d0/view?usp=sharing\\\"\\n            target=\\\"_blank\\\">See my latest resume</a>\\n    </div>\\n\\n    <div id=\\\"education\\\" class=\\\"education bgimg\\\">\\n        <div class=\\\"blur\\\"></div>\\n        <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Education\\\">\\n        <div class=\\\"education-inner\\\">\\n            <ul>\\n                <li>ECE408 - Applied Parallel Programming</li>\\n                <li>CS409 - Art of Web Programming</li>\\n                <li>CS411 - Database Systems</li>\\n                <li>CS441 - Applied Machine Learning</li>\\n                <li>CS498 - Cloud Computing Applications</li>\\n                <li>CS511 - Advanced Data Management</li>\\n                <li>CS537 - Advanced Topics in IoT</li>\\n            </ul>\\n        </div>\\n    </div>\\n\\n    <div id=\\\"experience\\\" class=\\\"exp\\\">\\n        <img id=\\\"exp-word\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Experience\\\">\\n        <div class=\\\"row\\\">\\n            <div class=\\\"column\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"esri\\\">\\n                <p>Backend Developer Intern @ <a href=\\\"https://www.esri.com/en-us/home\\\">Esri</a></p>\\n                <p><i>The global leader in GIS technology, shaping the future of geospatial data.</i></p>\\n                <p>May - Aug, 2024 | Redlands, CA</p>\\n            </div>\\n            <div class=\\\"column\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"tencent\\\">\\n                <p>Software Engineer Intern @ <a href=\\\"https://www.tencent.com/en-us/\\\">Tencent</a></p>\\n                <p><i>China's tech titan, the world's largest gaming company and a leader in social media, fintech, and\\n                        AI.</i></p>\\n                <p>Jun - Sep, 2022 | Shenzhen, China</p>\\n            </div>\\n        </div>\\n        <div class=\\\"row\\\">\\n            <div class=\\\"column\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"mihoyo\\\">\\n                <p>Fullstack Engineer Intern @ <a href=\\\"https://www.mihoyo.com/en/\\\">miHoYo</a> (AKA <a\\n                        href=\\\"https://www.hoyoverse.com/en-us/\\\">HoYoverse</a>)</p>\\n                <p><i>Creator of the highest-grossing game globally, Genshin Impact, generating over $4 billion.</i></p>\\n                <p>Dec 2022 - Jun 2023 | Shanghai, China</p>\\n            </div>\\n            <div class=\\\"column\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"momenta\\\">\\n                <p>Backend Developer Intern @ <a href=\\\"https://www.momenta.cn/\\\">Momenta.ai</a></p>\\n                <p><i>China's top autonomous driving startup, with $1 billion in funding, leading Level 4\\n                        automation.</i></p>\\n                <p>Aug - Dec, 2023 | Suzhou, China</p>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div id=\\\"skills\\\" class=\\\"skills\\\">\\n        <img class=\\\"word\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" />\\n        <div class=\\\"block-container\\\">\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup1')\\\">Programming Languages</div>\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup2')\\\">Backend</div>\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup3')\\\">Frontend</div>\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup4')\\\">Big Data</div>\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup5')\\\">Cloud Services</div>\\n            <div class=\\\"block\\\" onclick=\\\"openModal('popup6')\\\">Others</div>\\n        </div>\\n        <div id=\\\"video-container\\\">\\n            <video controls>\\n                <source src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" type=\\\"video/mp4\\\" />\\n                Your browser does not support the video tag.\\n            </video>\\n        </div>\\n\\n    </div>\\n\\n    <footer class=\\\"footer\\\">\\n        <i class=\\\"fa-solid fa-envelope\\\"></i>\\n        <a href=\\\"mailto:martinhou2020a@gmail.com\\\">Email</a>\\n        <br />\\n        <br />\\n        <i class=\\\"fa-brands fa-linkedin-in\\\"></i>\\n        <a href=\\\"https://www.linkedin.com/in/ych\\\" target=\\\"_blank\\\">LinkedIn</a>\\n        <br />\\n        <br />\\n        <i class=\\\"fa-brands fa-github\\\"></i>\\n        <a href=\\\"https://github.com/MartinHou\\\" target=\\\"_blank\\\">GitHub</a>\\n    </footer>\\n\\n    <!-- Modals -->\\n    <div id=\\\"popup1\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup1')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-Python-black?style=flat-square&logo=python\\\" alt=\\\"Python Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript\\\"\\n                alt=\\\"TypeScript Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript\\\"\\n                alt=\\\"JavaScript Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-C++-black?style=flat-square&logo=cplusplus\\\" alt=\\\"C++ Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-C_sharp-black?style=flat-square&logo=sharp\\\" alt=\\\"C# Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-SQL-black?style=flat-square&logo=mysql\\\" alt=\\\"SQL Badge\\\">\\n        </div>\\n    </div>\\n\\n    <div id=\\\"popup2\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup2')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-Django-000000?style=flat&logo=django\\\" alt=\\\"Django Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Flask-000000?style=flat&logo=flask\\\" alt=\\\"Flask Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js\\\" alt=\\\"Node.js Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-ASP.NET-000000?style=flat&logo=dotnet\\\" alt=\\\"ASP.NET Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-SpringBoot-000000?style=flat&logo=springboot\\\"\\n                alt=\\\"Spring Boot Badge\\\">\\n            <br />\\n            <img src=\\\"https://img.shields.io/badge/-MySQL-000000?style=flat&logo=mysql\\\" alt=\\\"MySQL Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-PostgreSQL-000000?style=flat&logo=postgresql\\\"\\n                alt=\\\"PostgreSQL Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-MongoDB-000000?style=flat&logo=mongodb\\\" alt=\\\"MongoDB Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Neo4j-000000?style=flat&logo=neo4j\\\" alt=\\\"Neo4j Badge\\\">\\n            <br />\\n            <img src=\\\"https://img.shields.io/badge/-Kafka-000000?style=flat&logo=apachekafka\\\" alt=\\\"Kafka Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Kubernetes-000000?style=flat&logo=kubernetes\\\"\\n                alt=\\\"Kubernetes Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Redis-000000?style=flat&logo=redis\\\" alt=\\\"Redis Badge\\\">\\n        </div>\\n    </div>\\n\\n    <div id=\\\"popup3\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup3')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white\\\"\\n                alt=\\\"HTML Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3\\\" alt=\\\"CSS Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-React-black?style=flat-square&logo=react\\\" alt=\\\"React Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Material_UI-black?style=flat-square&logo=materialdesign\\\"\\n                alt=\\\"Material UI Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Ant_Design-black?style=flat-square&logo=antdesign\\\"\\n                alt=\\\"Ant Design Badge\\\">\\n        </div>\\n    </div>\\n\\n    <div id=\\\"popup4\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup4')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-Flink-000000?style=flat&logo=apacheflink\\\" alt=\\\"Flink Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Spark-000000?style=flat&logo=apachespark\\\" alt=\\\"Spark Badge\\\">\\n\\n        </div>\\n    </div>\\n\\n    <div id=\\\"popup5\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup5')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-AWS-black?style=flat-square&logo=amazonwebservices\\\" alt=\\\"AWS Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Google_Cloud-black?style=flat-square&logo=googlecloud\\\"\\n                alt=\\\"Google Cloud Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-HUAWEI_Cloud-black?style=flat-square&logo=huawei\\\"\\n                alt=\\\"HUAWEI Cloud Badge\\\">\\n        </div>\\n    </div>\\n\\n    <div id=\\\"popup6\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\" onclick=\\\"closeModal('popup6')\\\">&times;</span>\\n            <img src=\\\"https://img.shields.io/badge/-Git-black?style=flat-square&logo=git\\\" alt=\\\"Git Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-CICD-black?style=flat-square&logo=gitlab\\\" alt=\\\"CICD Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Docker-black?style=flat-square&logo=docker\\\" alt=\\\"Docker Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-Nginx-black?style=flat-square&logo=nginx\\\" alt=\\\"Nginx Badge\\\">\\n            <img src=\\\"https://img.shields.io/badge/-CUDA-black?style=flat-square&logo=nvidia\\\" alt=\\\"CUDA Badge\\\">\\n        </div>\\n    </div>\\n\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" type=\\\"text/javascript\\\"></script>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6a7c234a8147f6fc10a3.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./assets/campus.webp":
/*!****************************!*\
  !*** ./assets/campus.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd065d5fa3b99534fe7a.webp\";\n\n//# sourceURL=webpack:///./assets/campus.webp?");

/***/ }),

/***/ "./assets/video.mp4":
/*!**************************!*\
  !*** ./assets/video.mp4 ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7e0589fa5f3cab70471e.mp4\";\n\n//# sourceURL=webpack:///./assets/video.mp4?");

/***/ }),

/***/ "./assets/avatar.png":
/*!***************************!*\
  !*** ./assets/avatar.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"948e320889968782b086.png\";\n\n//# sourceURL=webpack:///./assets/avatar.png?");

/***/ }),

/***/ "./assets/esri.svg":
/*!*************************!*\
  !*** ./assets/esri.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE4OC45ODIyMzciIHZpZXdCb3g9IjAgMCA4NCAzMCIgd2lkdGg9IjUyOS4xNTAyNjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTc3LjI3Ny41Yy0xLjQ4IDAtMi41NTQgMS4xNzUtMi41NTQgMi40ODggMCAxLjMxNCAxLjA3NCAyLjQ5IDIuNTU0IDIuNDlzMi42MjItMS4wNzEgMi42MjItMi40OWMwLTEuNDE2LTEuMTQzLTIuNDg4LTIuNjIyLTIuNDg4em0tMS45MTMgMjMuNDI2aDMuODkxdi0xNS41NzNoLTMuODkxem0tMzQuODQ5LTE1Ljk2MWMtNC43MDIgMC04LjQ2NSAzLjI3NS04LjQ2NSA4LjE3NCAwIDQuODk4IDMuNzYzIDguMTc3IDguNDY1IDguMTc3IDIuMTQ2IDAgNC4xNjUtLjY2NyA1Ljg1Mi0yLjMxbC0yLjQ1Ny0yLjQ1N2MtLjkxNi45NjQtMi4wOTMgMS42NTEtMy43OCAxLjY1MS0yLjE3NSAwLTMuOTI3LTEuMzk3LTQuMTg4LTMuNjk4aDExLjg3NXYtMS4wN2MwLTUuNDItMi45NS04LjQ2Ny03LjMwMi04LjQ2N3ptLTQuNTczIDYuNjE3Yy4yOTMtMi4yNCAxLjcyMS0zLjcgNC4wMjMtMy43IDIuNDM0IDAgMy45MjYgMS40MyAzLjk2IDMuN3ptMTcuMzA1LTEuODQ5YzAtMS4xNjkgMS4yMzMtMS42NTUgMi4yNzMtMS42NTUgMS4zMiAwIDIuMjkyLjU0NyAzLjAzNyAxLjU3N2wyLjQ3Ni0yLjQ3NGMtMS4yODItMS42LTMuNDA3LTIuMjE2LTUuNDE4LTIuMjE2LTMuMTQ3IDAtNi4yNjIgMS41NTUtNi4yNjIgNS4wMjggMCA1LjkzOCA4LjQwMyAzLjQwNiA4LjQwMyA2LjYxNyAwIDEuMjMzLTEuNDYgMS43ODQtMi41OTUgMS43ODQtMS42NSAwLTIuNjg3LS44MDYtMy42OS0xLjkwNWwtMi41MTUgMi41MTRjMS41OCAxLjcxMSAzLjYyIDIuMzEzIDUuOTc4IDIuMzEzIDMuMTc5IDAgNi43MTctMS4yOTkgNi43MTctNC45OTggMC02LjA2Ny04LjQwNC0zLjc5NS04LjQwNC02LjU4NXptMTQuMTUtMS45MTZoLS4wNjJ2LTIuNDY0aC0zLjg5MnYxNS41NzNoMy44OTJ2LTguMzRjMC0uODQyLjUxOC0zLjkyNSA0LjE4NS0zLjkyNS41NjQgMCAxLjEyNy4xMTIgMS43MTguMjUzbC4xNTItMy43MjZjLS40NS0uMTI3LS45MDEtLjIyMy0xLjM4Mi0uMjIzLTIuMDQ2IDAtMy43NjYgMS4wNy00LjYxIDIuODUyem0tNTIuNzE0LTguMDUxYy0xLjIxNy0uMDM3LTEuOTMyLjEyLTIuNjUxLjI2LS4yMTYtLjA1Ni0uNjIuMDAzLS42NDMuNDcyIDAgLjI1Mi4wOC40NDcuMjQuNTYyLjE1OS4xMTQgMS40OTMgMS4xIDIuNDczIDIuMTQyLS40Ny4wNTItLjk4LjEzOC0xLjUwNC4yNDYtLjU4NS0xLjI2NC0yLjQ2NS0uMTE0LTMuNzE0LS4wNjQtLjE0Ni4wMDYtLjI4Ni4wMjUtLjQzMS4wMzUtLjEzNy0xLjA1Ni0uMjM1LTIuMTUtLjIxLTIuOTIgMS42MTgtLjkxNyA0Ljc0OC0xLjU5MyA2Ljg3NC0xLjYyNmwuMzczLS4wMWMuMzEyLS4wMDMuMzM3LS4yNTEuMDQzLS4yOTEtMi42NDEtLjM2MS00LjkyOS4xNzMtNy4yNzkgMS4xNDUtMi40NDYgMS4wMzEtNS41NTggMy40MDMtNy40NTQgNy44NzktLjQ0NCAxLjI0Ny0yLjIxOSA3LjE5NS45MzUgMTIuMyAyLjU2IDQuMTQyIDUuODU1IDYuMTEzIDkuODg3IDYuNjc2IDQuMDI0LjU2MSA2LjIwNy4wNzUgOC43NTItMS4wNTUgNS45NTEtMi42NDIgMTAuNDk2LTEyLjU1OSA1Ljk1LTE5Ljc0Ny0xLjc5NC0zLjMxOS02LjQ5NS02LjIyOS0xMS42NDEtNi4wMDR6bS0yLjI1OSA0LjY0N2ExNy43NTQgMTcuNzU0IDAgMCAxIDIuMzYyLS4zNjggMTUuNzQxIDE1Ljc0MSAwIDAgMSAxLjc0OCAyLjU0Yy0uODA1LjM5LTEuODc4LjY4OC0yLjMxNSAxLjMxMi0uMTgxLjI2LS4yMjYuNjEzLS4yMzIuOTk1YTIzLjU5IDIzLjU5IDAgMCAwIC0zLjg3NyAxLjI4NmMtLjQ1My0xLjMzMi0uODUtMi42Ni0xLjEyNC0zLjg0MiAxLjI5Ni0xLjIzNyAyLjgxMy0xLjQzOCAzLjQzOC0xLjkyM3ptNi42MSAxNS44OGMtLjM1NC4wMzgtLjcwNi4wODMtMS4wMTYuMTMtLjc3LjEyMS0xLjc2Mi4zNzktMi42ODUuNzIzLS41My0uODQzLTEuOTUtMi44OTEtMi42NjctNC40MzcgMS40NDItLjcwOSAzLjQ1Ny0xLjMwMyA1Ljc3NS0xLjQ0NC4xOS4zMy40LjY2LjY5Ljk1Ni43NTcuNzc0LS40NCAxLjg4My0uMDk2IDQuMDcyem0tOC42MDMtOS4xNGMxLjEyLS41MyAyLjMtLjk2OCAzLjU2LTEuMjg2LS4wMDguMzMzLS4wNDUuNjQ5LS4xODIuOTAzLS4xOTYuMzY2LS4xMDYgMS40MjguMTM0IDEuNzc1Ljc1NSAxLjA5OSAyLjAwOC40ODggMi45NTEuODgzLjQzMy4xODEuNzIxLjQ4Mi45NjQuODQtMS45NzQuMTI0LTMuOTEuNTg0LTUuNzA2IDEuNDEtLjkyMy0xLjk2LTEuNzItNC41MjQtMS43Mi00LjUyNHptLjgzMiA0LjkzOGMtLjA3LjAzMy0uMTQ1LjA3NC0uMjE3LjExYTQwLjgwMyA0MC44MDMgMCAwIDAgLTMuMjU2LS43OGMtLjk5NS0uMjA0LTEuMDMxLS4xNS0yLjE1MS4xNzUtLjE2LjA0Ni0uMzEzLjA4OC0uNDYyLjEzM2EzNi4xNyAzNi4xNyAwIDAgMSAtLjQ0NS0xLjIwMmMxLjQzNi0xLjEwNiAyLjg4NC0yLjAzNCA0LjgyMS0yLjk4NS41IDEuNDkxIDEuMjE1IDMuNDgzIDEuNzEgNC41NDl6bS43NjggNC41MjhjLjI5My0uNzY1LjUyMS0xLjMzMS42MDUtMS44OS41NjkuOTU4IDEuMjQ4IDIgMS43NzQgMi44MTUtLjgxOS4zOTctMS43NzIgMS4wMS0yLjY3MiAxLjY4NS4wNjItMS4wMzcuMDgzLTIuMDY0LjI5My0yLjYxem01LjMzNC0xNC42MzZjLS4wMS4wMTQtLjAyOC4wMjYtLjA0LjA0YTIzLjA1NyAyMy4wNTcgMCAwIDAgLTEuMzc2LTIuMTExYzEuMDA3LS4wNjEgMi4yNDYtLjAwOCAzLjM3NC4xMDgtMS4wMTQuMzYzLTEuNDYxIDEuMjU0LTEuOTU4IDEuOTYzem0tOS4wMjggMS4wOTRjLjAxOS0uMDI2LjAzOS0uMDQ3LjA1Ny0uMDcyLjIzNCAxLjE4Mi41MTMgMi4xNi44ODYgMy41MTgtMS40MDIuNjE4LTMuODgxIDIuMTQ4LTQuOTc2IDIuOTcyLS4xOTgtLjUwMi0uNDA0LTEuMjE0LS41ODktMS45NDYuMjQ5LS43MzcuNzU4LTEuMjU0IDEuNDc2LTEuMzI1IDEuMjI4LS4xMjMgMi4yOC0xLjk1IDMuMTQ2LTMuMTQ3em0tNS40MS0xLjc4NGMxLjMxMy0xLjgzOCAzLjA5Ni0zLjYyNyA0LjcyMy00LjUyLS4wMTYuNC4wODYgMS41NjcuMjE4IDIuNjkzLS41Ny4wNTctMS4xMzQuMTI4LTEuNjkyLjIxMWExMi4wODQgMTIuMDg0IDAgMCAwIC0zLjExNSA0LjA4OGMtLjExNy0xLjA1NC0uMTc4LTEuOTMzLS4xMzMtMi40NzJ6bS0uODU3IDEuNDM4cy4wNjIgMS4wNi4xMTMgMS44MzNjMCAwLS43ODEuODg2LTEuMTggMS41OS4xNTktMS40NDMuNDk4LTIuMTg3IDEuMDY3LTMuNDIzem03LjY2NCAxOC4zNTZjLTQuMDQ2LTEuMjY3LTcuMDQ0LTQuNjc3LTguMTE0LTguMjUzYTE3LjQ3NSAxNy40NzUgMCAwIDEgLS42NTEtNi40NzNjLjA1Ni4wMS4xODYuMDcyLjM4LjAxNy4xMzUtLjA5My42MTYtLjQzLjk1Ny0uNzI4bC4wMTguMTMxYy0uMjMuODctLjM3MSAxLjc3NS0uNCAyLjcxLjM3LjM5LjgwNCAxLjAzOCAxLjI4NiAxLjcwNy0uMzEuMjMtLjkwNS42NDEtMS4wNDUuNzQxLS40MS4yOTItLjQwNi43NTMtLjExNCAxLjAxNS4xNjEuMTQ0LjQ5Mi4wODQuNjEzLS4wMS4zNTgtLjI4NS42NTYtLjUxMyAxLjA2Ni0uNzcuMTUuMzkzLjI5Mi43NDguNDMgMS4wODYtLjE3NS4xODgtLjMuNDM2LS4zNDIuNzk4LS4xMzUgMS4xNzIuOTc5IDIuMDkyIDEuOTE4IDIuMzYuMDM1LjAxLjA2LjAxNC4wOTQuMDIzLjA1LjA3Ni4wOTUuMTQ3LjE0OC4yMjQtLjQ4Ny4zNzgtLjgyLjc2NS0xLjA0OSAxLjA2My0uMTMyLjE3Mi0uMjguNDMtLjE2LjQ4MS4xMjMuMDUuNTM1IDAgLjcxOS0uMDM0LjQ2Ni0uMDkuODI2LS42MDYgMS4xNDgtLjc5Ni4zODcuNTM0IDEuMDE3IDEuMjIgMS42NzIgMS44OC4wMjkuMTIuMDU1LjI0Ni4wODguMzUxLjEyNS40MDMuMjkzLjgwNC40OTUgMS4xOTYuNDcxLjIyLjk2Mi40MDIgMS40NjQuNTYxYTguMzQ0IDguMzQ0IDAgMCAwIC0uNjIyLjcyem0uOTg5LjMxM2MuMTU1LS4yMDMuMzEyLS40NTQuNTA1LS42MjYuNDY4LjMxLjk2OS42NjUgMS4zNjguODk0LS42MTUtLjA3LTEuMzM3LS4wODUtMS44NzMtLjI2OHptMy4xMTMuMzFzLTEuNjA0LTEuMDYyLTIuMDA5LTEuNDcxYy44MDMtLjY2NyAyLjEwMi0xLjQ1OSAzLjEyOC0xLjg4OS40MDIuNjMgMS43MjcgMi41MDcgMi4yNTggMy4xMTItLjk2My4xNjgtMi4zMS4yOTQtMy4zNzcuMjQ4em02LjcwNC0xLjUxYy0uMjg2LjE4OS0xLjY2NC44MTQtMi4yMDQuOTg4YTIzLjQzIDIzLjQzIDAgMCAxIC0yLjQ0LTMuMjAyYy44NDQtLjM1NCAyLjE0My0uNjcgMy4zNDYtLjgyLjEwOS4zNDIuMjUuNzA0LjQ0NCAxLjA5NC4xOS4zODIuNDExLjY2Mi42NDkuODUzLjA4NS0uMDUzLjE2NC0uMTE1LjI0OC0uMTctLjAwNi40Mi0uMDE4Ljg0Ni0uMDQzIDEuMjU3em0tLjMzLTIxLjQ3N2MtLjI3LS4xNzItLjYwNy0uMTA4LS40NjcuMTkzLjA1My4xMTcuMjU5LjMxNC40MjcuNTEyLS45ODYtLjI3Mi0zLjYwOC0uNDc5LTQuODU2LS4zNjQtLjgxNS0uOTE2LTEuNzQ0LTIuMDI4LTIuODYxLTIuNzY1IDQuOTk5LS4zMTEgOS40OSAxLjc1NiAxMS40NzMgNC4xODYtLjY2MS0uMzQ0LTIuMDg3LS44MzQtMi42NjctLjk2My0uMzEzLS4zMTktLjcwOC0uNTgtMS4wNS0uOHptMS4wOTQgMjEuMDY1Yy4wMjMtLjQwNy4wNC0uOTIyLjA1My0xLjM5Ni40ODctLjM3OC45NDYtLjc5IDEuMzctMS4yMzguNTQ3LjA2MyAxLjA5NC4xNTYgMS40MjcuMjQtLjc0LjkzNi0xLjc2MiAxLjcxNi0yLjg1IDIuMzk0em0zLjgyNS0zLjcyNGMtLjEyLjI1My0uNDI4LjY4OC0uNjMzLjg5NC0uMzEyLS4xMjYtLjc4MS0uMjU4LTEuMjcyLS4zNzUuMDc4LS4wOTQuMTYzLS4xODIuMjQtLjI3OS4yNjgtMS43OTYtLjMzOC0yLjM3LjQyLTQuMDE0bC4xNzItLjM3MWMuNDE4LjExOC44MTIuMjQ3IDEuMTUzLjM4Ni4wNDMuNjE2LjA0IDIuNzI4LS4wOCAzLjc1OXptLS43MDgtNC45MTdjLjE5Ni0uNDA3LjQxMi0uODQuNjQ1LTEuMjcuMDYxLjU0Ny4xMDUgMS4wOC4xMzEgMS41NjNhOS4yNTYgOS4yNTYgMCAwIDAgLS43NzYtLjI5M3ptMi4yMTggMS4xMjYtLjE5NC43NTZjLS4xMzcuNTE1LS41OTMgMS43MzItLjgzMiAyLjIyMy4wOTEtLjY2My4xNzEtMi4zODQuMTQ4LTIuNzMuMTYuMDQ5LjUwMi0uMTQ3LjU1OS0uMzQxLjA1Ny0uMTk1LS41NjQtLjQ5NS0uNTY0LS40OTVhMjAuNzQyIDIwLjc0MiAwIDAgMCAtLjE3Mi0yLjdjLjE0Mi0uMjMuMjg2LS40NTIuNDM0LS42NTVhMTIuMDgyIDEyLjA4MiAwIDAgMCAtLjE4Ni0xLjU3NWMuMTI1LjA0MS4yNC4wNzQuMzIzLjA3NS4yODMuMDA0LjI4Mi0uMTkuMTkyLS4yOTgtLjA1OC0uMDctLjMyOC0uMjM4LS42NDMtLjQyYTEyLjAyIDEyLjAyIDAgMCAwIC0yLjc4LTUuMzJjLjUzMy4yMDIgMS4yMTQuNDggMS43NTQuNzc0LjQxLjUxNiAxLjU4NSAxLjY3NSAyLjIxMiA0LjkyLjU2NCAyLjkyMi0uMDYgNS4xNDMtLjI1MSA1Ljc4NnptNTQuMjQ3LTEwLjY3NnYtLjI0aDEuMjE4di4yNGgtLjQ2OHYxLjE5MWgtLjI4M3YtMS4xOTF6bTEuODctLjI0LjM2NSAxLjAyNS4zNjgtMS4wMjRoLjQwNnYxLjQzaC0uMjYydi0xLjE1NGwtLjM5NiAxLjE1NGgtLjIyOWwtLjQtMS4xNTR2MS4xNTRoLS4yNjF2LTEuNDNoLjQwOXoiLz48L3N2Zz4=\";\n\n//# sourceURL=webpack:///./assets/esri.svg?");

/***/ }),

/***/ "./assets/experiences.png":
/*!********************************!*\
  !*** ./assets/experiences.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bf844dc7798e472fb967.png\";\n\n//# sourceURL=webpack:///./assets/experiences.png?");

/***/ }),

/***/ "./assets/mihoyo.svg":
/*!***************************!*\
  !*** ./assets/mihoyo.svg ***!
  \***************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAwIDI2Ni42NyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CjxnIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuMTgwMiI+CjxwYXRoIGQ9Im0yODkuMTIgMGMtMTUuMDc1IDAtMjcuMjExIDEyLjEzNi0yNy4yMTEgMjcuMjExczEyLjEzNiAyNy4yMTEgMjcuMjExIDI3LjIxMSAyNy4yMTEtMTIuMTM2IDI3LjIxMS0yNy4yMTEtMTIuMTM2LTI3LjIxMS0yNy4yMTEtMjcuMjExem0tMjI5LjQyIDc4LjU3MWMtMzMuMDcgMC01OS42OTQgMjYuNjIzLTU5LjY5NCA1OS42OTR2MTAzLjA2YzAgMTMuNjYyIDEwLjk5OCAyNC42NiAyNC42NiAyNC42NiAxMy42NjIgMCAyNC42Ni0xMC45OTggMjQuNjYtMjQuNjZ2LTkzLjcwN2MwLTEwLjc0MSA4LjY0NjktMTkuMzg4IDE5LjM4OC0xOS4zODhzMTkuMzg4IDguNjQ2OSAxOS4zODggMTkuMzg4djkzLjcwN2MwIDEzLjY1OSAxMC45OTQgMjQuNjYgMjQuNjUzIDI0LjY2IDEzLjY1OCAwIDI0LjY1My0xMS4wMDEgMjQuNjUzLTI0LjY2di05My43MDdjMC0xMC43NDEgOC42NDY5LTE5LjM4OCAxOS4zODgtMTkuMzg4IDEwLjc0MSAwIDE5LjM4NSA4LjY0NjkgMTkuMzg4IDE5LjM4OGwwLjAxNDYgNTAuMzRjMC4wMTExIDM4LjA2NCAzMC42NDQgNjguNzA3IDY4LjcwNyA2OC43MDcgMzguMDY0IDAgNjguNzA3LTMwLjY0NCA2OC43MDctNjguNzA3di04NS44ODRjMC0xMy42NjItMTAuOTk4LTI0LjY2LTI0LjY2LTI0LjY2LTEzLjY2MiAwLTI0LjY2IDEwLjk5OC0yNC42NiAyNC42NnY4NC44NjRjMCAxMC43NDEtOC42NDY5IDE5LjM4OC0xOS4zODggMTkuMzg4LTEwLjc0MSAwLTE5LjM4NS04LjY0NjktMTkuMzg4LTE5LjM4OGwtMC4wMTQ2LTU4LjY3M2MtOGUtMyAtMzMuMDctMjYuNjIzLTU5LjY5NC01OS42OTQtNTkuNjk0LTE4LjcwMiAwLTM1LjU1NSA4LjQyODYtNDYuNDc0IDIxLjg5NC0xLjM3MDkgMS42OTA4LTMuMzU2MiAzLjI3NTgtNi41ODAyIDMuMjc1OC0zLjIyNCAwLTUuMjA5Mi0xLjU4NTEtNi41ODAyLTMuMjc1OC0xMC45MTgtMTMuNDY2LTI3Ljc3Mi0yMS44OTQtNDYuNDc0LTIxLjg5NHoiIGZpbGw9IiM3M2Q4ZjEiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+CjxwYXRoIGQ9Im0zNzcuMzggMTQuOTY2Yy0xMy42NjIgMC0yNC42NiAxMC45OTgtMjQuNjYgMjQuNjZ2MjAxLjdjMCAxMy42NjIgMTAuOTk4IDI0LjY2IDI0LjY2IDI0LjY2IDEzLjY2MiAwIDI0LjY2LTEwLjk5OCAyNC42Ni0yNC42NnYtNjYuMTU2YzAtNi4yMTg0IDUuMDA2MS0xMS4yMjQgMTEuMjI0LTExLjIyNGgyNi41MzFjNi4yMTg0IDAgMTEuMjI0IDUuMDA2MSAxMS4yMjQgMTEuMjI0djY2LjE1NmMwIDEzLjY2MiAxMC45OTggMjQuNjYgMjQuNjYgMjQuNjYgMTMuNjYyIDAgMjQuNjYtMTAuOTk4IDI0LjY2LTI0LjY2di0yMDEuN2MwLTEzLjY2Mi0xMC45OTgtMjQuNjYtMjQuNjYtMjQuNjYtMTMuNjYyIDAtMjQuNjYgMTAuOTk4LTI0LjY2IDI0LjY2djYxLjA1NGMwIDYuMjE4NC01LjAwNjEgMTEuMjI0LTExLjIyNCAxMS4yMjRoLTI2LjUzMWMtNi4yMTg0IDAtMTEuMjI0LTUuMDA2MS0xMS4yMjQtMTEuMjI0di02MS4wNTRjMC0xMy42NjItMTAuOTk4LTI0LjY2LTI0LjY2LTI0LjY2eiIgZmlsbD0iIzRlYTRkZCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz4KPHBhdGggZD0ibTcwMS43IDE0Ljk2NmMtNy44MjMxIDAtMTUuNDcxIDkuODY0LTguNDY4OCAxOS41OGw0OC42MDUgODcuOTAzdjExOC44OGMwIDEzLjY2MiAxMS4wMDIgMjQuNjYgMjQuNjYzIDI0LjY2IDEzLjY2MiAwIDI0LjY2My0xMC45OTggMjQuNjYzLTI0LjY2di0xMTguODhsNDguNjA1LTg3LjkwM2M3LjAwMjYtOS43MTU4LTAuNjUyMzgtMTkuNTgtOC40Njg5LTE5LjU4aC0yNS4yNWMtMy4zOTg4IDAtNy40ODAzIDIuMjU1LTkuMTEwNiA1LjIzNzNsLTI3LjA3MyA0OS41MjVjLTAuNjg2NCAxLjI1NTYtMS44ODUzIDEuNzAwNy0zLjE5OTQgMS43MDA3cy0yLjYwNzktMC40NDc3LTMuMjk5LTEuNzAwN2wtMjcuMzItNDkuNTI1Yy0xLjY0MTctMi45NzYtNS42OTg1LTUuMjM3My05LjA5NzMtNS4yMzczeiIgZmlsbD0iIzRlYTRkZCIgc3R5bGU9InBhaW50LW9yZGVyOnN0cm9rZSBmaWxsIG1hcmtlcnMiLz4KPHBhdGggZD0ibTU0NC4zOSA2NC45NjZjLTEuMzYwNiAwLTIuMjEwOSA2LjQ2MjYtMi4yMTA5IDE1LjMwNnMxLjcwMDcgMTcuMzQ3IDMuNDAxNCAxNy4zNDcgMS43MDA3LTEuMDIwNCA5Ljg2NC04LjE2MzNjOC4xNjMzLTcuMTQyOSA5LjUyMzgtNy4xNDI5IDkuNTIzOC05LjE4MzdzLTMuMDYxMi0zLjc0MTUtMTAuMjA0LTguODQzNWMtNy4xNDI5LTUuMTAyLTkuMDEzNi02LjQ2MjYtMTAuMzc0LTYuNDYyNnptMTQzLjIgMGMtMS4zNjA2IDAtMy4yMzEzIDEuMzYwNS0xMC4zNzQgNi40NjI2LTcuMTQyOSA1LjEwMi0xMC4yMDQgNi44MDI3LTEwLjIwNCA4Ljg0MzVzMS4zNjA2IDIuMDQwOCA5LjUyMzggOS4xODM3YzguMTYzMyA3LjE0MjkgOC4xNjMzIDguMTYzMyA5Ljg2NCA4LjE2MzNzMy40MDE0LTguNTAzNCAzLjQwMTQtMTcuMzQ3LTAuODUwMzQtMTUuMzA2LTIuMjEwOS0xNS4zMDZ6bS03MS41OTkgMTQuMjg2Yy00NS4wNzYgMC04MS42MzMgNDEuODk3LTgxLjYzMyA5My41MzcgMCA1MS42NTkgMzYuNTQ4IDkzLjUzNyA4MS42MzMgOTMuNTM3IDQ1LjA4NCAwIDgxLjYzMy00MS44NzggODEuNjMzLTkzLjUzNyAwLTUxLjY0LTM2LjU1Ni05My41MzctODEuNjMzLTkzLjUzN3ptMCA0Ni41OTljMjIuNTE3IDAgNDAuODE2IDIxLjA3MiA0MC44MTYgNDYuOTM5IDAgMjUuOTI0LTE4LjI3NCA0Ni45MzktNDAuODE2IDQ2LjkzOS0yMi41NDIgMC00MC44MTYtMjEuMDE1LTQwLjgxNi00Ni45MzktMWUtNCAtMjUuODY2IDE4LjI5OS00Ni45MzkgNDAuODE2LTQ2LjkzOXoiIGZpbGw9IiM0ZWE0ZGQiIHN0eWxlPSJwYWludC1vcmRlcjpzdHJva2UgZmlsbCBtYXJrZXJzIi8+CjxwYXRoIGQ9Im05NzcuODkgNzAuNDA4Yy0xMy45MjEgMC0yMC43NDggNi4xMjI0LTI0LjgzIDkuMTgzNy00LjA4MTYgMy4wNjEyLTcuNDgzIDYuMTIyNC0xMS4yMjQgNi4xMjI0LTkuNTIzOCAwLTE2LjMyNy02LjQ2MjYtMzUuMzc0LTYuNDYyNi00NS4wODQgMC04MS42MzMgNDEuODc4LTgxLjYzMyA5My41MzdzMzYuNTQ4IDkzLjUzNyA4MS42MzMgOTMuNTM3YzQ1LjA4NCAwIDgxLjYzMy00MS44NzggODEuNjMzLTkzLjUzNy0yLjRlLTQgLTE4Ljg0Mi00Ljk2NjUtMzcuMjQ0LTE0LjI0OS01Mi43OTctMS41NjE4LTQuMDA1Mi0yLjA3OC04LjA4NjktMi4wNzI3LTE2LjA4IDdlLTMgLTExLjA1NCA1LjMyOTgtMTkuMTkzIDExLjIxOS0yMy4yOTkgNS44ODk0LTQuMTA1OSAxMC44ODQtNS4xMDIgMTcuMDA3LTUuNzgyMy02LjQ2MjYtMy4wNjEyLTEzLjk0Ni00LjQyMTgtMjIuMTA5LTQuNDIxOHptLTcxLjQyOSA1NS40NDJjMjIuNTE3LTAuMDQwNCA0MC44MTYgMjEuMDE1IDQwLjgxNiA0Ni45MzlzLTE4LjI3NCA0Ni45MzktNDAuODE2IDQ2LjkzOWMtMjIuNTQyIDAtNDAuODE2LTIxLjAxNS00MC44MTYtNDYuOTM5LTFlLTQgLTI1Ljg2NiAxOC4yOTktNDYuODk4IDQwLjgxNi00Ni45Mzl6IiBmaWxsPSIjNGVhNGRkIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPgo8L2c+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack:///./assets/mihoyo.svg?");

/***/ }),

/***/ "./assets/momenta.png":
/*!****************************!*\
  !*** ./assets/momenta.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8afb0a8a48dce2f10baf.png\";\n\n//# sourceURL=webpack:///./assets/momenta.png?");

/***/ }),

/***/ "./assets/skills.png":
/*!***************************!*\
  !*** ./assets/skills.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"689bffd5492d7bb6a730.png\";\n\n//# sourceURL=webpack:///./assets/skills.png?");

/***/ }),

/***/ "./assets/slide1.png":
/*!***************************!*\
  !*** ./assets/slide1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"746f2018e4d6333c8f99.png\";\n\n//# sourceURL=webpack:///./assets/slide1.png?");

/***/ }),

/***/ "./assets/slide2.png":
/*!***************************!*\
  !*** ./assets/slide2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4c26c8cbc6ac512b20b8.png\";\n\n//# sourceURL=webpack:///./assets/slide2.png?");

/***/ }),

/***/ "./assets/slide3.png":
/*!***************************!*\
  !*** ./assets/slide3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"38c092026db887dde1e8.png\";\n\n//# sourceURL=webpack:///./assets/slide3.png?");

/***/ }),

/***/ "./assets/tencent.png":
/*!****************************!*\
  !*** ./assets/tencent.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"430a172f695189f13bfb.png\";\n\n//# sourceURL=webpack:///./assets/tencent.png?");

/***/ }),

/***/ "./assets/uiuc.svg":
/*!*************************!*\
  !*** ./assets/uiuc.svg ***!
  \*************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDciIGhlaWdodD0iNjUuNjc5IiB2aWV3Qm94PSIwIDAgMjQ3IDY1LjY3OSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjMzMzMgMCAwIC0xLjMzMzMgLTc4LjEyOSA4My45ODYpIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCguNjEwNTggMCAwIC42MTA1OCA1OS4zNzUgMTQuNTgxKSI+CiAgIDxwYXRoIGQ9Im0wIDc4LjIydi0yMS4wNTloMTIuMDM0di0zNi4xMDFoLTEyLjAzNHYtMjEuMDZoNTQuMTUydjIxLjA2aC0xMi4wMzR2MzYuMTAxaDEyLjAzNHYyMS4wNTl6bTI3Ni45LTIuODY4MmMtMy45MDggMC02Ljc0NTYtMi45NDgzLTYuNzQ1Ni02LjU0Nzl2LTAuMDM1MTZjMC0zLjU5OTcgMi44MDItNi41MTEyIDYuNzA5LTYuNTExMiAzLjkwNyAwIDYuNzQ1NiAyLjk0NzYgNi43NDU2IDYuNTQ2NHYwLjAzNjYyYzAgMy41OTg1LTIuODAyIDYuNTExMi02LjcwOSA2LjUxMTJ6bS03NC4zNy0wLjAzNjYyYy0yLjU4NyAwLTQuNDMxMi0xLjUxOS00LjQzMTItMy44MTU5di0wLjAzNjYyYzAtMi41MTM3IDEuNjQ0My0zLjIxOTcgNC4xOTUzLTMuODcwMSAyLjExNS0wLjU0MyAyLjU1MDMtMC45MDQ1IDIuNTUwMy0xLjYwODR2LTAuMDM4MDljMC0wLjc0MTQtMC42ODY2Ni0xLjE5MjQtMS44MjY3LTEuMTkyNC0xLjQ0NiAwLTIuNjQwMyAwLjU5NjAyLTMuNzc5MyAxLjUzNjZsLTEuNjQ1LTEuOTcwMmMxLjUxOS0xLjM1NjYgMy40NTMxLTIuMDI3MyA1LjM3MDEtMi4wMjczIDIuNzMyIDAgNC42NDk0IDEuNDEyMSA0LjY0OTQgMy45MjU4djAuMDM1MTZjMCAyLjIwNy0xLjQ0OTEgMy4xMjkxLTQuMDE1MSAzLjc5ODMtMi4xOSAwLjU2MTMtMi43MzE5IDAuODMyMDYtMi43MzE5IDEuNjY0MXYwLjAzNjYyYzAgMC42MTUyIDAuNTYwOTggMS4xMDMgMS42MjYgMS4xMDMgMS4wNjkgMCAyLjE3Mi0wLjQ3MDY1IDMuMjkzLTEuMjQ4bDEuNDQ4NyAyLjA5OTFjLTEuMjg1IDEuMDMtMi44NjA2IDEuNjA4NC00LjcwMzYgMS42MDg0em0tMTA3LTAuMTgwMTh2LTcuMjM0OWMwLTMuNzI2NiAyLjA4MDItNS42MjUgNS40ODE0LTUuNjI1IDMuMzk5IDAgNS41NTE4IDEuODgwNSA1LjU1MTggNS43MTQ0djcuMTQ1NWgtMi43ODQ3di03LjI1MjRjMC0yLjAwNy0xLjAzMTUtMy4wMzk2LTIuNzMwNS0zLjAzOTYtMS43MDE5IDAtMi43MzA1IDEuMDY3OS0yLjczMDUgMy4xMzA0djcuMTYxNnptMTkuMDE3IDB2LTEyLjY2MWgyLjc0OTV2OC4wNDc5bDYuMTMwNC04LjA0NzloMi4zNzAxdjEyLjY2MWgtMi43NDk1di03Ljc5NTlsLTUuOTMxMiA3Ljc5NTl6bTE5LjQzNyAwdi0xMi42NjFoMi43ODYxdjEyLjY2MXptOS42NTMzIDAgNS4xMTY3LTEyLjc1MWgyLjQ1OTVsNS4xMTk2IDEyLjc1MWgtMy4wMDQ0bC0zLjMwNzYtOC45MTY1LTMuMzEwNiA4LjkxNjV6bTE5LjUzNyAwdi0xMi42NjFoOS42NDAxdjIuNDc3aC02Ljg3M3YyLjY1ODdoNS45NjkydjIuNDc3MWgtNS45NjkydjIuNTY5M2g2Ljc4MjJ2Mi40Nzg1em0xNy4yNzkgMHYtMTIuNjYxaDIuNzg0N3Y0LjA1MDNoMi4xODdsMi43MTQ0LTQuMDUwM2gzLjI1NDlsLTMuMDkzOCA0LjUyMDVjMS42MSAwLjU5ODEgMi43MTI5IDEuODgxNCAyLjcxMjkgMy45MjQzdjAuMDM2NjJjMCAyLjYwNDItMS43ODg5IDQuMTc5Mi00Ljc3MzkgNC4xNzkyem0zNC42NzkgMHYtMTIuNjYxaDIuNzg0N3YxMi42NjF6bTkuNzQ3MSAwdi0yLjU2OTNoMy44NTI1di0xMC4wOTFoMi43ODQ3djEwLjA5MWgzLjg1MTF2Mi41Njkzem0xNi43MzkgMCA0Ljg2NDgtNy42Njg1di00Ljk5MjJoMi43ODQ3djUuMDQ2NGw0Ljg2NDcgNy42MTQzaC0zLjE2NTVsLTMuMDc0Ny01LjA4My0zLjAyMDUgNS4wODN6bTQ5LjQ2IDB2LTEyLjY2MWgyLjc4NDd2NC44OTk5aDYuMDM5NnYyLjUzMjdoLTYuMDM5NnYyLjY5NTNoNi44NTR2Mi41MzI3em0tMTQuMjEtMi4zNTI1YzIuMjQ0IDAgMy44MzM1LTEuODA3OCAzLjgzMzUtMy45Nzg1di0wLjAzNTE2YzAtMi4xNzExLTEuNTU0OS0zLjk0MzQtMy43OTY5LTMuOTQzNC0yLjI0MyAwLTMuODMzNSAxLjgwODYtMy44MzM1IDMuOTc4NXYwLjAzNjYyYzAgMi4xNjg4IDEuNTU0OSAzLjk0MTkgMy43OTY5IDMuOTQxOXptLTkzLjYzLTAuMTYyNmgyLjc2NTZjMS4zNTcgMCAyLjE5LTAuNjE1MDIgMi4xOS0xLjgwNzZ2LTAuMDM2NjJjMC0xLjA2NjQtMC43NzgyOC0xLjc5LTIuMTM0My0xLjc5aC0yLjgyMTN6bTU0LjY4MS0xOS4wMTFjLTEwLjAwOCAwLTE3LjI4MS03LjU1MTUtMTcuMjgxLTE2Ljc3MXYtMC4wOTM3NWMwLTkuMjE5OSA3LjE4Mi0xNi42OCAxNy4xOS0xNi42OHMxNy4yODEgNy41NTIgMTcuMjgxIDE2Ljc3NHYwLjA5MDgyYzAgOS4yMjA3LTcuMTgxIDE2LjY4LTE3LjE5IDE2LjY4em01MC4wMDQtMC4wOTIyOGMtNi42MjUgMC0xMS4zNTEtMy44OTI0LTExLjM1MS05Ljc3NjR2LTAuMDkyMjljMC02LjQ0MDYgNC4yMTUtOC4yNDc1IDEwLjc0OS05LjkxNTUgNS40MjEtMS4zOTA2IDYuNTMzMi0yLjMxNTcgNi41MzMyLTQuMTIzNXYtMC4wOTIyOWMwLTEuOTAwOC0xLjc2MTItMy4wNTg2LTQuNjgwMi0zLjA1ODYtMy43MDYgMC02Ljc2MzYgMS41MjkzLTkuNjgyNiAzLjkzNzVsLTQuMjE3My01LjA0OTNjMy44OTEtMy40NzU4IDguODUwMi01LjE4ODUgMTMuNzYyLTUuMTg4NSA2Ljk5NiAwIDExLjkwOCAzLjYxMzggMTEuOTA4IDEwLjA1M3YwLjA5MjI5YzAgNS42NTM1LTMuNzA3MSA4LjAxNjEtMTAuMjg2IDkuNzMxLTUuNjA3IDEuNDM2My02Ljk5NzYgMi4xMzEtNi45OTc2IDQuMjYyN3YwLjA5MjI4YzAgMS41NzUgMS40MzU5IDIuODI3MSA0LjE2ODkgMi44MjcxIDIuNzM1IDAgNS41NjExLTEuMjA1NyA4LjQzMzEtMy4xOTc4bDMuNzA5IDUuMzc0NWMtMy4yOSAyLjY0MDYtNy4zMjEzIDQuMTIzNS0xMi4wNDggNC4xMjM1em0tMTkxLjMtMC40NjI5di0zMi40MzVoNy4xMzUzdjMyLjQzNXptMTUuNjEyIDB2LTMyLjQzNWgyMy4zMDR2Ni40ODc4aC0xNi4xNjl2MjUuOTQ3em0yOC41MzIgMHYtMzIuNDM1aDIzLjMwNnY2LjQ4NzhoLTE2LjE3MnYyNS45NDd6bTI4LjY4OSAwdi0zMi40MzVoNy4xMzM4djMyLjQzNXptMTUuNjExIDB2LTMyLjQzNWg3LjA0M3YyMC42MTlsMTUuNzA2LTIwLjYxOWg2LjA3MDN2MzIuNDM1aC03LjA0M3YtMTkuOTY5bC0xNS4xOTYgMTkuOTY5em03Ni45NDcgMHYtMzIuNDM1aDcuMTM2N3YzMi40MzV6bS0yNC4xODgtNi4wMjJjNS43NDYgMCA5LjgyMTgtNC42MzUzIDkuODIxOC0xMC4xOTR2LTAuMDkzNzVjMC01LjU1OTMtMy45ODUtMTAuMS05LjczMS0xMC4xLTUuNzQ1IDAtOS44MjE4IDQuNjMzMy05LjgyMTggMTAuMTk0djAuMDkwODJjMCA1LjU2MDUgMy45ODUgMTAuMTAzIDkuNzMxIDEwLjEwM3ptLTQ1Ljc5MS0zNS43MDZjLTIuNTA5IDAtNC4yNjEyLTEuOTAzLTQuMjYxMi00LjIyNjF2LTAuMDIzNDM3YzAtMi4zNDY5IDEuNzg1OS00LjIwMjYgNC4xOTA5LTQuMjAyNiAxLjU3NSAwIDIuNTEwNiAwLjU1OTc4IDMuMzUxNiAxLjQ1OWwtMS4xNDU1IDEuMTU1OGMtMC42NDEtMC41ODM5OC0xLjIxMy0wLjk1NjU0LTIuMTQ2LTAuOTU2NTQtMS40MDIgMC0yLjM3MDEgMS4xNjYzLTIuMzcwMSAyLjU2Nzl2MC4wMjM0MzdjMCAxLjQgMC45OTIxMiAyLjU0NTkgMi4zNzAxIDIuNTQ1OSAwLjgxNiAwIDEuNDU4OS0wLjM1MjA1IDIuMDg4OS0wLjkyNDMybDEuMTQ0IDEuMzE5OGMtMC43NTkgMC43NDY5LTEuNjgxNyAxLjI2MTItMy4yMjI2IDEuMjYxMnptOTAuOTc3IDBjLTIuNDc1IDAtNC4yODQ3LTEuOTAzLTQuMjg0Ny00LjIyNjF2LTAuMDIzNDM3YzAtMi40MTcyIDEuNzUxNC00LjIwMjYgNC4yOTY0LTQuMjAyNiAxLjQ5NCAwIDIuNjQ5MyAwLjU4MjgxIDMuNDg5MyAxLjI5NDl2My41NDkzaC0zLjU0OTN2LTEuNTUyN2gxLjgxMDZ2LTEuMTY2Yy0wLjQ1NS0wLjMyNzM0LTEuMDM5NC0wLjQ5MDcyLTEuNjkzNC0wLjQ5MDcyLTEuNDQ4IDAtMi40NzQxIDEuMDk3Mi0yLjQ3NDEgMi41OTEzdjAuMDIzNDM3YzAgMS4zODg3IDEuMDM4MiAyLjU0NTkgMi4zNDUyIDIuNTQ1OSAwLjk0NiAwIDEuNTA2Mi0wLjMwNTE4IDIuMTM3Mi0wLjgzMDU3bDEuMTMyMyAxLjM2NjdjLTAuODUyIDAuNzIzNC0xLjczODUgMS4xMjA2LTMuMjA5NSAxLjEyMDZ6bS0xNDMuMjItMC4wODIwMzEtMy41MDI0LTguMjI5NWgxLjgzNGwwLjc0NzA3IDEuODMyNWgzLjQ1NTZsMC43NDcwNy0xLjgzMjVoMS44Nzk0bC0zLjUwMSA4LjIyOTV6bTI4LjE1NCAwLTMuNTAxLTguMjI5NWgxLjgzMjVsMC43NDcwNyAxLjgzMjVoMy40NTU2bDAuNzQ3MDctMS44MzI1aDEuODc5NGwtMy41MDI0IDguMjI5NXptNTAuMTkxIDAtMy41MDI0LTguMjI5NWgxLjgzNGwwLjc0NzA3IDEuODMyNWgzLjQ1NTZsMC43NDcwNy0xLjgzMjVoMS44Nzk0bC0zLjUwMjQgOC4yMjk1em00MC45MDEgMC0zLjUwMjQtOC4yMjk1aDEuODM0bDAuNzQ3MDcgMS44MzI1aDMuNDU1NmwwLjc0NzA3LTEuODMyNWgxLjg3NzlsLTMuNTAxIDguMjI5NXptLTE2Mi40NC0wLjA1NzEyOXYtNC42Njk5YzAtMi40MDU1IDEuMzQzMS0zLjYzMTMgMy41Mzc2LTMuNjMxMyAyLjE5NCAwIDMuNTgzIDEuMjE1MyAzLjU4MyAzLjY4OTl2NC42MTEzaC0xLjc5NzR2LTQuNjgxNmMwLTEuMjk2MS0wLjY2NTY4LTEuOTYxNC0xLjc2MzctMS45NjE0LTEuMDk3MiAwLTEuNzYyMiAwLjY4ODc3LTEuNzYyMiAyLjAydjQuNjIzem0xMy44MDggMHYtOC4xNzI0aDEuNzk4OHYyLjYxMzNoMS40MTIxbDEuNzUyLTIuNjEzM2gyLjEwMDZsLTEuOTk2NiAyLjkxOGMxLjAzOSAwLjM4NTU1IDEuNzUyIDEuMjE0NCAxLjc1MiAyLjUzMjd2MC4wMjM0MzdjMCAwLjc3MDMyLTAuMjQ1MiAxLjQxMjYtMC43MDAyIDEuODY3Ny0wLjUzNyAwLjUzNzEtMS4zNDI4IDAuODMwNTctMi4zODE4IDAuODMwNTd6bTEzLjI5NSAwdi04LjE3MjRoMy44ODc3YzEuODQ0IDAgMy4wNjAxIDAuNzQ3MDcgMy4wNjAxIDIuMjQxMnYwLjAyMzQzN2MwIDEuMDk3Ni0wLjU4NDc3IDEuNjQ0Ny0xLjUzMDggMi4wMDY4IDAuNTgyOTkgMC4zMjczNCAxLjA3MzcgMC44NDE4IDEuMDczNyAxLjc2Mzd2MC4wMjM0MzdjMCAwLjU2MDU0LTAuMTg2NTcgMS4wMTYxLTAuNTU5NTcgMS4zODg3LTAuNDY3IDAuNDY4LTEuMjAyMiAwLjcyNTEtMi4xMzcyIDAuNzI1MXptMjcuMzYyIDB2LTguMTcyNGgxLjc3Mzl2NS4xOTQzbDMuOTU4LTUuMTk0M2gxLjUyOTN2OC4xNzI0aC0xLjc3Mzl2LTUuMDMzMmwtMy44MjkxIDUuMDMzMnptNTAuNTQyIDB2LTguMTcyNGgxLjc5NzR2My4yNzk4aDMuMzE2NHYtMy4yNzk4aDEuNzk3NHY4LjE3MjRoLTEuNzk3NHYtMy4yMzQ0aC0zLjMxNjR2My4yMzQ0em0yNy44MDQgMHYtOC4xNzI0aDEuNzYyMnY1LjI5OThsMi4yNzc4LTMuNDU1NmgwLjA0NTRsMi4yOTk4IDMuNDkwN3YtNS4zMzVoMS43ODU2djguMTcyNGgtMS45MzY1bC0yLjE0ODktMy40NTctMi4xNDc1IDMuNDU3em0xNC45ODggMHYtOC4xNzI0aDEuNzk3NHYyLjQ1MDdoMS4zNjUyYzEuODMzIDAgMy4zMDQ3IDAuOTgxMTUgMy4zMDQ3IDIuODcyNnYwLjAyMzQzN2MwIDEuNjY5Mi0xLjE3OTkgMi44MjU3LTMuMTI4OSAyLjgyNTd6bTI1Ljk5NSAwdi04LjE3MjRoMS43OTc0djguMTcyNHptMjIuNzAyIDB2LTguMTcyNGgxLjc3Mzl2NS4xOTQzbDMuOTU4LTUuMTk0M2gxLjUyOTN2OC4xNzI0aC0xLjc3NTR2LTUuMDMzMmwtMy44MjkxIDUuMDMzMnptLTE2Ny42NC0xLjU3NjJoMS43NzM5YzAuNzU5IDAgMS4xNzkyLTAuMzA1MTggMS4xNzkyLTAuODQyMjl2LTAuMDIzNDM3YzAtMC42MDYyNS0wLjUwMDkyLTAuODYyNzktMS4yOTQ5LTAuODYyNzloLTEuNjU4MnptLTEzLjI0OC0wLjA0Njg3NWgxLjc4NTZjMC44NzUgMCAxLjQxMzYtMC4zOTY3NyAxLjQxMzYtMS4xNjc1di0wLjAyMzQzOGMwLTAuNjg5NDYtMC41MDM0Mi0xLjE1NzItMS4zNzg0LTEuMTU3MmgtMS44MjA4em0xMzMuOTkgMGgxLjM4ODdjMC45IDAgMS40NTktMC40MzE5MyAxLjQ1OS0xLjIzNzh2LTAuMDIzNDM3YzAtMC43LTAuNTIzODMtMS4yMzc4LTEuNDIzOC0xLjIzNzhoLTEuNDIzOHptLTEwNS42LTAuNDc5IDEuMDg2OS0yLjY0OTloLTIuMTcyNHptMjguMTU0IDAgMS4wODU0LTIuNjQ5OWgtMi4xNzA5em01MC4xOTEgMCAxLjA4NjktMi42NDk5aC0yLjE3MDl6bTQwLjkwMSAwIDEuMDg1NC0yLjY0OTloLTIuMTcwOXptLTgxLjI1My0xLjU5OTZ2LTEuNzA1MWgzLjU5NjJ2MS43MDUxem0tNTMuMTMzLTEuMDk3MmgyLjA3ODZjMC45MjEgMCAxLjMzMTUtMC4zMzg4NyAxLjMzMTUtMC44ODc3di0wLjAyMzQzN2MwLTAuNjA3NDItMC40ODA0MS0wLjg4NjIzLTEuMjc0NC0wLjg4NjIzaC0yLjEzNTd6IiBmaWxsPSIjMTMyOTRiIi8+CiAgIDxwYXRoIGQ9Im00Mi4xMTkgNjAuMTdoOS4wMjQzdjE1LjA0MmgtNDguMTM2di0xNS4wNDJoOS4wMjYyYzEuNjU5OCAwIDMuMDA3OC0xLjM0NTcgMy4wMDc4LTMuMDA4NnYtMzYuMTAzYzAtMS42NTk0LTEuMzQ4LTMuMDA3OC0zLjAwNzgtMy4wMDc4aC05LjAyNjJ2LTE1LjA0MWg0OC4xMzZ2MTUuMDQxaC05LjAyNDNjLTEuNjYxNyAwLTMuMDA5MyAxLjM0ODQtMy4wMDkzIDMuMDA3OHYzNi4xMDNjMCAxLjY2MjkgMS4zNDc2IDMuMDA4NiAzLjAwOTMgMy4wMDg2IiBmaWxsPSIjZmY1ZjA1Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack:///./assets/uiuc.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;