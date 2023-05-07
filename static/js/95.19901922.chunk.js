"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[95],{95:function(n,e,t){t.r(e),t.d(e,{default:function(){return $}});var r,i,a,s,o,d,c,p,x,h,u=t(861),l=t(439),m=t(757),v=t.n(m),f=t(791),w=t(689),g=t(243),b=t(393),j=function(){var n=(0,u.Z)(v().mark((function n(e){var t,r,i,a,s,o,d,c,p;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.Z.get("".concat(b.J,"movie/").concat(e,"?api_key=").concat(b.$));case 2:return t=n.sent,r=t.data,i=r.title,a=r.overview,s=r.poster_path,o=r.genres,d=r.vote_average,c=o.map((function(n){return n.name})).join(", "),p={title:i,overview:a,poster_path:s,movieGenres:c,vote_average:(10*d).toFixed()},n.abrupt("return",p);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=t(168),_=t(87),k=t(444),P=(0,k.ZP)(_.rU)(r||(r=(0,Z.Z)(["\n  display: block;\n  width: 60px;\n  margin: 0 auto;\n  padding: 4px 8px;\n  text-align: center;\n  border-radius: 5px;\n  background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    box-shadow: 0 8px 48px hsla(203, 71%, 25%, .5);\n  }\n"]))),y=k.ZP.div(i||(i=(0,Z.Z)(["\n  margin: 24px auto;\n\n  @media screen and (max-width: 767px) {\n    width: 280px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 704px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 846px;\n  }\n"]))),z=k.ZP.ul(a||(a=(0,Z.Z)(["\n  padding: 24px;\n  display: flex;\n  gap: 20px;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n  }\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),F=k.ZP.li(s||(s=(0,Z.Z)(["\n  @media screen and (min-width: 768px) {\n    width: calc(100% / 2);\n  }\n"]))),G=k.ZP.img(o||(o=(0,Z.Z)(["\n  width: 248px;\n  height: 315px;\n  border-radius: 5px;\n\n  @media screen and (min-width: 768px) {\n    width: 294px;\n    height: 400px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 375px;\n    height: 478px;\n  }\n"]))),U=k.ZP.h1(d||(d=(0,Z.Z)(["\n  margin-bottom: 20px;\n  font-weight: 700;\n  filter: drop-shadow(0 4px 4px #51AAFF);\n  \n  @media screen and (max-width: 767px) {\n    font-size: 1rem;\n  }\n"]))),A=k.ZP.h2(c||(c=(0,Z.Z)(["\n  margin-bottom: 12px;\n  font-size: 1rem;\n  font-weight: 600;\n"]))),C=k.ZP.p(p||(p=(0,Z.Z)(["\n  margin-bottom: 12px;\n"]))),S=k.ZP.ul(x||(x=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),J=(0,k.ZP)(_.rU)(h||(h=(0,Z.Z)(["\n  padding: 8px 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  border-radius: 5px;\n  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);\n  }\n"]))),O=t(192),R=t(184),$=function(){var n,e,t=(0,w.UO)().movieId,r=(0,f.useState)({}),i=(0,l.Z)(r,2),a=i[0],s=i[1],o=(0,w.TH)(),d=(0,f.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(v().mark((function n(e){var t;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j(e);case 3:t=n.sent,s(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]);var c=a.title,p=a.overview,x=a.poster_path,h=a.movieGenres,m=a.vote_average;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P,{to:d.current,children:"Go Back"}),(0,R.jsx)(y,{children:(0,R.jsxs)(z,{children:[(0,R.jsx)(F,{children:x?(0,R.jsx)(G,{src:"https://image.tmdb.org/t/p/w300".concat(x),alt:c}):(0,R.jsx)(G,{src:O,alt:c})}),(0,R.jsxs)(F,{children:[(0,R.jsx)(U,{children:c}),(0,R.jsxs)(C,{children:["User Score: ",m,"%"]}),(0,R.jsx)(A,{children:"Overview"}),(0,R.jsx)(C,{children:p}),(0,R.jsx)(A,{children:"Genres"}),(0,R.jsx)(C,{children:h}),(0,R.jsx)(A,{children:"Additional information"}),(0,R.jsxs)(S,{children:[(0,R.jsx)("li",{children:(0,R.jsx)(J,{to:"cast",children:"Cast"})}),(0,R.jsx)("li",{children:(0,R.jsx)(J,{to:"reviews",children:"Reviews"})})]})]})]})}),(0,R.jsx)(f.Suspense,{children:(0,R.jsx)(w.j3,{})})]})}},393:function(n,e,t){t.d(e,{$:function(){return r},J:function(){return i}});var r="959330b1b48c95e1fde96a992bbede29",i="https://api.themoviedb.org/3/"},192:function(n,e,t){n.exports=t.p+"static/media/no-poster.c04952434c9e0c162278.png"}}]);
//# sourceMappingURL=95.19901922.chunk.js.map