(this["webpackJsonpmy-movies-list"]=this["webpackJsonpmy-movies-list"]||[]).push([[0],{119:function(e,t,n){e.exports=n(228)},130:function(e,t){},132:function(e,t){},143:function(e,t){},145:function(e,t){},172:function(e,t){},174:function(e,t){},175:function(e,t){},181:function(e,t){},183:function(e,t){},201:function(e,t){},203:function(e,t){},215:function(e,t){},218:function(e,t){},224:function(e,t,n){},227:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(113),i=n.n(o),l=(n(124),n(33)),c=n(19),u=n(15),s=n(16),m=n(18),f=n(17),p=n(10),d=n(32),b=n.n(d),h=n(11);function g(){var e=Object(p.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  h1 {\n      font-size: 26px;\n      color: ",";\n      :hover {\n      color: blue;\n      }\n  }\n  h2 {\n      font-size: 1.2rem;\n      color: grey;\n}"]);return g=function(){return e},e}var v=h.a.div(g(),(function(e){return e.colored?"black":"red"}));function k(e){var t=e.liked,n=e.watched,a=e.allPosts;return r.a.createElement(v,{colored:!0},r.a.createElement("h1",null,"List of User's movies"),r.a.createElement("h2",null,a," posts, watched ",n,", liked ",t))}function j(){var e=Object(p.a)(["\n  .search-panel {\n    margin: 1rem 0;\n  }\n  .search-panel .search-input {\n    width: auto;\n    flex-grow: 1;\n    margin-right: 3px;\n}"]);return j=function(){return e},e}var E=h.a.div(j()),y=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e}return Object(s.a)(n,[{key:"onUpdateSearch",value:function(e){var t=e.target.value.toLowerCase();this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search in your posts...",onChange:this.onUpdateSearch.bind(this)}))}}]),n}(a.Component),O=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).buttons=[{name:"all",label:"All"},{name:"like",label:"Liked"}],e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,o=e.props,i=o.filter,l=o.onFilterSelect,c=i===n?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{key:n,type:"button",className:"btn ".concat(c),onClick:function(){return l(n)}},a)}));return r.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component),x=n(118);n(224);function S(e){var t=e.label,n=e.onDelete,a=e.onToggleImportant,o=e.onToggleLiked,i="app-list-item d-flex justify-content-between";return e.important&&(i+=" important"),e.like&&(i+=" like"),r.a.createElement("div",{className:i},r.a.createElement("span",{className:"app-list-item-label",onClick:o},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-check-square-o","aria-hidden":"true"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}var w=n(230);function N(){var e=Object(p.a)(["\n.app-list {\n  margin-top: 50px;\n}\n.app-list .list-group-item {\n  padding: 20px 35px 10px 35px;\n  margin-top: 10px;\n}"]);return N=function(){return e},e}var C=h.a.div(N());function T(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,o=e.onToggleLiked,i=t.map((function(e){var t=e.id,i=Object(x.a)(e,["id"]);return r.a.createElement("li",{className:"list-group-item",key:t},r.a.createElement(S,{label:i.label,important:i.important,like:i.like,onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return o(t)}}))}));return r.a.createElement(C,null,r.a.createElement(w.a,{className:"app-list"},i),r.a.createElement("p",null,"*to mark as liked click on movie name"))}function I(){var e=Object(p.a)(["\n  .bottom-panel {\n    margin-top: 20px;\n  }\n  .bottom-panel .new-post-label {\n    width: auto;\n    flex-grow: 1;\n    margin-right: 3px;\n  }"]);return I=function(){return e},e}var A=h.a.div(I()),L=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onValueChange=function(t){e.setState({text:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.text),e.setState({text:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"What movie are you going to watch?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),r.a.createElement("button",{className:"btn-outline-secondary",type:"submit"},"Add")))}}]),n}(a.Component);function U(){var e=Object(p.a)(["\n  margin: 0 auto;\n  max-width: 800px;\n"]);return U=function(){return e},e}var P=h.a.div(U()),D=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:[{label:"Titanic(Netflix)",important:!1,like:!1,id:b.a.generate(5)},{label:"Inception (advice from Anna)",important:!0,like:!1,id:b.a.generate(5)},{label:"Tenet (new,cinema)",important:!0,like:!1,id:b.a.generate(5)}],term:"",filter:"all"},e.deleteItem=function(t){e.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))},e.onAdd=function(t){if(t.length>0){var n={label:t,important:!0,like:!1,id:b.a.generate(5)};e.setState((function(e){var t=e.data;return{data:[].concat(Object(c.a)(t),[n])}}))}},e.onToggleImportant=function(t){e.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(l.a)(Object(l.a)({},r),{},{important:!r.important});return{data:[].concat(Object(c.a)(n.slice(0,a)),[o],Object(c.a)(n.slice(a+1)))}}))},e.onToggleLiked=function(t){e.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),r=n[a],o=Object(l.a)(Object(l.a)({},r),{},{like:!r.like});return{data:[].concat(Object(c.a)(n.slice(0,a)),[o],Object(c.a)(n.slice(a+1)))}}))},e.searchPost=function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.toLowerCase().includes(t)}))},e.filterPost=function(e,t){return"like"===t?e.filter((function(e){return e.like})):e},e.onUpdateSearch=function(t){e.setState({term:t})},e.onFilterSelect=function(t){e.setState({filter:t})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,o=t.filter((function(e){return e.like})).length,i=t.filter((function(e){return!e.important})).length,l=t.length,c=this.filterPost(this.searchPost(t,n),a);return r.a.createElement(P,null,r.a.createElement(k,{liked:o,watched:i,allPosts:l}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(y,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(O,{filter:a,onFilterSelect:this.onFilterSelect})),r.a.createElement(T,{posts:c,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),r.a.createElement(L,{onAdd:this.onAdd}))}}]),n}(a.Component);n(227);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.15d8eb1d.chunk.js.map