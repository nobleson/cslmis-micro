(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1168:function(t,n,e){"use strict";var r={name:"artisans",data:function(){return{artisans:[{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"}]}}},o=e(7),component=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-row",[e("b-col",{staticClass:"pb-3 pl-auto",attrs:{"align-self":"end",cols:"12"}},[e("b-button",{on:{click:function(n){return t.$emit("changeComponent","NewAdvert")}}},[t._v("Create New")]),t._v(" "),e("hr")],1),t._v(" "),e("hr"),t._v(" "),t._l(t.artisans,function(n,i){return e("b-col",{key:i,attrs:{cols:"2"}},[e("b-button",{on:{click:function(n){return t.$emit("changeComponent","JobAdvertDetail")}}},[t._v("Manage")]),t._v(" "),e("hr"),t._v(" "),e("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Artisan Workshop","img-src":"/img/logo-symbol.png","img-alt":"Artisan Logo","img-top":"",tag:"article"}})],1)})],2)],1)},[],!1,null,"6b3e858c",null);n.a=component.exports},1169:function(t,n,e){"use strict";var r=e(7),component=Object(r.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animated fadeIn"},[e("b-button",{on:{click:function(n){return t.$emit("changeComponent","JobAdvertView")}}},[t._v("Back")]),t._v(" "),e("hr"),t._v(" "),e("b-card",[e("b-row")],1)],1)},[],!1,null,null,null);n.a=component.exports},1170:function(t,n,e){"use strict";var r=e(7),component=Object(r.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"animated fadeIn"},[e("b-button",{on:{click:function(n){return t.$emit("changeComponent","JobAdvertView")}}},[t._v("Back")]),t._v(" "),e("hr"),t._v(" "),e("b-card",[e("b-row")],1)],1)},[],!1,null,null,null);n.a=component.exports},1191:function(t,n,e){"use strict";e.r(n);var r=e(1168),o=e(1170),c=e(1169),l={components:{JobAdvertView:r.a,JobAdvertDetail:o.a,NewAdvert:c.a},data:function(){return{currentComponent:"JobAdvertView"}},methods:{changeCurrentComponent:function(t){this.currentComponent=t}}},m=e(7),component=Object(m.a)(l,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n(this.currentComponent,{tag:"component",on:{changeComponent:this.changeCurrentComponent}})],1)},[],!1,null,"30d16426",null);n.default=component.exports}}]);