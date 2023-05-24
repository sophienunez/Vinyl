/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Strore/actions.ts":
/*!*******************************!*\
  !*** ./src/Strore/actions.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navigate\": () => (/* binding */ navigate)\n/* harmony export */ });\nconst navigate = (screen) => {\n    return {\n        type: \"NAVIGATE\",\n        payload: screen,\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/actions.ts?");

/***/ }),

/***/ "./src/Strore/index.ts":
/*!*****************************!*\
  !*** ./src/Strore/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n/* harmony import */ var _Strore_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/reducer */ \"./src/Strore/reducer.ts\");\n// import { reducer } from \"./reducer\";\n\n\nconst emptyState = {\n    screen: _Types_types__WEBPACK_IMPORTED_MODULE_0__.Screens.LOGIN,\n};\nlet appState = emptyState;\nlet observers = [];\nconst notifyObservers = () => observers.forEach((o) => o.render());\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    const newState = (0,_Strore_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)(action, clone);\n    appState = newState;\n    notifyObservers();\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/index.ts?");

/***/ }),

/***/ "./src/Strore/reducer.ts":
/*!*******************************!*\
  !*** ./src/Strore/reducer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\nconst reducer = (action, prevState) => {\n    switch (action.type) {\n        case \"NAVIGATE\":\n            prevState.screen = action.payload;\n            break;\n    }\n    return prevState;\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Strore/reducer.ts?");

/***/ }),

/***/ "./src/Types/types.ts":
/*!****************************!*\
  !*** ./src/Types/types.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Screens\": () => (/* binding */ Screens)\n/* harmony export */ });\nvar Screens;\n(function (Screens) {\n    Screens[\"HOME\"] = \"HOME\";\n    Screens[\"REGISTER\"] = \"REGISTER\";\n    Screens[\"LOGIN\"] = \"LOGIN\";\n    Screens[\"LIBRARY\"] = \"LIBRARY\";\n    Screens[\"ADD\"] = \"ADD\";\n    Screens[\"LIKES\"] = \"LIKES\";\n})(Screens || (Screens = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/Types/types.ts?");

/***/ }),

/***/ "./src/components/CardsLike/CardsLike.ts":
/*!***********************************************!*\
  !*** ./src/components/CardsLike/CardsLike.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsLikeAttributes\": () => (/* binding */ CardsLikeAttributes),\n/* harmony export */   \"default\": () => (/* binding */ CardsLike)\n/* harmony export */ });\nvar CardsLikeAttributes;\n(function (CardsLikeAttributes) {\n    CardsLikeAttributes[\"card_img\"] = \"card_img\";\n    CardsLikeAttributes[\"artist_name\"] = \"artist_name\";\n    CardsLikeAttributes[\"song_name\"] = \"song_name\";\n})(CardsLikeAttributes || (CardsLikeAttributes = {}));\nclass CardsLike extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            card_img: null,\n            artist_name: null,\n            song_name: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/components/CardsLike/CardsLike.css\">\r\n            <h1>${this.artist_name}</h1>\r\n            <h1>${this.song_name}</h1>\r\n            <img src=\"${this.card_img}\" class=\"like-img\"></img>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-cardslike\", CardsLike);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/CardsLike/CardsLike.ts?");

/***/ }),

/***/ "./src/components/CardsSuggestion/CardsSuggestion.ts":
/*!***********************************************************!*\
  !*** ./src/components/CardsSuggestion/CardsSuggestion.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardsSuggestionAttributes\": () => (/* binding */ CardsSuggestionAttributes),\n/* harmony export */   \"default\": () => (/* binding */ CardsSuggestion)\n/* harmony export */ });\nvar CardsSuggestionAttributes;\n(function (CardsSuggestionAttributes) {\n    CardsSuggestionAttributes[\"card_img\"] = \"card_img\";\n    CardsSuggestionAttributes[\"song_name\"] = \"song_name\";\n    CardsSuggestionAttributes[\"album_name\"] = \"album_name\";\n})(CardsSuggestionAttributes || (CardsSuggestionAttributes = {}));\nclass CardsSuggestion extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            card_img: null,\n            album_name: null,\n            song_name: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n            <link rel=\"stylesheet\" href=\"../src/components/CardsSuggestion/CardsSuggestion.css\">\r\n            <h1>${this.album_name}</h1>\r\n            <h1>${this.song_name}</h1>\r\n            <img src=\"${this.card_img}\" class=\"suggestion-img\"></img>\r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-cardssuggestion\", CardsSuggestion);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/CardsSuggestion/CardsSuggestion.ts?");

/***/ }),

/***/ "./src/components/Library/Library.ts":
/*!*******************************************!*\
  !*** ./src/components/Library/Library.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LibraryAttributes\": () => (/* binding */ LibraryAttributes),\n/* harmony export */   \"default\": () => (/* binding */ Library)\n/* harmony export */ });\nvar LibraryAttributes;\n(function (LibraryAttributes) {\n    LibraryAttributes[\"card_img\"] = \"card_img\";\n    LibraryAttributes[\"album_name\"] = \"album_name\";\n    LibraryAttributes[\"artist_name\"] = \"artist_name\";\n})(LibraryAttributes || (LibraryAttributes = {}));\nclass Library extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            card_img: null,\n            album_name: null,\n            artist_name: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\r\n            \r\n        <link rel=\"stylesheet\" href=\"../src/components/Nav/Nav.css\">\r\n        <div id=\"sidebar\">\r\n        <nav class=\"nav\">\r\n        <h2>Vinyl</h2>\r\n        <h3>Hello!</h3>\r\n         <ul>\r\n         <input type=\"search\" class=\"search\" placeholder=\"Search\">\r\n         <li>Home</li>\r\n         <button class=\"tolibrary\">Library</button>\r\n         <button class=\"toadd\">+</button>\r\n         <button class=\"tolikes\"><3</button>\r\n         </ul>\r\n        </nav>\r\n        </div>\r\n\r\n        <h2>LIBRARY</h2>\r\n            \r\n            `;\n        }\n    }\n}\ncustomElements.define(\"my-library\", Library);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Library/Library.ts?");

/***/ }),

/***/ "./src/components/Likes/Likes.ts":
/*!***************************************!*\
  !*** ./src/components/Likes/Likes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LikesAttributes\": () => (/* binding */ LikesAttributes),\n/* harmony export */   \"default\": () => (/* binding */ Likes)\n/* harmony export */ });\n/* harmony import */ var _CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CardsLike/CardsLike */ \"./src/components/CardsLike/CardsLike.ts\");\n\nvar LikesAttributes;\n(function (LikesAttributes) {\n    LikesAttributes[\"card_img\"] = \"card_img\";\n    LikesAttributes[\"song_name\"] = \"song_name\";\n    LikesAttributes[\"artist_name\"] = \"artist_name\";\n})(LikesAttributes || (LikesAttributes = {}));\nclass Likes extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            card_img: null,\n            song_name: null,\n            artist_name: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.card_img = \"\";\n        this.song_name = \"\";\n        this.artist_name = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const container = this.ownerDocument.createElement('section');\n            const cardslike = this.ownerDocument.createElement('my-cardslike');\n            cardslike.setAttribute(_CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_0__.CardsLikeAttributes.card_img, this.card_img);\n            cardslike.setAttribute(_CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_0__.CardsLikeAttributes.song_name, this.song_name);\n            cardslike.setAttribute(_CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_0__.CardsLikeAttributes.artist_name, this.artist_name);\n            container.appendChild(cardslike);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n        }\n    }\n}\ncustomElements.define(\"my-likes\", Likes);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Likes/Likes.ts?");

/***/ }),

/***/ "./src/components/Nav/Nav.ts":
/*!***********************************!*\
  !*** ./src/components/Nav/Nav.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nav)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Nav extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleHomeButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME));\n        console.log('Click back to home');\n    }\n    handleLibraryButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LIBRARY));\n        console.log('Click handle to library button');\n    }\n    handleAddButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.ADD));\n        console.log('Click handle to add button');\n    }\n    handleLikesButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LIKES));\n        console.log('Click handle to likes button');\n    }\n    render() {\n        var _a, _b, _c, _d;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/Nav/Nav.css\">\r\n        <div id=\"sidebar\">\r\n        <nav class=\"nav\">\r\n        <h2>Vinyl</h2>\r\n        <h3>Hello!</h3>\r\n         <ul>\r\n         <input type=\"search\" class=\"search\" placeholder=\"Search\">\r\n         <button class=\"tohome\">Home</button>\r\n         <button class=\"tolibrary\">Library</button>\r\n         <button class=\"toadd\">+</button>\r\n         <button class=\"tolikes\"><3</button>\r\n         </ul>\r\n        </nav>\r\n        </div>\r\n        `;\n        const btnhome = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.tohome');\n        console.log(btnhome);\n        btnhome === null || btnhome === void 0 ? void 0 : btnhome.addEventListener(\"click\", this.handleHomeButton);\n        const button = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.tolibrary');\n        console.log(button);\n        button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", this.handleLibraryButton);\n        const btn = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('.toadd');\n        console.log(btn);\n        btn === null || btn === void 0 ? void 0 : btn.addEventListener(\"click\", this.handleAddButton);\n        const btnlikes = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('.tolikes');\n        console.log(btnlikes);\n        btnlikes === null || btnlikes === void 0 ? void 0 : btnlikes.addEventListener(\"click\", this.handleLikesButton);\n    }\n}\ncustomElements.define(\"my-nav\", Nav);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Nav/Nav.ts?");

/***/ }),

/***/ "./src/components/Player/Player.ts":
/*!*****************************************!*\
  !*** ./src/components/Player/Player.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/components/Player/Player.css\">\r\n        <section class=\"player\">\r\n        <img class=\"player-img\" src=\"../src/img/cover1.jpg\">\r\n        <div class=\"player-info\">\r\n        <h1>Prisoner</h1>\r\n        <h3>Miley Cyrus</h3>\r\n        </div>\r\n        </section>\r\n        `;\n    }\n}\ncustomElements.define(\"my-player\", Player);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Player/Player.ts?");

/***/ }),

/***/ "./src/components/Suggestions/Suggestions.ts":
/*!***************************************************!*\
  !*** ./src/components/Suggestions/Suggestions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SuggestionAttributes\": () => (/* binding */ SuggestionAttributes),\n/* harmony export */   \"default\": () => (/* binding */ Suggestions)\n/* harmony export */ });\n/* harmony import */ var _CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CardsSuggestion/CardsSuggestion */ \"./src/components/CardsSuggestion/CardsSuggestion.ts\");\n\nvar SuggestionAttributes;\n(function (SuggestionAttributes) {\n    SuggestionAttributes[\"card_img\"] = \"card_img\";\n    SuggestionAttributes[\"song_name\"] = \"song_name\";\n    SuggestionAttributes[\"album_name\"] = \"album_name\";\n})(SuggestionAttributes || (SuggestionAttributes = {}));\nclass Suggestions extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            card_img: null,\n            song_name: null,\n            album_name: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.card_img = \"\";\n        this.song_name = \"\";\n        this.album_name = \"\";\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ``;\n        const container = this.ownerDocument.createElement('section');\n        const cardsFigure = this.ownerDocument.createElement('my-cardssuggestion');\n        cardsFigure.setAttribute(_CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_0__.CardsSuggestionAttributes.card_img, this.card_img);\n        cardsFigure.setAttribute(_CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_0__.CardsSuggestionAttributes.song_name, this.song_name);\n        cardsFigure.setAttribute(_CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_0__.CardsSuggestionAttributes.album_name, this.album_name);\n        container.appendChild(cardsFigure);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.append(container);\n    }\n}\ncustomElements.define('my-suggestions', Suggestions);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Suggestions/Suggestions.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Add\": () => (/* reexport safe */ _screens_add__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"CardsLike\": () => (/* reexport safe */ _CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"CardsSuggestion\": () => (/* reexport safe */ _CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"Library\": () => (/* reexport safe */ _components_Library_Library__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Likes\": () => (/* reexport safe */ _components_Likes_Likes__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _screens_login__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"Nav\": () => (/* reexport safe */ _Nav_Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Player\": () => (/* reexport safe */ _Player_Player__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"Register\": () => (/* reexport safe */ _screens_register__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Suggestions\": () => (/* reexport safe */ _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Nav_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav/Nav */ \"./src/components/Nav/Nav.ts\");\n/* harmony import */ var _screens_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/register */ \"./src/screens/register.ts\");\n/* harmony import */ var _screens_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/add */ \"./src/screens/add.ts\");\n/* harmony import */ var _components_Library_Library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Library/Library */ \"./src/components/Library/Library.ts\");\n/* harmony import */ var _components_Likes_Likes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Likes/Likes */ \"./src/components/Likes/Likes.ts\");\n/* harmony import */ var _screens_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../screens/login */ \"./src/screens/login.ts\");\n/* harmony import */ var _CardsLike_CardsLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardsLike/CardsLike */ \"./src/components/CardsLike/CardsLike.ts\");\n/* harmony import */ var _CardsSuggestion_CardsSuggestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardsSuggestion/CardsSuggestion */ \"./src/components/CardsSuggestion/CardsSuggestion.ts\");\n/* harmony import */ var _Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Suggestions/Suggestions */ \"./src/components/Suggestions/Suggestions.ts\");\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player/Player */ \"./src/components/Player/Player.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\n    {\n        song_name: \"prisioner\",\n        artist_name: \"miley cyrus\",\n        album_name: \"plastic hearts\",\n        card_img: \"../src/img/cover1.jpg\",\n    },\n    {\n        song_name: \"fairy song\",\n        artist_name: \"beabadoobee\",\n        album_name: \"beatopia\",\n        card_img: \"../src/img/cover2.png\",\n    },\n    {\n        song_name: \"brooklyn baby\",\n        artist_name: \"lana del rey\",\n        album_name: \"ultraviolence\",\n        card_img: \"../src/img/cover3.jfif\",\n    },\n];\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/data.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/export */ \"./src/screens/export.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_2__.addObserver)(this);\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        switch (_Strore_index__WEBPACK_IMPORTED_MODULE_2__.appState.screen) {\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LOGIN:\n                this.shadowRoot.innerHTML = `<my-login></my-login>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.REGISTER:\n                this.shadowRoot.innerHTML = `<my-register></my-register>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME:\n                this.shadowRoot.innerHTML = `<my-home></my-home>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LIBRARY:\n                this.shadowRoot.innerHTML = `<my-library></my-library>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.ADD:\n                this.shadowRoot.innerHTML = `<my-add></my-add>`;\n                break;\n            case _Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.LIKES:\n                this.shadowRoot.innerHTML = `<my-likes></my-likes>`;\n                break;\n            default:\n                break;\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/add.ts":
/*!****************************!*\
  !*** ./src/screens/add.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Add)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n\nclass Add extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        \r\n        <link rel=\"stylesheet\" href=\"../src/screens/add.css\">\r\n        <h2>Aquí Puedes Subir Tus Favoritos</h2>        \r\n        <input type=\"text\" placeholder=\"Producto\">\r\n        <input type=\"text\" placeholder=\"Precio\">\r\n        <button class=\"toupload\">Subir</button>\r\n        `;\n    }\n}\ncustomElements.define(\"my-add\", Add);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/add.ts?");

/***/ }),

/***/ "./src/screens/export.ts":
/*!*******************************!*\
  !*** ./src/screens/export.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Login\": () => (/* reexport safe */ _login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Register\": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/screens/home.ts\");\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ \"./src/screens/login.ts\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./src/screens/register.ts\");\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/export.ts?");

/***/ }),

/***/ "./src/screens/home.ts":
/*!*****************************!*\
  !*** ./src/screens/home.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _components_Likes_Likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Likes/Likes */ \"./src/components/Likes/Likes.ts\");\n/* harmony import */ var _components_Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Suggestions/Suggestions */ \"./src/components/Suggestions/Suggestions.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data */ \"./src/data.ts\");\n\n\n\n\nclass Home extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        \r\n        <link rel=\"stylesheet\" href=\"../src/screens/home.css\">\r\n        <my-nav></my-nav>\r\n        <my-player></my-player>\r\n        `;\n        _data__WEBPACK_IMPORTED_MODULE_3__.data.forEach((elem) => {\n            var _a, _b;\n            const cardLike = this.ownerDocument.createElement(\"my-likes\");\n            cardLike.classList.add(\"cards-like-container\");\n            cardLike.setAttribute(_components_Likes_Likes__WEBPACK_IMPORTED_MODULE_0__.LikesAttributes.card_img, elem.card_img);\n            cardLike.setAttribute(_components_Likes_Likes__WEBPACK_IMPORTED_MODULE_0__.LikesAttributes.song_name, elem.song_name);\n            cardLike.setAttribute(_components_Likes_Likes__WEBPACK_IMPORTED_MODULE_0__.LikesAttributes.artist_name, elem.artist_name);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(cardLike);\n            const cardSuggestion = this.ownerDocument.createElement(\"my-suggestions\");\n            cardSuggestion.setAttribute(_components_Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionAttributes.card_img, elem.card_img);\n            cardSuggestion.setAttribute(_components_Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionAttributes.song_name, elem.song_name);\n            cardSuggestion.setAttribute(_components_Suggestions_Suggestions__WEBPACK_IMPORTED_MODULE_1__.SuggestionAttributes.album_name, elem.album_name);\n            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(cardSuggestion);\n        });\n    }\n}\ncustomElements.define(\"my-home\", Home);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/home.ts?");

/***/ }),

/***/ "./src/screens/login.ts":
/*!******************************!*\
  !*** ./src/screens/login.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Login extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleLoginButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME));\n        console.log('Click handle button');\n    }\n    handletoRegisterButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.REGISTER));\n        console.log('Click button to Register');\n    }\n    render() {\n        var _a, _b;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/screens/login.css\">\r\n        <section>\r\n        \r\n                <div class=\"form-box\">\r\n                    <div class=\"form-value\">\r\n                        <form action=\"\">\r\n                            <h2>Log In</h2>\r\n                            \r\n                            <div class=\"inputbox\">\r\n                               <input type=\"email\" required>\r\n                               <label for=\"\">Email</label>\r\n                            </div>\r\n        \r\n                            <div class=\"inputbox\">\r\n                               <input type=\"password\" required>\r\n                               <label for=\"\">Password</label>\r\n                            </div>\r\n        \r\n\r\n                            <div class=\"forget\">\r\n                               <label for=\"\">\r\n                               <a href=\"#\">Did You Forget Your Password</a>\r\n                            </div>\r\n                            <div class=\"registered\">\r\n                               <label for=\"\">\r\n                               <a class=\"registro\">¿No tienes una cuenta? Registrate</a>\r\n                            </div>\r\n                            <button class=\"home\">Continue</button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n        </section>\r\n        \r\n        `;\n        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.home');\n        console.log(button);\n        button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", this.handleLoginButton);\n        const buttontoregister = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('.registro');\n        console.log(button);\n        buttontoregister === null || buttontoregister === void 0 ? void 0 : buttontoregister.addEventListener(\"click\", this.handletoRegisterButton);\n    }\n}\ncustomElements.define(\"my-login\", Login);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/login.ts?");

/***/ }),

/***/ "./src/screens/register.ts":
/*!*********************************!*\
  !*** ./src/screens/register.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _Strore_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Strore/index */ \"./src/Strore/index.ts\");\n/* harmony import */ var _Strore_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Strore/actions */ \"./src/Strore/actions.ts\");\n/* harmony import */ var _Types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Types/types */ \"./src/Types/types.ts\");\n\n\n\n\nclass Register extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    handleRegisterButton(event) {\n        event === null || event === void 0 ? void 0 : event.preventDefault();\n        (0,_Strore_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)((0,_Strore_actions__WEBPACK_IMPORTED_MODULE_2__.navigate)(_Types_types__WEBPACK_IMPORTED_MODULE_3__.Screens.HOME));\n        console.log('Click handle button');\n    }\n    //const btn = this.shadowRoot?.querySelector(\"button\");\n    //btn?.addEventListener(\"click\", ()=> {\n    //const event = \n    //new CustomEvent(\"user-registered\", {\n    //   composed: true\n    //});\n    //this.dispatchEvent(event);\n    //alert(\"User-created\");\n    //console.log(\"Se registró con exito\");\n    //})\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <link rel=\"stylesheet\" href=\"../src/screens/register.css\">\r\n<section>\r\n\r\n        <div class=\"form-box\">\r\n            <div class=\"form-value\">\r\n                <form action=\"\">\r\n                    <h2>Register</h2>\r\n                    \r\n                    <div class=\"inputbox\">\r\n                       <input type=\"email\" required>\r\n                       <label for=\"\">Email</label>\r\n                    </div>\r\n\r\n                    <div class=\"inputbox\">\r\n                       <input type=\"text\" required>\r\n                       <label for=\"\">Name</label>\r\n                    </div>\r\n\r\n                    <div class=\"inputbox\">\r\n                       <input type=\"password\" required>\r\n                       <label for=\"\">Password</label>\r\n                    </div>\r\n\r\n                    <div class=\"inputbox\">\r\n                       <input type=\"password\" required>\r\n                       <label for=\"\">Confirme Password</label>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"forget\">\r\n                       <label for=\"\"><input type=\"checkbox\">\r\n                       <a href=\"#\">I agree</a>\r\n                    </div>\r\n                    <button class=\"toregister\">Continue</button>\r\n                    \r\n\r\n                </form>\r\n            </div>\r\n\r\n        </div>\r\n</section>\r\n\r\n        `;\n        const button = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.toregister');\n        console.log(button);\n        button === null || button === void 0 ? void 0 : button.addEventListener(\"click\", this.handleRegisterButton);\n    }\n}\ncustomElements.define(\"my-register\", Register);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/register.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;