(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{VVrn:function(t,s,e){"use strict";var a=e("yOFB");e.d(s,"a",(function(){return a.a}))},st67:function(t,s,e){"use strict";e.r(s);var a=e("QZnT"),n={metaInfo:function(){return{title:this.$trans("headings.reset-password")}},components:{VAlert:e("VVrn").a},data:function(){return{form:new a.b({email:""})}},methods:{submit:function(){var t=this;this.form.processing=!0,this.$inertia.post(route("password.reminder.send"),this.form.data()).then((function(){return t.form.processing=!1}))}}},i=e("KHd+"),r=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8"},[e("div",{staticClass:"sm:mx-auto sm:w-full sm:max-w-md"},[e("img",{staticClass:"mx-auto h-12 w-auto select-none",attrs:{src:t.$page.logo_light,alt:"logo"}}),t._v(" "),e("h2",{staticClass:"mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"},[t._v(t._s(t.$trans("headings.send-password-reset-link")))])]),t._v(" "),e("div",{staticClass:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},[e("div",{staticClass:"bg-white py-8 px-4 shadow rounded-lg sm:px-10"},[t.$page.flash?e("v-alert",{attrs:{variant:"success",show:""}},[t._v("\n                "+t._s(t.$page.flash)+"\n            ")]):t._e(),t._v(" "),e("form",{attrs:{action:"#",method:"POST"},on:{submit:function(s){return s.preventDefault(),t.submit()}}},[e("div",{staticClass:"form-group mb-6"},[e("span",{staticClass:"form-label"},[t._v(t._s(t.$trans("labels.email")))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-input",attrs:{type:"email"},domProps:{value:t.form.email},on:{input:function(s){s.target.composing||t.$set(t.form,"email",s.target.value)}}}),t._v(" "),t.$page.errors.has("email")?e("p",{staticClass:"invalid-feedback"},[t._v(t._s(t.$page.errors.first("email")))]):t._e()]),t._v(" "),e("div",{staticClass:"mt-6"},[e("button",{staticClass:"btn btn-block btn-indigo",attrs:{type:"submit",disabled:t.form.processing}},[t._v("\n                        "+t._s(t.$trans("labels.send-reset-link"))+"\n                    ")])])])],1)])])}),[],!1,null,null,null);s.default=r.exports},yOFB:function(t,s,e){"use strict";var a={props:{variant:{type:String,default:"success",validator:function(t){return["success","warning","failure"].includes(t)}},dismissible:{type:Boolean,default:!1}},data:function(){return{visible:!0}},computed:{alertClass:function(){return["alert","alert-"+this.variant]}},watch:{"$page.flash":{deep:!0,handler:function(){this.visible=!0}}}},n=e("KHd+"),i=Object(n.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.visible?e("div",{class:t.alertClass},[e("p",[t._t("default")],2),t._v(" "),t.dismissible?e("button",{staticClass:"flex items-center p-1 focus:outline-none ml-auto",on:{click:function(s){t.visible=!1}}},[e("svg",{staticClass:"w-3 h-3 fill-current",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"}})])]):t._e()]):t._e()}),[],!1,null,null,null);s.a=i.exports}}]);
//# sourceMappingURL=42.js.map?id=5b8640e4825553c435a5