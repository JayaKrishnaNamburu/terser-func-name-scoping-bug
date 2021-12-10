"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{595:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var slicedToArray=__webpack_require__(444),react=__webpack_require__(378),AppStateContext=(0,react.createContext)(null),AppStateProvider=function(_ref){var children=_ref.children,_useState=(0,react.useState)({title:"teleport-project-react"}),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1];return react.createElement(AppStateContext.Provider,{value:{state:state,setState:setState}},children)},react_dom=__webpack_require__(542),react_router_dom_min=__webpack_require__(53),injectStylesIntoStyleTag=__webpack_require__(892),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__(760),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__(311),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__(192),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__(60),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__(865),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style_module=__webpack_require__(320),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(style_module.Z,options);style_module.Z&&style_module.Z.locals&&style_module.Z.locals;__webpack_require__(432);var home_module=__webpack_require__(333),home_module_options={};home_module_options.styleTagTransform=styleTagTransform_default(),home_module_options.setAttributes=setAttributesWithoutAttributes_default(),home_module_options.insert=insertBySelector_default().bind(null,"head"),home_module_options.domAPI=styleDomAPI_default(),home_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(home_module.Z,home_module_options);home_module.Z&&home_module.Z.locals&&home_module.Z.locals;var _login,asyncToGenerator=__webpack_require__(791),regenerator=__webpack_require__(135),regenerator_default=__webpack_require__.n(regenerator);const auth_0={login:(_login=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(email,password){return regenerator_default().wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:console.log(email,password);case 1:case"end":return _context.stop()}}),_callee)}))),function(_x,_x2){return _login.apply(this,arguments)})};const login=function(){var loginUser=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,auth_0.login();case 2:case"end":return _context.stop()}}),_callee)})));return function(){return _ref.apply(this,arguments)}}();return(0,react.useEffect)((function(){loginUser()}),[]),react.createElement("div",null,"Login Page")};var App=function(){return react.createElement(react_router_dom_min.VK,null,react.createElement(AppStateProvider,null,react.createElement(react_router_dom_min.AW,{exact:!0,component:login,path:"/"})))};react_dom.render(react.createElement(App,null),document.getElementById("app"))},333:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(933),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(476),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ld9b5pNL5jOmEJNkirxd {\n  width: 100%;\n  display: flex;\n  overflow: auto;\n  min-height: 100vh;\n  align-items: center;\n  flex-direction: column;\n}\n",""]),___CSS_LOADER_EXPORT___.locals={container:"ld9b5pNL5jOmEJNkirxd"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},320:(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(933),_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(476),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,":root {\n  --dl-color-gray-500: #595959;\n  --dl-color-gray-700: #999999;\n  --dl-color-gray-900: #D9D9D9;\n  --dl-size-size-large: 144px;\n  --dl-size-size-small: 48px;\n  --dl-color-danger-300: #A22020;\n  --dl-color-danger-500: #BF2626;\n  --dl-color-danger-700: #E14747;\n  --dl-color-gray-black: #000000;\n  --dl-color-gray-white: #FFFFFF;\n  --dl-size-size-medium: 96px;\n  --dl-size-size-xlarge: 192px;\n  --dl-size-size-xsmall: 16px;\n  --dl-space-space-unit: 16px;\n  --dl-color-primary-100: #003EB3;\n  --dl-color-primary-300: #0074F0;\n  --dl-color-primary-500: #14A9FF;\n  --dl-color-primary-700: #85DCFF;\n  --dl-color-success-300: #199033;\n  --dl-color-success-500: #32A94C;\n  --dl-color-success-700: #4CC366;\n  --dl-size-size-xxlarge: 288px;\n  --dl-size-size-maxwidth: 1400px;\n  --dl-radius-radius-round: 50%;\n  --dl-space-space-halfunit: 8px;\n  --dl-space-space-sixunits: 96px;\n  --dl-space-space-twounits: 32px;\n  --dl-radius-radius-radius2: 2px;\n  --dl-radius-radius-radius4: 4px;\n  --dl-radius-radius-radius8: 8px;\n  --dl-space-space-fiveunits: 80px;\n  --dl-space-space-fourunits: 64px;\n  --dl-space-space-threeunits: 48px;\n  --dl-space-space-oneandhalfunits: 24px;\n}\n.oExvbczZ7vE7xMNEcN0j {\n  color: #000000;\n  color: var(--dl-color-gray-black);\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  border-color: #000000;\n  border-color: var(--dl-color-gray-black);\n  border-width: 1px;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  background-color: var(--dl-color-gray-white);\n}\n.lKotFFtoSgw7zOK1_ia8 {\n  color: #000000;\n  color: var(--dl-color-gray-black);\n  cursor: auto;\n  padding: 0.5rem 1rem;\n  border-color: #000000;\n  border-color: var(--dl-color-gray-black);\n  border-width: 1px;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  background-color: var(--dl-color-gray-white);\n}\n.M6vwwAp2S7R4kKYmy2Nb {\n  color: #000000;\n  color: var(--dl-color-gray-black);\n  cursor: auto;\n  padding: 0.5rem;\n  border-color: #000000;\n  border-color: var(--dl-color-gray-black);\n  border-width: 1px;\n  border-radius: 4px;\n  background-color: #FFFFFF;\n  background-color: var(--dl-color-gray-white);\n}\n.cmXrKhn94jIJZRv55qkL {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.zxWYzn9H7Do4kB6sPLEU {\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100vh;\n  display: none;\n  padding: 32px;\n  z-index: 100;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #fff;\n}\n.bJgQeimn2gJJ_nVC4OrD {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.M0FzJay5Qp3mmxYirJfO {\n  display: flex !important;\n}\n.AMXV7tGA3UEkIF_u3Hl8 {\n  font-size: 16px;\n  font-family: Inter;\n  font-weight: 400;\n  line-height: 1.15;\n  text-transform: none;\n  text-decoration: none;\n}\n.RzsXg1KPbvXhCb8LieVt {\n  font-size: 32px;\n  font-family: Inter;\n  font-weight: 700;\n  line-height: 1.15;\n  text-transform: none;\n  text-decoration: none;\n}\n",""]),___CSS_LOADER_EXPORT___.locals={button:"oExvbczZ7vE7xMNEcN0j",input:"lKotFFtoSgw7zOK1_ia8",textarea:"M6vwwAp2S7R4kKYmy2Nb","teleport-menu-burger":"cmXrKhn94jIJZRv55qkL","teleport-menu-mobile":"zxWYzn9H7Do4kB6sPLEU","teleport-menu-close":"bJgQeimn2gJJ_nVC4OrD","teleport-show":"M0FzJay5Qp3mmxYirJfO",content:"AMXV7tGA3UEkIF_u3Hl8",heading:"RzsXg1KPbvXhCb8LieVt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}},__webpack_require__=>{__webpack_require__.O(0,[221],(()=>{return moduleId=595,__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);