(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(4),i=(c(14),c(15),c(2)),b=c(1),j=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},r=function(){return Object(b.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(b.jsx)("div",{className:"navbar-menu",children:Object(b.jsxs)("div",{className:"navbar-start",children:[Object(b.jsx)(n.b,{to:"/",className:"navbar-item isActive is-active",children:"Home"}),Object(b.jsx)(n.b,{to:"/tabs",className:"navbar-item isActive",children:"Tabs"})]})})})},l=c(9),d=c.n(l),o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],x=function(){var e=Object(i.g)().tabId,t=o.find((function(t){return t.id===e}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:o.map((function(e){return Object(b.jsx)("li",{className:d()({"is-active":(null===t||void 0===t?void 0:t.id)===e.id}),"data-cy":"tab",children:Object(b.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"tab-content",children:(null===t||void 0===t?void 0:t.content)||"Please select a tab"})]})},h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(j,{})}),Object(b.jsxs)(i.a,{path:"/tabs",children:[Object(b.jsx)(i.a,{index:!0,element:Object(b.jsx)(x,{})}),Object(b.jsx)(i.a,{path:":tabId",element:Object(b.jsx)(x,{})})]}),Object(b.jsx)(i.a,{path:"*",element:Object(b.jsx)("p",{children:"Page not found"})})]})})]})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0defd118.chunk.js.map