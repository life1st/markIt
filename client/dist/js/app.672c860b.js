(function(t){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)c=i[d],r[c]&&f.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4dca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("7c55"),n("2877")),i={},u=Object(c["a"])(i,r,o,!1,null,null,null),s=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-page"},[n("connectDB"),n("p",[t._v("hello")]),n("div",{staticClass:"add-board"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardName,expression:"newBoardName"}],attrs:{type:"text"},domProps:{value:t.newBoardName},on:{input:function(e){e.target.composing||(t.newBoardName=e.target.value)}}}),n("button",{on:{click:t.handleAdd}},[t._v("\n      添加\n    ")])]),n("div",{staticClass:"board-wrap"},t._l(t.boards,function(e,a){return n("markBoard",{key:a,staticClass:"board-item",attrs:{times:e,name:a},on:{mark:t.handleMarked,delete:t.handleDelete}})}),1)],1)},f=[],p=(n("7f7f"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mark-board"},[n("i",{staticClass:"icon-delete",on:{click:t.handleDelete}},[t._v("❌")]),n("h2",[t._v(t._s(t.name)+" ("+t._s(t.count)+")")]),n("button",{on:{click:t.handleMark}},[t._v("Mark it!")]),n("div",{staticClass:"content"},t._l(t.times,function(e){return n("p",{key:e},[t._v(t._s(e))])}),0)])}),v=[],m={props:{times:{type:Array,default:function(){return[]}},name:{type:String,default:function(){return""}}},computed:{count:function(){return this.times.length}},methods:{handleMark:function(){this.$emit("mark",this.name)},handleDelete:function(){this.$emit("delete",this.name)}}},h=m,b=(n("eaa3"),Object(c["a"])(h,p,v,!1,null,"119bef17",null)),w=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connect-db"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"text"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}}),n("button",{on:{click:t.handleClick}},[t._v("Connect")])])},g=[],y=n("bc3a"),k=n.n(y),x="http://localhost:3000/api/markit";function O(t){var e=t?"".concat(x,"/").concat(t):x;return k.a.get(e)}function j(t){var e="".concat(x,"/").concat(t);return k.a.post(e)}function B(t){var e="".concat(x,"/").concat(t);return k.a.delete(e)}function C(t){var e="http://localhost:3000/api/db/connect/".concat(t);return k.a.post(e)}var M={data:function(){return{pwd:""}},methods:{handleClick:function(){var t=this;C(this.pwd).then(function(e){var n=e.status,a=e.data;console.log(a),200===n&&(t.pwd="好了 可以了")})}}},N=M,P=Object(c["a"])(N,_,g,!1,null,null,null),S=P.exports,$={components:{markBoard:w,connectDB:S},data:function(){return{boards:{},newBoardName:""}},created:function(){var t=this;O().then(function(e){var n=e.status,a=e.data;if(200===n){var r={};a.forEach(function(t){r[t.name]=t.times}),t.boards=r}})},methods:{handleAdd:function(){var t=this;j(this.newBoardName).then(function(e){var n=e.status,r=e.data;200===n&&(t.newBoardName="",a["a"].set(t.boards,r.name,r.times))})},handleMarked:function(t){var e=this;j(t).then(function(t){var n=t.status,r=t.data;200===n&&a["a"].set(e.boards,r.name,r.times)})},handleDelete:function(t){var e=this,n=confirm("sure to delete this board?");n&&B(t).then(function(n){var r=n.status;n.data;200===r&&a["a"].delete(e.boards,t)})}}},D=$,E=(n("73b0"),Object(c["a"])(D,d,f,!1,null,"682eff4e",null)),A=E.exports;a["a"].use(l["a"]);var T=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Index",component:A}]}),J=n("2f62");a["a"].use(J["a"]);var I=new J["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:T,store:I,render:function(t){return t(s)}}).$mount("#app")},"5c48":function(t,e,n){},"73b0":function(t,e,n){"use strict";var a=n("c501"),r=n.n(a);r.a},"7c55":function(t,e,n){"use strict";var a=n("5c48"),r=n.n(a);r.a},c501:function(t,e,n){},eaa3:function(t,e,n){"use strict";var a=n("4dca"),r=n.n(a);r.a}});
//# sourceMappingURL=app.672c860b.js.map