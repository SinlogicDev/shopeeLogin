(function(){var e={7442:function(e,t,n){"use strict";var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=n(1001),s={},u=(0,a.Z)(s,o,i,!1,null,null,null),l=u.exports,c=n(2809),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"login-form"},[n("h1",[e._v("欢迎进入虾皮直播")]),n("el-form",{ref:"loginForm",attrs:{"label-position":"right",rules:e.rules,"label-width":"80px",model:e.loginForm}},[n("el-form-item",{staticStyle:{width:"380px"},attrs:{label:"用户名",prop:"username"}},[n("el-input",{model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{staticStyle:{width:"380px"},attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("loginForm")}}},[e._v("登录")])],1)],1)],1)])],1)},d=[],m=n(8138),p=n.n(m),g={name:"Login",data(){return{loginForm:{username:"admin",password:"",code:"",token:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm(e){this.$refs[e].validate((e=>{e&&this.$axios.post("/login?"+p().stringify(this.loginForm)).then((e=>{console.log(e.data);const t=e.headers["authorization"];this.$store.commit("SET_TOKEN",t),this.$router.push("/index")}))}))},resetForm(e){this.$refs[e].resetFields()}}},h=g,v=(0,a.Z)(h,f,d,!1,null,"51cd352a",null),b=v.exports;r["default"].use(c.Z);const y=[{path:"/index",name:"Index",component:()=>n.e(554).then(n.bind(n,7554))},{path:"/login",name:"Login",component:b},{path:"/hello",name:"Hello",component:()=>n.e(850).then(n.bind(n,4850))}],w=new c.Z({mode:"history",base:"/",routes:y});var k=w,F=n(4665);r["default"].use(F.ZP);var x=new F.ZP.Store({state:{token:""},mutations:{SET_TOKEN:(e,t)=>{e.token=t,localStorage.setItem("token",t)}},modules:{}}),E=n(5959),O=n.n(E),S=n(7203),j=n.n(S);const C=j().create({timeout:5e3,headers:{"Content-Type":"application/json; charset=utf-8"}});C.interceptors.request.use((e=>(e.headers["Authorization"]=localStorage.getItem("token"),e))),C.interceptors.response.use((e=>{let t=e.data;return console.log("response"),console.log(t),200===t.code?e:(O().Message.error(t.msg?t.msg:"系统异常！",{duration:3e3}),Promise.reject(e.data.msg))}),(e=>(console.log(e),e.response.data&&(e.message=e.response.data.msg),401===e.response.status&&k.push("/login"),O().Message.error(e.message,{duration:3e3}),Promise.reject(e))));var T=C;r["default"].use(O()),r["default"].prototype.$axios=T,r["default"].config.productionTip=!1,new r["default"]({router:k,store:x,render:e=>e(l)}).$mount("#app")},6909:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{554:"83345e05",850:"78a6d65f"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".e798f0da.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="shopee:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={850:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkshopee"]=self["webpackChunkshopee"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7442)}));r=n.O(r)})();
//# sourceMappingURL=app.44a65dfd.js.map