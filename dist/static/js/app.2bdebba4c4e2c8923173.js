webpackJsonp([1],{"+Ksi":function(t,e){},"3y1L":function(t,e){},"7zck":function(t,e){},"83gA":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOTI3LjgxIDU1Ni44NCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiM0YzdjYTY7c3Ryb2tlLXdpZHRoOjQwcHg7fS5jbHMtMSwuY2xzLTIsLmNscy0zLC5jbHMtNHtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmNscy0ye2ZvbnQtc2l6ZToyMDBweDtmb250LWZhbWlseTpDYWxpYnJpO30uY2xzLTIsLmNscy0zLC5jbHMtNHtmaWxsOiMyMDE2MDA7c3Ryb2tlOiMyMDE2MDA7fS5jbHMtMiwuY2xzLTR7c3Ryb2tlLXdpZHRoOjRweDt9LmNscy0ze2ZvbnQtc2l6ZToyMjBweDtmb250LWZhbWlseTpUcmVidWNoZXRNUy1Cb2xkLCBUcmVidWNoZXQgTVM7Zm9udC13ZWlnaHQ6NzAwO30uY2xzLTR7Zm9udC1zaXplOjMxNi40cHg7Zm9udC1mYW1pbHk6Q2VudHVyeUdvdGhpYywgQ2VudHVyeSBHb3RoaWM7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvMjwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMCIgeT0iOTEuOTMiIHdpZHRoPSIzNDYiIGhlaWdodD0iMzQ2Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMjgiIHkxPSIyNjQuOTMiIHgyPSIzNzEiIHkyPSIyNjQuOTMiLz48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxOTMiIHkxPSI5Ni45MyIgeDI9IjE5MyIgeTI9IjI2NC45MyIvPjx0ZXh0IGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuNzkgMTY1LjE4KSI+0K48L3RleHQ+PHRleHQgY2xhc3M9ImNscy0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMjAuMyAxNjUuMTgpIj7QoTwvdGV4dD48dGV4dCBjbGFzcz0iY2xzLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3Ni4zOCA0OTcuMDQpIHNjYWxlKDEuMDcgMSkiPtCePC90ZXh0Pjx0ZXh0IGNsYXNzPSJjbHMtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUzLjMgMzY5LjY3KSBzY2FsZSgwLjkxIDEpIj7QrtCTINCh0KLQoNCe0Jkg0J7QmtCd0J48L3RleHQ+PC9zdmc+"},"9M+g":function(t,e){},"9bvT":function(t,e){},Jmt5:function(t,e){},Jqbr:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("mtWM"),s=n.n(i),r={name:"Header",data:function(){return{search:!1,searchInput:"",hamOpen:!1}},methods:{handleScroll:function(t,e){return window.scrollY>80?e.setAttribute("style","max-width: 100%;"):e.setAttribute("style","width: 1200px;"),!1}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"40px",width:"100%",height:"calc(100% - 50px)"}},[a("header",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],style:{marginBottom:t.search?"0":"50px"}},[a("div",{staticClass:"header-inside"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:n("83gA"),alt:"Логотип"}})]),t._v(" "),a("div"),t._v(" "),a("nav",{staticClass:"not-mobile"},[a("router-link",{attrs:{to:"/"}},[t._v("ГЛАВНАЯ")]),t._v(" "),a("router-link",{attrs:{to:"/about"}},[t._v("МАГАЗИН")]),t._v(" "),a("router-link",{attrs:{to:"#"}},[t._v("БЛОГ")]),t._v(" "),a("router-link",{staticStyle:{"margin-right":"40px"},attrs:{to:"/contacts"}},[t._v("КОНТАКТЫ")]),t._v(" "),a("router-link",{staticStyle:{"margin-right":"20px","padding-top":"20px"},attrs:{to:"#"}},[a("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"14",height:"14",viewBox:"0 0 17 17"}},[a("path",{attrs:{d:"M13 4v-2.394c0-0.885-0.737-1.606-1.643-1.606h-5.699c-0.905 0-1.642 0.721-1.642 1.606v2.394h-3.016v13h15v-13h-3zM5.016 1.606c0-0.334 0.288-0.606 0.642-0.606h5.699c0.355 0 0.643 0.272 0.643 0.606v2.394h-6.984v-2.394zM15 16h-13v-8h13v8zM15 7h-13v-2h2.016v0.643h1v-0.643h6.984v0.643h1v-0.643h2v2z",fill:"#000000"}})])]),t._v(" "),a("a",{attrs:{id:"search"}},[a("svg",{attrs:{width:"23px","enable-background":"new 0 0 100 100",id:"Layer_1",version:"1.1",viewBox:"0 0 100 100","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){t.search=!t.search}}},[a("path",{attrs:{"clip-rule":"evenodd",d:"M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z"}})])])],1),t._v(" "),a("div",{class:{open:t.hamOpen},attrs:{id:"hamburger"},on:{click:function(e){t.hamOpen=!t.hamOpen}}},[t._m(0)])],1),t._v(" "),t.hamOpen?a("nav",{staticClass:"mobile"},[a("router-link",{attrs:{to:"/"}},[t._v("ГЛАВНАЯ")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("МАГАЗИН")]),t._v(" "),a("router-link",{attrs:{to:"#"}},[t._v("БЛОГ")]),t._v(" "),a("router-link",{attrs:{to:"/contacts"}},[t._v("КОНТАКТЫ")]),t._v(" "),a("a",{staticClass:"search"},[a("svg",{attrs:{width:"23px","enable-background":"new 0 0 100 100",id:"Layer_1",version:"1.1",viewBox:"0 0 100 100","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},on:{click:function(e){t.search=!t.search}}},[a("path",{attrs:{"clip-rule":"evenodd",d:"M64.5,44.6c0-11.6-9.4-20.9-20.9-20.9c-11.6,0-20.9,9.4-20.9,20.9  c0,11.6,9.4,20.9,20.9,20.9C55.1,65.6,64.5,56.2,64.5,44.6z M80,79.3l-1.8,1.8l-19-19c-4.2,3.7-9.6,6-15.7,6  c-13,0-23.5-10.5-23.5-23.5c0-13,10.5-23.5,23.5-23.5c13,0,23.5,10.5,23.5,23.5c0,6-2.3,11.5-6,15.7L80,79.3z"}})])])],1):t._e(),t._v(" "),t.search?a("div",{attrs:{id:"search-panel"}},[a("b-navbar-nav",[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2 search-panel-input",attrs:{size:"sm",placeholder:"Введите название товара"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}}),t._v(" "),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm"}},[a("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",viewBox:"0 0 20 20"},on:{click:function(e){t.search=!t.search}}},[a("path",{attrs:{fill:"white",d:"M10.707 10.5l5.646-5.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-5.646 5.646-5.646-5.646c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l5.646 5.646-5.646 5.646c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l5.646-5.646 5.646 5.646c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-5.646-5.646z"}})])])],1)],1)],1):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span"),this._v(" "),e("span"),this._v(" "),e("span")])}]};var o=n("VU/8")(r,c,!1,function(t){n("9bvT")},"data-v-24615025",null).exports,l={name:"Footer",data:function(){return{msg:"Welcome to Your Vue.js App",randomNumber:0}},created:function(){this.getRandomFromBackend()},methods:{getRandomFromBackend:function(){var t=this;s.a.get("http://localhost:5000/api/random").then(function(e){t.randomNumber=e.data.randomNumber}).catch(function(t){console.log(t)})}}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer0"},[n("footer",{staticClass:"footer"},[n("div",[n("h6",[t._v("О нас")]),t._v(" "),n("p",[t._v("\n        Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений.\n      ")])]),t._v(" "),n("div",[n("div",{staticClass:"single-footer-widget"},[n("h6",[t._v("Новости")]),t._v(" "),n("p",[t._v("Оставайтесь в курсе наших последних новостей")])])]),t._v(" "),n("div",[n("div",{staticClass:"single-footer-widget mail-chimp"},[n("h6",{staticClass:"mb-20"},[t._v("Instragram Feed")]),t._v(" "),n("ul",{staticClass:"instafeed d-flex flex-wrap"},[n("li",[n("img",{attrs:{src:"img/i1.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i2.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i3.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i4.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i5.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i6.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i7.jpg",alt:""}})]),t._v(" "),n("li",[n("img",{attrs:{src:"img/i8.jpg",alt:""}})])])])]),t._v(" "),n("div",[n("div",{staticClass:"single-footer-widget"},[n("h6",[t._v("Follow Us")]),t._v(" "),n("p",[t._v("Let us be social")]),t._v(" "),n("div",{staticClass:"footer-social d-flex align-items-center"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-dribbble"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-behance"})])])])])])])}]};var m={name:"App",components:{Footer:n("VU/8")(l,d,!1,function(t){n("rFJs")},"data-v-2640053b",null).exports,Header:o}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var u=n("VU/8")(m,v,!1,function(t){n("3y1L")},null,null).exports,h=n("/ocq"),p={name:"Home",data:function(){return{msg:"Welcome to Your Vue.js App",randomNumber:0}},created:function(){this.getRandomFromBackend()},methods:{getRandomFromBackend:function(){var t=this;s.a.get("http://localhost:5000/api/random").then(function(e){t.randomNumber=e.data.randomNumber}).catch(function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("p",[t._v("\n    Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании системы обучения кадров, соответствует насущным потребностям. Равным образом реализация намеченных плановых заданий в значительной степени обуславливает создание дальнейших направлений развития. Повседневная практика показывает, что новая модель организационной деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.\n\n    С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании соответствующий условий активизации. Разнообразный и богатый опыт рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Товарищи! консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа соответствующий условий активизации. Равным образом начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям.\n\n    Равным образом консультация с широким активом в значительной степени обуславливает создание систем массового участия. Таким образом сложившаяся структура организации требуют от нас анализа соответствующий условий активизации. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности требуют определения и уточнения соответствующий условий активизации. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Товарищи! рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.\n\n    Не следует, однако забывать, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. С другой стороны реализация намеченных плановых заданий позволяет выполнять важные задания по разработке направлений прогрессивного развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности позволяет выполнять важные задания по разработке модели развития. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки дальнейших направлений развития.\n\n    Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. С другой стороны консультация с широким активом влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.\n\n    Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям. Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа систем массового участия. С другой стороны укрепление и развитие структуры способствует подготовки и реализации дальнейших направлений развития.\n\n    Значимость этих проблем настолько очевидна, что консультация с широким активом требуют определения и уточнения существенных финансовых и административных условий. Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.\n\n    Товарищи! рамки и место обучения кадров влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Товарищи! новая модель организационной деятельности требуют определения и уточнения модели развития. Повседневная практика показывает, что рамки и место обучения кадров способствует подготовки и реализации форм развития. Таким образом начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений.\n\n    Повседневная практика показывает, что рамки и место обучения кадров требуют от нас анализа модели развития. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение дальнейших направлений развития. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании направлений прогрессивного развития. Таким образом реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом в значительной степени обуславливает создание модели развития. Таким образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.\n\n    Не следует, однако забывать, что укрепление и развитие структуры играет важную роль в формировании форм развития. Равным образом сложившаяся структура организации играет важную роль в формировании новых предложений. Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. Таким образом новая модель организационной деятельности позволяет выполнять важные задания по разработке систем массового участия. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения дальнейших направлений развития. Задача организации, в особенности же постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание форм развития.\n  ")]),t._v(" "),n("h1",[t._v(t._s(t.msg)+" rtrt")]),t._v(" "),n("p",[t._v("Random number from backend: "+t._s(t.randomNumber))])])},staticRenderFns:[]};var f=n("VU/8")(p,g,!1,function(t){n("Jqbr")},"data-v-5b9fd959",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacts"},[e("div",{staticClass:"contacts2"},[e("h1",{staticStyle:{"padding-right":"40px","font-family":"'Exo 2', sans-serif","text-align":"right"}},[this._v("Контакты")]),this._v(" "),e("p",{staticStyle:{"padding-right":"40px","font-family":"'Roboto', sans-serif","text-align":"right"}},[this._v("Какой-то текст.")])])])}]};var b=n("VU/8")({name:"Contacts",data:function(){return{items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}]}}},_,!1,function(t){n("+Ksi")},"data-v-691fc538",null).exports,x={name:"Footer",data:function(){return{msg:"Welcome to Your Vue.js App",randomNumber:0}},created:function(){this.getRandomFromBackend()},methods:{getRandomFromBackend:function(){var t=this;s.a.get("http://localhost:5000/api/random").then(function(e){t.randomNumber=e.data.randomNumber}).catch(function(t){console.log(t)})}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"shop"},[this._v("\n  Магазин\n")])},staticRenderFns:[]};var M=n("VU/8")(x,w,!1,function(t){n("zH3O")},"data-v-35e3775a",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v("Не найдено!")])])}]};var y=n("VU/8")({name:"HelloWorld",data:function(){return{}}},C,!1,function(t){n("xq3T")},"data-v-d4c5cfe6",null).exports;a.default.use(h.a);var I=new h.a({mode:"history",routes:[{path:"/",name:"Home",component:f},{path:"/contacts",name:"Contacts",component:b},{path:"/about",name:"About",component:M},{path:"*",name:"NotFound",component:y}]}),N=n("Tqaz"),z=(n("Jmt5"),n("9M+g"),n("3EgV")),H=n.n(z);n("7zck");a.default.use(H.a),a.default.use(N.a),a.default.config.productionTip=!1,a.default.directive("scroll",{inserted:function(t,e){window.addEventListener("scroll",function n(a){e.value(a,t)&&window.removeEventListener("scroll",n)})}}),new a.default({el:"#app",router:I,components:{App:u},template:"<App/>"})},rFJs:function(t,e){},xq3T:function(t,e){},zH3O:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2bdebba4c4e2c8923173.js.map