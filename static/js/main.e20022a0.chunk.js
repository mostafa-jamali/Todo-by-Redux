(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{51:function(e,t,a){e.exports=a(80)},56:function(e,t,a){},61:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(26),r=a.n(l),o=(a(56),a(16)),i=a(17),m=a(29),u=a(39),d={todo_List:[{id:1,title:"title",text:"text",checkList:[{id:1,text:"text1",status:!1},{id:2,text:"text2",status:!1}]},{id:2,title:"title",text:"text",checkList:[{id:1,text:"text1",status:!1},{id:2,text:"text2",status:!0}]},{id:3,title:"title",text:"text",checkList:[{id:1,text:"text1",status:!1},{id:2,text:"text2",status:!0}]}]},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_TODO":return Object(u.a)({},e,{todo_List:[].concat(Object(m.a)(e.todo_List),[n])});case"DELETE_TODO":return Object(u.a)({},e,{todo_List:e.todo_List.filter((function(e){return e.id!==n}))});default:return e}},E=Object(i.c)({todoList:s}),h=a(47),b=[a.n(h).a],p=Object(i.d)(E,i.a.apply(void 0,b)),f=(a(61),a(22)),x=a(9),v=a(13),O=a(92),y=a(81),j=a(82),g=a(83),k=a(84);var L=function(e){var t=e.search,a=e.handleChange;return c.a.createElement(y.a,{className:"px-5 py-2 mx-5 rounded bg-info"},c.a.createElement(j.a,null,c.a.createElement(g.a,{htmlFor:"search"},"Search todo"),c.a.createElement(k.a,{type:"search",id:"search",name:"search",value:t,onChange:a})))},C=a(85),N=a(86),T=a(87),w=a(90),D=a(91),_=a(48),S=a(88),A=a(94),F=a(93),I=a(89);var W=function(e){var t=e.checkItem;return c.a.createElement("li",null,c.a.createElement(j.a,{check:!0},c.a.createElement(k.a,{type:"checkbox",name:"check",id:"exampleCheck"}),t.status?c.a.createElement("del",null,t.text):t.text))},B="ADD_TODO",J="DELETE_TODO";var M=Object(o.b)(null,{deleteTodo:function(e){return{type:J,payload:e}}})((function(e){var t=e.item,a=e.deleteTodo,l=Object(n.useState)(!1),r=Object(v.a)(l,2),o=r[0],i=r[1],m=Object(n.useState)(null),u=Object(v.a)(m,2),d=u[0],s=u[1],E=Object(n.useState)(null),h=Object(v.a)(E,2),b=h[0],p=h[1],f=Object(n.useState)(!1),x=Object(v.a)(f,2),O=x[0],y=x[1];return c.a.createElement(C.a,{className:"p-3"},c.a.createElement(N.a,null,c.a.createElement(T.a,{className:"d-flex justify-content-between"},c.a.createElement("p",null,t.title," ","".concat(t.id)),c.a.createElement(S.a,{isOpen:o,toggle:function(){return e=t.id,i((function(e){return!e})),void s(e);var e}},c.a.createElement(A.a,{caret:!0},"Actions"),o&&d==t.id?c.a.createElement(F.a,null,c.a.createElement(I.a,null,"Edit"),c.a.createElement(I.a,{onClick:function(){return a(t.id)}},"Delete")):c.a.createElement("div",null))),c.a.createElement(w.a,null,c.a.createElement(D.a,null,t.text," ","".concat(t.id)),c.a.createElement(_.a,{onClick:function(){return e=t.id,p(e),void y(!O);var e}},"Toggle"),b==t.id&&O?c.a.createElement("ol",null,t.checkList.map((function(e){return c.a.createElement(W,{checkItem:e,key:e.id})}))):c.a.createElement("div",null))))}));a(77);var $=Object(o.b)((function(e){return{todoList:e.todoList.todo_List}}),{})((function(e){var t=e.todoList,a=Object(n.useState)(""),l=Object(v.a)(a,2),r=l[0],o=l[1],i=t.filter((function(e){return e.title.toLowerCase().startsWith(r.toLowerCase())}));return c.a.createElement("div",{className:"border rounded py-3"},c.a.createElement(L,{handleChange:function(e){var t=e.target.value;o(t)},search:r}),c.a.createElement(O.a,{className:"justify-content-center px-5",xs:1,md:2,xl:3},i.map((function(e){return c.a.createElement(M,{item:e,key:e.id})}))),c.a.createElement(f.b,{to:"/add"},c.a.createElement("button",{className:"btn btn-primary add-button"},"Add")))}));var q=Object(o.b)((function(e){return{todoList:e.todoList.todo_List}}),{addTodo:function(e){return{type:B,payload:e}}})((function(e){e.todoList,e.addTodo;var t=Object(x.f)(),a=Object(n.useState)([{id:1,text:"text1",status:!1}]),l=Object(v.a)(a,2),r=l[0],o=l[1],i=function(e){var t=e.target;t.name,t.value};return c.a.createElement(y.a,{className:"col-6 mx-auto mt-5 p-3 border rounded-lg bg-info",onSubmit:function(e){e.preventDefault(),t.push("/")}},c.a.createElement(j.a,null,c.a.createElement(g.a,{htmlFor:"name",className:"mb-0"},"Title:"),c.a.createElement(k.a,{placeholder:"title",type:"text",name:"name",id:"name",onChange:i})),c.a.createElement(j.a,null,c.a.createElement(g.a,{htmlFor:"email",className:"mb-0"},"Text:"),c.a.createElement(k.a,{placeholder:"text",type:"email",name:"email",id:"email",onChange:i})),r.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement(j.a,null,c.a.createElement(g.a,{htmlFor:"email",className:"mb-0"},"Check item ",e.id),c.a.createElement(k.a,{placeholder:"Check item ".concat(e.id),type:"email",name:"email",id:"email",onChange:i})))})),c.a.createElement(_.a,{color:"success",className:"border",type:"submit"},"save")," "," ",c.a.createElement(_.a,{color:"primary",className:"border",type:"button",onClick:function(){r.id=r.length+1,o([].concat(Object(m.a)(r),[r]))}},"add check item")," "," ",c.a.createElement(_.a,{type:"button",className:"border"},"clear"))}));var z=function(){return c.a.createElement(o.a,{store:p},c.a.createElement("div",{className:"App"},c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(x.c,null,c.a.createElement(x.a,{path:"/add"},c.a.createElement(q,null)),c.a.createElement(x.a,{path:"/"},c.a.createElement($,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.e20022a0.chunk.js.map