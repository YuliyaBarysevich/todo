(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(33),r=n(34),a=n(43),s=n(41),i=n(0),o=n.n(i),u=n(14),l=n.n(u),j=n(6),d=n.n(j),p=n(42),b=n(11),h=n(9),O=n(10),f=n(19),x=n(13),m=(n(50),n(18)),v=n(23),g=function(e){var t=Object(i.useState)({}),n=Object(h.a)(t,2),c=n[0],r=n[1];return[function(t){t.preventDefault(),t.target.reset(),e(c)},function(e){r((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(m.a)({},e.target.name,e.target.value))}))},c]},y=n(1);var k=function(e){var t=g((function(t){e.handleSubmit(t)})),n=Object(h.a)(t,2),c=n[0],r=n[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(O.a,{onSubmit:c,children:Object(y.jsxs)(x.a,{children:[Object(y.jsx)(x.a.Img,{src:"https://images.pexels.com/photos/4359106/pexels-photo-4359106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Card image"}),Object(y.jsx)(x.a.ImgOverlay,{children:Object(y.jsxs)(x.a.Body,{children:[Object(y.jsx)(x.a.Title,{children:"Add ToDo Item"}),Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Label,{children:"New Task*"}),Object(y.jsx)(O.a.Control,{size:"lg",name:"text",required:!0,placeholder:"What do you need to do?",onChange:r})]}),Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Label,{children:"Notes"}),Object(y.jsx)(O.a.Control,{name:"notes",type:"text",placeholder:"Additional Info",onChange:r})]}),Object(y.jsxs)(O.a.Group,{children:[Object(y.jsx)(O.a.Label,{children:"Priority*"}),Object(y.jsxs)(O.a.Control,{as:"select",size:"sm",name:"priority",required:!0,onChange:r,children:[Object(y.jsx)("option",{children:"Choose priority of the task"}),Object(y.jsx)("option",{value:"High !!!",children:"High !!!"}),Object(y.jsx)("option",{value:"Medium !!",children:"Medium !!"}),Object(y.jsx)("option",{value:"Low !",children:"Low !"}),Object(y.jsx)("option",{value:"None",children:"None"})]})]}),Object(y.jsx)(f.a,{variant:"primary",size:"lg",type:"submit",children:"Add New Task"})]})})]})})})},w=o.a.createContext();var C=function(e){var t=Object(i.useState)(3),n=Object(h.a)(t,2),c=n[0],r=n[1],a=Object(i.useState)(0),s=Object(h.a)(a,2),o={displayCount:c,totalTasks:s[0],setDisplayCount:r,setTotalTasks:s[1]};return Object(y.jsx)(w.Provider,{value:o,children:e.children})},T=function(e){for(var t=e.tasksPerPage,n=e.totalTasks,c=e.paginate,r=[],a=1;a<=Math.ceil(n/t);a++)r.push(a);return Object(y.jsx)("section",{children:Object(y.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(y.jsx)("li",{className:"page-item",children:Object(y.jsx)(f.a,{variant:"outline-dark",onClick:function(){return c(e)},href:"#",children:e})},e)}))})})},N=n(20),S=n(40);var D=function(e){var t=Object(i.useContext)(w),n=Object(i.useState)(1),c=Object(h.a)(n,2),r=c[0],a=c[1],s=e.list.sort((function(e,t){return t.complete>e.complete?-1:t.complete<e.complete?1:0})),o=r*t.displayCount,u=o-t.displayCount,l=s.slice(u,o);return t.setTotalTasks(s.length),Object(y.jsxs)("section",{children:[Object(y.jsx)("ul",{children:l.map((function(t){return Object(y.jsx)("li",{className:"complete-".concat(t.complete.toString()),children:Object(y.jsxs)(N.a,{children:[Object(y.jsxs)(N.a.Header,{closeButton:!1,children:[Object(y.jsx)(S.a,{className:t.complete?"pendingBadge":"completeBadge",children:t.complete?"Complete":"Pending"}),Object(y.jsxs)("strong",{children:["Priority: ",t.priority]}),Object(y.jsx)(f.a,{className:"btn-close",onClick:function(){return e.handleDelete(t._id)},children:"X"})]}),Object(y.jsxs)(N.a.Body,{onClick:function(){return e.handleComplete(t._id)},children:[Object(y.jsx)("h3",{children:t.text}),Object(y.jsxs)("small",{children:["Notes:  ",t.notes]})]})]})},t._id)}))}),Object(y.jsx)(T,{tasksPerPage:t.displayCount,totalTasks:t.totalTasks,paginate:function(e){return a(e)}})]})},_=n(15),L=n.n(_),M=n.p+"static/media/logo-todo.b23f21c9.png",P=(n(73),function(e){var t="https://barysevich-server-api.herokuapp.com/api/v1/todo";return[function(){var e=Object(b.a)(d.a.mark((function e(n){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(t);case 2:c=e.sent,r=c.data,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(b.a)(d.a.mark((function e(n,c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.complete=!1,e.next=3,L.a.post(t,n);case 3:r=e.sent,c(r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),function(){var n=Object(b.a)(d.a.mark((function n(c,r){var a,s,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(a=e.filter((function(e){return e._id===c}))[0]||{})._id){n.next=9;break}return a.complete=!a.complete,n.next=6,L.a.put("".concat(t,"/").concat(c),a);case 6:s=n.sent,i=s.data,r(e.map((function(e){return e._id===i._id?i:e})));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}(),function(){var n=Object(b.a)(d.a.mark((function n(c,r){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=e.filter((function(e){return e._id===c}))[0]||{},n.next=4,L.a.delete("".concat(t,"/").concat(c));case 4:r(e.filter((function(e){return e._id!==a._id}))),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()]});var B=function(e){var t=Object(i.useState)([]),n=Object(h.a)(t,2),c=n[0],r=n[1],a=P(c),s=Object(h.a)(a,4),o=s[0],u=s[1],l=s[2],j=s[3],O=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(t,(function(e){return r([].concat(Object(p.a)(c),[e]))})),console.log(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t,(function(e){return r(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t,(function(e){return r(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){o((function(e){return r(e)}))}),[]),Object(i.useEffect)((function(){c.length>=1&&(document.title="To Do List: ".concat(c.filter((function(e){return!e.complete})).length))}),[c]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("header",{children:Object(y.jsxs)("nav",{children:[Object(y.jsx)("img",{src:M,alt:"Logo"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Home"}),Object(y.jsx)("li",{children:"Settings"})]})]})}),Object(y.jsxs)("main",{children:[Object(y.jsxs)("section",{class:"top",children:[Object(y.jsxs)("h2",{children:["ToDo List Manager (",c.filter((function(e){return!e.complete})).length," / ",c.length,")"]}),Object(y.jsx)("p",{children:function(){var e=new Date,t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=["Monday","Tuesday","Wednsday","Thursday","Friday","Saturday","Sunday"][e.getDay()];return"".concat(c," / ").concat(t,"th ").concat(n)}()})]}),Object(y.jsxs)("section",{className:"main",children:[Object(y.jsx)("div",{children:Object(y.jsx)(k,{handleSubmit:O})}),Object(y.jsx)("div",{children:Object(y.jsx)(D,{list:c,handleComplete:f,handleDelete:x})})]})]}),Object(y.jsx)("footer",{children:Object(y.jsx)("p",{children:Object(y.jsx)("p",{children:" 2021 \xa9 Barysevich Yuliya"})})})]})};var A=function(){return Object(y.jsx)(C,{children:Object(y.jsx)(B,{})})},I=function(e){Object(a.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(y.jsx)(A,{})}}]),n}(o.a.Component),J=document.getElementById("root");l.a.render(Object(y.jsx)(I,{}),J)}},[[74,1,2]]]);
//# sourceMappingURL=main.c3b457dd.chunk.js.map