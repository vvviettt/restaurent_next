(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{11591:function(e,t,s){Promise.resolve().then(s.bind(s,19721)),Promise.resolve().then(s.bind(s,88984)),Promise.resolve().then(s.bind(s,66560)),Promise.resolve().then(s.bind(s,92793)),Promise.resolve().then(s.bind(s,26814)),Promise.resolve().then(s.bind(s,80524)),Promise.resolve().then(s.bind(s,47194)),Promise.resolve().then(s.bind(s,86414))},49540:function(e,t,s){"use strict";s.d(t,{M:function(){return a}});var n=s(80546);s(68496),s(32922),s(92417),n.ZP.use([n.Gk,n.tl,n.W_,n.xW,n.pt,n.rj,n.gI,n.oM,n.kr,n.Ay,n.o3,n.LW,n.N1,n.s5,n.VS,n.Rv]);let a={heroSlider:{slidesPerView:1,speed:800,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".tst-main-pagination",clickable:!0},parallax:!0,autoplay:{delay:5e3},navigation:{prevEl:".tst-main-prev",nextEl:".tst-main-next"}},testimonialsSlider:{slidesPerView:3,spaceBetween:30,speed:800,centeredSlides:!0,loop:!0,navigation:{prevEl:".tst-testi-prev",nextEl:".tst-testi-next"},pagination:{el:".tst-testi-pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},0:{slidesPerView:1}}},footerGallerySlider:{slidesPerView:4,spaceBetween:15,loop:!0,speed:800,autoplay:{delay:5e3},navigation:{prevEl:".tst-fg-prev",nextEl:".tst-fg-next"}},menuSlider:{effect:"fade",parallax:!0,speed:600,pagination:{el:".swiper-menu-nav",clickable:!0,renderBullet:function(e,t){let s=[];return s.length||document.querySelectorAll(".swiper-menu-nav span").forEach((e,t)=>{s[t]=e.innerHTML}),'<span class="'+t+'">'+s[e]+"</span>"}}},slider:{slidesPerView:3,spaceBetween:30,speed:800,navigation:{prevEl:".tst-prev",nextEl:".tst-next"},pagination:{el:".tst-blog-pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}}}}},66560:function(e,t,s){"use strict";s.r(t);var n=s(57437),a=s(2265),i=s(21823);t.default=()=>{let[e,t]=(0,a.useState)(i.M),[s,r]=(0,a.useState)(1);(0,a.useEffect)(()=>{document.querySelector(".tst-cart-number").innerHTML=e},[e]);let l=n=>{n.preventDefault();let a=document.querySelector(".tst-cart-number");t(e+s),a.classList.add("tst-added"),n.currentTarget.classList.add("tst-added"),setTimeout(()=>{a.classList.remove("tst-added")},600)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"tst-buttons-frame",children:[(0,n.jsxs)("div",{className:"tst-input-number-frame",children:[(0,n.jsx)("div",{className:"tst-input-number-btn tst-sub",onClick:()=>r(s>1?s-1:s),children:"-"}),(0,n.jsx)("input",{type:"number",readOnly:!0,value:s,min:1,max:10}),(0,n.jsx)("div",{className:"tst-input-number-btn tst-add",onClick:()=>r(s<10?s+1:s),children:"+"})]}),(0,n.jsxs)("a",{href:"#.",className:"tst-btn tst-btn-with-icon tst-atc",onClick:e=>l(e),children:[(0,n.jsx)("span",{className:"tst-icon",children:(0,n.jsx)("img",{src:"/img/ui/icons/cart.svg",alt:"icon"})}),(0,n.jsx)("span",{className:"tst-add-to-cart-text",children:"Add to cart"}),(0,n.jsx)("span",{className:"tst-added-text",children:"Added"})]})]})})}},92793:function(e,t,s){"use strict";s.r(t);var n=s(57437),a=s(2265),i=s(68975);s(58032),t.default=e=>{let{src:t,alt:s,badge:r}=e,[l,c]=(0,a.useState)(!1),[d,o]=(0,a.useState)([]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"tst-gallery-item tst-gallery-square tst-mb-90",children:[(0,n.jsx)("img",{src:t,alt:s}),(0,n.jsx)("a",{"data-fancybox":"menu","data-no-swup":!0,href:t,className:"tst-btn tst-btn-2 tst-btn-icon tst-btn-gray tst-zoom",onClick:e=>{e.preventDefault(),c(!0),o([{src:t,alt:s}])},children:(0,n.jsx)("span",{className:"tst-icon",children:(0,n.jsx)("img",{src:"/img/ui/icons/zoom.svg",alt:"icon"})})}),(0,n.jsx)(i.ZP,{open:l,close:()=>c(!1),slides:d,styles:{container:{backgroundColor:"rgba(38, 31, 65, .85)"}},render:{buttonPrev:d.length<=1?()=>null:void 0,buttonNext:d.length<=1?()=>null:void 0}}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]})})}},26814:function(e,t,s){"use strict";s.r(t);var n=s(57437),a=s(72670),i=s.n(a),r=s(2265);t.default=e=>{let{items:t,active:s}=e,a=(0,r.useRef)(),[l,c]=(0,r.useState)(s);(0,r.useEffect)(()=>{a.current=new(i())(".tst-masonry-grid",{itemSelector:".tst-grid-item",percentPosition:!0,masonry:{columnWidth:".tst-grid-sizer"},transitionDuration:"0.5s"})},[]),(0,r.useEffect)(()=>{a.current&&("*"===l?a.current.arrange({filter:"*"}):a.current.arrange({filter:".tst-".concat(l,"-tab")}))},[l]);let d=(e,t)=>{t.preventDefault(),c(e),document.querySelectorAll(".tst-filter a").forEach(t=>{t.getAttribute("data-filter")=="tst-"+e+"-tab"?t.classList.add("tst-active"):t.classList.remove("tst-active")})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"tst-filter",children:t.map((e,t)=>(0,n.jsx)("a",{href:"#.","data-filter":"tst-".concat(e.slug,"-tab"),className:e.slug==s?"tst-filter-link tst-active":"tst-filter-link",onClick:t=>d(e.slug,t),children:e.name},"product-tabs-item-".concat(t)))})})}},80524:function(e,t,s){"use strict";s.r(t);var n=s(57437),a=s(49540),i=s(60107),r=s(4633),l=s(50774);t.default=e=>{let{heading:t={},items:s,button:c={}}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"row align-items-center",children:[0!=t&&(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"tst-suptitle tst-suptitle-center tst-mb-15",dangerouslySetInnerHTML:{__html:t.subtitle}}),(0,n.jsx)("h3",{className:"tst-mb-30",dangerouslySetInnerHTML:{__html:t.title}}),(0,n.jsx)("p",{className:"tst-text",dangerouslySetInnerHTML:{__html:t.description}})]})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsx)(i.tq,{...a.M.slider,className:"swiper-container tst-slider",children:s.slice(0,6).map((e,t)=>(0,n.jsx)(i.o5,{className:"swiper-slide",children:(0,n.jsx)(l.Z,{item:e,index:t})},"products-slider-item-".concat(t)))})}),(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsxs)("div",{className:"tst-slider-navigation",children:[0!=c&&(0,n.jsx)(r.rU,{href:c.link,className:"tst-btn",children:c.label}),(0,n.jsx)("div",{className:"tst-slider-pagination tst-testi-pagination"}),(0,n.jsxs)("div",{className:"tst-nav tst-right",children:[(0,n.jsx)("div",{className:"tst-label",children:"Slider navigation"}),(0,n.jsx)("div",{className:"tst-slider-btn tst-prev",children:(0,n.jsx)("i",{className:"fas fa-arrow-left"})}),(0,n.jsx)("div",{className:"tst-slider-btn tst-next",children:(0,n.jsx)("i",{className:"fas fa-arrow-right"})})]})]})})]})})}},47194:function(e,t,s){"use strict";s.r(t);var n=s(57437);t.default=e=>{let{onlyBottom:t=1}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:t?"tst-spacer tst-spacer-only-bottom-space":"tst-spacer"})})}}},function(e){e.O(0,[3415,7162,8973,2891,3786,2721,5208,2971,8069,1744],function(){return e(e.s=11591)}),_N_E=e.O()}]);