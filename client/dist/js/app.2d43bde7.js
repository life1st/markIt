(function(t){function e(e){for(var a,i,c=e[0],u=e[1],s=e[2],d=0,f=[];d<c.length;d++)i=c[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4dca":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("7c55"),n("2877")),c={},u=Object(i["a"])(c,r,o,!1,null,null,null),s=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-page"},[n("p",[t._v("hello")]),n("div",{staticClass:"add-board"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardName,expression:"newBoardName"}],attrs:{type:"text"},domProps:{value:t.newBoardName},on:{input:function(e){e.target.composing||(t.newBoardName=e.target.value)}}}),n("button",{on:{click:t.handleAdd}},[t._v("\n      添加\n    ")])]),n("div",{staticClass:"board-wrap"},t._l(t.boards,function(e,a){return n("markBoard",{key:a,staticClass:"board-item",attrs:{times:e,name:a},on:{mark:t.handleMarked,delete:t.handleDelete}})}),1)])},f=[],p=(n("7f7f"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mark-board"},[n("i",{staticClass:"icon-delete",on:{click:t.handleDelete}},[t._v("❌")]),n("h2",[t._v(t._s(t.name)+" ("+t._s(t.count)+")")]),n("button",{on:{click:t.handleMark}},[t._v("Mark it!")]),n("div",{staticClass:"content"},t._l(t.times,function(e){return n("p",{key:e},[t._v(t._s(e))])}),0)])}),m=[],v={props:{times:{type:Array,default:function(){return[]}},name:{type:String,default:function(){return""}}},computed:{count:function(){return this.times.length}},methods:{handleMark:function(){this.$emit("mark",this.name)},handleDelete:function(){this.$emit("delete",this.name)}}},h=v,b=(n("eaa3"),Object(i["a"])(h,p,m,!1,null,"119bef17",null)),_=b.exports,w=n("bc3a"),y=n.n(w),g="http://localhost:3000/api/markit";function k(t){var e=t?"".concat(g,"/").concat(t):g;return y.a.get(e)}function x(t){var e="".concat(g,"/").concat(t);return y.a.post(e)}function O(t){var e="".concat(g,"/").concat(t);return y.a.delete(e)}var j={components:{markBoard:_},data:function(){return{boards:{},newBoardName:""}},created:function(){var t=this;k().then(function(e){var n=e.status,a=e.data;if(200===n){var r={};a.forEach(function(t){r[t.name]=t.times}),t.boards=r}})},methods:{handleAdd:function(){var t=this;x(this.newBoardName).then(function(e){var n=e.status,r=e.data;200===n&&(t.newBoardName="",a["a"].set(t.boards,r.name,r.times))})},handleMarked:function(t){var e=this;x(t).then(function(t){var n=t.status,r=t.data;200===n&&a["a"].set(e.boards,r.name,r.times)})},handleDelete:function(t){var e=this,n=confirm("sure to delete this board?");n&&O(t).then(function(n){var r=n.status;n.data;200===r&&a["a"].delete(e.boards,t)})}}},B=j,M=(n("7f3c"),Object(i["a"])(B,d,f,!1,null,"0a8f662c",null)),N=M.exports;a["a"].use(l["a"]);var C=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Index",component:N}]}),P=n("2f62");a["a"].use(P["a"]);var S=new P["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:C,store:S,render:function(t){return t(s)}}).$mount("#app")},"5c48":function(t,e,n){},"6cd6":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("5c48"),r=n.n(a);r.a},"7f3c":function(t,e,n){"use strict";var a=n("6cd6"),r=n.n(a);r.a},eaa3:function(t,e,n){"use strict";var a=n("4dca"),r=n.n(a);r.a}});
//# sourceMappingURL=app.2d43bde7.js.map