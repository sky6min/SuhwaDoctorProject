(window.webpackJsonp=window.webpackJsonp||[]).push([[46,40,43,44],{1003:function(e,t,n){"use strict";n.r(t);var o={name:"about-page",components:{Camera:n(830).default}},r=n(60),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"about-page section-py-space"},[o("div",{staticClass:"custom-container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-8 offset-sm-2 text-center"},[o("Camera"),e._v(" "),o("img",{staticClass:"img-fluid w-100 pb-4",attrs:{src:n(507),alt:"about"}}),e._v(" "),e._m(0)],1)])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1"},[n("p",[e._v("\n              On the other hand, we denounce with righteous indignation and\n              dislike men who are so beguiled and demoralized by the charms of\n              pleasure of the moment, so blinded by desire, that they cannot\n              foresee the pain and trouble that are bound to ensue; and equal\n              blame belongs to those who fail in their duty through weakness\n              of will, which is the same as saying through shrinking from toil\n              and pain. These cases are perfectly simple and easy to\n              distinguish.\n            ")])])])}],!1,null,null,null);t.default=component.exports},444:function(e,t,n){"use strict";n.r(t);var o={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},r=n(60),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);t.default=component.exports},462:function(e,t,n){"use strict";n.r(t);var o={name:"UserVideo",components:{OvVideo:n(444).default},props:{streamManager:Object},computed:{clientData:function(){var e=this.getConnectionData().clientData;return e}},methods:{getConnectionData:function(){var e=this.streamManager.stream.connection;return JSON.parse(e.data)}}},r=n(60),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":e.streamManager,test:!0}}),e._v(" "),n("div",[n("p",[e._v(e._s(e.clientData))])])],1):e._e()}),[],!1,null,null,null);t.default=component.exports},507:function(e,t,n){e.exports=n.p+"img/1.8b458a4.jpg"},788:function(e,t){},789:function(e,t){},801:function(e,t){},820:function(e,t){},821:function(e,t){},822:function(e,t){},823:function(e,t){},824:function(e,t){},830:function(e,t,n){"use strict";n.r(t);var o=n(34),r=n(33),c=(n(180),n(18),n(137),n(36),n(21),n(1),n(89),n(181)),d=n.n(c),l=n(472),m=n(462),v=n(825),h=["ache","cough","head","snot"];d.a.defaults.headers.post["Content-Type"]="application/json";var f="https://i6e206.p.ssafy.io",w="Z5YF9UcUB9",_={name:"App",components:{UserVideo:m.default},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random()),state:{model:null,preview:"",predictions:[]}}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{cropToCanvas:function(image,canvas,e){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle="#000000",e.fillRect(0,0,canvas.width,canvas.height),e.drawImage(image,0,0,640,640)},joinSession:function(){var e=this;this.OV=new l.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(t){var n=t.stream,o=e.session.subscribe(n);e.subscribers.push(o)})),this.session.on("streamDestroyed",(function(t){var n=t.stream,o=e.subscribers.indexOf(n.streamManager,0);o>=0&&e.subscribers.splice(o,1)})),this.session.on("exception",(function(e){var t=e.exception;console.warn(t)}));var t=this;this.getToken(this.mySessionId).then((function(n){e.session.connect(n,{clientData:e.myUserName}).then((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:{width:640,height:640}}).then((function(e){var n=e.getVideoTracks()[0],video=document.createElement("video");video.srcObject=new MediaStream([n]);var canvas=document.getElementById("canvas");canvas.width=640,canvas.height=640;var r=canvas.getContext("2d");video.onloadedmetadata=function(e){video.addEventListener("play",(function(){!function e(){if(!video.paused&&!video.ended){t.cropToCanvas(video,canvas,r),v.c().startScope();var input=v.f((function(){return v.d.resizeBilinear(v.a.fromPixels(video),[640,640]).div(255).expandDims(0)}));t.state.model.executeAsync(input).then((function(e){var t="16px sans-serif";r.font=t,r.textBaseline="top";var i,n=Object(o.a)(e,4),c=n[0],d=n[1],l=n[2],m=n[3],f=c.dataSync(),w=d.dataSync(),_=l.dataSync(),y=m.dataSync()[0];for(v.b(e),i=0;i<y;++i){var S=f.slice(4*i,4*(i+1)),O=Object(o.a)(S,4),x=O[0],C=O[1],j=O[2],k=O[3];x*=canvas.width,j*=canvas.width,C*=canvas.height;var M=j-x,V=(k*=canvas.height)-C,E=h[_[i]],I=w[i].toFixed(2);r.strokeStyle="#00FFFF",r.lineWidth=4,r.strokeRect(x,C,M,V),r.fillStyle="#00FFFF";var T=r.measureText(E+":"+I).width,N=parseInt(t,10);r.fillRect(x,C,T+4,N+4)}for(i=0;i<y;++i){var P=f.slice(4*i,4*(i+1)),U=Object(o.a)(P,3),D=U[0],F=U[1];D*=canvas.width,F*=canvas.height;var $=h[_[i]],R=w[i].toFixed(2);r.fillStyle="#000000",r.fillText($+":"+R,D,F)}})),r.drawImage(video,0,0,640,640),setTimeout(e,1e3/30),v.c().endScope()}}()})),video.msHorizontalMirror=!1,video.play();var n=canvas.captureStream(30).getVideoTracks()[0];canvas.addEventListener("webglcontextlost",(function(e){console.log("tttttttttttttttttttttttttttttttttttttttttttttttt")}),!1);var c=t.OV.initPublisher(void 0,{audioSource:!1,videoSource:n});t.publisher=c,t.session.publish(t.publisher)}})).catch((function(e){console.log(e.name+": "+e.message)}))})).catch((function(e){console.log("There was an error connecting to the session:",e.code,e.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(e){this.mainStreamManager!==e&&(this.mainStreamManager=e)},getToken:function(e){var t=this;return this.createSession(e).then((function(e){return t.createToken(e)}))},createSession:function(e){return new Promise((function(t,n){d.a.post("".concat(f,"/openvidu/api/sessions"),JSON.stringify({customSessionId:e}),{auth:{username:"OPENVIDUAPP",password:w}}).then((function(e){return e.data})).then((function(data){return t(data.id)})).catch((function(o){409===o.response.status?t(e):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(f)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(f,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(f,'"'))&&location.assign("".concat(f,"/accept-certificate")),n(o.response))}))}))},createToken:function(e){return new Promise((function(t,n){d.a.post("".concat(f,"/openvidu/api/sessions/").concat(e,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:w}}).then((function(e){return e.data})).then((function(data){return t(data.token)})).catch((function(e){return n(e.response)}))}))},process:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://ssafy6webmodel.s3.ap-northeast-2.amazonaws.com/web_model/model.json",t.next=3,v.e("https://ssafy6webmodel.s3.ap-northeast-2.amazonaws.com/web_model/model.json").then((function(t){e.state.model=t})).finally((function(){alert("model downloaded"),e.joinSession()}));case 3:case"end":return t.stop()}}),t)})))()}}},y=n(60),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"main-container"}},[e.session?e._e():n("div",{attrs:{id:"join"}},[e._m(0),e._v(" "),n("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[n("h1",[e._v("Join a video session")]),e._v(" "),n("div",{staticClass:"form-group"},[n("p",[n("label",[e._v("Participant")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.myUserName},on:{input:function(t){t.target.composing||(e.myUserName=t.target.value)}}})]),e._v(" "),n("p",[n("label",[e._v("Session")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:e.mySessionId},on:{input:function(t){t.target.composing||(e.mySessionId=t.target.value)}}})]),e._v(" "),n("p",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(t){return e.joinSession()}}},[e._v("\n            Join!\n          ")]),e._v(" "),n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(t){return e.process()}}},[e._v("\n            model download and join!\n          ")])])])])]),e._v(" "),e.session?n("div",{attrs:{id:"session"}},[n("div",{attrs:{id:"session-header"}},[n("h1",{attrs:{id:"session-title"}},[e._v(e._s(e.mySessionId))]),e._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:e.leaveSession}})]),e._v(" "),n("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},e._l(e.subscribers,(function(sub){return n("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(t){return e.updateMainVideoStreamManager(sub)}}})})),1),e._v(" "),e._m(1)]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"img-div"}},[t("img",{attrs:{src:"resources/images/openvidu_grey_bg_transp_cropped.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("canvas",{attrs:{id:"canvas"}})])}],!1,null,null,null);t.default=component.exports}}]);