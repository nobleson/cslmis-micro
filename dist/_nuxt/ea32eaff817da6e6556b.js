(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1165:function(t,e,n){var content=n(1177);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("75886dca",content,!0,{sourceMap:!1})},1176:function(t,e,n){"use strict";var o=n(1165);n.n(o).a},1177:function(t,e,n){(t.exports=n(21)(!1)).push([t.i,".asteriks{color:red}",""])},1184:function(t,e,n){"use strict";n.r(e);var o={name:"artisans",data:function(){return{artisans:[{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"},{name:"my name"}]}}},r=n(7),l=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",{staticClass:"pb-3 pl-auto",attrs:{"align-self":"end",cols:"12"}},[n("b-button",{on:{click:function(e){return t.$emit("changeComponent","NewJobApplication")}}},[t._v("Create New")]),t._v(" "),n("hr")],1),t._v(" "),n("hr"),t._v(" "),t._l(t.artisans,function(e,i){return n("b-col",{key:i,attrs:{cols:"2"}},[n("b-button",{on:{click:function(e){return t.$emit("changeComponent","JobApplicationDetail")}}},[t._v("Manage")]),t._v(" "),n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"Job Available","img-src":"/img/logo-symbol.png","img-alt":"Artisan Logo","img-top":"",tag:"article"}})],1)})],2)],1)},[],!1,null,"331b46be",null).exports,c=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated fadeIn"},[n("b-button",{on:{click:function(e){return t.$emit("changeComponent","JobApplicationView")}}},[t._v("Back")]),t._v(" "),n("hr"),t._v(" "),n("b-card",{staticStyle:{width:"800px",margin:"0 auto"}},[t._v("\n     My Details Here\n "),n("b-row")],1)],1)},[],!1,null,null,null).exports,m=n(1162),d=n.n(m),v=(n(49),n(143),{name:"new-artisan",components:{datepicker:d.a},data:function(){return{form:{jobAdvertId:"",companyId:"",artisanId:"",dateApplied:""},stateoforign:[{text:"Select One",value:null},"Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Enugu","Edo","Ekiti","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],gender:[{text:"Select One",value:null},"Male","Female"],show:!0}}}),f=(n(1176),{components:{JobApplicationView:l,JobApplicationDetail:c,NewJobApplication:Object(r.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animated fadeIn"},[n("b-button",{on:{click:function(e){return t.$emit("changeComponent","JobApplicationView")}}},[t._v("Back")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"app flex-row align-items-center"},[n("div",{staticClass:"container"},[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{md:"10",sm:"8"}},[n("b-card",{staticClass:"mx-6",attrs:{"no-body":""}},[n("b-card-body",{staticClass:"p-6"},[n("h1",[t._v("Registeration Form")]),t._v(" "),n("p",{},[t._v("Compulsory fields are marked with asteriks "),n("span",{staticClass:"asteriks"},[t._v("*")])]),t._v(" "),t.show?n("b-form",[n("b-form-group",[n("label",{attrs:{"label-for":"jobAdvertId"}},[t._v("Job Advert Id "),n("span",{staticClass:"asteriks"},[t._v("*")])]),t._v(" "),n("b-form-input",{attrs:{id:"jobAdvertId",required:"",placeholder:"Enter Job Advert Id"},model:{value:t.form.jobAdvertId,callback:function(e){t.$set(t.form,"jobAdvertId",e)},expression:"form.jobAdvertId"}})],1),t._v(" "),n("b-form-group",[n("label",{attrs:{"label-for":"companyId"}},[t._v("Company Id: "),n("span",{staticClass:"asteriks"})]),t._v(" "),n("b-form-input",{attrs:{id:"companyId",placeholder:"Enter Company Id"},model:{value:t.form.companyId,callback:function(e){t.$set(t.form,"companyId",e)},expression:"form.companyId"}})],1),t._v(" "),n("b-form-group",[n("label",{attrs:{"label-for":"artisanId"}},[t._v("Artisan Id: "),n("span",{staticClass:"asteriks"},[t._v("*")])]),t._v(" "),n("b-form-input",{attrs:{id:"artisanId",required:"",placeholder:"Enter Artisan Id"},model:{value:t.form.artisanId,callback:function(e){t.$set(t.form,"artisanId",e)},expression:"form.artisanId"}})],1),t._v(" "),n("b-form-group",[n("label",{attrs:{"label-for":"dateApplied"}},[t._v("Date Applied: "),n("span",{staticClass:"asteriks"},[t._v("*")])]),t._v(" "),n("date-picker",{attrs:{config:{format:"DD/MM/YYYY"}},model:{value:t.NewjobApplicationForm.dateApplied,callback:function(e){t.$set(t.NewjobApplicationForm,"dateApplied",e)},expression:"NewjobApplicationForm.dateApplied"}})],1),t._v(" "),n("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.update}},[t._v("Submit")])],1):t._e(),t._v(" "),n("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[n("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1)],1)],1)],1)],1)])],1)},[],!1,null,null,null).exports},data:function(){return{currentComponent:"JobApplicationView"}},methods:{changeCurrentComponent:function(t){this.currentComponent=t}}}),_=Object(r.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animated fadeIn"},[e(this.currentComponent,{tag:"component",on:{changeComponent:this.changeCurrentComponent}})],1)},[],!1,null,"01095ab4",null);e.default=_.exports}}]);