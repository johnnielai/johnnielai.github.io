(this["webpackJsonpjohnnielai.github.io"]=this["webpackJsonpjohnnielai.github.io"]||[]).push([[0],{30:function(e,t,i){var n={"./cov.webp":52,"./dodge-data.webp":53};function a(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=30},38:function(e,t,i){},39:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/cov.17c4a725.webp"},53:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/dodge-data.84884c9d.webp"},54:function(e,t,i){var n={"./cov-compressed.jpg":55,"./dodge-data-compressed.jpg":56};function a(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=54},55:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/cov-compressed.7d44f2a8.jpg"},56:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/dodge-data-compressed.977f56fc.jpg"},57:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(15),s=i.n(c),r=(i(38),i(39),i(4)),o=i(8),d=i(3),l=i(1),j=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row space-between",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(o.b,{to:"/",children:"HOME"})}),Object(l.jsx)("a",{className:"menu",href:"mailto:johnnie-l@live.ca",children:"CONTACT"})]})})})},u=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("ul",{className:"container",children:[Object(l.jsx)("li",{children:Object(l.jsx)("div",{onClick:function(){return window.open("https://johnnielaii.wordpress.com","_blank")},children:"BLOG"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{onClick:function(){return window.open("https://github.com/krytical","_blank")},children:"GITHUB"})}),Object(l.jsx)("li",{children:Object(l.jsx)("div",{onClick:function(){return window.open("https://www.linkedin.com/in/johnnielai","_blank")},children:"LINKEDIN"})})]})})},m=i(10),h=i(32),b=[{id:"1",category:"work",title:"Dodge Data & Analytics",location:"Vancouver, BC",site:"https://www.construction.com",position:"Software Engineer",tenure:"Nov 2016 - Mar 2019",url:"dodge-data",description:["Implemented numerous highly requested features from users and improvements for both the mobile and desktop web application. Primarily focused on front-end for new projects.","Reduced loading time for the landing page and fixed numerous major issues on the mobile web app. Improvements and new features led to a significant increase in user retention and acquisition.","Developed and made key design decisions for a new feature rich SPA dashboard management platform.","Collaborated with USA and India development teams to add front-end functionality for a web application. Translated requirements and wireframes into working features using Angular.","Implemented user activity logging using AWS Kinesis and Lambda to store activity data onto MySQL."]},{id:"2",category:"work",title:"City of Vancouver",location:"Vancouver, BC",site:"https://www.vancouver.ca",position:"Programmer Analyst",tenure:"Apr 2019 - Present",url:"cov",description:["Developed and deployed a new React progressive web app (PWA) for citizens to report broken parking meters.","Established standards at the city for React apps and assisted in creating an internal npm server for sharable React components and templates. Assisted the front-end team in utilizing React for new projects.","Developed a React web app with .NET Web API back-end that is secured for internal use only via City of Vancouver\u2019s on premise ADFS server.","Integrated Selenium automation testing for numerous existing applications. Set the standard for tests to be part of the CI/CD Octopus deploy pipeline for web applications. Introduced Jest for front-end testing.","Enforced Kanban principles as a scrum master which reduced issues backlog and increased team throughput."]}],p=i(33),f=i.n(p),O={duration:.6,ease:[.43,.13,.23,.96]},g=function(e){var t=Object(n.useState)(e.item),a=Object(m.a)(t,1)[0],c=Object(n.useState)(e.imageDetails),s=Object(m.a)(c,1)[0],o=Object(n.useState)(e.image),j=Object(m.a)(o,1)[0],u=Object(d.f)();return Object(l.jsx)("div",{className:"row center",id:"".concat(a.category,"-").concat(a.id),children:Object(l.jsxs)("div",{className:"image-container",id:"".concat(a.category,"-").concat(a.id,"-img"),children:[Object(l.jsx)("div",{className:"thumbnail",ref:j,style:{maxWidth:s.width,maxHeight:s.height},children:Object(l.jsx)("div",{className:"frame",children:Object(l.jsx)(h.Link,{duration:500,smooth:!0,to:"".concat(a.category,"-").concat(a.id),children:Object(l.jsx)("div",{onClick:function(){var e=document.getElementById("".concat(a.category,"-").concat(a.id,"-img")).clientHeight,t=document.getElementById("".concat(a.category,"-").concat(a.id,"-img")).clientWidth;u.push({pathname:"/".concat(a.category,"/").concat(a.url),state:{item:a,startHeight:e,startWidth:t}})},children:Object(l.jsx)(f.a,{src:i(30)("./".concat(a.url,".webp")).default,placeholder:i(54)("./".concat(a.url,"-compressed.jpg")).default,children:function(e){return Object(l.jsx)(r.c.img,{src:e,alt:a.title,whileHover:{scale:1.1},transition:O})}})})})})}),Object(l.jsx)(r.c.div,{exit:{opacity:0},transition:O,className:"information",children:Object(l.jsx)("div",{className:"title",children:a.title})})]})})},v=function(e){var t=e.imageDetails,i=e.image;return Object(l.jsxs)(r.c.div,{initial:{opacity:0},animate:{opacity:1},transtion:{duration:3},children:[Object(l.jsxs)("main",{children:[Object(l.jsx)("div",{className:"landing",children:Object(l.jsx)("div",{className:"landing-container",children:Object(l.jsx)("h1",{children:"Johnnie"})})}),Object(l.jsx)("div",{className:"container",children:b.slice(0).reverse().map((function(e){return Object(l.jsx)(g,{item:e,imageDetails:t,image:i},e.id)}))})]}),Object(l.jsx)(u,{})]})};function x(){var e=Object(d.g)().pathname;return Object(n.useEffect)((function(){"/"!==e&&window.scrollTo(0,0)}),[e]),null}var w=i(11),y={duration:1.4,ease:[.6,.01,-.05,.9]},N={initial:{y:0},animate:{y:0,transition:{delayChildren:.6,staggerChildren:.04,staggerDirection:-1}}},k={initial:{y:400,opacity:0},animate:{y:0,opacity:1,transition:Object(w.a)({duration:1},y)}},C=function(e){e.imageDetails;var t=Object(d.g)().state,a=t.item,c=t.startHeight,s=t.startWidth,o=Object(r.e)().scrollYProgress,j=Object(r.d)(o,[0,1],[1,0]),u=Object(n.useState)(!1),h=Object(m.a)(u,2),b=h[0],p=h[1];return Object(n.useEffect)((function(){!1===b?document.querySelector("body").classList.add("no-scroll"):document.querySelector("body").classList.remove("no-scroll")}),[b]),Object(l.jsxs)(r.c.div,{className:"single",initial:"initial",animate:"animate",exit:"exit",onAnimationComplete:function(){return p(!0)},children:[Object(l.jsxs)("div",{className:"container fluid",children:[Object(l.jsx)("div",{className:"row center top-row",children:Object(l.jsxs)("div",{className:"top",children:[Object(l.jsx)(r.c.div,{className:"model",style:{opacity:j},children:Object(l.jsx)(r.c.span,{className:"first",variants:N,children:Object(l.jsx)(r.c.span,{variants:k,children:a.title})})}),Object(l.jsxs)(r.c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:Object(w.a)({delay:1.2},y)},className:"details",children:[Object(l.jsx)(r.c.div,{style:{opacity:j},className:"location",children:Object(l.jsx)("span",{children:a.location})}),Object(l.jsx)(r.c.a,{style:{opacity:j},className:"site",href:a.site,children:a.site})]})]})}),Object(l.jsx)("div",{className:"row bottom-row",children:Object(l.jsx)("div",{className:"bottom",children:Object(l.jsx)(r.c.div,{className:"image-container-single",children:Object(l.jsx)(r.c.div,{initial:{y:"-50%",height:c,width:s},animate:{y:0,width:"100%",height:window.innerWidth>1440?800:600,transition:Object(w.a)({delay:.2},y)},className:"thumbnail-single",children:Object(l.jsx)(r.c.div,{className:"frame-single",whileHover:"hover",transition:y,children:Object(l.jsx)(r.c.img,{src:i(30)("./".concat(a.url,".webp")).default,alt:"".concat(a.title),style:{opacity:j},initial:{scale:1},animate:{transition:Object(w.a)({delay:.2},y),y:window.innerWidth>1440?-1200:0}})})})})})})]}),b&&a.description&&Object(l.jsx)("div",{className:"detailed-information",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsx)("h2",{className:"title",children:a.position}),Object(l.jsx)("h3",{children:a.tenure})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("ul",{children:a.description.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})})]})})})]})};function D(){var e={width:393,height:487.5};return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("div",{className:"invisible"}),Object(l.jsx)(j,{}),Object(l.jsx)(d.a,{render:function(t){var i=t.location;return Object(l.jsx)(r.b,{type:"crossfade",children:Object(l.jsxs)(r.a,{initial:!1,exitBeforeEnter:!0,children:[Object(l.jsx)(x,{}),Object(l.jsxs)(d.c,{location:i,children:[Object(l.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(v,{imageDetails:e})}}),Object(l.jsx)(d.a,{exact:!0,path:"/work/:id",render:function(){return Object(l.jsx)(C,{imageDetails:e})}})]},i.pathname)]})})}})]})}var E=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(D,{})})},S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,59)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root")),S()}},[[57,1,2]]]);
//# sourceMappingURL=main.bc47c19c.chunk.js.map