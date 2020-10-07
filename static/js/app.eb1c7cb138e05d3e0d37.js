webpackJsonp([1],{"5EBO":function(t,e){},BVka:function(t,e){},Kzx8:function(t,e){},Lo0T:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("7+uW"),n=r("mvHQ"),s=r.n(n),a=r("mtWM"),o=r.n(a),c={name:"App",data:function(){return{currentUser:{}}},created:function(){var t=localStorage.getItem("jwt"),e=localStorage.getItem("user");null!==t&&null!==e&&this.setUser(JSON.parse(e),t,!1)},computed:{isDoctor:function(){return"doctor"===this.currentUser.type},isPharmacist:function(){return"pharmacist"===this.currentUser.type},isLoggedIn:function(){return void 0!==this.currentUser.name}},methods:{setUser:function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];console.log("setUser() successfully ran:",t,e),this.currentUser=t,o.a.defaults.headers.common.Authorization="Bearer "+e,r&&(localStorage.setItem("jwt",e),localStorage.setItem("user",s()(t)))},doLogout:function(){delete o.a.defaults.headers.common.Authorization,localStorage.removeItem("jwt"),localStorage.removeItem("user"),this.currentUser={},this.$router.push({name:"Home"})}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("Epios - Digital Prescription Management")]),t._v(" "),r("nav",[t.isLoggedIn?r("span",[r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.doLogout(e)}}},[t._v("Logout")]),t._v(" "),t.isDoctor?r("span",[t._v("\n        |\n        "),r("router-link",{attrs:{to:"/prescription-history"}},[t._v("My prescription history")]),t._v("\n        |\n        "),r("router-link",{attrs:{to:"/prescription/new"}},[t._v("Issue new prescription")])],1):t._e(),t._v(" "),t.isPharmacist?r("span",[t._v("\n        |\n        "),r("router-link",{attrs:{to:"/prescriptions"}},[t._v("View prescriptions")])],1):t._e()]):r("span",[r("router-link",{attrs:{to:"/login/doctors"}},[t._v("Medical Practitioner Login")]),t._v("\n      |\n      "),r("router-link",{attrs:{to:"/login/pharmacists"}},[t._v("Pharmacist Login")])],1)]),t._v(" "),r("router-view",{attrs:{currentUser:t.currentUser},on:{loginSuccess:t.setUser}})],1)},staticRenderFns:[]};var p=r("VU/8")(c,u,!1,function(t){r("BVka")},null,null).exports,v=r("/ocq"),d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h4",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var m=r("VU/8")({name:"Home",data:function(){return{msg:"Welcome to Epios. Please sign in via one of the links above."}}},d,!1,function(t){r("fs43")},"data-v-649a91a6",null).exports,l=r("oiih"),_={name:"DoctorLogin",data:function(){return{email:"",password:"",errorMessage:""}},methods:{doLogin:function(){var t=this;o.a.post(l.DOCTOR_LOGIN_URL,{email:this.email,password:this.password}).then(function(e){console.log("Login response",e.data),t.$emit("loginSuccess",e.data.user,e.data.token),t.$router.push({name:"PrescriptionHistory"})}).catch(function(e){console.log("Login error",e),401===e.response.status&&(t.errorMessage="Invalid email and/or password.")})}}},h={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Medical Practitioner Login")]),t._v(" "),r("p",[t._v(" If you are experiencing any issues, please reach out to us at support@epios.com.")]),t._v(" "),t.errorMessage?r("div",{staticClass:"error"},[t._v("\n    "+t._s(this.errorMessage)+"\n  ")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[r("label",[t._v("Email:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("label",[t._v("Password:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("br"),t._v(" "),r("button",[t._v("Login")])]),t._v(" "),r("br")])},staticRenderFns:[]};var f=r("VU/8")(_,h,!1,function(t){r("Lo0T")},"data-v-07e9ef78",null).exports,g={name:"PharmacistLogin",data:function(){return{email:"",password:"",errorMessage:""}},methods:{doLogin:function(){var t=this;o.a.post(l.PHARMACIST_LOGIN_URL,{email:this.email,password:this.password}).then(function(e){console.log("Login response",e.data),t.$emit("loginSuccess",e.data.user,e.data.token),t.$router.push({name:"PrescriptionsIndex"})}).catch(function(e){console.log("Login error",e),401===e.response.status&&(t.errorMessage="Invalid email and/or password.")})}}},P={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Pharmacist Login")]),t._v(" "),r("p",[t._v("If you are experiencing any issues, please reach out to us at support@epios.com.")]),t._v(" "),t.errorMessage?r("div",{staticClass:"error"},[t._v("\n    "+t._s(this.errorMessage)+"\n  ")]):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[r("label",[t._v("Email:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("label",[t._v("Password:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("br"),t._v(" "),r("button",[t._v("Login")])]),t._v(" "),r("br")])},staticRenderFns:[]};var y=r("VU/8")(g,P,!1,function(t){r("5EBO")},"data-v-a6257c9e",null).exports,N={props:["currentUser"],data:function(){return{prescriptions:[]}},created:function(){var t=this;o.a.get(l.PRESCRIPTIONS_URL).then(function(e){t.prescriptions=e.data}).catch(function(t){return console.warn(t)})},computed:{isPharmacist:function(){return"pharmacist"===this.currentUser.type}},methods:{goToPrescriptionDetails:function(t){this.$router.push({name:"PrescriptionDetails",params:{id:t}})}},filters:{filledBy:function(t){return t.filledByPharmacist?t.filledByPharmacist.name:"Script not filled"},formatDate:function(t){return new Date(t).toLocaleDateString("en-AU",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}}},w={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isPharmacist?r("div",[r("h3",[t._v("Prescriptions Index")]),t._v(" "),t._m(0),t._v(" "),t._l(t.prescriptions,function(e){return r("div",{staticClass:"container result",on:{click:function(r){return t.goToPrescriptionDetails(e._id)}}},[r("div",[t._v(t._s(e.patientName))]),t._v(" "),r("div",[t._v(t._s(e.patientMedicareNumber))]),t._v(" "),r("div",[t._v(t._s(e.itemName))]),t._v(" "),r("div",[t._v(t._s(e.quantity))]),t._v(" "),r("div",[t._v(t._s(e.issuedByDoctor.name))]),t._v(" "),r("div",[t._v(t._s(t._f("formatDate")(e.createdAt)))]),t._v(" "),r("div",[t._v(t._s(t._f("filledBy")(e)))]),t._v(" "),r("div",[r("span","filledByPharmacist"in e?[t._v(t._s(t._f("formatDate")(e.updatedAt)))]:[t._v("Script not filled")])])])})],2):r("div",[r("h3",[t._v("Access restricted. You do not have permission to view this content.")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container header"},[r("div",[t._v("Patient name")]),t._v(" "),r("div",[t._v("Patient Medicare No.")]),t._v(" "),r("div",[t._v("Item name")]),t._v(" "),r("div",[t._v("Quantity")]),t._v(" "),r("div",[t._v("Issued by")]),t._v(" "),r("div",[t._v("Issue date")]),t._v(" "),r("div",[t._v("Filled by")]),t._v(" "),r("div",[t._v("Filled date")])])}]};var I=r("VU/8")(N,w,!1,function(t){r("uu19")},"data-v-416bbb48",null).exports,b={props:["id","currentUser"],data:function(){return{prescription:{}}},methods:{fillScript:function(){var t=this,e=l.PRESCRIPTIONS_URL+"/"+this.id+"/fill";o.a.patch(e).then(function(e){console.log("Response:",e.data),t.prescription=e.data}).catch(function(t){return console.warn(t)})}},created:function(){var t=this,e=l.PRESCRIPTIONS_URL+"/"+this.id;o.a.get(e).then(function(e){t.prescription=e.data}).catch(function(t){return console.warn(t)})},computed:{isPharmacist:function(){return"pharmacist"===this.currentUser.type}},filters:{formatDate:function(t){return new Date(t).toLocaleDateString("en-AU",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}}},L={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isPharmacist?r("div",[t.prescription._id?r("div",{staticClass:"container"},[r("h3",[t._v("Prescription for "+t._s(t.prescription.patientName))]),t._v(" "),r("table",[r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Patient Medicare Number")]),t._v(" "),r("td",[t._v(t._s(t.prescription.patientMedicareNumber))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Patient Address")]),t._v(" "),r("td",[t._v(t._s(t.prescription.patientAddress))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Item Name")]),t._v(" "),r("td",[t._v(t._s(t.prescription.itemName))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Dosage Instructions")]),t._v(" "),r("td",[t._v(t._s(t.prescription.dosageInstructions))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Quantity")]),t._v(" "),r("td",[t._v(t._s(t.prescription.quantity))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Issued by")]),t._v(" "),r("td",[t._v(t._s(t.prescription.issuedByDoctor.name))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:"row"}},[t._v("Issue Date")]),t._v(" "),r("td",[t._v(t._s(t._f("formatDate")(t.prescription.createdAt)))])]),t._v(" "),r("tr",[r("th",{attrs:{scope:" row"}},[t._v("Filled by")]),t._v(" "),r("td",[t.prescription.filledByPharmacist&&t.isPharmacist?r("span",[t._v("\n            "+t._s(t.prescription.filledByPharmacist.name)+"\n          ")]):r("span",[t._v("Script not filled")])])])]),t._v(" "),r("br"),t._v(" "),t.prescription.filledByPharmacist&&t.isPharmacist?r("div"):r("div",[r("button",{on:{click:t.fillScript}},[t._v("Fill script")])])]):r("div",[r("p",[t._v("Loading prescription details...")])])]):r("div",[r("h3",[t._v("Access restricted. You do not have permission to view this content.")])])])},staticRenderFns:[]};var U=r("VU/8")(b,L,!1,function(t){r("bf21")},"data-v-7496330e",null).exports,D={props:["currentUser"],data:function(){return{patientName:"",patientMedicareNumber:"",patientAddress:"",itemName:"",dosageInstructions:"",quantity:"",issuedByDoctor:"",errors:[]}},methods:{checkForm:function(){this.patientName||this.errors.push("Patient name required."),this.patientMedicareNumber||this.errors.push("Patient medicare number required."),this.patientAddress||this.errors.push("Patient address required."),this.itemName||this.errors.push("Item name required."),this.dosageInstructions||this.errors.push("Dosage instructions required."),this.quantity||this.errors.push("Quantity required."),this.patientName&&this.patientMedicareNumber&&this.patientAddress&&this.itemName&&this.dosageInstructions&&this.quantity&&this.issueScript()},issueScript:function(){var t=this;o.a.post(l.PRESCRIPTIONS_URL,{patientName:this.patientName,patientMedicareNumber:this.patientMedicareNumber,patientAddress:this.patientAddress,itemName:this.itemName,dosageInstructions:this.dosageInstructions,quantity:this.quantity,issuedByDoctor:this.issuedByDoctor}).then(function(e){console.log("Form submitted:",e.data),t.$router.push({name:"PrescriptionHistory"})}).catch(function(t){console.log(t)})}}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h3",[t._v("Issue new prescription")]),t._v(" "),t.errors.length?r("div",{staticClass:"errors"},[t._v("\n    Please resolve the following error(s):"),r("br"),r("br"),t._v(" "),t._l(t.errors,function(e){return r("div",[t._v(t._s(e))])}),t._v(" "),r("br")],2):t._e(),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.checkForm(e)}}},[r("label",[t._v("Patient Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.patientName,expression:"patientName"}],attrs:{type:"text"},domProps:{value:t.patientName},on:{input:function(e){e.target.composing||(t.patientName=e.target.value)}}}),t._v(" "),r("label",[t._v("Patient Medicare Number:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.patientMedicareNumber,expression:"patientMedicareNumber"}],attrs:{type:"text"},domProps:{value:t.patientMedicareNumber},on:{input:function(e){e.target.composing||(t.patientMedicareNumber=e.target.value)}}}),t._v(" "),r("label",[t._v("Patient Address:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.patientAddress,expression:"patientAddress"}],attrs:{type:"text"},domProps:{value:t.patientAddress},on:{input:function(e){e.target.composing||(t.patientAddress=e.target.value)}}}),t._v(" "),r("label",[t._v("Item Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemName,expression:"itemName"}],attrs:{type:"text"},domProps:{value:t.itemName},on:{input:function(e){e.target.composing||(t.itemName=e.target.value)}}}),t._v(" "),r("label",[t._v("Dosage Instructions:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dosageInstructions,expression:"dosageInstructions"}],attrs:{type:"text"},domProps:{value:t.dosageInstructions},on:{input:function(e){e.target.composing||(t.dosageInstructions=e.target.value)}}}),t._v(" "),r("label",[t._v("Quantity:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],attrs:{type:"number"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}}),t._v(" "),r("br"),t._v(" "),r("button",[t._v("Issue Script")])])])},staticRenderFns:[]};var S=r("VU/8")(D,R,!1,function(t){r("WFeK")},"data-v-030c7abd",null).exports,x={props:["currentUser"],data:function(){return{prescriptions:[]}},created:function(){var t=this;o.a.get(l.PRESCRIPTION_HISTORY_URL).then(function(e){t.prescriptions=e.data}).catch(function(t){return console.warn(t)})},computed:{isDoctor:function(){return"doctor"===this.currentUser.type}},filters:{formatDate:function(t){return new Date(t).toLocaleDateString("en-AU",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}}},M={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isDoctor?r("div",[r("h3",[t._v("My Prescription History")]),t._v(" "),t._m(0),t._v(" "),t._l(t.prescriptions,function(e){return r("div",{staticClass:"container result"},[r("div",[t._v(t._s(e.patientName))]),t._v(" "),r("div",[t._v(t._s(e.patientMedicareNumber))]),t._v(" "),r("div",[t._v(t._s(e.itemName))]),t._v(" "),r("div",[t._v(t._s(e.quantity))]),t._v(" "),r("div",[t._v(t._s(e.dosageInstructions))]),t._v(" "),r("div",[t._v(t._s(t._f("formatDate")(e.createdAt)))])])})],2):r("div",[r("h3",[t._v("Access restricted. You do not have permission to view this content.")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container header"},[r("div",[t._v("Patient name")]),t._v(" "),r("div",[t._v("Patient Medicare No.")]),t._v(" "),r("div",[t._v("Item name")]),t._v(" "),r("div",[t._v("Quantity")]),t._v(" "),r("div",[t._v("Dosage directions")]),t._v(" "),r("div",[t._v("Issue date")])])}]};var A=r("VU/8")(x,M,!1,function(t){r("Kzx8")},"data-v-c56d4264",null).exports;i.a.use(v.a);var E=new v.a({routes:[{path:"/",name:"Home",component:m},{path:"/login/doctors",name:"DoctorLogin",component:f},{path:"/login/pharmacists",name:"PharmacistLogin",component:y},{path:"/prescriptions",name:"PrescriptionsIndex",component:I,props:!0},{path:"/prescriptions/:id",name:"PrescriptionDetails",component:U,props:!0},{path:"/prescription/new",name:"NewPrescription",component:S,props:!0},{path:"/prescription-history",name:"PrescriptionHistory",component:A,props:!0}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:E,components:{App:p},template:"<App/>"})},WFeK:function(t,e){},bf21:function(t,e){},fs43:function(t,e){},oiih:function(t,e,r){var i=void 0;i="https://nameless-atoll-61776.herokuapp.com",t.exports={PRESCRIPTIONS_URL:i+"/prescriptions",DOCTOR_LOGIN_URL:i+"/login/doctors",PHARMACIST_LOGIN_URL:i+"/login/pharmacists",PRESCRIPTION_HISTORY_URL:i+"/prescription-history"}},uu19:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb1c7cb138e05d3e0d37.js.map