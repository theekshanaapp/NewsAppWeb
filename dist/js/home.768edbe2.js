(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"21bb":function(t,n,a){"use strict";a("2dad")},"2dad":function(t,n,a){},"4b85":function(t,n,a){},a523:function(t,n,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var r=a("2b0e");function e(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,a){var r=a.props,e=a.data,i=a.children;e.staticClass="".concat(t," ").concat(e.staticClass||"").trim();var o=e.attrs;if(o){e.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n}));s.length&&(e.staticClass+=" ".concat(s.join(" ")))}return r.id&&(e.domProps=e.domProps||{},e.domProps.id=r.id),n(r.tag,e,i)}})}var i=a("d9f7");n["a"]=e("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var a,r=n.props,e=n.data,o=n.children,s=e.attrs;return s&&(e.attrs={},a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var n=s[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n}))),r.id&&(e.domProps=e.domProps||{},e.domProps.id=r.id),t(r.tag,Object(i["a"])(e,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(a||[])}),o)}})},bb51:function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"pa-4",attrs:{id:"home"}},[a("v-container",{attrs:{fluid:""}},[a("h3",{staticClass:"headline font-weight-medium",staticStyle:{"text-align":"center"}},[t._v("Home Page")])])],1)},e=[],i={name:"Home",data:function(){return{loading:!0}},components:{},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),3e3)}},o=i,s=(a("21bb"),a("2877")),c=a("6544"),d=a.n(c),u=a("a523"),l=Object(s["a"])(o,r,e,!1,null,null,null);n["default"]=l.exports;d()(l,{VContainer:u["a"]})}}]);
//# sourceMappingURL=home.768edbe2.js.map