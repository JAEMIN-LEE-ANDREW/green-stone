(function(e){function t(t){for(var n,a,i=t[0],s=t[1],b=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,b||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,i=1;i<c.length;i++){var s=c[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/green-stone/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var l=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("cd49")},"05c4":function(e,t,c){"use strict";c("68c1")},"061e":function(e,t,c){e.exports=c.p+"img/arrow.e9f0dd97.png"},"22bc":function(e,t,c){e.exports=c.p+"img/product2.156e93bc.jpg"},"2e5a":function(e,t,c){e.exports=c.p+"img/location.69edfa2f.jpg"},"34fe":function(e,t,c){var n={"./product1.jpg":"65fc","./product2.jpg":"22bc","./product3.jpg":"b3ab"};function r(e){var t=o(e);return c(t)}function o(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="34fe"},6168:function(e,t,c){e.exports=c.p+"img/hamburger.b4f35a59.png"},"65fc":function(e,t,c){e.exports=c.p+"img/product1.f85b532b.jpg"},"68c1":function(e,t,c){},"6bf6":function(e,t,c){e.exports=c.p+"img/outline.533bbc29.jpg"},"9d64":function(e,t,c){e.exports=c.p+"img/logo.4e5f34db.png"},b3ab:function(e,t,c){e.exports=c.p+"img/product3.2a8ea4de.jpg"},c0d3:function(e,t,c){e.exports=c.p+"img/factory1.9ed83be4.jpg"},c4c3:function(e,t,c){e.exports=c.p+"img/factory2.432fd523.jpg"},cd49:function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("5e2b");function o(e,t,c,r,o,a){var i=Object(n["x"])("app-header"),s=Object(n["x"])("router-view"),b=Object(n["x"])("app-bottom");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])(i),Object(n["h"])(s),Object(n["h"])(b)])}var a=c("d4ec"),i=c("262e"),s=c("2caf"),b=c("9ab4"),l=c("ce1f"),u=c("6168"),p=c.n(u),j={class:"header"},O={class:"menu"},h=Object(n["h"])("img",{src:p.a,alt:""},null,-1),d={key:0,class:"mobile_header"},f={class:"mobile_menu"};function v(e,t,c,r,o,a){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])("header",j,[Object(n["h"])("h1",{onClick:t[1]||(t[1]=function(t){return e.$router.push("/")})},"그린석재"),Object(n["h"])("nav",O,[Object(n["h"])("ul",null,[Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[2]||(t[2]=Object(n["D"])((function(t){return e.$router.push("/company")}),["prevent"]))},"회사소개")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[3]||(t[3]=Object(n["D"])((function(t){return e.$router.push("/product")}),["prevent"]))},"제품소개")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[4]||(t[4]=Object(n["D"])((function(t){return e.$router.push("/product")}),["prevent"]))},"납품사례")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[5]||(t[5]=Object(n["D"])((function(t){return e.$router.push("/estimate")}),["prevent"]))},"견적문의")])])]),Object(n["h"])("div",{class:"mobile_btn",onClick:t[6]||(t[6]=function(){return e.openMobileMenu&&e.openMobileMenu.apply(e,arguments)})},[h])]),e.isMobileMenu?(Object(n["q"])(),Object(n["d"])("header",d,[Object(n["h"])("nav",f,[Object(n["h"])("ul",null,[Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[7]||(t[7]=Object(n["D"])((function(t){return e.movePage("/company")}),["prevent"]))},"회사소개")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[8]||(t[8]=Object(n["D"])((function(t){return e.movePage("/product")}),["prevent"]))},"제품소개")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[9]||(t[9]=Object(n["D"])((function(t){return e.movePage("/product")}),["prevent"]))},"납품사례")]),Object(n["h"])("li",null,[Object(n["h"])("a",{href:"#",onClick:t[10]||(t[10]=Object(n["D"])((function(t){return e.movePage("/estimate")}),["prevent"]))},"견적문의")])])])])):Object(n["e"])("",!0)])}var m=c("bee2"),g=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){var e;return Object(a["a"])(this,c),e=t.apply(this,arguments),e.isMobileMenu=!1,e.widthSize=document.body.clientWidth,e}return Object(m["a"])(c,[{key:"openMobileMenu",value:function(){this.isMobileMenu=!this.isMobileMenu}},{key:"movePage",value:function(e){this.isMobileMenu=!this.isMobileMenu,this.$router.push(e)}},{key:"mounted",value:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",(function(){e.widthSize=document.body.clientWidth,e.widthSize>800&&(e.isMobileMenu=!1)}))}))}}]),c}(l["b"]);g.render=v;var y=g,_=c("9d64"),x=c.n(_),w={class:"footer"},M=Object(n["h"])("div",{class:"footer_info"},[Object(n["h"])("p",null,[Object(n["h"])("span",null,"(주)그린석재"),Object(n["h"])("span",{class:"right_side"},"사업자등록번호: 127-86-02350"),Object(n["h"])("span",{class:"right_side"},"대표: 임만혁")]),Object(n["h"])("span",null,"경기 포천시 일동면 청지로 45 (우)11118"),Object(n["h"])("p",null,[Object(n["h"])("span",null,"대표전화: 031) 536-9330~1"),Object(n["h"])("span",{class:"right_side"},"팩스: 031) 536-9332")]),Object(n["h"])("br"),Object(n["g"])(" COPYRIGHT(C) 2021 GREEN STONE. ALL RIGHT RESERVED ")],-1),k=Object(n["h"])("div",{class:"footer_logo"},[Object(n["h"])("img",{src:x.a,alt:""})],-1);function C(e,t,c,r,o,a){return Object(n["q"])(),Object(n["d"])("footer",w,[M,k])}var S=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){return Object(a["a"])(this,c),t.apply(this,arguments)}return c}(l["b"]);S.render=C;var E=S,P=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){return Object(a["a"])(this,c),t.apply(this,arguments)}return c}(l["b"]);P=Object(b["a"])([Object(l["a"])({components:{AppHeader:y,AppBottom:E}})],P);var D=P;c("05c4");D.render=o;var q=D,$=c("6c02"),N=c("c0d3"),T=c.n(N),B=c("c4c3"),z=c.n(B),A=c("ce72"),R=c.n(A),H={class:"mainContainer"},L=Object(n["h"])("img",{src:T.a},null,-1),G=Object(n["h"])("img",{src:z.a},null,-1),I=Object(n["h"])("img",{src:R.a},null,-1),U={class:"businessSection"},J=Object(n["h"])("h2",{align:"center"},"B U S I N E S S",-1),W={class:"intro"},F=Object(n["h"])("p",{class:"intro_title"},"회사소개",-1),V=Object(n["h"])("p",{class:"intro_content"},[Object(n["g"])("2021년"),Object(n["h"])("br"),Object(n["h"])("br"),Object(n["g"])("그린석재가 더욱 품격있게 도약합니다.")],-1),Y={class:"other_intro"},K=Object(n["h"])("p",{class:"intro_title"},"제품소개",-1),Q=Object(n["h"])("p",{class:"intro_content"},"그린석재는 최고의 품질을 보장합니다.",-1),X={class:"list_intro"},Z=Object(n["h"])("i",{class:"fa fa-map-marked-alt fa-5x"},null,-1),ee=Object(n["h"])("br",null,null,-1),te=Object(n["g"])("오시는 길"),ce=Object(n["h"])("div",{class:"mr_r"},[Object(n["h"])("i",{class:"fas fa-download fa-5x"}),Object(n["h"])("br"),Object(n["g"])("카탈로그 다운로드")],-1);function ne(e,t,c,r,o,a){var i=Object(n["x"])("splide-slide"),s=Object(n["x"])("splide");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])("div",H,[Object(n["h"])(s,{options:e.options},{default:Object(n["C"])((function(){return[Object(n["h"])(i,null,{default:Object(n["C"])((function(){return[L]})),_:1}),Object(n["h"])(i,null,{default:Object(n["C"])((function(){return[G]})),_:1}),Object(n["h"])(i,null,{default:Object(n["C"])((function(){return[I]})),_:1})]})),_:1},8,["options"])]),Object(n["h"])("div",U,[J,Object(n["h"])("section",W,[Object(n["h"])("div",{class:"company_intro",onClick:t[1]||(t[1]=Object(n["D"])((function(t){return e.$router.push("/company")}),["prevent"]))},[F,V]),Object(n["h"])("div",Y,[Object(n["h"])("div",{class:"product_intro",onClick:t[2]||(t[2]=function(t){return e.$router.push("/product")})},[K,Q]),Object(n["h"])("div",X,[Object(n["h"])("div",{class:"mr_l",onClick:t[3]||(t[3]=function(){return e.toNaverMap&&e.toNaverMap.apply(e,arguments)})},[Z,ee,te]),ce])])])])])}var re=c("c741"),oe=c("e42a"),ae=(c("e50d"),function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){var e;return Object(a["a"])(this,c),e=t.apply(this,arguments),e.options={type:"loop",perPage:1,height:530,margin:"auto",arrows:!1,autoplay:!0,interval:3e3,speed:1300},e}return Object(m["a"])(c,[{key:"toNaverMap",value:function(){window.open("https://map.naver.com/v5/search/%EA%B7%B8%EB%A6%B0%EC%84%9D%EC%9E%AC/place/1968912385?c=14172590.7087530,4574674.9285252,14,0,0,0,dh")}}]),c}(l["b"]));ae=Object(b["a"])([Object(l["a"])({components:{Splide:re["a"],SplideSlide:oe["a"]}})],ae);var ie=ae;ie.render=ne;var se=ie,be=(c("b0c0"),Object(n["h"])("div",{class:"product_banner"},null,-1)),le={class:"product_img"},ue={class:"product_info"};function pe(e,t,r,o,a,i){return Object(n["q"])(),Object(n["d"])("div",null,[be,(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(e.products,(function(e,t){return Object(n["q"])(),Object(n["d"])("div",{class:"product_container",key:t},[Object(n["h"])("div",le,[Object(n["h"])("img",{src:c("34fe")("./".concat(e.img)),alt:""},null,8,["src"])]),Object(n["h"])("div",ue,[Object(n["h"])("h3",null,Object(n["z"])(e.name),1),Object(n["h"])("p",null,Object(n["z"])(e.info),1)])])})),128))])}var je=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){var e;return Object(a["a"])(this,c),e=t.apply(this,arguments),e.products=[{img:"product1.jpg",info:"주로 건물 내. 외벽 마감으로 사용되며, 표면이 광택이 나도록 매끈하고 반짝반짝한 것이 특징이다.",name:"연마 마감"},{img:"product2.jpg",info:"미끄럼방지효과와 강한 흡수력을 지니고 있으며, 반영구적인 것이 특징이다.",name:"혼드 마감"},{img:"product3.jpg",info:"자귀형의 날망치로 정다듬 또는 도드락 다듬면 위를 일정방향, 평행선 등으로 나란히 찍어 다듬어 평탄하게 하는 돌 표면 마무리법이며, 반영구적인 것이 특징이다.",name:"잔다듬 마감"}],e}return c}(l["b"]);je.render=pe;var Oe=je,he=c("6bf6"),de=c.n(he),fe=c("061e"),ve=c.n(fe),me=c("2e5a"),ge=c.n(me),ye=Object(n["h"])("div",{class:"company_banner"},null,-1),_e=Object(n["h"])("section",{class:"company_outline"},[Object(n["h"])("h1",null,"그린석재"),Object(n["h"])("p",{class:"bar"}),Object(n["h"])("img",{src:de.a,alt:""}),Object(n["h"])("p",{class:"content"},[Object(n["g"])(" 그린석재는 경기북부 지역 최대규모 석재가공장비를 운영하고 있어 연간 6,700Ton 규모 처리가 가능합니다. 이러한 규모를 처리하기 위하여 7.300m2 규모의 재고관리 시설과 자동화 장비 를 보유하고 있어 경쟁사 대비 우수한 기술력을 확보하고 있습니다. "),Object(n["h"])("br"),Object(n["g"])(" 2007년 법인설립이후 석재관련 기술개발을 지속적으로 진행하였으며 특히 석재를 재활용하는 분야에서 독보적인 위치에 있습니다 ")])],-1),xe=Object(n["h"])("section",{class:"company_process"},[Object(n["h"])("h1",null,"공정과정"),Object(n["h"])("p",{class:"bar"}),Object(n["h"])("div",{class:"process_container"},[Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("원석수입 ")]),Object(n["h"])("img",{src:ve.a,alt:"",class:"arrow"}),Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("할석 ")]),Object(n["h"])("img",{src:ve.a,alt:"",class:"arrow"}),Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("표면마감 ")])]),Object(n["h"])("div",{class:"process_container"},[Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("재단 ")]),Object(n["h"])("img",{src:ve.a,alt:"",class:"arrow"}),Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("포장 ")]),Object(n["h"])("img",{src:ve.a,alt:"",class:"arrow"}),Object(n["h"])("div",{class:"process_box"},[Object(n["h"])("img",{src:de.a,alt:""}),Object(n["g"])("검수 ")])])],-1),we=Object(n["h"])("section",{class:"company_location"},[Object(n["h"])("h1",null,"오시는 길"),Object(n["h"])("p",{class:"bar"}),Object(n["h"])("img",{src:ge.a,alt:""}),Object(n["h"])("p",{class:"content"}," ??? ")],-1);function Me(e,t,c,r,o,a){return Object(n["q"])(),Object(n["d"])("div",null,[ye,_e,xe,we])}var ke=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){return Object(a["a"])(this,c),t.apply(this,arguments)}return c}(l["b"]);ke.render=Me;var Ce=ke,Se=Object(n["f"])('<div class="estimate_banner"></div><section class="company_outline"><h1>견적문의</h1><p class="bar"></p><div class="estimate_container"><input type="text" class="input_text" placeholder="제목"><textarea placeholder="문의 내용" id="" cols="30" rows="10" class="input_textarea"></textarea><button>문의하기</button></div></section>',2);function Ee(e,t,c,r,o,a){return Object(n["q"])(),Object(n["d"])("div",null,[Se])}var Pe=function(e){Object(i["a"])(c,e);var t=Object(s["a"])(c);function c(){return Object(a["a"])(this,c),t.apply(this,arguments)}return c}(l["b"]);Pe.render=Ee;var De=Pe,qe=[{path:"/",name:"Home",component:se},{path:"/product",name:"Product",component:Oe},{path:"/company",name:"Company",component:Ce},{path:"/estimate",name:"Estimate",component:De}],$e=Object($["a"])({history:Object($["b"])("/green-stone"),routes:qe,scrollBehavior:function(){return{left:0,top:0}}}),Ne=Object(n["c"])(q);Ne.use(r["a"]),Ne.use($e),Ne.mount("#app")},ce72:function(e,t,c){e.exports=c.p+"img/factory3.219c7711.jpg"}});
//# sourceMappingURL=app.3917fc5d.js.map