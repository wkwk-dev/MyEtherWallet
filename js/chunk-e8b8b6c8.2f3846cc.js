(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8b8b6c8"],{"0883":function(t,n,e){},7439:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return u}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dns-process-error"},["0x0000000000000000000000000000000000000000"===t.owner?e("div",{staticClass:"dns-process-content"},[e("h3",[t._v(t._s(t.$t("ens.txt.setup-not-found",{domain:t.domainName})))]),e("p",[t._v(t._s(t.$t("ens.txt.add-txt-type-entry",{txtString:t.typeString})))])]):e("div",{staticClass:"dns-process-content"},[e("h3",[t._v(" "+t._s(t.$t("ens.txt.name-owned",{owner:t.owner,domain:t.domainName}))+" ")]),e("p",[t._v(t._s(t.$t("ens.txt.unclaim-desc",{domain:t.domainName})))]),e("div",{staticClass:"claim-dns-button"},[e("button",{class:["large-round-button-green-filled",t.loading?"disabled":""],on:{click:t.claimFunc}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._v(" "+t._s(t.$t("ens.txt.unclaim"))+" ")]),e("i",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin"})])])]),e("interface-bottom-text",{attrs:{"link-text":t.$t("common.help-center"),question:t.$t("common.have-issues"),link:"https://kb.myetherwallet.com"}})],1)},s=[],o=e("539d"),i={components:{"interface-bottom-text":o["a"]},props:{domainName:{type:String,default:""},owner:{type:String,default:""},claimFunc:{type:Function,default:function(){}},dnsClaim:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},computed:{typeString:function(){return"{{'_ens.' + ".concat(this.domainName,"}}")}},mounted:function(){"."===this.domainName&&this.$router.push("/interface/dapps/manage-ens")}},c=i,r=(e("f2ef"),e("2877")),d=Object(r["a"])(c,a,s,!1,null,"62c9d1d0",null),u=d.exports},f2ef:function(t,n,e){"use strict";var a=e("0883"),s=e.n(a);s.a}}]);
//# sourceMappingURL=chunk-e8b8b6c8.2f3846cc.js.map