"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6771],{49540:function(e,t,s){s.d(t,{M:function(){return l}});var a=s(80546);s(68496),s(32922),s(92417),a.ZP.use([a.Gk,a.tl,a.W_,a.xW,a.pt,a.rj,a.gI,a.oM,a.kr,a.Ay,a.o3,a.LW,a.N1,a.s5,a.VS,a.Rv]);let l={heroSlider:{slidesPerView:1,speed:800,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".tst-main-pagination",clickable:!0},parallax:!0,autoplay:{delay:5e3},navigation:{prevEl:".tst-main-prev",nextEl:".tst-main-next"}},testimonialsSlider:{slidesPerView:3,spaceBetween:30,speed:800,centeredSlides:!0,loop:!0,navigation:{prevEl:".tst-testi-prev",nextEl:".tst-testi-next"},pagination:{el:".tst-testi-pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},0:{slidesPerView:1}}},footerGallerySlider:{slidesPerView:4,spaceBetween:15,loop:!0,speed:800,autoplay:{delay:5e3},navigation:{prevEl:".tst-fg-prev",nextEl:".tst-fg-next"}},menuSlider:{effect:"fade",parallax:!0,speed:600,pagination:{el:".swiper-menu-nav",clickable:!0,renderBullet:function(e,t){let s=[];return s.length||document.querySelectorAll(".swiper-menu-nav span").forEach((e,t)=>{s[t]=e.innerHTML}),'<span class="'+t+'">'+s[e]+"</span>"}}},slider:{slidesPerView:3,spaceBetween:30,speed:800,navigation:{prevEl:".tst-prev",nextEl:".tst-next"},pagination:{el:".tst-blog-pagination",clickable:!0},breakpoints:{992:{slidesPerView:3},768:{slidesPerView:2},0:{slidesPerView:1}}}}},65840:function(e,t,s){s.r(t);var a=s(57437),l=s(49540),i=s(60107),n=s(2265),r=s(68975);s(58032);var o=s(4633);t.default=e=>{let{items:t,button:s}=e,[c,d]=(0,n.useState)(!1),[p,f]=(0,n.useState)([]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.tq,{...l.M.footerGallerySlider,className:"swiper-container tst-footer-gallery tst-cursor-zoom",children:t.map((e,t)=>(0,a.jsx)(i.o5,{children:(0,a.jsxs)("div",{className:"tst-footer-gal-item",children:[(0,a.jsx)("img",{src:e.image,alt:e.alt}),(0,a.jsx)("a",{"data-fancybox":"gal",href:e.image,className:"tst-overlay",onClick:t=>{t.preventDefault(),d(!0),f([{src:e.image,alt:e.alt}])},children:(0,a.jsx)("i",{className:"fas fa-search-plus"})})]})},"footer-gallery-item-".concat(t)))}),(0,a.jsxs)("div",{className:"tst-gallery-nav",children:[(0,a.jsx)(o.rU,{href:s.link,className:"tst-label tst-color tst-anima-link",children:s.label}),(0,a.jsxs)("div",{className:"tst-fg-nav",children:[(0,a.jsx)("div",{className:"tst-slider-btn tst-fg-prev",children:(0,a.jsx)("i",{className:"fas fa-arrow-left"})}),(0,a.jsx)("div",{className:"tst-slider-btn tst-fg-next",children:(0,a.jsx)("i",{className:"fas fa-arrow-right"})})]})]}),(0,a.jsx)(r.ZP,{open:c,close:()=>d(!1),slides:p,styles:{container:{backgroundColor:"rgba(26, 47, 51, .85)"}},render:{buttonPrev:p.length<=1?()=>null:void 0,buttonNext:p.length<=1?()=>null:void 0}})]})}}}]);