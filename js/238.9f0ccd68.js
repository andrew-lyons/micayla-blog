"use strict";(self["webpackChunkmicayla_blog"]=self["webpackChunkmicayla_blog"]||[]).push([[238],{1238:function(e,l,a){a.r(l),a.d(l,{default:function(){return Y}});var t=a(3396),s=a(9242),i=a(7139);const c=e=>((0,t.dD)("data-v-6a383946"),e=e(),(0,t.Cn)(),e),o={key:0,class:"loader"},n=c((()=>(0,t._)("div",{class:"clock-loader"},null,-1))),r=[n],g={key:1,class:"blog"},d={class:"blog-posts"},u=["onClick","innerHTML"],p=["onClick"],k=["onClick"],b=["onClick"],m=["src"],_=["onClick","innerHTML"],w={class:"blog-posts-article-links"},v=["onClick"],C={class:"blog-posts-article-links-tags"},f=["onClick"],D={class:"blog-sidebar"},h={class:"blog-sidebar-category"},y=c((()=>(0,t._)("h3",null,"Date",-1))),H=["onClick"],T={class:"blog-sidebar-category"},L=c((()=>(0,t._)("h3",null,"Categories",-1))),$=["onClick"];function j(e,l,a,c,n,j){return(0,t.wg)(),(0,t.j4)(s.uT,null,{default:(0,t.w5)((()=>[e.loading?((0,t.wg)(),(0,t.iD)("div",o,r)):((0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.posts,((l,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"blog-posts-article",key:a+l},[(0,t._)("a",{onClick:a=>e.redirect(l.slug),class:"blog-posts-article-title",innerHTML:l.title},null,8,u),(0,t._)("a",{onClick:a=>e.redirectDate(l.date),class:"blog-posts-article-meta"},(0,i.zw)(l.date),9,p),(0,t._)("a",{onClick:a=>e.redirect(l.slug,!0),class:"blog-posts-article-meta"},"Leave a comment",8,k),(0,t._)("a",{onClick:a=>e.redirect(l.slug)},[(0,t._)("img",{class:"blog-posts-article-featured",src:l.featured_image,alt:""},null,8,m)],8,b),(0,t._)("a",{onClick:a=>e.redirect(l.slug),class:"blog-posts-article-blurb",innerHTML:l.excerpt},null,8,_),(0,t._)("div",w,[(0,t._)("a",{onClick:a=>e.redirect(l.slug),class:"blog-posts-article-links-href"},"Read more",8,v),(0,t._)("div",C,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(l.tags,((l,s)=>((0,t.wg)(),(0,t.iD)("a",{onClick:a=>e.redirectTags(l.name),key:l+s+"f"+a},(0,i.zw)(l.name),9,f)))),128))])])])))),128))]),(0,t._)("div",D,[(0,t._)("div",h,[y,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.dates,((l,a)=>((0,t.wg)(),(0,t.iD)("a",{onClick:a=>e.redirectDate(l),key:l+a},(0,i.zw)(l),9,H)))),128))]),(0,t._)("div",T,[L,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.tags,((l,a)=>((0,t.wg)(),(0,t.iD)("a",{onClick:a=>e.redirectTags(l),key:l+a},(0,i.zw)(l),9,$)))),128))])])]))])),_:1})}a(7658);var Z=a(54),z=a(4870),K=(0,t.aZ)({name:"BlogView",components:{},setup(){const e=(0,t.f3)("wp"),l=(0,z.iH)(!0),a=(0,z.iH)([]);fetch(`${e}/posts`).then((e=>e.json())).then((e=>{a.value=e.posts.filter((e=>Object.keys(e.categories).includes("blog-post"))),l.value=!1}));const s=(0,z.Fl)((()=>a.value.map((e=>(e.date=new Date(e.date).toLocaleString("default",{month:"long",day:"numeric",year:"numeric"}),e.excerpt=e.excerpt.replaceAll("[","").replaceAll("]",""),e.featured_image=e.featured_image?e.featured_image:"../assets/marigold_bg.jpg",e))))),i=(0,z.Fl)((()=>{const e=new Set(a.value.map((e=>{const l=e.date.split(" ");return`${l[0]} ${l[2]}`})));return e})),c=(0,z.Fl)((()=>new Set(a.value.map((e=>{const l=Object.values(e.tags);if(l)return l.map((e=>e.name))})).flat()))),o=(e,l=!1)=>{Z.Z.push(`/blog/${e}${l?"#comments":""}`)},n=e=>{const l=new Date(e).toLocaleString("default",{month:"long",year:"numeric"});Z.Z.push(`/blog/date/${l}`)},r=e=>{Z.Z.push(`/blog/categories/${e}`)};return{posts:s,dates:i,tags:c,loading:l,redirect:o,redirectDate:n,redirectTags:r}}}),M=a(89);const S=(0,M.Z)(K,[["render",j],["__scopeId","data-v-6a383946"]]);var Y=S}}]);
//# sourceMappingURL=238.9f0ccd68.js.map