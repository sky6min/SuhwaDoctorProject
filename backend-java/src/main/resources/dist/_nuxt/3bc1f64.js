(window.webpackJsonp=window.webpackJsonp||[]).push([[204,77],{1396:function(t,e,n){"use strict";n.r(e);var header=n(389),o=n(183),l=n(1378),footer=n(398),r=n(397),c={components:{Header:header.default,Breadcrumbs:o.default,Elements:l.default,Footer:footer.default,TapTop:r.default}},f=n(60),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("client-only",[o("div",{staticClass:"inner-page"},[o("Header")],1),t._v(" "),o("ul",{staticClass:"page-decore"},[o("li",{staticClass:"top"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})]),t._v(" "),o("li",{staticClass:"bottom"},[o("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})])]),t._v(" "),o("Elements"),t._v(" "),o("Footer"),t._v(" "),o("TapTop")],1)],1)}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("f3d01db6",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(378)},386:function(t,e,n){var o=n(53)(!1);o.push([t.i,"#right-nav[data-v-f6a3c714]{position:absolute;right:100px}",""]),t.exports=o},387:function(t,e,n){"use strict";n.r(e);var o={computed:{isLoginGetters:function(){return this.$store.getters["login/isLogin"]},isManagerGetters:function(){return this.$store.getters["login/isManager"]},isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]}},methods:{logout:function(){this.$store.state.login.isLogin=!1,this.$store.state.login.isnLogin=!0,this.$store.state.login.isDoctor=!1,this.$store.state.login.isManager=!1,localStorage.removeItem("vuex"),localStorage.removeItem("jwtToken"),this.$alertify.success("로그아웃되었습니다. 감사합니다!"),this.$nuxt.$options.router.push("/authentication/login")}}},l=(n(385),n(60)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-right-margin",staticStyle:{width:"100%"}},[o("client-only",[o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{attrs:{"justify-content-between":""}},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/online/room"}},[t._v("온라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/room"}},[t._v("오프라인 진료실")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/offline/help"}},[t._v("오프라인 안내페이지")])],1)]),t._v(" "),o("b-navbar-nav",{attrs:{id:"right-nav"}},[t.isLoginGetters?t._e():o("b-nav-item",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1)]),t._v(" "),t.isLoginGetters?t._e():o("b-nav-item",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("회원가입")])],1)]),t._v(" "),t.isLoginGetters?o("b-nav-item",[o("button",{staticClass:"btn btn-primary",attrs:{id:"logout",type:"button"}},[o("a",{on:{click:t.logout}},[t._v("로그아웃")])])]):t._e(),t._v(" "),t.isManagerGetters?o("b-nav-item",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/manager/manager"}},[t._v("관리자페이지")])],1)]):t._e(),t._v(" "),t.isLoginGetters?o("b-dropdown",{attrs:{id:"dropdown-4",text:"mypage"}},[o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/authentication/mypage"}},[t._v("마이페이지")])],1),t._v(" "),!t.isLoginGetters||t.isManagerGetters||t.isDoctorGetters?t._e():o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/reserve/applyReservation"}},[t._v("예약신청")])],1),t._v(" "),t.isLoginGetters&&!t.isManagerGetters?o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/reserve/checkReservation"}},[t._v("예약확인")])],1):t._e(),t._v(" "),o("b-nav-item",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("h5",{staticStyle:{float:"left"}},[t._v("\n                안녕하세요! "+t._s(this.$store.state.login.login.userName)+"\n                "),t.isDoctorGetters?o("span",{staticStyle:{"font-size":"14px"}},[t._v("의사")]):t._e(),t._v("님\n                "),t.isLoginGetters?o("img",{staticClass:"d-inline-block align-text-top",staticStyle:{"border-radius":"50%","margin-left":"10px","padding-bottom":"3px"},attrs:{src:n(382),alt:"",width:"24",height:"20"}}):t._e()])])])],1):t._e()],1)],1)],1)],1)}),[],!1,null,"f6a3c714",null);e.default=component.exports},388:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",staticStyle:{"max-width":"200px"},attrs:{src:n(376),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,n){"use strict";n.r(e);var o=n(388),l=n(387),r={components:{Logo:o.default,Navbar:l.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=n(60),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"home"}},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"landing-header fixed"},[n("div",{staticClass:"main-menu"},[n("div",[n("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[n("Logo"),t._v(" "),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),n("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var o={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},l=n(60),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},398:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-title footer-mobile-title"},[n("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("AI")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              반형동\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              손한기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"onegison95@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/onegi95/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Backend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김영기\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              김창민\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[n("div",{staticClass:"footer-title"},[n("h3",[t._v("Frontend")])]),t._v(" "),n("div",{staticClass:"footer-contant"},[n("p",{staticClass:"text-black align-items-center"},[t._v("\n              윤찬호\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:<아이디>@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/<깃헙아이디>/"}},[n("i",{staticClass:"fa-brands fa-github"})])]),t._v(" "),n("p",{staticClass:"text-black align-items-center"},[t._v("\n              이정원\n              "),n("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"mailto:sorrow4468@gmail.com"}},[n("i",{staticClass:"fa-brands fa-google"})]),t._v(" "),n("a",{staticClass:"icon-btn btn-github button-effect btn-sm",attrs:{href:"https://www.github.com/sorrow4468/"}},[n("i",{staticClass:"fa-brands fa-github"})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:n(377),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:n(377),alt:"footer-back-img"}})])}],l=n(60),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("div",{staticClass:"container footer-main"},[o("div",{staticClass:"row footer-block"},[o("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),o("div",{staticClass:"about-payment footer-contant"},[o("div",{staticClass:"logo"},[o("nuxt-link",{attrs:{to:"/messenger/messenger"}},[o("img",{attrs:{src:n(376),alt:"logo"}})])],1),t._v(" "),o("p",[t._v("\n            SSAFY 6기 부울경 2반 6팀 「SIXMAN」\n          ")])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),o("div",{staticClass:"container copyright-footer"})])}),o,!1,null,null,null);e.default=component.exports}}]);