(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{401:function(t,e,c){"use strict";c.r(e);c(5),c(4),c(2),c(1),c(6),c(3),c(7);var n=c(0),r=c(56);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var o={data:function(){return{activeIndex:0,styleObject:{"background-size":"cover","background-position":"center",display:"block"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({allCalls:function(t){return t.common.allCalls},activecalltabs:function(t){return t.common.activecalltabs}})),methods:{getImgUrl:function(path){return c(319)("./"+path)},setActive:function(t){this.activeIndex=t}}},f=o,v=c(55),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",t._l(t.allCalls,(function(e,n){return c("li",{key:e.id,class:{active:t.activeIndex===n},on:{click:function(e){return t.setActive(n)}}},[c("div",{staticClass:"call-box"},[c("div",{staticClass:"profile",class:e.status,style:[{"background-image":"url("+t.getImgUrl(e.img)+")"},t.styleObject]}),t._v(" "),c("div",{staticClass:"details"},[c("h5",[t._v(t._s(e.name))]),t._v(" "),c("h6",[c("feather",{class:{missed:e.misscall},attrs:{type:e.log}}),t._v(t._s(e.time)+"\n        ")],1)]),t._v(" "),c("div",{staticClass:"call-status"},[c("div",{staticClass:"icon-btn button-effect btn-sm",class:e.misscall?"btn-outline-danger":"btn-outline-success"},[c("feather",{attrs:{type:e.log_symbol,size:"15",height:"15"}})],1)])])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);