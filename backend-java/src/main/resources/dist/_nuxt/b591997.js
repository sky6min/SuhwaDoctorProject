(window.webpackJsonp=window.webpackJsonp||[]).push([[155,57,61,62,63,64,65],{324:function(t,e,o){t.exports=o.p+"img/2.a54c787.png"},325:function(t,e,o){t.exports=o.p+"img/landing-logo.a81471c.png"},328:function(t,e,o){"use strict";o.r(e);var n=o(55),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/messenger/messenger"}},[e("div",{staticClass:"logo-block"},[e("img",{staticClass:"img-fluid",attrs:{src:o(325),alt:"logo"}})])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,o){"use strict";o.r(e);var n=o(55),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header-right-margin"},[o("client-only",[o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Messenger")])],1),t._v(" "),o("b-dropdown",{attrs:{id:"dropdown-4",text:"Bouns page"}},[o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("프로젝트 소개")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("자주 묻는 질문")])],1),t._v(" "),o("b-dropdown-item",{staticClass:"nav-link"},[o("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("로그인")])],1),t._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[o("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("회원가입")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},331:function(t,e,o){"use strict";o.r(e);var n=o(328),l=o(329),r={components:{Logo:n.default,Navbar:l.default},data:function(){return{windowTop:0,fixedheader:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{onScroll:function(t){this.windowTop=t.target.documentElement.scrollTop,this.windowTop>=60?this.fixedheader=!0:this.fixedheader=!1}}},c=o(55),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"home"}},[o("div",{staticClass:"custom-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12"},[o("div",{staticClass:"landing-header fixed"},[o("div",{staticClass:"main-menu"},[o("div",[o("b-navbar",{staticClass:"navbar navbar-light",attrs:{toggleable:"xl"}},[o("Logo"),t._v(" "),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),o("Navbar")],1)],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,o){"use strict";o.r(e);var n={name:"TapTop",data:function(){return{display:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{executeScroll:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){window.scrollY>600?this.display=!0:this.display=!1}}},l=o(55),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"tap-top",style:t.display?"display:block":"display:none",on:{click:function(e){return t.executeScroll()}}},[t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("i",{staticClass:"fa fa-angle-double-up"})])}],!1,null,null,null);e.default=component.exports},335:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-title footer-mobile-title"},[o("h3",[t._v("About")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"social-group"},[o("li",[o("a",{staticClass:"icon-btn btn-google button-effect btn-sm",attrs:{href:"https://www.facebook.com/"}},[o("i",{staticClass:"fa fa-facebook"})])]),t._v(" "),o("li",[o("a",{staticClass:"icon-btn btn-twiter button-effect btn-sm",attrs:{href:"https://twitter.com/"}},[o("i",{staticClass:"fa fa-twitter"})])]),t._v(" "),o("li",[o("a",{staticClass:"icon-btn btn-linkedin button-effect btn-sm",attrs:{href:"https://www.linkedin.com/"}},[o("i",{staticClass:"fa fa-linkedin"})])]),t._v(" "),o("li",[o("a",{staticClass:"icon-btn btn-instagram button-effect btn-sm",attrs:{href:"https://www.instagram.com/"}},[o("i",{staticClass:"fa fa-instagram"})])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-title"},[o("h3",[t._v("Useful Links")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-title"},[o("h3",[t._v("Blog Links")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-title"},[o("h3",[t._v("Authentication")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-3 col-md-4"},[o("div",{staticClass:"downlaod"},[o("div",[o("div",{staticClass:"footer-title"},[o("h3",[t._v("Download Apps")])]),t._v(" "),o("div",{staticClass:"footer-contant"},[o("div",{staticClass:"footer-btn"},[o("a",{staticClass:"btn active",attrs:{href:"https://www.apple.com/in/itunes/"}},[o("i",{staticClass:"fa fa-apple"}),t._v(" "),o("div",[o("h6",[t._v("Available on the")]),t._v(" "),o("h4",[t._v("App store")])])]),o("a",{staticClass:"btn",attrs:{href:"https://play.google.com/store"}},[o("i",{staticClass:"fa fa-play"}),t._v(" "),o("div",[o("h6",[t._v("Available on the")]),t._v(" "),o("h4",[t._v("Google play")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer-back-block"},[e("img",{staticClass:"img-fluid inner1",attrs:{src:o(324),alt:"footer-back-img"}}),e("img",{staticClass:"img-fluid inner2",attrs:{src:o(324),alt:"footer-back-img"}})])}],l=o(55),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container footer-main"},[n("div",{staticClass:"row footer-block"},[n("div",{staticClass:"col-lg-3 col-md-6"},[t._m(0),t._v(" "),n("div",{staticClass:"about-payment footer-contant"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[n("img",{attrs:{src:o(325),alt:"logo"}})])],1),t._v(" "),n("p",[t._v("\n            Contrary to popular belief, Lorem Ipsum is not simply random text.\n            It has roots in a piece Lorem fugit on looked ipsum.\n          ")]),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[t._m(2),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[t._v("Home")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/about"}},[t._v("About us")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/faq"}},[t._v("FAQ")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/bonus/elements"}},[t._v("Elements")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-3"},[n("div",{staticClass:"links"},[t._m(3),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_no-sidebar"}},[t._v("No sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_left-sidebar"}},[t._v("Left sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_right-sidebar"}},[t._v("Right sidebar")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/blogs/blog_details"}},[t._v("Details page")])],1)])])])]),t._v(" "),n("div",{staticClass:"col-lg-2 col-md-4"},[n("div",{staticClass:"links"},[t._m(4),t._v(" "),n("div",{staticClass:"footer-contant"},[n("ul",[n("li",[n("nuxt-link",{attrs:{to:"/authentication/login"}},[t._v("Signin")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/login-2"}},[t._v("Signin classic")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/signup"}},[t._v("Signup")])],1),t._v(" "),n("li",[n("nuxt-link",{attrs:{to:"/authentication/signup-2"}},[t._v("Signup classic")])],1)])])])]),t._v(" "),t._m(5)])]),t._v(" "),t._m(6),t._v(" "),n("div",{staticClass:"container copyright-footer"})])}),n,!1,null,null,null);e.default=component.exports},341:function(t,e,o){t.exports=o.p+"img/2.c253c67.png"},545:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"page-decore"},[n("li",{staticClass:"top"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:o(324),alt:"footer-back-img"}})]),t._v(" "),n("li",{staticClass:"bottom"},[n("img",{staticClass:"img-fluid inner2",attrs:{src:o(324),alt:"footer-back-img"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Frequently Asked Questions")]),t._v(" "),o("p",[t._v("Discover you question from underneath or present your inquiry fromt tahe submit box.")])])}],l={data:function(){return{text:"\n          it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures\n        ",opensearchbar:!1}},methods:{toggelsearchbar:function(){this.opensearchbar=!this.opensearchbar}}},r=o(55),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-py-space faq-section"},[t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row faq-block"},[n("div",{staticClass:"col-sm-12"},[n("div",{staticClass:"media"},[t._m(1),t._v(" "),n("div",{staticClass:"media-body"},[n("a",{staticClass:"icon-btn btn-outline-primary btn-sm search contact-search float-right",attrs:{href:"javascript:void(0)"}},[n("i",{staticClass:"fa fa-search",on:{click:function(e){return t.toggelsearchbar()}}})]),t._v(" "),n("form",{staticClass:"form-inline search-form",class:{open:t.opensearchbar}},[n("div",{staticClass:"form-group"},[n("input",{staticClass:"form-control-plaintext",attrs:{type:"search",placeholder:"Search.."}}),t._v(" "),n("div",{staticClass:"icon-close close-search",on:{click:function(e){t.opensearchbar=!1}}})])])])])]),t._v(" "),n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"accordion theme-accordion",attrs:{role:"tablist"}},[n("div",{staticClass:"card faq-block accordion theme-accordion"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],staticClass:"btn-link",attrs:{type:"button"}},[t._v("How can I downgrade to an earlier ?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-1",visible:"",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1),t._v(" "),n("div",{staticClass:"card"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],staticClass:"btn-link collapsed",attrs:{type:"button"}},[t._v("How can I upgrade from Shopify 2.5 to shopify 3?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-2",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1),t._v(" "),n("div",{staticClass:"card"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],staticClass:"btn-link collapsed",attrs:{type:"button"}},[t._v("Under what license are Regular Labs released?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-3",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1),t._v(" "),n("div",{staticClass:"card"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-4",modifiers:{"accordion-4":!0}}],staticClass:"btn-link collapsed"},[t._v("What is the Regular Labs Library?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-4",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1),t._v(" "),n("div",{staticClass:"card"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-5",modifiers:{"accordion-5":!0}}],staticClass:"btn-link collapsed",attrs:{type:"button"}},[t._v("Can I turn on/off some blocks on the page?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-5",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1),t._v(" "),n("div",{staticClass:"card"},[n("b-card-header",{attrs:{role:"tab"}},[n("h5",{staticClass:"mb-0"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-6",modifiers:{"accordion-6":!0}}],staticClass:"btn-link collapsed",attrs:{type:"button"}},[t._v("What is included in the theme package?")])],1)]),t._v(" "),n("b-collapse",{attrs:{id:"accordion-6",accordion:"my-accordion",role:"tabpanel"}},[n("b-card-body",[n("p",[n("img",{staticClass:"img-fluid faq-decor",attrs:{src:o(341),alt:"chit-chat-back-img"}}),t._v(t._s(t.text))])])],1)],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},776:function(t,e,o){"use strict";o.r(e);var header=o(331),n=o(170),l=o(545),footer=o(335),r=o(334),c={components:{Header:header.default,Breadcrumbs:n.default,Faq:l.default,Footer:footer.default,TapTop:r.default}},d=o(55),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"inner-page"},[o("Header"),t._v(" "),o("Breadcrumbs",{attrs:{main:"Home",title:"FAQ"}})],1),t._v(" "),o("Faq"),t._v(" "),o("Footer"),t._v(" "),o("TapTop")],1)}),[],!1,null,null,null);e.default=component.exports}}]);