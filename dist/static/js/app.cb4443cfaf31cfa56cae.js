webpackJsonp([1],{112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},118:function(t,e){},119:function(t,e,i){t.exports=i.p+"static/img/vux_logo.79cbb96.png"},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},122:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link},on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary}},[i("p",[t.title?i("label",{staticClass:"vux-label",style:{width:t.$parent.labelWidth,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._v(t._s(t.inlineDesc))])],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:{"vux-cell-primary":"content"===t.primary}},[t._v("\n    "+t._s(t.value)+"\n    "),t._t("value"),t._v(" "),t._t("default")],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-search-box",class:{"vux-search-fixed":t.isFixed},style:{top:t.isFixed?t.top:"",position:t.fixPosition}},[i("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":!t.isCancel||t.currentValue}},[i("form",{staticClass:"weui-search-bar__form",on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFixed&&t.autoFixed,expression:"!isFixed && autoFixed"}],staticClass:"vux-search-mask",on:{click:t.touch}}),t._v(" "),i("div",{staticClass:"weui-search-bar__box"},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-search-bar__input",attrs:{type:"search",id:"search_input_"+t.uuid,placeholder:t.placeholder,autocomplete:"off",required:t.required},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-icon-clear",attrs:{href:"javascript:"},on:{click:t.clear}})]),t._v(" "),i("label",{directives:[{name:"show",rawName:"v-show",value:!t.isFocus&&!t.value,expression:"!isFocus && !value"}],staticClass:"weui-search-bar__label",attrs:{for:"search_input_"+t.uuid}},[i("i",{staticClass:"weui-icon-search"}),t._v(" "),i("span",[t._v(t._s(t.placeholder||"搜索"))])])]),t._v(" "),i("a",{staticClass:"weui-search-bar__cancel-btn",attrs:{href:"javascript:"},on:{click:t.cancel}},[t._v(t._s(t.cancelText||"取消"))]),t._v(" "),t._t("right")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"weui-cells vux-search_show"},[t._t("default"),t._v(" "),t._l(t.results,function(e){return i("div",{staticClass:"weui-cell weui-cell_access",on:{click:function(i){t.handleResultClick(e)},touchmove:function(t){t.preventDefault()}}},[i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[t._v(t._s(e.title))])])])})],2)])},staticRenderFns:[]}},124:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("group",{attrs:{title:"cell demo"}},[i("cell",{attrs:{title:"Vux",value:"Cool","is-link":""}})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-demo"},[s("img",{staticClass:"logo",attrs:{src:i(119)}}),t._v(" "),s("h1")])}]}},125:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("search"),t._v(" "),i("pre",[t._v(t._s(t.datalist))])],1)},staticRenderFns:[]}},126:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},130:function(t,e,i){i(114);var s=i(4)(i(71),i(122),null,null);t.exports=s.exports},131:function(t,e,i){i(118);var s=i(4)(i(72),i(126),null,null);t.exports=s.exports},132:function(t,e,i){i(112);var s=i(4)(null,i(120),null,null);t.exports=s.exports},133:function(t,e,i){i(115);var s=i(4)(i(73),i(123),null,null);t.exports=s.exports},134:function(t,e,i){i(116);var s=i(4)(i(75),i(124),null,null);t.exports=s.exports},135:function(t,e,i){i(117);var s=i(4)(i(76),i(125),null,null);t.exports=s.exports},136:function(t,e){},47:function(t,e,i){"use strict";var s=i(15),n=i(127),a=i(134),r=(i.n(a),i(135)),l=i.n(r);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:l.a}]})},48:function(t,e,i){"use strict";var s=i(15),n=i(129),a=i(79);s.a.use(n.a);var r="./data/base_data.json",l={base_data:{}},c={GET_DATA:function(t,e){t.base_data=e}},u={getData:function(t){var e=t.commit;t.state;a.a.$http.get(r).then(function(t){e("GET_DATA",t.data)})}};e.a=new n.a.Store({state:l,mutations:c,actions:u})},51:function(t,e,i){i(113);var s=i(4)(i(74),i(121),null,null);t.exports=s.exports},70:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(15),n=i(50),a=i.n(n),r=i(51),l=i.n(r),c=i(47),u=i(48);i(49).polyfill(),a.a.attach(document.body),s.a.config.productionTip=!1,new s.a({router:c.a,store:u.a,data:{hub:new s.a},render:function(t){return t(l.a)}}).$mount("#app-box"),u.a.dispatch("getData")},71:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(132),n=i.n(s),a=i(77);e.default={components:{InlineDesc:n.a},props:{title:String,value:[String,Number,Array],isLink:Boolean,inlineDesc:[String,Number],primary:{type:String,default:"title"},link:{type:[String,Object]}},methods:{onClick:function(){i.i(a.a)(this.link,this.$router)}}}},72:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},73:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(78);e.default={mixins:[s.a],props:{required:{type:Boolean,default:!1},placeholder:String,cancelText:String,value:{type:String,default:""},results:{type:Array,default:function(){return[]}},autoFixed:{type:Boolean,default:!0},top:{type:String,default:"0px"},position:{type:String,default:"fixed"},autoScrollToTop:Boolean},created:function(){this.value&&(this.currentValue=this.value)},computed:{fixPosition:function(){return this.isFixed?"absolute"===this.position?"absolute":"fixed":"static"}},methods:{clear:function(){this.currentValue="",this.isFocus=!0,this.setFocus(),this.autoFixed&&!this.isFixed&&(this.isFixed=!0)},cancel:function(){this.isCancel=!0,this.currentValue="",this.isFixed=!1,this.$emit("on-cancel")},handleResultClick:function(t){this.$emit("result-click",t),this.$emit("on-result-click",t),this.isCancel=!0,this.isFixed=!1},touch:function(){this.isCancel=!1,this.autoFixed&&(this.isFixed=!0),this.$emit("on-touch")},setFocus:function(){this.$refs.input.focus()},onFocus:function(){this.isFocus=!0,this.$emit("on-focus"),this.touch()},onBlur:function(){this.isFocus=!1}},data:function(){return{currentValue:"",isCancel:!0,isFocus:!1,isFixed:!1}},watch:{isFixed:function(t){t===!0&&(this.setFocus(),this.isFocus=!0,this.autoScrollToTop&&setTimeout(function(){window.scrollTo(0,0)},150))},value:function(t){this.currentValue=t},currentValue:function(t){this.isCancel||(this.$emit("on-change",t),this.$emit("input",t))}}}},74:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},75:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(131),n=i.n(s),a=i(130),r=i.n(a);e.default={components:{Group:n.a,Cell:r.a},mounted:function(){},data:function(){return{msg:"Hello World!"}}}},76:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(133),n=i.n(s);e.default={components:{Search:n.a},computed:{datalist:function(){return this.$store.state.base_data}},data:function(){return{}}}}},[70]);
//# sourceMappingURL=app.cb4443cfaf31cfa56cae.js.map