(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4db6c2ea"],{"3e13":function(e,t,i){e.exports=i.p+"img/2.1de3a108.jpg"},7420:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"recipe-page"}},[e.recipe?i("div",[i("show-recipe",{attrs:{recipe:e.recipe,includeDetails:!0}}),i("button",{on:{click:e.addToShopping}},[e._v("Add To Shopping List")]),i("transition",{attrs:{name:"fade"}},[e.addAlert?i("div",{staticClass:"alert"},[e._v(" Your list has been updated! ")]):e._e()]),e.user?i("div",[e.isFavorite?i("button",{on:{click:function(t){return e.removeFromFavorites()}}},[e._v("Remove from favorites")]):i("button",{on:{click:function(t){return e.addToFavorites()}}},[e._v("❤ Add to favorites")])]):e._e()],1):e._e(),e.recipeNotFound?i("div",[i("p",[e._v("Recipe "+e._s(e.id)+" not found.")]),i("router-link",{attrs:{to:"/"}},[e._v("Go to all recipes ")])],1):e._e()])},n=[],a=(i("99af"),i("4de4"),i("d81d"),i("d3b7"),i("ac1f"),i("6062"),i("3ca3"),i("1276"),i("ddb0"),i("2909")),o=i("d1a8"),s=i("0091"),c=i("a6f4");function u(e){var t=Object(c["b"])(!1),i=Object(c["b"])(null);s["a"].get("/favorite/query?recipe_id="+e).then((function(e){e.data.results.length>0&&(i.value=e.data.results[0].id,t.value=!0)}));var r=function(){s["a"].post("/favorite",{recipe_id:e}).then((function(e){e.data.success&&(t.value=!0,i.value=e.data.favorite.id)}))},n=function(){s["a"].delete("/favorite/"+i.value).then((function(e){e.data.success&&(t.value=!1,i.value=null)}))};return{isFavorite:t,addToFavorites:r,removeFromFavorites:n}}var d={setup:function(e){var t=u(e.id),i=t.isFavorite,r=t.addToFavorites,n=t.removeFromFavorites;return{isFavorite:i,addToFavorites:r,removeFromFavorites:n}},name:"",props:["id","recipes","favorite"],components:{"show-recipe":o["a"]},data:function(){return{addAlert:!1}},computed:{recipe:function(){var e=this;return this.recipes.filter((function(t){return t.id==e.id}),this.id)[0]},recipeNotFound:function(){return null==this.recipe},ingredients:function(){var e=this.recipes.map((function(e){return e.ingredients.split(",")})),t=[].concat.apply([],e);return Object(a["a"])(new Set(t)).sort()},recipesStore:function(){return this.$store.state.recipes},user:function(){return this.$store.state.user}},methods:{addFavorite:function(){var e=this;s["a"].put("/recipe/"+this.recipe.id,this.recipe).then((function(t){null!=t.data.errors?e.errors=t.data.errors:e.$emit("update-recipes")}))},addToShopping:function(){var e=this;s["b"].add(this.recipe.id,1),this.$store.commit("setCartCount",s["b"].count()),this.addAlert=!0,setTimeout((function(){return e.addAlert=!1}),2e3)}}},p=d,v=i("2877"),l=Object(v["a"])(p,r,n,!1,null,"333a58ff",null);t["default"]=l.exports},"82a1":function(e,t,i){e.exports=i.p+"img/image-not-available.89cb6e1e.jpg"},"9ef4":function(e,t,i){e.exports=i.p+"img/1.35e9f2d4.jpg"},ca62:function(e,t,i){var r={"./1.jpg":"9ef4","./2.jpg":"3e13","./image-not-available.jpg":"82a1"};function n(e){var t=a(e);return i(t)}function a(e){if(!i.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=a,e.exports=n,n.id="ca62"},d1a8:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"recipe"},[i("h1",{staticClass:"recipe-name"},[e._v(e._s(e.recipe.name))]),i("img",{staticClass:"recipe-thumb",attrs:{src:e.imageSource}}),e.includeDetails?i("div",[i("p",{staticClass:"recipe-favorite"},[e._v(e._s(e.recipe.favortie))]),i("div",{staticClass:"ingredients"},[i("h2",[e._v("Ingredients")]),i("ul",e._l(e.ingredients,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),i("div",{staticClass:"directions"},[i("h2",[e._v("Directions")]),i("ol",e._l(e.directions,(function(t){return i("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)])]):e._e()])},n=[],a=(i("ac1f"),i("1276"),{name:"show-recipe",props:["recipe","includeDetails","favorite"],data:function(){return{}},computed:{imageSource:function(){try{return i("ca62")("./"+this.recipe.id+".jpg")}catch(e){return i("82a1")}},ingredients:function(){var e=this.recipe.ingredients.split(",");return e},directions:function(){var e=this.recipe.directions.split(",");return e}}}),o=a,s=i("2877"),c=Object(s["a"])(o,r,n,!1,null,"102922f2",null);t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-4db6c2ea.e1dcbbfc.js.map