(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4522,9542,3863,2230],{75691:function(e,t,r){Promise.resolve().then(r.bind(r,5931)),Promise.resolve().then(r.bind(r,70345)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,59593)),Promise.resolve().then(r.bind(r,88984)),Promise.resolve().then(r.bind(r,96858)),Promise.resolve().then(r.bind(r,42622)),Promise.resolve().then(r.bind(r,47194)),Promise.resolve().then(r.bind(r,86414))},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=r(99775);function s(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},96858:function(e,t,r){"use strict";r.r(t);var n=r(57437),s=r(2265),i=r(47907);t.default=()=>{let e=(0,i.useRouter)(),t=(0,i.useSearchParams)(),r=t.get("key")||"",[o,u]=(0,s.useState)(r),l=(0,s.useCallback)((e,r)=>{let n=new URLSearchParams(t);return n.set(e,r),n.toString()},[t]);return(0,n.jsxs)("div",{className:"tst-group-input tst-group-with-btn",children:[(0,n.jsx)("input",{type:"text",value:o,onChange:e=>{u(e.target.value)},onKeyDown:t=>{("Enter"===t.key||13===t.keyCode)&&e.push("/search?"+l("key",o))},required:!0,id:"searchField",placeholder:"What you search?"}),(0,n.jsx)("button",{onClick:()=>{e.push("/search?"+l("key",o))},children:(0,n.jsx)("img",{src:"/img/ui/icons/search.svg",alt:"search"})})]})}}},function(e){e.O(0,[3415,7162,8973,4675,2971,8069,1744],function(){return e(e.s=75691)}),_N_E=e.O()}]);