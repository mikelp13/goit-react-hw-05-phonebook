(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{36:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),c=e(7),o=e.n(c),i=e(18),s=e(2),l=e(13),u=e(39),b=e(40),f=e(11),j=e(3),d=e(4);function p(){var n=Object(j.a)(["\n  width: 100%;\n  color: #fff;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n  background-color: #3645ab;\n\n  \u2003 &:hover {\n    background-color: #273aba;\n    color: white;\n  }\n"]);return p=function(){return n},n}function x(){var n=Object(j.a)(["\n  padding: 10px;\n  margin: 5px 0 20px 0;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  background-color: white;\n  outline-color: #3645ab;\n\n  &::placeholder {\n    font-size: 14px;\n    color: #d8d8d8;\n  }\n"]);return x=function(){return n},n}function m(){var n=Object(j.a)(["\n  margin: 30px 0;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]);return m=function(){return n},n}var O=d.a.form(m()),h=d.a.input(x()),g=d.a.button(p()),v={name:"",number:""},y=function(n){var t=n.onAddContact,e=Object(r.useState)(Object(s.a)({},v)),c=Object(l.a)(e,2),o=c[0],i=c[1],u=function(n){var t=n.target,e=t.name,a=t.value;i((function(n){return Object(s.a)(Object(s.a)({},n),{},Object(f.a)({},e,a))}))};return Object(a.jsxs)(O,{onSubmit:function(n){n.preventDefault();var e=o.name,a=o.number;t(e,a),i({name:"",number:""})},children:[Object(a.jsxs)("label",{children:["Name",Object(a.jsx)(h,{type:"text",name:"name",value:o.name,placeholder:"Enter your name",onChange:u})]}),Object(a.jsxs)("label",{children:["Number",Object(a.jsx)(h,{type:"tel",name:"number",value:o.number,placeholder:"123-45-678",onChange:u})]}),Object(a.jsx)(g,{type:"submit",children:"Add contact"})]})},C=e(41);function w(){var n=Object(j.a)(["\n  width:35px;\n  height:35px;\n  font-size: 20px;\n  background-color:#F1392D;\n  line-height: 17px;\n\n  &:hover{\n    background-color:#d71b0e\n  }\n"]);return w=function(){return n},n}function k(){var n=Object(j.a)(["\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 15px;\n    background-color: white;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-radius: 3px;\n\n    &:not(:last-child) {\n      margin-bottom: 10px;\n    }\n  }\n\n  .ContactList-item-enter {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n\n  .ContactList-item-enter-active {\n    opacity: 1;\n    transform:translateX(0);\n    transition: all 250ms linear;\n  }\n\n  .ContactList-item-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .ContactList-item-exit-active {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: all 250ms linear;\n  }\n"]);return k=function(){return n},n}var N=d.a.div(k()),X=Object(d.a)(g)(w()),L=function(n){var t=n.contact,e=t.id,r=t.name,c=t.number,o=n.onDeleteContact;return Object(a.jsxs)("li",{children:[Object(a.jsxs)("p",{children:[r,": ",c]}),Object(a.jsx)(X,{type:"button","data-id":e,onClick:o,children:"\xd7"})]})},E=function(n){var t=n.contacts,e=n.onDeleteContact;return Object(a.jsx)(N,{children:Object(a.jsx)(C.a,{component:"ul",children:t.map((function(n){return Object(a.jsx)(u.a,{timeout:250,classNames:"ContactList-item",children:Object(a.jsx)(L,{contact:n,onDeleteContact:e})},n.id)}))})})};function S(){var n=Object(j.a)(["\n  margin: 5px 0 0;\n"]);return S=function(){return n},n}function D(){var n=Object(j.a)(["\n  margin: 0 0 30px ;\n  padding: 5px 20px 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]);return D=function(){return n},n}var F=d.a.div(D()),z=Object(d.a)(h)(S()),J=function(n){var t=n.value,e=n.onChangeFilter;return Object(a.jsx)(F,{children:Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)(z,{type:"text",value:t,onChange:e,placeholder:"Search..."})]})})};function A(){var n=Object(j.a)(["\n  width: 50%;\n  margin: 0 auto;\n\n  h1 {\n    color: #3645ab;\n  }\n\n  .phonebook-title-appear {\n    transform: translateX(-100%);\n  }\n  .phonebook-title-appear-active {\n    transform: translateX(0);\n    transition: transform 500ms linear;\n  }\n\n\n  .filter-enter {\n    opacity: 0;\n    transform: scale(0.1);\n  }\n\n  .filter-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 500ms linear;\n  }\n\n  .filter-exit {\n    opacity: 1;\n    transform: scale(0.1);\n  }\n\n  .filter-exit-active {\n    opacity: 0;\n    transform: scale(0);\n    transition: all 500ms linear;\n  }\n\n\n  .Notification-enter {\n    transform: translateX(100%);\n  }\n\n  .Notification-enter-active {\n    transform: translateX(0);\n    transition: transform 250ms linear;\n  }\n\n  .Notification-exit {\n    transform: translateX(0);\n  }\n\n  .Notification-exit-active {\n    transform: translateX(300%);\n    transition: transform 250ms linear;\n  }\n"]);return A=function(){return n},n}var I=d.a.div(A());function M(){var n=Object(j.a)(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background-color: #F1392D;\n  color: #fff;\n  font-size: 20px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  border-radius:5px;\n"]);return M=function(){return n},n}var P=d.a.div(M()),B=function(n){var t=n.message;return Object(a.jsx)(P,{children:Object(a.jsx)("p",{children:t})})},T={contacts:[],filter:"",alert:!1},q=function(){var n=Object(r.useState)(Object(s.a)({},T)),t=Object(l.a)(n,2),e=t[0],c=t[1];Object(r.useEffect)((function(){var n=localStorage.getItem("contacts");n&&c((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:JSON.parse(n)})}))}),[]),Object(r.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e.contacts))}),[e.contacts]);return Object(a.jsxs)(I,{children:[Object(a.jsx)(u.a,{in:!0,appear:!0,classNames:"phonebook-title",timeout:500,unmountOnExit:!0,children:Object(a.jsx)("h1",{children:"Phonebook"})}),Object(a.jsx)(y,{onAddContact:function(n,t){var a=e.contacts,r={id:Object(b.a)(),name:n,number:t};if(!n||!t)return c((function(n){return Object(s.a)(Object(s.a)({},n),{},{alert:!0,alertMessage:"Please enter some contact information."})}));a.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?c((function(t){return Object(s.a)(Object(s.a)({},t),{},{alert:!0,alertMessage:"".concat(n," is already in contacts!")})})):c((function(n){return Object(s.a)(Object(s.a)({},n),{},{contacts:[r].concat(Object(i.a)(n.contacts))})}))}}),Object(a.jsx)(u.a,{in:e.contacts.length>1,classNames:"filter",timeout:500,unmountOnExit:!0,children:Object(a.jsx)(J,{value:e.filter,onChangeFilter:function(n){var t=n.target.value;c((function(n){return Object(s.a)(Object(s.a)({},n),{},{filter:t})}))}})}),Object(a.jsx)(E,{contacts:function(){var n=e.contacts,t=e.filter;return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))}(),onDeleteContact:function(n){var t=n.target.dataset.id;c((function(n){return Object(s.a)(Object(s.a)({},n),{},{contacts:Object(i.a)(n.contacts.filter((function(n){return n.id!==t}))),filter:""})}))}}),!e.contacts.length&&Object(a.jsx)("p",{children:"There are no contacts in current list."}),Object(a.jsx)(u.a,{in:e.alert,classNames:"Notification",onEntered:function(){return c((function(n){return Object(s.a)(Object(s.a)({},n),{},{alert:!1})}))},timeout:3e3,unmountOnExit:!0,children:Object(a.jsx)(B,{message:e.alertMessage})})]})};e(36);o.a.render(Object(a.jsx)(q,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e2b9aab8.chunk.js.map