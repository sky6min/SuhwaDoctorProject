(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{429:function(t,e,c){"use strict";c.r(e);c(5),c(4),c(2),c(1),c(6),c(3),c(7);var r=c(0),o=c(82),n=c(56);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var l={data:function(){return{activelayout:o.config.sidebar_layout}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({activerightsidebarmenu:function(t){return t.common.activerightsidebarmenu},togglerightside:function(t){return t.common.togglerightside}})),methods:{activeLayout:function(t){this.activelayout=t,(document.getElementById("body").classList.contains("dark-sidebar")||document.getElementById("body").classList.contains("dark")||document.getElementById("body").classList.contains("colorfull")||document.getElementById("body").classList.contains("undefined"))&&document.getElementById("body").classList.remove("dark-sidebar","dark","colorfull","undefined"),""==t?document.getElementById("body").classList.add("undefined"):"dark-sidebar"==t?document.getElementById("body").classList.add("dark-sidebar"):"dark"==t?document.getElementById("body").classList.add("dark"):"colorfull"==t&&document.getElementById("body").classList.add("colorfull"),this.$store.dispatch("layout/setsidebar_layout",t),document.querySelector(".app-sidebar").classList.add("active"),document.body.classList.remove("menu-active"),document.body.classList.add("sidebar-active"),this.$store.state.common.togglerightside=!0}}},y=l,v=c(55),component=Object(v.a)(y,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"theme-layout"},[c("h5",[t._v("Layout")]),t._v(" "),c("ul",[c("li",{class:""==t.activelayout?"active":"",attrs:{"data-attr":""},on:{click:function(e){return t.activeLayout("")}}},[c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})]),t._v(" "),c("li",{class:"dark-sidebar"==t.activelayout?"active":"",attrs:{"data-attr":"dark-sidebar"},on:{click:function(e){return t.activeLayout("dark-sidebar")}}},[c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})]),t._v(" "),c("li",{class:"dark"==t.activelayout?"active":"",attrs:{"data-attr":"dark"},on:{click:function(e){return t.activeLayout("dark")}}},[c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})]),t._v(" "),c("li",{class:"colorfull"==t.activelayout?"active":"",attrs:{"data-attr":"colorfull"},on:{click:function(e){return t.activeLayout("colorfull")}}},[c("div",{staticClass:"sidebar"}),t._v(" "),c("div",{staticClass:"sidebar-content"})])])])}),[],!1,null,null,null);e.default=component.exports}}]);