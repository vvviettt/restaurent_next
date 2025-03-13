"use strict";exports.id=1759,exports.ids=[1759],exports.modules={13628:(e,t,i)=>{i.d(t,{Y:()=>a});var s=i(19124),r=i(44029),c=i.n(r);i(6793);let a=()=>{if(void 0!==document.querySelector("#map")){c().accessToken=s.Xd.QI.JO;var e=new(c()).Map({container:"map",style:s.Xd.QI.oB,center:[s.Xd.QI.sw,s.Xd.QI.ol],zoom:s.Xd.QI.sP});new(c()).Marker().setLngLat([s.Xd.QI.sw,s.Xd.QI.ol]).addTo(e)}}},12168:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(95344),r=i(3729),c=i(83257),a=i(8428),l=i(43295),m=i(13628);let o=({pageTitle:e,pageSubTitle:t=!1,description:i,breadTitle:o,showMap:n=0})=>{let d;let p=(0,c.jD)(),[u,g]=(0,r.useState)(!1);return t||(t=o),d=void 0!=o?o:e?e.replace(/(<([^>]+)>)/gi,""):"","Search: %s"==e&&(e="Search: "+(0,a.useSearchParams)().get("key")),(0,r.useEffect)(()=>{(0,l.M)(),n&&(0,m.Y)()},[]),s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"tst-banner tst-small-banner",children:[n?(0,s.jsxs)("div",{className:"tst-cover-frame",children:[s.jsx("div",{className:"tst-map-frame tst-parallax",children:s.jsx("div",{id:"map",className:`tst-map ${u?"tst-active":""}`})}),s.jsx("div",{className:`tst-overlay tst-with-map ${u?"tst-active":""}`}),s.jsx("div",{className:`tst-lock ${u?"tst-active":""}`,onClick:()=>g(!u),children:s.jsx("i",{className:`fas ${u?"fa-unlock":"fa-lock"}`})})]}):(0,s.jsxs)("div",{className:"tst-cover-frame",children:[s.jsx("img",{src:"/img/banners/banner-sm-1.jpg",alt:"cover",className:"tst-cover tst-parallax"}),s.jsx("div",{className:"tst-overlay"})]}),s.jsx("div",{className:n?`tst-banner-content-frame tst-with-map ${u?"tst-active":""}`:"tst-banner-content-frame",children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"tst-main-title-frame",children:(0,s.jsxs)("div",{className:n?"tst-main-title":"tst-main-title text-center",children:[s.jsx("div",{className:`tst-suptitle ${n?"":"tst-suptitle-center"} tst-suptitle-mobile-center tst-text-shadow tst-white-2 tst-mb-15`,dangerouslySetInnerHTML:{__html:t}}),s.jsx("h1",{className:"tst-white-2 tst-text-shadow tst-mb-30",dangerouslySetInnerHTML:{__html:e}}),s.jsx("div",{className:"tst-text tst-text-shadow tst-text-lg tst-white-2 tst-mb-30",dangerouslySetInnerHTML:{__html:i}}),(0,s.jsxs)("ul",{className:"tst-breadcrumbs",children:[s.jsx("li",{children:s.jsx(c.rU,{href:"/",className:"tst-anima-link",children:"Home"})}),-1!=p.indexOf("/blog/")&&-1==p.indexOf("/blog/page/")&&s.jsx("li",{children:s.jsx(c.rU,{href:"/blog",children:"Blog"})}),-1!=p.indexOf("/products")||-1!=p.indexOf("/cart")||-1!=p.indexOf("/checkout")&&s.jsx("li",{children:s.jsx(c.rU,{href:"/shop",children:"Shop"})}),1==p.endsWith("/product")&&s.jsx("li",{children:s.jsx(c.rU,{href:"/products",children:"Products"})}),s.jsx("li",{className:"tst-active",children:s.jsx("a",{dangerouslySetInnerHTML:{__html:d}})})]})]})})})})]})})}},58879:(e,t,i)=>{i.d(t,{Z:()=>l});var s=i(95344),r=i(3729),c=i(10948),a=i(30660);i(85236);let l=({item:e,index:t,marginBottom:i,moreType:l})=>{let[m,o]=(0,r.useState)(c.M),[n,d]=(0,r.useState)(1);(0,r.useEffect)(()=>{let e=document.querySelector(".tst-cart-number");e&&(e.innerHTML=m)},[m]);let p=e=>{e.preventDefault();let t=document.querySelector(".tst-cart-number");o(m+n),t.classList.add("tst-added"),e.currentTarget.classList.add("tst-added"),setTimeout(()=>{t.classList.remove("tst-added")},600)},[u,g]=(0,r.useState)(!1),[h,x]=(0,r.useState)([]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"tst-menu-book-item",children:[(0,s.jsxs)("a",{href:e.image,"data-fancybox":"menu2",className:"tst-item-cover-frame tst-cursor-zoom",onClick:t=>{t.preventDefault(),g(!0),x([{src:e.image,alt:e.title}])},children:[s.jsx("img",{src:e.image,alt:e.title}),s.jsx("span",{className:"tst-overlay"})]}),(0,s.jsxs)("div",{className:"tst-menu-book-descr",children:[(0,s.jsxs)("div",{className:"tst-menu-book-name",children:[s.jsx("h5",{className:"tst-mb-15",children:e.title}),s.jsx("div",{className:"tst-text",children:e.short}),s.jsx("div",{className:"tst-spacer-sm"})]}),(0,s.jsxs)("div",{className:"tst-menu-book-bottom",children:[(0,s.jsxs)("div",{className:"tst-menu-book-price",children:[s.jsx("del",{children:s.jsx("span",{className:"tst-price tst-old-price",children:(0,s.jsxs)("bdi",{children:[s.jsx("span",{className:"tst-symbol",children:e.currency}),e.old_price]})})}),(0,s.jsxs)("div",{className:"tst-price",children:[s.jsx("span",{className:"tst-symbol",children:e.currency}),e.price]})]}),s.jsx("a",{href:"#.",className:"tst-btn tst-cart-btn",title:"add to cart",onClick:e=>p(e),children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128",children:s.jsx("path",{d:"M87.7,33.1l-0.8-10.8C86,10.4,76,1,64,1s-22.1,9.4-22.9,21.3l-0.8,10.8H28.8c-4.7,0-8.6,3.7-9,8.4l-5.4,75.9c0,0,0,0,0,0 c-0.2,2.5,0.7,5,2.4,6.8s4.1,2.9,6.6,2.9h81.3c2.5,0,4.9-1,6.6-2.9c1.7-1.8,2.6-4.3,2.4-6.8l-5.4-75.2c-0.4-5.1-4.6-9-9.7-9H87.7z M47.1,22.7C47.7,13.9,55.1,7,64,7s16.3,6.9,16.9,15.7l0.7,10.4H46.3L47.1,22.7z M102.3,42.6l5.4,75.2c0.1,0.8-0.2,1.6-0.8,2.3 c-0.6,0.6-1.4,1-2.2,1H23.4c-0.8,0-1.6-0.3-2.2-1s-0.9-1.4-0.8-2.3h0l5.4-75.9c0.1-1.6,1.4-2.8,3-2.8h11.1l-0.6,8 c-0.1,1.7,1.1,3.1,2.8,3.2c0.1,0,0.1,0,0.2,0c1.6,0,2.9-1.2,3-2.8l0.6-8.4h36.2l0.6,8.4c0.1,1.7,1.5,2.9,3.2,2.8 c1.7-0.1,2.9-1.5,2.8-3.2l-0.6-8h10.5C100.5,39.1,102.1,40.6,102.3,42.6z"})})})]})]})]}),s.jsx(a.ZP,{open:u,close:()=>g(!1),slides:h,styles:{container:{backgroundColor:"rgba(26, 47, 51, .85)"}},render:{buttonPrev:h.length<=1?()=>null:void 0,buttonNext:h.length<=1?()=>null:void 0}})]})}},97459:(e,t,i)=>{i.d(t,{ZP:()=>a});let s=(0,i(86843).createProxy)(String.raw`/Users/vanviet/Documents/freelance/langchaiweb/src/app/_components/PageBanner.jsx`),{__esModule:r,$$typeof:c}=s,a=s.default},73275:e=>{e.exports=JSON.parse('{"h":{"mi":[{"image":"/img/menu/3.jpg","title":"Сasserole","old_price":"36.00","price":"6.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/4.jpg","title":"Boiled crayfish","old_price":"36.00","price":"12.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/6.jpg","title":"Pizza margherita","old_price":"16.00","price":"7.00","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/5.jpg","title":"Saumon Gravlax","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/2.jpg","title":"Chevrefrit au miel","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."}],"dZ":[{"image":"/img/menu/6.jpg","title":"Pizza margherita","old_price":"16.00","price":"7.00","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/5.jpg","title":"Saumon Gravlax","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/2.jpg","title":"Chevrefrit au miel","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/3.jpg","title":"Сasserole","old_price":"36.00","price":"6.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/4.jpg","title":"Boiled crayfish","old_price":"36.00","price":"12.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."}],"vB":[{"image":"/img/menu/4.jpg","title":"Boiled crayfish","old_price":"36.00","price":"12.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/6.jpg","title":"Pizza margherita","old_price":"16.00","price":"7.00","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/3.jpg","title":"Сasserole","old_price":"36.00","price":"6.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/5.jpg","title":"Saumon Gravlax","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/2.jpg","title":"Chevrefrit au miel","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."}]},"e":[{"image":"/img/menu/3.jpg","title":"Сasserole","old_price":"36.00","price":"6.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/4.jpg","title":"Boiled crayfish","old_price":"36.00","price":"12.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/6.jpg","title":"Pizza margherita","old_price":"16.00","price":"7.00","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/5.jpg","title":"Saumon Gravlax","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."},{"image":"/img/menu/2.jpg","title":"Chevrefrit au miel","old_price":"10.00","price":"2.99","currency":"$","short":"Lorem, ipsum, dolor, amet, consectetur, adipisicing elit."}]}')}};