"use strict";(self["webpackChunkmicayla_blog"]=self["webpackChunkmicayla_blog"]||[]).push([[477],{3477:function(e,l,t){t.r(l),t.d(l,{default:function(){return Z}});var a=t(3396),s=t(9242),c=t(7139);const r=e=>((0,a.dD)("data-v-75c937bd"),e=e(),(0,a.Cn)(),e),i={key:0,class:"loader"},n=r((()=>(0,a._)("div",{class:"clock-loader"},null,-1))),o=[n],g={key:1,class:"blog"},u={class:"blog-posts"},d=["innerHTML"],p=["onClick","innerHTML"],k=["onClick"],m=["onClick"],b=["onClick"],_=["src"],f=["onClick","innerHTML"],h={class:"blog-posts-article-links"},v=["onClick"],w={class:"blog-posts-article-links-tags"},C=["onClick"];function D(e,l,t,r,n,D){return(0,a.wg)(),(0,a.j4)(s.uT,null,{default:(0,a.w5)((()=>[e.loading?((0,a.wg)(),(0,a.iD)("div",i,o)):((0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",u,[(0,a._)("h2",{innerHTML:e.searchParam},null,8,d),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.posts,((l,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"blog-posts-article",key:t+l},[(0,a._)("a",{onClick:t=>e.redirect(l.slug),class:"blog-posts-article-title",innerHTML:l.title},null,8,p),(0,a._)("a",{onClick:t=>e.redirectDate(l.date),class:"blog-posts-article-meta"},(0,c.zw)(l.date),9,k),(0,a._)("a",{onClick:t=>e.redirect(l.slug,!0),class:"blog-posts-article-meta"},"Leave a comment",8,m),(0,a._)("a",{onClick:t=>e.redirect(l.slug)},[(0,a._)("img",{class:"blog-posts-article-featured",src:l.featured_image,alt:""},null,8,_)],8,b),(0,a._)("a",{onClick:t=>e.redirect(l.slug),class:"blog-posts-article-blurb",innerHTML:l.excerpt},null,8,f),(0,a._)("div",h,[(0,a._)("a",{onClick:t=>e.redirect(l.slug),class:"blog-posts-article-links-href"},"Read more",8,v),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.tags,((l,s)=>((0,a.wg)(),(0,a.iD)("a",{onClick:t=>e.redirectTags(l.name),key:l+s+"f"+t},(0,c.zw)(l.name),9,C)))),128))])])])))),128))])]))])),_:1})}t(7658);var y=t(54),H=t(4870),L=(0,a.aZ)({name:"BlogFilterView",components:{},setup(){const e=(0,a.f3)("wp"),l=(0,H.iH)(!0),t=(0,H.iH)([]),s=y.Z.currentRoute.value.params.category,c=y.Z.currentRoute.value.path.includes("categories");fetch(`${e}/posts`).then((e=>e.json())).then((e=>{t.value=e.posts.filter((e=>Object.keys(e.categories).includes("blog-post"))),l.value=!1}));const r=(0,H.Fl)((()=>{const e=t.value.map((e=>(e.date=new Date(e.date).toLocaleString("default",{month:"long",day:"numeric",year:"numeric"}),e.excerpt=e.excerpt.replaceAll("[","").replaceAll("]",""),e.featured_image=e.featured_image?e.featured_image:"../assets/marigold_bg.jpg",e)));return c?e.filter((e=>Object.keys(e.tags).includes(s))):e.filter((e=>new Date(s).getMonth()===new Date(e.date).getMonth()))})),i=(e,l=!1)=>{y.Z.push(`/blog/${e}${l?"#comments":""}`)},n=e=>{const l=new Date(e).toLocaleString("default",{month:"long",year:"numeric"});y.Z.push(`/blog/date/${l}`)},o=e=>{y.Z.push(`/blog/categories/${e}`)};return{posts:r,loading:l,searchParam:s,redirect:i,redirectDate:n,redirectTags:o}}}),T=t(89);const M=(0,T.Z)(L,[["render",D],["__scopeId","data-v-75c937bd"]]);var Z=M}}]);
//# sourceMappingURL=477.bf710570.js.map