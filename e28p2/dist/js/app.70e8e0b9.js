(function(e){function t(t){for(var n,c,a=t[0],p=t[1],s=t[2],f=0,l=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&l.push(i[c][0]),i[c]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);u&&u(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var p=r[a];0!==i[p]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},i={app:0},o=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=p;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"140a":function(e,t,r){e.exports=r.p+"img/10.410f9d36.jpg"},"17be":function(e,t,r){e.exports=r.p+"img/logo.8936eb82.jpg"},"1aeb":function(e,t,r){e.exports=r.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},"3a5a":function(e,t,r){e.exports=r.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"3e13":function(e,t,r){e.exports=r.p+"img/2.f2dfb55e.jpg"},4069:function(e,t,r){e.exports=r.p+"img/8.7226e9df.jpg"},"40d4":function(e,t,r){e.exports=r.p+"img/bare-coconut-chips.16db8a64.jpg"},"434d":function(e,t,r){e.exports=r.p+"img/6.baf64196.jpg"},"50f7":function(e,t,r){e.exports=r.p+"img/7.491e93f2.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"recipe logo",id:"logo",src:r("17be")}}),n("nav",[n("ul",[n("li",e._l(e.links,(function(t){return n("router-link",{key:t,attrs:{to:e.paths[t],exact:""}},[e._v(e._s(t))])})),1)])]),n("router-view")],1)},o=[],c={name:"App",data:function(){return{links:["recipes","favorites","categories"],paths:{recipes:"/",favorites:"/favorites",categories:"/categories"}}}},a=c,p=(r("5c0b"),r("2877")),s=Object(p["a"])(a,i,o,!1,null,null,null),u=s.exports,f=r("8c4f"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("Add a Recipe to the book or mark your favorites!")]),r("show-favorites",{attrs:{category:"dinner"}})],1)},g=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"favorites"}},[r("h2",[e._v("Favorite Recipes")]),r("ul",{staticClass:"cleanList"},e._l(e.favoriteRecipes,(function(t){return r("li",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),0)])},m=[],h=(r("4de4"),r("caad"),r("2532"),[{id:1,name:"Pie",categories:["breakfast","dessert"]},{id:2,name:"Scones",categories:["dinner","dessert"]}]),b={name:"show-favorites",props:["category"],data:function(){return{recipes:h}},computed:{favoriteRecipes:function(){var e=this;return this.recipes.filter((function(t){return t.categories.includes(e.category)}),this.category)}}},v=b,j=Object(p["a"])(v,d,m,!1,null,"39d4cd9f",null),_=j.exports,x={name:"App",components:{"show-favorites":_}},y=x,w=Object(p["a"])(y,l,g,!1,null,null,null),O=w.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"recipes"}},[r("h2",[e._v("Recipes")]),e._l(e.recipes,(function(e){return r("show-recipe",{key:e.id,attrs:{recipe:e}})}))],2)},C=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipe"},[n("div",{staticClass:"recipe-name"},[e._v(e._s(e.recipe.name))]),n("img",{staticClass:"recipe-thumb",attrs:{src:r("ca62")("./"+e.recipe.id+".jpg")}}),n("p",{staticClass:"recipe-description"},[e._v(e._s(e.recipe.description))]),n("div",{staticClass:"recipe-price"},[e._v("$"+e._s(e.recipe.price))])])},$=[],P={name:"show-recipe",props:["recipe"],data:function(){return{}}},S=P,R=Object(p["a"])(S,E,$,!1,null,"3469ef22",null),M=R.exports,z={name:"",components:{"show-recipe":M},data:function(){return{recipes:h}}},F=z,N=Object(p["a"])(F,k,C,!1,null,"42eb0f04",null),T=N.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Categories")]),r("ul",{staticClass:"cleanList"},e._l(e.categories,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0)])},L=[],D=(r("99af"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("2909")),J={name:"",props:[""],data:function(){return{recipes:h}},computed:{categories:function(){var e=this.recipes.map((function(e){return e.categories})),t=[].concat.apply([],e);return Object(D["a"])(new Set(t)).sort()}}},U=J,q=Object(p["a"])(U,A,L,!1,null,"476625b2",null),B=q.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"recipes"}},[r("h2",[e._v("Recipe "+e._s(e.id)+" ")])])},H=[],I={name:"",props:["id"],data:function(){return{recipe:null,recipes:h,recipeNotFound:!1}},mounted:function(){var e=this;this.recipe=this.recipes.filter((function(t){return t.id==e.id}),this.id)[0],null==this.recipe&&(this.recipeNotFound=!0)}},K=I,Q=Object(p["a"])(K,G,H,!1,null,"e0641cf0",null),V=Q.exports;n["a"].config.productionTip=!1,n["a"].use(f["a"]);var W=new f["a"]({mode:"history",routes:[{path:"/",component:T},{path:"/favorites",component:O},{path:"/categories",component:B},{path:"/recipes/:id",component:V,props:!0}]});new n["a"]({router:W,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},6328:function(e,t,r){e.exports=r.p+"img/gold-medal-flour.793712c2.jpg"},"712b":function(e,t,r){e.exports=r.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"82a1":function(e,t,r){e.exports=r.p+"img/image-not-available.549b729b.jpg"},9460:function(e,t,r){e.exports=r.p+"img/driscolls-strawberries.418d31d2.jpg"},"9c0c":function(e,t,r){},"9ef4":function(e,t,r){e.exports=r.p+"img/1.35e9f2d4.jpg"},a192:function(e,t,r){e.exports=r.p+"img/amys-cheese-pizza.491e93f2.jpg"},bbb3:function(e,t,r){e.exports=r.p+"img/9.16db8a64.jpg"},c866:function(e,t,r){e.exports=r.p+"img/snapple-peach-tea.410f9d36.jpg"},c997:function(e,t,r){e.exports=r.p+"img/4.793712c2.jpg"},ca05:function(e,t,r){e.exports=r.p+"img/honey-nut-cheerios.baffccef.jpg"},ca62:function(e,t,r){var n={"./1.jpg":"9ef4","./10.jpg":"140a","./2.jpg":"3e13","./3.jpg":"fb66","./4.jpg":"c997","./5.jpg":"e5a8","./6.jpg":"434d","./7.jpg":"50f7","./8.jpg":"4069","./9.jpg":"bbb3","./amys-cheese-pizza.jpg":"a192","./bare-coconut-chips.jpg":"40d4","./birds-eye-vegetable-mix.jpg":"712b","./driscolls-strawberries.jpg":"9460","./eggo-nutri-grain-whole-wheat-waffles.jpg":"3a5a","./gold-medal-flour.jpg":"6328","./gotham-greens-lettuce-medley.jpg":"1aeb","./honey-nut-cheerios.jpg":"ca05","./image-not-available.jpg":"82a1","./nestle-toll-house-cookie-dough.jpg":"f32a","./snapple-peach-tea.jpg":"c866"};function i(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="ca62"},e5a8:function(e,t,r){e.exports=r.p+"img/5.baffccef.jpg"},f32a:function(e,t,r){e.exports=r.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},fb66:function(e,t,r){e.exports=r.p+"img/3.08a0e118.jpg"}});
//# sourceMappingURL=app.70e8e0b9.js.map