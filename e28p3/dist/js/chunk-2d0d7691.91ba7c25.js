(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7691"],{7761:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"cart-page"}},[i("h1",[e._v("Shopping List")]),0==e.items.length?i("div",[e._v("No items")]):e._e(),e.recipesLoaded?i("ul",{staticClass:"cleanList"},e._l(e.items,(function(t){return i("li",{key:t.id},[e._v(" "+e._s(e.getRecipeDetails(t.id).ingredients)),i("br"),i("button",{on:{click:function(i){return e.removeFromCart(t.id)}}},[e._v("Remove")])])})),0):e._e()])},r=[],s=(i("4de4"),i("0091")),o={props:[],data:function(){return{items:[]}},mounted:function(){this.items=s["b"].getItems()},computed:{recipesLoaded:function(){return this.recipes.length>0},recipes:function(){return this.$store.state.recipes}},methods:{getRecipeDetails:function(e){return this.recipes.filter((function(t){return t.id==e}),e)[0]},removeFromCart:function(e){s["b"].remove(e),this.$store.commit("setCartCount",s["b"].count())}}},c=o,u=i("2877"),a=Object(u["a"])(c,n,r,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0d7691.91ba7c25.js.map