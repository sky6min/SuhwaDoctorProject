(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{525:function(t,e,c){"use strict";c.r(e);c(5),c(4),c(2),c(1),c(6),c(3),c(7);var o=c(0),r=c(61);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(object);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,c)}return e}var l={data:function(){return{deletedaccount:!1,requestsend:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({activesetting:function(t){return t.common.activesetting}})),methods:{activeSettingmenu:function(t){this.$store.state.common.activesetting=t},deleteaccount:function(){this.deletedaccount=!0},deleterequest:function(){this.requestsend=!0}}},d=l,v=c(60),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"setting-block"},[c("div",{staticClass:"block",class:1==t.activesetting?"open":""},[c("div",{staticClass:"media"},[t._m(0),t._v(" "),c("div",{staticClass:"media-right"},[c("a",{staticClass:"icon-btn btn-outline-light btn-sm pull-right previous",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.activeSettingmenu(0)}}},[c("feather",{attrs:{type:"chevron-left",size:"15",height:"15"}})],1)])]),t._v(" "),c("div",{staticClass:"theme-according",attrs:{id:"accordion"}},[c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseTwo",modifiers:{collapseTwo:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Security"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseTwo",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",[c("div",{staticClass:"media"},[c("div",{staticClass:"media-body"},[c("h5",[t._v("Show Security notification")])]),t._v(" "),c("div",{staticClass:"media-right"},[c("b-form-checkbox",{staticClass:"js-switch8",attrs:{name:"check-button",switch:"",size:"lg"}})],1)]),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("turn on this setting to recive notification when a contact's security code has been changes.")])])],1)],1),t._v(" "),c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseOne",modifiers:{collapseOne:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Privacy"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseOne",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",[c("ul",{staticClass:"privacy"},[c("li",[c("h5",[t._v("Last seen")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch10",attrs:{name:"check-button",switch:"",size:"lg",value:"1",checked:"1"}}),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("turn on this setting to whether your contact can see last seen or not.")])],1),t._v(" "),c("li",[c("h5",[t._v("Profile Photo")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch11",attrs:{name:"check-button",switch:"",size:"lg"}}),t._v(" "),c("p",[t._v("\n                     turn on this setting to whether your contact can see your profile or not.")])],1),t._v(" "),c("li",[c("h5",[t._v("About")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch12",attrs:{name:"check-button",switch:"",size:"lg"}}),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("turn on this setting to whether your contact can see about status or not.")])],1),t._v(" "),c("li",[c("h5",[t._v("Status")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch14",attrs:{name:"check-button",switch:"",size:"lg"}}),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("turn on this setting to whether your contact can see your status or not.                          ")])],1),t._v(" "),c("li",[c("h5",[t._v("Read receipts")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch16",attrs:{name:"check-button",switch:"",size:"lg"}}),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("If turn off this option you won't be able to see read recipts from contact. read receipts are always sent for group chats.                     ")])],1),t._v(" "),c("li",[c("h5",[t._v("Groups")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch13",attrs:{name:"check-button",switch:"",size:"lg",value:"1",checked:"1"}}),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("turn on this setting to whether your contact can add in groups or not.  ")])],1),t._v(" "),c("li",[c("h5",[t._v("Screen Lock(Require Touch ID)")]),t._v(" "),c("b-form-checkbox",{staticClass:"js-switch17",attrs:{name:"check-button",switch:"",size:"lg"}})],1)])])],1)],1),t._v(" "),c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseThree",modifiers:{collapseThree:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Two Step verification"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseThree",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",[c("div",{staticClass:"media"},[c("div",{staticClass:"media-body"},[c("h5",[t._v("Enable")])]),t._v(" "),c("div",{staticClass:"media-right"},[c("b-form-checkbox",{staticClass:"js-switch9",attrs:{name:"check-button",switch:"",size:"lg"}})],1)]),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("For added security, enable two-step verifiation, which will require a PIN when registering your phone number with Chitchat again.")])])],1)],1),t._v(" "),c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseFour",modifiers:{collapseFour:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Change Number"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseFour",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",{staticClass:"change-number"},[c("h5",[t._v("Your old country code & phone number")]),t._v(" "),c("div",{staticClass:"input-group"},[c("div",{staticClass:"input-group-prepend"},[c("span",{staticClass:"input-group-text form-control m-0"},[t._v("+")])]),t._v(" "),c("input",{staticClass:"form-control country-code",attrs:{type:"number",placeholder:"01"}}),t._v(" "),c("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"1234567895"}})]),t._v(" "),c("h5",[t._v("Your new country code & phone number")]),t._v(" "),c("div",{staticClass:"input-group"},[c("div",{staticClass:"input-group-prepend"},[c("span",{staticClass:"input-group-text form-control m-0"},[t._v("+")])]),t._v(" "),c("input",{staticClass:"form-control country-code",attrs:{type:"number",placeholder:"01"}}),t._v(" "),c("input",{staticClass:"form-control",attrs:{type:"number",placeholder:""}})]),t._v(" "),c("div",{staticClass:"text-right"},[c("a",{staticClass:"btn btn-outline-primary button-effect btn-sm",attrs:{href:"javascript:void(0)"}},[t._v("confirm")])])])],1)],1),t._v(" "),c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseFive",modifiers:{collapseFive:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Request account info"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseFive",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",[c("a",{staticClass:"p-0 req-info",class:t.requestsend?"disabled":"",attrs:{id:"demo",onclick:'document.getElementById("demo").innerHTML = "Request sent"'},on:{click:function(e){return t.deleterequest()}}},[t._v("Request Info                            ")]),t._v(" "),c("p",[c("b",[t._v("Note : ")]),t._v("Create a report of your account information and settings, which you can access ot port to another app.")])])],1)],1),t._v(" "),c("div",{staticClass:"card"},[c("b-card-header",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapseSix",modifiers:{collapseSix:!0}}],attrs:{role:"tab"}},[c("a",[t._v("Delete My account"),c("i",{staticClass:"fa fa-angle-down"})])]),t._v(" "),c("b-collapse",{attrs:{id:"collapseSix",accordion:"my-accordion",role:"tabpanel"}},[c("b-card-body",[c("a",{staticClass:"p-0 req-info font-danger",class:t.deletedaccount?"disabled":"",on:{click:function(e){return t.deleteaccount()}}},[t._v("Delete Account                            ")]),t._v(" "),c("p",[c("b",[t._v("Note :")]),t._v("Deleting your account will delete your account info, profile photo, all groups & chat history.")])])],1)],1)])]),t._v(" "),c("div",{staticClass:"media"},[t._m(1),t._v(" "),c("div",{staticClass:"media-right"},[c("a",{staticClass:"icon-btn btn-outline-light btn-sm pull-right next",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.activeSettingmenu(1)}}},[c("feather",{attrs:{type:"chevron-right",size:"15",height:"15"}})],1)])])])}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"media-body"},[c("h3",[t._v("Account")])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"media-body"},[c("h3",[t._v("Account")]),t._v(" "),c("h4",[t._v("Update Your Account Details")])])}],!1,null,null,null);e.default=component.exports}}]);