(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1356:function(t,e,r){t.exports=r.p+"img/ce770f6.png"},1357:function(t,e,r){var content=r(1441);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("0f8f6bf2",content,!0,{sourceMap:!1})},1440:function(t,e,r){"use strict";var o=r(1357);r.n(o).a},1441:function(t,e,r){(t.exports=r(16)(!1)).push([t.i,".signup[data-v-23fa2872]{margin-top:50px}.bg-primary[data-v-23fa2872],.primary[data-v-23fa2872]{background-color:#3e4095}",""])},1645:function(t,e,r){"use strict";r.r(e);var o=r(27),n=r(75),c={name:"Register",layout:"auth",isRegistered:!1,data:function(){return{user:{username:"",email:"",password:"",isSignIn:!1}}},methods:Object(o.a)({},Object(n.b)({authenticateUser:"authentication/authenticateUser"}),{signUp:function(){var t=this;this.authenticateUser(this.user).then(function(e){t.$router.push("/")})}})},l=(r(1440),r(3)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app flex-row align-items-center"},[o("div",{staticClass:"container"},[o("b-row",{directives:[{name:"show",rawName:"v-show",value:t.isRegistered,expression:"isRegistered"}],staticClass:"justify-content-center"},[o("b-col",{attrs:{md:"8"}},[o("b-alert",{attrs:{show:"",variant:"success"}},[o("h4",{staticClass:"alert-heading"},[t._v("Congratulations!")]),t._v(" "),o("p",[t._v("\n          Your account has been created successfully, please check your email to activate it.\n        ")]),t._v(" "),o("hr"),t._v(" "),o("p",{staticClass:"mb-0"},[t._v("\n          Proceed to "),o("router-link",{attrs:{to:"/"}},[t._v("Login")])],1)])],1)],1),t._v(" "),o("b-row",[o("b-col",{attrs:{md:"8"}},[o("h4",{staticClass:"text-center"},[t._v("CSLMIS Portal")])])],1),t._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{md:"8"}},[o("b-card-group",[o("b-card",{staticClass:"text-white primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[o("b-card-body",{staticClass:"text-center"},[o("div",[o("img",{attrs:{src:r(1356),alt:"Logo"}})]),t._v(" "),o("h1",[t._v("CORBON")])])],1),t._v(" "),o("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[o("b-card-body",[o("b-form",[o("h1",[t._v("Register")]),t._v(" "),o("p",{staticClass:"text-muted"},[t._v("Create your account")]),t._v(" "),o("b-input-group",{staticClass:"mb-3"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-user"})])],1),t._v(" "),o("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Username",autocomplete:"username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),o("b-input-group",{staticClass:"mb-3"},[o("b-input-group-prepend",[o("b-input-group-text",[t._v("@")])],1),t._v(" "),o("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Email",autocomplete:"email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),t._v(" "),o("b-input-group",{staticClass:"mb-3"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-lock"})])],1),t._v(" "),o("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Password",autocomplete:"new-password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),o("b-input-group",{staticClass:"mb-4"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-lock"})])],1),t._v(" "),o("b-form-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Repeat password",autocomplete:"new-password"}})],1),t._v(" "),o("b-button",{attrs:{variant:"success",block:""},on:{click:t.signUp}},[t._v("Create Account")]),t._v(" "),o("b-row",[o("b-col",{staticClass:"signup"},[o("span",{staticClass:"pull-right mt-20"},[t._v("Already have an account? "),o("router-link",{attrs:{to:"/"}},[t._v("Login")])],1)])],1)],1)],1)],1)],1)],1)],1),t._v(" "),o("b-row",{staticClass:"justify-content-center"},[o("a",{attrs:{href:"https://admin.cslmis.gov.ng"}},[t._v("CSLMIS")]),t._v(" "),o("span",{staticClass:"ml-1"},[t._v("© 2019 Admin Portal.")]),t._v(" "),o("span",[t._v("Powered by ")]),t._v(" "),o("a",{attrs:{href:"https://corbon.gov.ng"}},[t._v(" CORBON ")])])],1)])},[],!1,null,"23fa2872",null);e.default=component.exports}}]);