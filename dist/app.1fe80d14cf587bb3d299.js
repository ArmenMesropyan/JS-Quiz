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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/main.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ \"./js/factory/index.js\");\n\n\nvar QuestionsView = Object.values(_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])[0];\nvar nextBtn = document.getElementById('next');\nQuestionsView.init();\nnextBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  var selected = document.querySelector('.question__choice:checked');\n  QuestionsView.checkValue(selected.value);\n  QuestionsView.init();\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/controller/index.js":
/*!********************************!*\
  !*** ./js/controller/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questions_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-controller */ \"./js/controller/questions-controller.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_questions_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/controller/index.js?");

/***/ }),

/***/ "./js/controller/questions-controller.js":
/*!***********************************************!*\
  !*** ./js/controller/questions-controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar QuestionsController = /*#__PURE__*/function () {\n  function QuestionsController(data) {\n    _classCallCheck(this, QuestionsController);\n\n    this.data = data;\n  }\n\n  _createClass(QuestionsController, [{\n    key: \"init\",\n    value: function init(count) {\n      var question = this.data.init(count);\n      return question;\n    }\n  }]);\n\n  return QuestionsController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionsController);\n\n//# sourceURL=webpack:///./js/controller/questions-controller.js?");

/***/ }),

/***/ "./js/data/index.js":
/*!**************************!*\
  !*** ./js/data/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questions_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-data */ \"./js/data/questions-data.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_questions_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/data/index.js?");

/***/ }),

/***/ "./js/data/questions-data.js":
/*!***********************************!*\
  !*** ./js/data/questions-data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar QuestionsData = /*#__PURE__*/function () {\n  function QuestionsData() {\n    _classCallCheck(this, QuestionsData);\n\n    this.questions = [{\n      question: 'What will be printed in the console?',\n      code: \"\\nlet obj = {\\n    \\\"0\\\": 1,\\n    0: 2\\n};\\n\\nalert( obj[\\\"0\\\"] + obj[0] );\\n                \",\n      answer: 1,\n      choices: [2, 4, 3, 'error']\n    }, {\n      question: 'What will be alerted?',\n      code: \"\\nfor(let i=0; i<10; i++) {\\n    setTimeout(function() {\\n        alert(i);\\n    }, 100);\\n}\\n                \",\n      answer: 1,\n      choices: ['0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9', '10 item 10', 'error']\n    }, {\n      question: 'Which value will be displayed?',\n      code: \"\\nlet x = 5;\\nalert( x++ );\\n                \",\n      answer: 0,\n      choices: ['5', '6', 'number', 'type error']\n    }, {\n      question: 'What will be printed?',\n      code: \"\\n\\\"use strict\\\"\\na = [1, 2, 3];\\nb = [1, 2, 3];\\nconsole.log(a == b);\\n                \",\n      answer: 2,\n      choices: ['true', 'false', 'error']\n    }, {\n      question: 'What will be alerted?',\n      code: \"\\nlet str = \\\"Hello World!\\\";\\nstr.something = 2;\\nalert(str.something);\\n                \",\n      answer: 3,\n      choices: ['Hello World', '2', 'error', 'undefined']\n    }, {\n      question: 'What is the result of this expression?',\n      code: \"\\n[].push(1,2).unshift(3).join();\\n                \",\n      answer: 2,\n      choices: ['3, 1, 2', '3, 1', 'error', 'undefined']\n    }, {\n      question: 'What will be alerted?',\n      code: \"\\nf.call(f);\\n\\nfunction f() {\\n    alert( this );\\n}\\n                \",\n      answer: 0,\n      choices: ['f function code', '[object Object]', 'error', 'window']\n    }, {\n      question: 'Which value will be alerted?',\n      code: \"\\nfunction User() { }\\nUser.prototype = { admin: false };\\n\\nlet user = new User();\\n\\nUser.prototype = { admin: true };\\n\\nalert(user.admin);\\n                \",\n      answer: 1,\n      choices: ['true', 'false', 'undefined']\n    }, {\n      question: 'What happens if you alert true + false?',\n      code: \"\\nconsole.log(true + false);\\n                \",\n      answer: 2,\n      choices: ['\"truefalse\"', 'NaN', '1', '0']\n    }, {\n      question: 'What is the result of this expression?',\n      code: \"\\n[] + false + null + true\\n                \",\n      answer: 0,\n      choices: ['\"falsenulltrue\"', 'NaN', 'error', 'NaNtrue']\n    }];\n  }\n\n  _createClass(QuestionsData, [{\n    key: \"init\",\n    value: function init(count) {\n      return this.questions[count];\n    }\n  }]);\n\n  return QuestionsData;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionsData);\n\n//# sourceURL=webpack:///./js/data/questions-data.js?");

/***/ }),

/***/ "./js/factory/index.js":
/*!*****************************!*\
  !*** ./js/factory/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./js/controller/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ \"./js/data/index.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view */ \"./js/view/index.js\");\n\n\n\nvar controllerArr = Object.keys(_controller__WEBPACK_IMPORTED_MODULE_0__);\nvar factory = {};\ncontrollerArr.forEach(function (key) {\n  var DataItem = _data__WEBPACK_IMPORTED_MODULE_1__[key];\n  var ViewItem = _view__WEBPACK_IMPORTED_MODULE_2__[key];\n  var ControllerItem = _controller__WEBPACK_IMPORTED_MODULE_0__[key];\n  var data = new DataItem();\n  var controller = new ControllerItem(data);\n  var view = new ViewItem(controller);\n  factory[key] = view;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (factory);\n\n//# sourceURL=webpack:///./js/factory/index.js?");

/***/ }),

/***/ "./js/view/index.js":
/*!**************************!*\
  !*** ./js/view/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _questions_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions-view */ \"./js/view/questions-view.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_questions_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/view/index.js?");

/***/ }),

/***/ "./js/view/mistakes-view.js":
/*!**********************************!*\
  !*** ./js/view/mistakes-view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction showSection() {\n  var section = document.querySelector('.mistakes__section');\n  section.style.display = 'block';\n}\n\nfunction changeMainTagClass() {\n  var main = document.getElementsByTagName('main')[0];\n  main.classList.replace('questions', 'mistakes');\n}\n\nvar MistakesView = /*#__PURE__*/function () {\n  function MistakesView() {\n    _classCallCheck(this, MistakesView);\n\n    this.mistakes = [];\n    this.container = document.querySelector('.mistakes__list');\n    this.result = document.querySelector('.mistakes__title');\n    this.codeSelector = '.mistakes__js';\n  }\n\n  _createClass(MistakesView, [{\n    key: \"showWinResult\",\n    value: function showWinResult() {\n      this.container.insertAdjacentHTML('afterbegin', \"\\n            <li class=\\\"mistakes__win win-result\\\">\\n                <p class=\\\"win-result__text\\\">\\n                    Congratulations! Your result is 100%!\\n                </p>\\n            </li>\\n        \");\n    }\n  }, {\n    key: \"init\",\n    value: function init(mistakes, questionsCount) {\n      var _this = this;\n\n      this.mistakes = mistakes;\n      changeMainTagClass();\n      showSection();\n\n      if (!this.mistakes.length) {\n        this.showWinResult();\n        return;\n      }\n\n      this.result.innerHTML = MistakesView.mistakeResultTemplate(mistakes.length, questionsCount);\n      if (!this.mistakes.length) this.showWinResult();\n      this.mistakes.forEach(function (mistake) {\n        var html = MistakesView.mistakeHTMLTemplate(mistake);\n\n        _this.container.insertAdjacentHTML('beforeend', html);\n      }); // eslint-disable-next-line no-undef\n\n      this.codeContainer.forEach(function (container) {\n        return hljs.highlightBlock(container);\n      });\n    }\n  }, {\n    key: \"codeContainer\",\n    get: function get() {\n      return document.querySelectorAll(this.codeSelector);\n    }\n  }], [{\n    key: \"mistakeHTMLTemplate\",\n    value: function mistakeHTMLTemplate() {\n      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n          code = _ref.code,\n          wrong = _ref.wrong,\n          answer = _ref.answer,\n          choices = _ref.choices,\n          question = _ref.question;\n\n      return \"\\n            <li class=\\\"mistakes__item\\\">\\n                <h3 class=\\\"mistakes__question\\\">\".concat(question, \"</h3>\\n                <div class=\\\"mistakes__code\\\">\\n                    <pre>\\n                        <code class=\\\"hljs javascript mistakes__js\\\">\\n                            \").concat(code, \"\\n                        </code>\\n                    </pre>\\n                </div>\\n                <div class=\\\"mistakes__answers\\\">\\n                    <div class=\\\"mistakes__wrong\\\">\\n                        Your answer is\\n                        <span class=\\\"mistakes__answer\\\">\").concat(choices[wrong], \"</span>\\n                    </div>\\n                    <div class=\\\"mistakes__correct\\\">\\n                        Correct answer is\\n                        <span class=\\\"mistakes__answer\\\">\").concat(choices[answer], \"</span>\\n                    </div>\\n                </div>\\n            </li>\\n        \");\n    }\n  }, {\n    key: \"mistakeResultTemplate\",\n    value: function mistakeResultTemplate(wrongCount, questionsCount) {\n      var correctCount = questionsCount - wrongCount;\n      var percent = correctCount * 100 / questionsCount;\n      return \"\\n            \".concat(correctCount, \"/\").concat(questionsCount, \" correct answers, \").concat(Math.round(percent), \"% result!\\n        \");\n    }\n  }]);\n\n  return MistakesView;\n}();\n\nvar mistakesView = new MistakesView();\n/* harmony default export */ __webpack_exports__[\"default\"] = (mistakesView);\n\n//# sourceURL=webpack:///./js/view/mistakes-view.js?");

/***/ }),

/***/ "./js/view/questions-view.js":
/*!***********************************!*\
  !*** ./js/view/questions-view.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mistakes_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mistakes-view */ \"./js/view/mistakes-view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar QuestionsView = /*#__PURE__*/function () {\n  function QuestionsView(controller) {\n    _classCallCheck(this, QuestionsView);\n\n    this.controller = controller;\n    this.counter = 0;\n    this.codeContainer = document.querySelector('.question__js');\n    this.choiceContainer = document.querySelector('.question__list');\n    this.title = document.querySelector('.question__title');\n    this.mistakes = [];\n  }\n\n  _createClass(QuestionsView, [{\n    key: \"clearContainer\",\n    value: function clearContainer() {\n      this.codeContainer.innerHTML = '';\n      this.choiceContainer.innerHTML = '';\n      this.title.innerHTML = '';\n    }\n  }, {\n    key: \"initHTML\",\n    value: function initHTML(question) {\n      var _this = this;\n\n      this.title.innerHTML = question.question;\n      this.codeContainer.innerHTML = question.code; // eslint-disable-next-line no-undef\n\n      hljs.highlightBlock(this.codeContainer);\n      question.choices.forEach(function (choice, i) {\n        var html = QuestionsView.choiceTemplate(choice, i);\n\n        _this.choiceContainer.insertAdjacentHTML('beforeend', html);\n      });\n    }\n  }, {\n    key: \"checkValue\",\n    value: function checkValue(value) {\n      var isTrueAnswer = String(this.question.answer) === value;\n      this.question.wrong = value;\n      if (!isTrueAnswer) this.mistakes.push(this.question);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var question = this.controller.init(this.counter);\n      this.clearContainer();\n\n      if (!question) {\n        document.querySelector('.question').innerHTML = '';\n        _mistakes_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init(this.mistakes, this.counter);\n        return;\n      }\n\n      this.question = question;\n      this.initHTML(question);\n      this.counter++;\n    }\n  }], [{\n    key: \"choiceTemplate\",\n    value: function choiceTemplate(value, i) {\n      return \"\\n            <li class=\\\"question__item\\\" tab-index=\\\"1\\\">\\n                <label>\\n                    <input type=\\\"radio\\\" value=\\\"\".concat(i, \"\\\" name=\\\"choice\\\" class=\\\"question__choice\\\">\\n                    <span class=\\\"question__styles\\\"></span>\\n                    \").concat(value, \"\\n                </label>\\n            </li>\\n        \");\n    }\n  }]);\n\n  return QuestionsView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionsView);\n\n//# sourceURL=webpack:///./js/view/questions-view.js?");

/***/ })

/******/ });