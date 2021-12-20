(this["webpackJsonpnc-news"]=this["webpackJsonpnc-news"]||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},29:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(22),r=a.n(l),o=(a(29),a(2)),m=a(6),s=a(1),i=(a(30),function(){return c.a.createElement("h1",{className:"Header"},"NC News")}),u=a(9),E=a(23),d=a.n(E).a.create({baseURL:"https://newsexample.herokuapp.com/api"}),f=function(){for(var e=document.getElementsByName("answer"),t=0;t<e.length;t++)if(e[t].checked)return e[t].value},b=function(e){var t=e.setQuery,a=Object(s.f)();return c.a.createElement("div",{className:"hide-sorting-item"},c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{className:"sortAllArticles"},c.a.createElement("h5",null,"Sort all articles by ")," "),c.a.createElement("p",{id:"QueryError"}),c.a.createElement("div",{class:"col"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-check pr-5 mt-0"},c.a.createElement("label",{className:"radio form-check-label"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"answer",value:"votes"}),"votes")),c.a.createElement("div",{className:"form-check p-2"},c.a.createElement("label",{className:"radio form-check-label"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"answer",value:"created_at"}),"created_at")),c.a.createElement("div",{className:"p-2"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm text-center  ",onClick:function(e){e.preventDefault();var n=f();void 0===n?document.getElementById("QueryError").innerHTML="invalid query please pick an option and  try again":(document.getElementById("QueryError").innerHTML="",t(n),a("/articles?sort_by=".concat(n)))}},"click to sort")))))))},p=function(e){var t=Object(s.g)().topic,a=e.SetArticles,l=e.Articles,r=e.query,i=e.setQuery,u=Object(n.useState)(!1),E=Object(o.a)(u,2),f=E[0],p=E[1],v=Object(n.useState)(!0),h=Object(o.a)(v,2),y=h[0],j=h[1];return Object(n.useEffect)((function(){var e;""!==r&&(""===r&&null===r&&void 0===r||(e=r,console.log("getSortedArticles",e),d.get("/articles?sort_by=".concat(e)).then((function(e){return e.data.articles}))).then((function(e){a(e),j(!1)})))}),[r,a]),Object(n.useEffect)((function(){(function(e){return d.get("/articles",{params:{topic:e}}).then((function(e){return e.data.articles}))})(t).then((function(e){a(e),j(!1)})).catch((function(e){p(!0)}))}),[t,a]),f?c.a.createElement("p",{className:"articles-error"},"articles or topics or query are not found"):y?c.a.createElement("p",null,"Articles Loading"):c.a.createElement("div",null,c.a.createElement(b,{setQuery:i}),c.a.createElement("h1",null," Articles"),l.map((function(e){var t=e.title,a=e.article_id;return c.a.createElement("div",{className:"span",key:a},c.a.createElement("div",{className:"ul"},c.a.createElement("li",{key:a},c.a.createElement(m.b,{key:a,to:"/articles/".concat(a)},t))))})))},v=function(e){return c.a.createElement("div",null,c.a.createElement("h1",{id:"welcomePage"},"Welcome to the best news site on earth"),c.a.createElement("h4",null,"visit our ",c.a.createElement("br",null),c.a.createElement(m.b,{to:"/articles",element:p},"HOME")," ",c.a.createElement("br",null),"for all the latest articles"))},h=function(e){var t=e.Topics,a=e.SetTopics;return Object(n.useEffect)((function(){d.get("/topics").then((function(e){return e.data.topics})).then((function(e){a(e)}))}),[a]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row align-items-end"},c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,c.a.createElement(m.b,{to:"/",element:v},"Welcome Page"))),c.a.createElement("div",{className:"col"},c.a.createElement("h2",null,c.a.createElement(m.b,{to:"/articles",element:p},"HOME"))),c.a.createElement("div",{className:"col"},t.map((function(e){var t,a=e.slug;return c.a.createElement("span",{key:a},c.a.createElement("li",(t={className:"float-end"},Object(u.a)(t,"className","slugspace"),Object(u.a)(t,"key",a),t),c.a.createElement(m.b,{to:"/topics/".concat(a)},a)))})))))},y=function(e){var t=e.article_id,a=e.setVotes,l=Object(n.useState)(0),r=Object(o.a)(l,2),m=r[0],s=r[1],i=Object(n.useState)(0),u=Object(o.a)(i,2),E=u[0],f=u[1];return c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){0===m&&(s(1),function(e,t){return d.patch("/articles/".concat(e),{inc_votes:t}).then((function(e){return e.data.article.votes})).catch((function(e){console.log(e)}))}(t,1).then((function(){a((function(e){return e+1}))})))}}," ","Up Vote"," "),c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){0===E&&(f(1),function(e,t){return d.patch("/articles/".concat(e),{inc_votes:t}).then((function(e){return e.data.article.votes}))}(t,-1).then((function(){a((function(e){return e-1}))})))}}," ","Down Votes"," "))},j=a(8),O=function(e){var t=Object(s.g)().article_id,a=Object(n.useState)({}),l=Object(o.a)(a,2),r=l[0],i=l[1],u=Object(n.useState)(0),E=Object(o.a)(u,2),f=E[0],b=E[1],p=Object(n.useState)(!1),v=Object(o.a)(p,2),h=v[0],O=v[1];return Object(n.useEffect)((function(){(function(e){return d.get("/articles/".concat(e)).then((function(e){return e.data.article}))})(t).then((function(e){i(e),b(e.votes)})).catch((function(e){O(!0)}))}),[t]),h?c.a.createElement("p",{className:"articles-error"},"article_id not found refresh and try again"):c.a.createElement("div",{id:"anarticle"},c.a.createElement(j.a,null,c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-sm"},c.a.createElement("div",null,c.a.createElement(j.a.Body,null,c.a.createElement(j.a.Title,null,c.a.createElement("h3",null,r.title)),c.a.createElement("p",null,r.body)," ",c.a.createElement("p",null,"Votes ",f)," ",c.a.createElement(y,{votes:f,setVotes:b,article_id:t}),c.a.createElement("p",null," Comments Count ",r.comment_count),c.a.createElement(m.b,{to:"/articles/".concat(t,"/comments")},"Comments")," ")))))))},N=function(e){var t=Object(s.g)().article_id,a=e.AllComments,l=e.setCommentsAll,r=Object(n.useState)(""),m=Object(o.a)(r,2),i=m[0],u=m[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),p=b[0],v=b[1],h=Object(n.useState)(!1),y=Object(o.a)(h,2),O=y[0],N=y[1],g=Object(n.useState)(""),k=Object(o.a)(g,2),S=k[0],_=k[1];Object(n.useEffect)((function(){""!==i&&function(e,t){return d.post("/articles/".concat(e,"/comments"),{body:t,username:"jessjelly"}).then((function(e){return e}))}(t,i).then((function(e){console.log(e.article_id),N(!O)}))}),[i,t]),Object(n.useEffect)((function(){(function(e){return d.get("/articles/".concat(e,"/comments")).then((function(e){return e.data.comments})).catch((function(e){return e}))})(t).then((function(e){l(e)})).catch((function(e){console.log(e)}))}),[O,p]);return Object(n.useEffect)((function(){""!==S&&(console.log(S),function(e,t){return"asc"===t?d.get("/articles/".concat(e,"/comments/?order=").concat(t)).then((function(e){return e.data.comments})).catch((function(e){return e})):"votes"===t?d.get("/articles/".concat(e,"/comments/?sort_by=").concat(t)).then((function(e){return e.data.comments})).catch((function(e){return e})):void 0}(t,S).then((function(e){l(e)})).catch((function(e){console.log(e)})))}),[S]),c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(p),v("")}},c.a.createElement("ul",null),c.a.createElement("h2",null,"new comment"),c.a.createElement("label",{htmlFor:"new-comment"}),c.a.createElement("textarea",{type:"text",id:"new-comment",onChange:function(e){e.preventDefault(),v(e.target.value)},value:p,required:!0,className:"mt-0 text-center ",placeholder:"Enter a comment here "}),c.a.createElement("li",null,c.a.createElement("button",{className:"btn btn-primary"},"Post Comment"))),c.a.createElement(j.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("h5",null,"order comments by "),c.a.createElement("p",{id:"QueryError"}),c.a.createElement("div",{className:"col"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-check pr-5 mt-1"},c.a.createElement("label",{className:"radio form-check-label"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"answer",value:"asc"}),"ascending")),c.a.createElement("div",{className:"form-check p-2"},c.a.createElement("label",{className:"radio form-check-label"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"answer",value:"votes"}),"votes")),c.a.createElement("div",{className:"p-2"},c.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm text-center  ",onClick:function(e){e.preventDefault();var t=f();void 0===t?document.getElementById("QueryError").innerHTML="invalid query please refresh page and try again":(document.getElementById("QueryError").innerHTML="",_(t))}},"click to order")))))),c.a.createElement("div",{className:"container"},a.map((function(e){return"jessjelly"===e.author?c.a.createElement("div",{key:e.comment_id},c.a.createElement(j.a,null,c.a.createElement("li",null,c.a.createElement("p",{className:"comment-analytic"},"Comment by \xa0",e.author),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"comment-analytic"},"comment votes",e.votes),c.a.createElement("button",{onClick:function(){var t;(t=e.comment_id,d.delete("/comments/".concat(t)).then((function(e){console.log(e)}))).then((function(){N((function(){return!O}))}))},id:"deleteButton",className:"btn btn btn-danger"},"delete")))):c.a.createElement("div",{key:e.comment_id},c.a.createElement(j.a,null,c.a.createElement("p",{className:"comment-analytic"},"Comment by \xa0",e.author),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"comment-analytic"}," ","comment votes \xa0",e.votes)))})))))},g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){d.get("/users/jessjelly").then((function(e){return e.data.user.username})).then((function(e){l(e)}))}),[]),c.a.createElement("div",null,c.a.createElement("p",null,"Logged On ",a))};var k=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),E=u[0],d=u[1],f=Object(n.useState)([]),b=Object(o.a)(f,2),y=b[0],j=b[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),_=S[0],A=S[1];return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,null,c.a.createElement(i,null),c.a.createElement(h,{Topics:E,SetTopics:d,query:_}),c.a.createElement(g,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",element:c.a.createElement(v,{Topics:E,SetTopics:d,query:_})}),c.a.createElement(s.a,{path:"/articles/:article_id",element:c.a.createElement(O,{AllComments:y,setCommentsAll:j})}),c.a.createElement(s.a,{path:"/articles/:article_id/comments",element:c.a.createElement(N,{AllComments:y,setCommentsAll:j})}),c.a.createElement(s.a,{path:"/comments/:comment_id"}),c.a.createElement(s.a,{path:"/articles",element:c.a.createElement(p,{Articles:a,SetArticles:l,query:_,setQuery:A})}),c.a.createElement(s.a,{path:"/articles?sort_by=votes",element:c.a.createElement(p,{Articles:a,SetArticles:l,query:_,setQuery:A})}),c.a.createElement(s.a,{path:"/articles?sort_by=created_at",element:c.a.createElement(p,{Articles:a,SetArticles:l,query:_,setQuery:A})}),c.a.createElement(s.a,{path:"/topics/:topic",element:c.a.createElement(p,{Articles:a,SetArticles:l,query:_,setQuery:A})}))))};a(50);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.198777d0.chunk.js.map