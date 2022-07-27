"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[327],{3174:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(5861),r=t(885),s=t(7757),o=t.n(s),i=t(5705),c=t(3284),u=t(2791),l=t(3318),d=t(8174),m=(t(5462),t(495)),h="Contact_phoneBook__50sUl",p="Contact_phoneBookTitle__TKEQ7",_="Contact_contactsTitle__UBpL9",x="Contact_phoneBookForm__GeUym",f="Contact_phoneBookLabel__AMv6J",v="Contact_phoneBookInput__VJtwS",b="Contact_phoneBookButton__lq3iA",C="Contact_findContactLabel__RJKkD",j="Contact_findContactInput__ZbX+j",g="Contact_contactList__ZHM49",N="Contact_contactList__item__6bM-C",k="Contact_contactList__text__w3zvp",y="Contact_contactList__button__sB-3K",w=t(3329),Z=c.Ry().shape({name:c.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),number:c.Z_().required("This field is Required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid")}),A=function(){var e=(0,l.Jx)().data,n=(0,l.Tn)(),t=(0,r.Z)(n,2),s=t[0],c=t[1].isLoading,h=(0,i.TA)({initialValues:{name:"",number:""},onSubmit:function(){var e=(0,a.Z)(o().mark((function e(n,t){var a,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.name,r=n.number,(0,t.resetForm)(),e.prev=3,!_){e.next=8;break}return e.abrupt("return",d.Am.warn("".concat(a," is already in \ud83d\udcf1")));case 8:return e.next=10,s({name:a,number:r});case 10:return e.abrupt("return",d.Am.success("".concat(a," added in your \ud83d\udcf1")));case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),console.log(e.t0),e.abrupt("return",d.Am.error("Ooops..., something went wrong, try again later"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n,t){return e.apply(this,arguments)}}(),validationSchema:Z}),p=h.values.name,_=(0,u.useMemo)((function(){return null===e||void 0===e?void 0:e.find((function(e){return e.name===p}))}),[e,p]);return(0,w.jsxs)("form",{className:x,onSubmit:h.handleSubmit,children:[(0,w.jsx)("label",{className:f,children:(0,w.jsx)("input",{className:v,name:"name",onChange:h.handleChange,value:h.values.name,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name"})}),(0,w.jsx)("label",{className:f,children:(0,w.jsx)("input",{className:v,name:"number",onChange:h.handleChange,value:h.values.number,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Number"})}),(0,w.jsx)("button",{className:b,type:"submit",children:c?(0,w.jsx)(m.a,{}):"Add contact"})]})},B=t(2982),L=t(1413),F=t(5048),T={getFilter:function(e){return e.filter.value}},M=t(873),S=function(){var e=(0,F.v9)(T.getFilter),n=(0,u.useMemo)((function(){return(0,M.createSelector)([function(e){return e.data},function(e,n){return n}],(function(e,n){var t;return null!==(t=null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})))&&void 0!==t?t:[]}))}),[]);return(0,l.Jx)(void 0,{selectFromResult:function(t){return(0,L.Z)((0,L.Z)({},t),{},{filteredContacts:n(t,e)})}})},q=t(1771),J=function(){var e=(0,F.v9)(T.getFilter),n=(0,F.I0)();return(0,w.jsxs)("label",{className:C,children:["Find contacts by name",(0,w.jsx)("input",{className:j,type:"text",value:e,onChange:function(e){return n((0,q.M)(e.target.value))}})]})},z=function(){var e=(0,u.useState)(!0),n=(0,r.Z)(e,2),t=n[0],a=n[1];return[t,function(e){return"BUTTON"===e.target.tagName&&a(!t),d.Am.info("Contact deleted from your \ud83d\udcf1")}]},R=t(1856),P=t(441),U={visible:{opacity:1,x:0,transition:{opacity:1}},hidden:{opacity:0,x:-100}},I=function(e){var n=e.id,t=e.name,a=e.number,s=(0,l.Nt)(),o=(0,r.Z)(s,1)[0],i=z(),c=(0,r.Z)(i,2),u=c[0],d=c[1];return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(R.M,{children:u&&(0,w.jsxs)(P.E.li,{className:N,variants:U,initial:"hidden",animate:"visible",exit:"hidden",onClick:d,children:[(0,w.jsxs)("p",{className:k,children:[(0,w.jsx)("b",{children:t}),": ",a]}),(0,w.jsx)("button",{className:y,onClick:function(){return o(n)},children:"Delete"})]})})})},K=function(){var e=S(),n=e.filteredContacts,t=e.isLoading,a=e.isSuccess,r=null===n||void 0===n?void 0:n.length,s=(0,u.useMemo)((function(){return(0,B.Z)(n).reverse()}),[n]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(J,{}),r?(0,w.jsxs)("p",{className:k,children:["Contacts: ",r]}):(0,w.jsx)("p",{className:k,children:"PhoneBook is empty."}),t&&(0,w.jsx)(m.a,{}),a&&(0,w.jsx)("ul",{className:g,children:s.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,w.jsx)(I,{id:n,name:t,number:a},n)}))})]})},D=t(9126),E=t(7425),O=function(){return(0,w.jsxs)("h1",{className:p,children:["PhoneBook",(0,w.jsx)(D.me1,{})]})},V=function(){return(0,w.jsxs)("h2",{className:_,children:["Contacts ",(0,w.jsx)(E.Nwp,{})]})},$=function(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)(O,{}),(0,w.jsx)(A,{}),(0,w.jsx)(V,{}),(0,w.jsx)(K,{})]})})}}}]);
//# sourceMappingURL=327.d31c6645.chunk.js.map