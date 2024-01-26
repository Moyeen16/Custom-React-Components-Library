"use strict";(self.webpackChunkms_custom_react_components_library=self.webpackChunkms_custom_react_components_library||[]).push([[377],{"./src/components/Menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NestedMenu:()=>NestedMenu,SimpleMenu:()=>SimpleMenu,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Menu_stories});var react=__webpack_require__("./node_modules/react/index.js"),AngleRight_esm=__webpack_require__("./node_modules/@styled-icons/fa-solid/AngleRight/AngleRight.esm.js"),AngleDown_esm=__webpack_require__("./node_modules/@styled-icons/fa-solid/AngleDown/AngleDown.esm.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),style_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Menu/style.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(style_module.Z,options);let Menu_style_module=style_module.Z&&style_module.Z.locals?style_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var MenuItem=function(param){var label=param.label,onClick=param.onClick,menuItems=param.menuItems,handleClick=param.handleClick,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement("li",{className:"relative cursor-pointer bg-menu-options-bg px-1 py rounded-md w-full",onMouseEnter:menuItems.length>0?function(){return setIsOpen(!0)}:function(){},onMouseLeave:menuItems.length>0?function(){return setIsOpen(!1)}:function(){}},react.createElement("div",{className:" w-full flex items-center justify-between px-4 py-2 rounded-md ".concat(0===menuItems.length?"hover:bg-menu-hover":isOpen?"bg-menu-hover":"hover:bg-menu-hover"),onClick:menuItems.length>0?function(){}:onClick?function(){onClick(),handleClick(label)}:function(){return handleClick(label)}},react.createElement("div",null,label),menuItems.length>0&&react.createElement("div",null,react.createElement(AngleRight_esm.R,{size:12,style:{color:"#0f0f0f"}}))),isOpen&&react.createElement("ul",{className:menuItems.length>0?"".concat(Menu_style_module.submenu," min-w-32 max-w-48 border rounded-md shadow-md"):""},menuItems.map(function(item){return react.createElement(MenuItem,_object_spread_props(_object_spread({key:item.label},item),{handleClick:handleClick}))})))},MenuRender=function(props){return react.createElement("ul",{className:"bg-menu-options-bg border rounded-md shadow-md min-w-32 max-w-48"},props.items.map(function(item){return react.createElement(MenuItem,_object_spread_props(_object_spread({key:item.label},item),{handleClick:props.handleClick}))}))},Menu=function(props){var _useState=_sliced_to_array((0,react.useState)(),2),selected=_useState[0],setSelected=_useState[1],_useState1=_sliced_to_array((0,react.useState)(!1),2),showMenu=_useState1[0],setShowMenu=_useState1[1];return react.createElement("div",{className:"min-w-32 max-w-48",onMouseEnter:function(){return setShowMenu(!0)},onMouseLeave:function(){return setShowMenu(!1)}},react.createElement("div",{className:"flex items-center justify-between border-2 rounded-md min-w-32 max-w-48 hover:bg-menu-hover cursor-pointer px-2 py-1 ".concat(showMenu?"border-border-teal":"")},react.createElement("div",{className:""},selected||"Select"),react.createElement("div",null,react.createElement(AngleDown_esm.i,{size:12,style:{color:"#0f0f0f",transform:showMenu?"rotate(-180deg)":"none",transition:"transform 150ms ease"}}))),showMenu&&react.createElement(MenuRender,{items:props.menuItems,showMenu:showMenu,handleClick:function(label){setSelected(label)}}))};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"IMenuItemsProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/index.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"src/components/Menu/index.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}let Menu_stories={title:"Menu",component:Menu,parameters:{layout:"padded"},tags:["autodocs"]};var handleClick=function(text){alert(text)},SimpleMenu={args:{menuItems:[{label:"Home",onClick:function(){return handleClick("/home")},menuItems:[]},{label:"Products",onClick:function(){return handleClick("/products")},menuItems:[]},{label:"About",onClick:function(){return handleClick("/about")},menuItems:[]},{label:"Contact",onClick:function(){return handleClick("/contact")},menuItems:[]}]},render:function(args){return react.createElement(Menu,args)}},NestedMenu={args:{menuItems:[{label:"Home",onClick:function(){return handleClick("/home")},menuItems:[]},{label:"Products",menuItems:[{label:"Product 1",onClick:function(){return handleClick("/products/product_1")},menuItems:[]},{label:"Product 2",onClick:function(){return handleClick("/products/product_2")},menuItems:[]}]},{label:"About",onClick:function(){return handleClick("/about")},menuItems:[]},{label:"Contact",onClick:function(){return handleClick("/contact")},menuItems:[]}]},render:function(args){return react.createElement(Menu,args)}};SimpleMenu.parameters={...SimpleMenu.parameters,docs:{...SimpleMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    menuItems: menuItems1\n  },\n  render: args => <Menu {...args} />\n}",...SimpleMenu.parameters?.docs?.source}}},NestedMenu.parameters={...NestedMenu.parameters,docs:{...NestedMenu.parameters?.docs,source:{originalSource:"{\n  args: {\n    menuItems: menuItems2\n  },\n  render: args => <Menu {...args} />\n}",...NestedMenu.parameters?.docs?.source}}};let __namedExportsOrder=["SimpleMenu","NestedMenu"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Menu/style.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,`.xkdZn7Fw8MK_CZdKIoKR {
	position: absolute;
	left: 100%;
	top: 0;
}
.qobuI8Httj2UmlQ1HewQ {
	max-height: 0px;
	overflow-y: hidden;
	overflow-x: inherit;
	transition: all 1s ease-out;
}
.qobuI8Httj2UmlQ1HewQ.aKofsJq7G0cChsPRNkMX {
	max-height: 500px;
	overflow-y: hidden;
	overflow-x: inherit;
	transition: all 1s ease-in;
}
`,"",{version:3,sources:["webpack://./src/components/Menu/style.module.css"],names:[],mappings:"AAAA;CACC,kBAAkB;CAClB,UAAU;CACV,MAAM;AACP;AACA;CACC,eAAe;CACf,kBAAkB;CAClB,mBAAmB;CACnB,2BAA2B;AAC5B;AACA;CACC,iBAAiB;CACjB,kBAAkB;CAClB,mBAAmB;CACnB,0BAA0B;AAC3B",sourcesContent:[".submenu {\r\n	position: absolute;\r\n	left: 100%;\r\n	top: 0;\r\n}\r\n.menu-items {\r\n	max-height: 0px;\r\n	overflow-y: hidden;\r\n	overflow-x: inherit;\r\n	transition: all 1s ease-out;\r\n}\r\n.menu-items.open {\r\n	max-height: 500px;\r\n	overflow-y: hidden;\r\n	overflow-x: inherit;\r\n	transition: all 1s ease-in;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={submenu:"xkdZn7Fw8MK_CZdKIoKR","menu-items":"qobuI8Httj2UmlQ1HewQ",open:"aKofsJq7G0cChsPRNkMX"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=components-Menu-Menu-stories.5b366148.iframe.bundle.js.map