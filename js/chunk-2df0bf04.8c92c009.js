(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df0bf04"],{"0d51":function(t,e,a){},1298:function(t,e,a){"use strict";a("b0c0");var n=a("cb09"),s=a.n(n),i=a("ef00"),r=a.n(i),o=a("6c15"),c=a.n(o),p=a("c222"),l=a.n(p),d=a("e8c4"),u=a.n(d),f=a("5c5e"),m=a.n(f),b=a("2c588"),g=a.n(b),h=a("7b4f"),A=a.n(h),v=a("7e5b"),w=a.n(v),k=a("d840"),x=a.n(k),T=a("b7d39"),y=a.n(T),C=a("8761"),D={manageEns:{route:"/interface/dapps/manage-ens",icon:c.a,iconDisabled:l.a,title:"ens.title",desc:"ens.dapp-desc",supportedNetworks:[C["ETH"].name,C["GOERLI"].name,C["ROP"].name,C["RIN"].name],lastUpdated:"11/06/2019",releaseDate:"10/05/2018"},domainSale:{route:"/interface/dapps/name-wallet",icon:s.a,iconDisabled:r.a,title:"subDomain.title",desc:"subDomain.dapp-desc",supportedNetworks:[C["ETH"].name],lastUpdated:"09/20/2019",releaseDate:"10/08/2018"},scheduleTransaction:{route:"/interface/dapps/schedule-transaction",icon:u.a,iconDisabled:m.a,title:"scheduleTx.title",desc:"scheduleTx.dapp-desc",supportedNetworks:[C["ETH"].name,C["KOV"].name],lastUpdated:"10/28/2019",releaseDate:"02/21/2019"},maker:{route:"/interface/dapps/maker-dai",icon:g.a,iconDisabled:A.a,title:"dappsMaker.maker_title",desc:"dappsMaker.maker_desc",supportedNetworks:[C["ETH"].name,C["KOV"].name],lastUpdated:"08/14/2019",releaseDate:"06/14/2019"},makerOld:{route:"/interface/dapps/maker-sai",icon:g.a,iconDisabled:A.a,title:"dappsMaker.maker_title_old",desc:"dappsMaker.maker_desc_sai",supportedNetworks:[C["ETH"].name,C["KOV"].name],lastUpdated:"08/14/2019",releaseDate:"06/14/2019"},ambrpay:{route:"/interface/dapps/ambrpay",icon:w.a,iconDisabled:x.a,title:"dappsAmbrpay.title",desc:"dappsAmbrpay.ambrpay-popover",supportedNetworks:[C["ETH"].name,C["KOV"].name],lastUpdated:"11/05/2019",releaseDate:"11/05/2019"},aave:{route:"/interface/dapps/aave",icon:y.a,title:"dappsAave.title",desc:"dappsAave.popover",supportedNetworks:[C["ETH"].name],lastUpdated:"2/26/2020",releaseDate:"2/26/2020"}};e["a"]=D},2259:function(t,e,a){"use strict";var n=a("4b11"),s=a.n(n);s.a},"286f":function(t,e,a){},"2c588":function(t,e,a){t.exports=a.p+"img/makerdai.4cda8f7e.svg"},"30f56":function(t,e,a){"use strict";var n=a("286f"),s=a.n(n);s.a},"32de":function(t,e,a){t.exports=a.p+"img/send-tx-right.0f2b4c5e.png"},3409:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["dapps-button",t.supported?"":"disabled",t.title===t.dappsTitle.aave?"aave-icon":""],on:{click:t.navigateTo}},[n("img",{directives:[{name:"show",rawName:"v-show",value:!t.isBeenTwoWeeks,expression:"!isBeenTwoWeeks"}],staticClass:"new-label",attrs:{src:a("bec0"),alt:""}}),n("img",{class:[t.title===t.dappsTitle.ambrpay?"ambrpay-icon":"","dapp-logo","dapps-icon"],attrs:{src:t.supported?t.icon:t.iconDisabled,alt:""}}),n("div",{staticClass:"title-container"},[n("h4",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.desc))])])])},s=[],i=(a("caad"),a("b0c0"),a("2532"),a("f3f3")),r=a("2f62"),o={props:{title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""},iconDisabled:{type:String,default:""},param:{type:String,default:""},releaseDate:{type:String,default:""},supportedNetworks:{type:Array,default:function(){return[]}}},data:function(){return{dappsTitle:{ambrpay:"Ambrpay",aave:"Aave"}}},computed:Object(i["a"])({},Object(r["c"])("main",["online","network"]),{supported:function(){return this.online?this.supportedNetworks.includes(this.network.type.name):null},isBeenTwoWeeks:function(){var t=new Date,e=new Date(this.releaseDate),a=t.getTime()-e.getTime(),n=2;return this.milliToWeeks(a)>n}}),methods:{milliToWeeks:function(t){var e=t/1e3,a=e/60,n=a/60,s=n/24,i=s/7;return i},navigateTo:function(){this.$router.push(this.param)}}},c=o,p=(a("30f56"),a("2877")),l=Object(p["a"])(c,n,s,!1,null,"abb769b8",null),d=l.exports},"4b11":function(t,e,a){},"5c5e":function(t,e,a){t.exports=a.p+"img/eac-hov.0ff9427d.svg"},"6c15":function(t,e,a){t.exports=a.p+"img/domain.5194defa.svg"},"732c":function(t,e,a){t.exports=a.p+"img/send-tx-spaceman.c346ef9d.png"},"7b4f":function(t,e,a){t.exports=a.p+"img/makerdai-disabled.ce082a6f.svg"},"7e5b":function(t,e,a){t.exports=a.p+"img/ambrpay.1e29f961.png"},"847f":function(t,e,a){"use strict";var n=a("0d51"),s=a.n(n);s.a},"8b05":function(t,e,a){t.exports=a.p+"img/crypto-kitties.8b538d7c.png"},"9c4c":function(t,e,a){},b7d39:function(t,e,a){t.exports=a.p+"img/aave.0915fe5a.svg"},bec0:function(t,e){t.exports="data:image/png;base64,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"},c222:function(t,e,a){t.exports=a.p+"img/domain-hov.cce19f91.svg"},cb09:function(t,e,a){t.exports=a.p+"img/domain-sale.f07a77b5.svg"},d840:function(t,e,a){t.exports=a.p+"img/ambrpay-disabled.c3fc8cbc.png"},e8c4:function(t,e,a){t.exports=a.p+"img/eac.8c229ac0.svg"},ee88:function(t,e,a){t.exports=a.p+"img/send-tx-left.e2593f8c.png"},ef00:function(t,e,a){t.exports=a.p+"img/domain-sale-hov.e110128d.svg"},efc3:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return q}));var n,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard-container"},[n("div",{staticClass:"container--flex container--top"},[n("div",{staticClass:"container--card block--actions"},[n("div",{staticClass:"title"},[n("h4",[t._v(t._s(t.$t("interface.actions")))])]),n("div",{staticClass:"buttons"},[n("button-send-tx",{staticClass:"clickable",attrs:{"go-to":t.goTo}}),n("button-nft-manager",{staticClass:"clickable",attrs:{disabled:!t.isOnlineAndEth,"go-to":t.goTo}})],1)]),n("div",{staticClass:"container--card block--swap"},[n("div",{staticClass:"flex--row--align-center title"},[n("h4",[t._v(t._s(t.$t("common.swap")))]),n("button",{staticClass:"title-button prevent-user-select",on:{click:function(e){return t.goTo("swap")}}},[t._v(" "+t._s(t.$t("common.more"))+" ")])]),n("p",{staticClass:"section-description"},[t._v(" "+t._s(t.$t("interface.dashboard-swap"))+" ")]),n("div",{staticClass:"swap-info"},t._l(t.swapPairs,(function(e){return n("div",{key:e.from+e.to},[n("div",{staticClass:"swap-to clickable",class:t.isOnlineAndEth?"swap-enabled":"swap-disabled",on:{click:function(a){return a.preventDefault(),t.showSwapWidget(e)}}},[n("p",{staticClass:"monospace"},[t._v(" "+t._s(e.amt)+" "+t._s(e.from)+" / "+t._s(e.rate)+" "+t._s(e.to)+" ")]),n("div",{staticClass:"margin--left--auto flex--row--align-center"},[t.getIcon(e.from)?t._e():n("span",{staticClass:"currency-symbol"},[n("img",{staticClass:"icon-image",attrs:{src:t.iconFetcher(e.from)}})]),t.getIcon(e.from)?n("span",{class:["currency-symbol","cc",e.from,"cc-icon"]}):t._e(),n("img",{attrs:{src:a("37d0"),alt:""}}),t.getIcon(e.to)?t._e():n("span",{staticClass:"currency-symbol"},[n("img",{staticClass:"icon-image",attrs:{src:t.iconFetcher(e.to)}})]),t.getIcon(e.to)?n("span",{class:["currency-symbol","cc",e.to,"cc-icon"]}):t._e()])])])})),0)])]),n("div",{staticClass:"container--card bottom--buttons"},[n("div",{staticClass:"block--dapps"},[n("div",{staticClass:"flex--row--align-center title"},[n("h4",[t._v(t._s(t.$t("common.dapps")))]),n("button",{staticClass:"title-button prevent-user-select",on:{click:function(e){return t.goTo("dapps")}}},[t._v(" "+t._s(t.$t("interface.view-all"))+" ")])]),n("div",{staticClass:"block--container"},t._l(t.sortedObject,(function(e){return n("dapp-buttons",{key:e.title,staticClass:"dapp",attrs:{title:t.$t(e.title),icon:e.icon,"icon-disabled":e.iconDisabled,desc:t.$t(e.desc),param:e.route,"release-date":e.releaseDate,"supported-networks":e.supportedNetworks}})})),1)])])])},i=[],r=(a("7db0"),a("c740"),a("4160"),a("b0c0"),a("b680"),a("b64b"),a("159b"),a("96cf"),a("c964")),o=a("fc11"),c=a("f3f3"),p=a("2f62"),l=a("2c51"),d=a("3409"),u=a("1298"),f=function(t,e){var n=e._c;return n("div",{staticClass:"button-nft-manager",on:{click:function(t){return e.props.goTo("nft-manager",e.props.disabled)}}},[n("div",{staticClass:"content-container",class:e.props.disabled?"button-disabled":""},[n("img",{staticClass:"kitties",attrs:{alt:e.parent.$t("common.kitties"),src:a("8b05")}}),n("div",{staticClass:"text-content"},[n("p",{staticClass:"title"},[e._v(" "+e._s(e.parent.$t("nftManager.nft"))),n("br"),e._v(e._s(e.parent.$t("nftManager.manager"))+" ")]),e.props.disabled?n("p",{staticClass:"button-disabled"},[e._v(" "+e._s(e.parent.$t("interface.no-avail"))+" ")]):e._e()])])])},m=[],b={props:{disabled:{type:Boolean,default:!1},goTo:{type:Function,default:function(){}}}},g=b,h=(a("847f"),a("2877")),A=Object(h["a"])(g,f,m,!0,null,"c3bd42ae",null),v=A.exports,w=function(t,e){var n=e._c;return n("div",{staticClass:"button-send-tx",on:{click:function(t){return e.props.goTo("send-transaction")}}},[n("div",{staticClass:"content-container",class:e.disabled?"button-disabled":""},[n("img",{staticClass:"left",attrs:{src:a("ee88"),alt:""}}),n("img",{staticClass:"right",attrs:{src:a("32de"),alt:""}}),n("img",{staticClass:"spaceman",attrs:{src:a("732c"),alt:""}}),n("div",{staticClass:"text-content"},[n("i18n",{staticClass:"title",attrs:{tag:"div",path:"sendTx.send-tx-break"}},[n("p",{staticClass:"title",attrs:{slot:"transaction"},slot:"transaction"},[e._v(" "+e._s(e.parent.$t("sendTx.tx"))+" ")])]),e.disabled?n("p",{staticClass:"button-disabled"},[e._v(" "+e._s(e.parent.$t("interface.no-avail"))+" ")]):e._e()],1)])])},k=[],x={props:{disabled:{type:Boolean,default:!1},goTo:{type:Function,default:function(){}}}},T=x,y=(a("f8bc"),Object(h["a"])(T,w,k,!0,null,"885eb9b0",null)),C=y.exports,D=a("b643"),E=a("901e"),O=a.n(E),P=function(t){return new O.a(t)},B={components:{"dapp-buttons":d["a"],"button-nft-manager":v,"button-send-tx":C},props:{tokensWithBalance:{type:Array,default:function(){return[]}},getBalance:{type:Function,default:function(){}},highestGas:{type:String,default:"0"}},data:function(){return{showSwapValues:!0,dappsToShow:["maker","manageEns","scheduleTransaction"],tabData:l["a"].tabs,advancedExpand:!1,isValidAddress:!1,hexAddress:"",address:"",value:"0",gasLimit:"21000",data:"",selectedCurrency:"",ethPrice:0,swapPairs:[{from:"ETH",to:"BTC",amt:1,rate:0},{from:"ETH",to:"EUR",amt:1,rate:0},{from:"ETH",to:"KNC",amt:1,rate:0},{from:"BAT",to:"ETH",amt:1,rate:0},{from:"ETH",to:"DAI",amt:1,rate:0}],swap:new D["e"](D["m"],{network:this.$store.state.main.network.type.name,web3:this.$store.state.main.web3,getRateForUnit:!1},{tokensWithBalance:this.tokensWithBalance,online:this.$store.state.main.online}),updatingRates:!1,suppliedFrom:{symbol:"ETH",name:"Ethereum"},suppliedTo:{symbol:"BTC",name:"Bitcoin"},suppliedFromAmount:0}},computed:Object(c["a"])({},Object(p["c"])("main",["account","web3","network","online"]),{sortedObject:function(){var t=[],e=[];Object.keys(u["a"]).forEach((function(a){"manageEns"!==a&&"maker"!==a||e.push(u["a"][a]),t.push(u["a"][a])}));var a=t.sort((function(t,e){return new Date(e.releaseDate)-new Date(t.releaseDate)}))[0];return e.push(a),e},isOnlineAndEth:function(){return this.online&&"ETH"===this.network.type.name}}),watch:(n={},Object(o["a"])(n,"swap.haveProviderRates",(function(){this.isOnlineAndEth&&(this.haveProviderRates=this.swap.haveProviderRates,this.setupSwap())})),Object(o["a"])(n,"network",(function(){var t=this;setTimeout((function(){t.swap=new D["e"](D["m"],{network:t.network.type.name,web3:t.web3,getRateForUnit:!1},{tokensWithBalance:t.tokensWithBalance,online:t.$store.state.main.online})}),500)})),n),mounted:function(){this.online&&"ETH"===this.network.type.name?this.showSwapValues=!0:this.showSwapValues=!1},methods:{iconFetcher:function(t){var e;try{e=a("64d7")("./".concat(t,".svg"))}catch(n){return a("9294")}return e},getIcon:function(t){return Object(D["i"])(t)},goTo:function(t,e){if(!e){var a=-1,n=this.tabData.find((function(e){if(e.name===t)return!0;if(e.children.length>0){var n=e.children.findIndex((function(e){return e.name===t}));if(n>=0)return a=n,!0}return!1}));a>=0?!this.online&&n.children[a].onlineOnly||this.$router.push({path:n.children[a].routes[0]}):!this.online&&n.onlineOnly||this.$router.push({path:n.routes[0]})}},setupSwap:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isOnlineAndEth){e.next=10;break}a=0;case 2:if(!(a<t.swapPairs.length)){e.next=10;break}return e.next=5,t.swap.standAloneRateEstimate(t.swapPairs[a].from,t.swapPairs[a].to,t.swapPairs[a].amt);case 5:n=e.sent,t.isOnlineAndEth&&n&&t.$set(t.swapPairs[a],"rate",P(n[0].rate).toFixed(4));case 7:a++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})))()},showSwapWidget:function(t){this.isOnlineAndEth&&this.$eventHub.$emit("showSwapWidget",this.account.address,t.from,t.to,t.amt)}}},R=B,G=(a("2259"),Object(h["a"])(R,s,i,!1,null,"d9e870e8",null)),q=G.exports},f8bc:function(t,e,a){"use strict";var n=a("9c4c"),s=a.n(n);s.a}}]);
//# sourceMappingURL=chunk-2df0bf04.8c92c009.js.map