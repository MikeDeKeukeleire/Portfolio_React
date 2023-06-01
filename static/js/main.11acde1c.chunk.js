(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{42:function(e,n,t){"use strict";t.r(n);var i,r,a=t(1),o=t(26),c=t.n(o),s=t(11),l=t(8),d=t(4),m=t(5),j=t(0),b=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function h(e){var n=e.heading,t=void 0===n?"Col Heading":n,i=e.links,r=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{className:"heading",children:t}),Object(j.jsx)("ul",{children:r.map((function(e,n){return Object(j.jsx)("li",{children:"Link"===e.type?Object(j.jsx)(s.b,{to:e.path,children:e.title}):Object(j.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.title})},n)}))})]})}var p,x=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function g(e){var n=e.children;return Object(j.jsx)(x,{className:"para",children:Object(j.jsx)("p",{children:n})})}var u=m.b.div(p||(p=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(j.jsxs)(u,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"footer__col1",children:[Object(j.jsx)("h1",{className:"footer__col1__title",children:"Mike De Keukeleire"}),Object(j.jsx)(g,{children:"Een jonge dynamische software developer uit Belgi\xeb. Die altijd met veel enthousiasme en perfectionisme werkt om een project tot een goed einde te brengen."})]}),Object(j.jsx)("div",{className:"footer__col2",children:Object(j.jsx)(h,{heading:"Site Content",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(j.jsx)("div",{className:"footer__col3",children:Object(j.jsx)(h,{heading:"Contact Info",links:[{title:"+32487150420",path:"tel:+32487150420"},{title:"hello@mikedk.be",path:"mailto:hello@mikedk.be"}]})}),Object(j.jsx)("div",{className:"footer__col4",children:Object(j.jsx)(h,{heading:"Social Links",links:[{title:"LinkedIn"}]})})]}),Object(j.jsx)("div",{className:"copyright",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(g,{children:["\xa9 2022 -"," ",Object(j.jsx)("a",{href:"https://flacomedia.be",target:"blank",children:"Flaco Media"})]})})})]})}var _,O=t(19),v=t(10),k=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function w(){var e=Object(a.useState)(!1),n=Object(O.a)(e,2),t=n[0],i=n[1];return Object(j.jsxs)(k,{children:[Object(j.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(v.f,{})}),Object(j.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(j.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(v.a,{})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function y(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var N,I,z=t.p+"static/media/about-sec-img.7bfe78d6.jpg",S=m.b.div(N||(N=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function B(e){var n=e.title,t=void 0===n?"Title":n,i=e.items,r=void 0===i?["HTML","CSS"]:i;return Object(j.jsxs)(S,{children:[Object(j.jsx)("h1",{className:"title",children:t}),Object(j.jsx)("div",{className:"items",children:r.map((function(e,n){return Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(g,{children:e})},n)}))})]})}var M,D=m.b.div(I||(I=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(e){return e.outline?"transperant":"var(--gray-1)"}),(function(e){return e.outline?"var(--gary-1)":"black"}));function L(e){var n=e.btnText,t=void 0===n?"test":n,i=e.btnLink,r=void 0===i?"test":i,a=e.outline,o=void 0!==a&&a;return Object(j.jsx)(D,{outline:o,className:"button-wrapper",children:Object(j.jsx)(s.b,{className:"button",to:r,children:t})})}var C,R=m.b.div(M||(M=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function P(){return Object(j.jsx)(R,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(j.jsx)(g,{children:"Projectje in gedachten?"}),Object(j.jsx)("h3",{className:"contactBanner__heading",children:"Laat mij jou helpen!"}),Object(j.jsx)(L,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var T,F=m.b.div(C||(C=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function E(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(F,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"top-section",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(j.jsx)("span",{children:"Mike De Keukeleire"})]}),Object(j.jsx)("h2",{className:"about__heading",children:"A Software Developer"}),Object(j.jsx)("div",{className:"about__info",children:Object(j.jsxs)(g,{children:["Ik ben een jonge dynamische software developer. Ik werk altijd met veel enthousiasme en perfectionisme om een project tot een goed einde te brengen. Management, communicatie, teamwork en leiderschap zijn enkele van mijn sterke punten.",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Ook leid ik mijn eigen webdesign bedrijf"," ",Object(j.jsx)("a",{href:"https://flaco.media",children:"Flaco Media"}),". Bent u op zoek naar een moderne, gebruiksvriendelijke website? Neem dan zeker eens een kijkje!",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Naast het ontwikkelen van applicaties en websites ben ik vaak bezig met sport. Ik beoefen judo en fitness. Daarnaast ben ik judo coach en geef ik sportkampen in mijn gemeente."]})})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:z,alt:"me"})})]}),Object(j.jsxs)("div",{className:"about__info__items",children:[Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Opleiding"}),Object(j.jsx)(B,{title:"Hogeschool",items:["Toegepaste Informatica. HoGent, Gent"]}),Object(j.jsx)(B,{title:"Voetbaltrainer",items:["UEFA C. Royal Belgian Football Association, Brussel"]}),Object(j.jsx)(B,{title:"Middelbaar",items:["Informatica Beheer. Regina Pacis, Tielt"]}),Object(j.jsx)(B,{title:"Middelbaar",items:["Moderne wetenschappen. De Bron, Tielt"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(j.jsx)(B,{title:"AppDev",items:["Java","C#","Kotlin"]}),Object(j.jsx)(B,{title:"FrontEnd",items:["Blazor","React","Spring Boot","JavaScript","HTML","CSS"]}),Object(j.jsx)(B,{title:"BackEnd",items:["NodeJS"]}),Object(j.jsx)(B,{title:"Others",items:["SQL","Python"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(j.jsx)(B,{title:"02/'22-",items:["Zelfstandig webdesigner, Flaco Media"]}),Object(j.jsx)(B,{title:"02/'22-",items:["Judo coach, JC Tielt"]}),Object(j.jsx)(B,{title:"10/'21-",items:["Event staff, MaisonRouge"]}),Object(j.jsx)(B,{title:"04/'21-",items:["Sportkamp monitor, Gemeente Dentergem"]}),Object(j.jsx)(B,{title:"08/'21 - 02/'22",items:["Voetbaltrainer (jeugd), VV Tielt"]}),Object(j.jsx)(B,{title:"08/'19 - 05/'21",items:["Voetbaltrainer (jeugd), KZ Dentergem"]}),Object(j.jsx)(B,{title:"01/'20",items:["Stagiair Internal IT, Pareteum"]})]})]})]}),Object(j.jsx)(P,{})]})})}var K,H=m.b.div(T||(T=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function V(e){var n=e.icon,t=void 0===n?Object(j.jsx)(v.h,{}):n,i=e.text,r=void 0===i?"I need text ":i,a=e.href,o=void 0===a?"":a,c=e.target,s=void 0===c?"":c;return Object(j.jsxs)(H,{children:[Object(j.jsx)("div",{className:"icon",children:t}),Object(j.jsx)("div",{className:"info",children:Object(j.jsx)(g,{children:Object(j.jsx)("a",{href:o,target:s,children:r})})})]})}var A,J=m.b.div(K||(K=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function G(e){var n=e.subheading,t=void 0===n?"Need Subheading":n,i=e.heading,r=void 0===i?"need heading":i;return Object(j.jsxs)(J,{className:"section-title",children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("h2",{children:r})]})}var W,Y=m.b.div(A||(A=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Z(){return Object(j.jsx)(Y,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{heading:"contact",subheading:"get in touch"}),Object(j.jsxs)("div",{className:"contactSection__wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(V,{icon:Object(j.jsx)(v.e,{}),text:"+32487150420",href:"tel:+32487150420"}),Object(j.jsx)(V,{icon:Object(j.jsx)(v.d,{}),text:"hello@mikedk.be",href:"mailto:hello@mikedk.be"})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)(V,{icon:Object(j.jsx)(v.j,{}),text:"www.flacomedia.be",href:"https://flacomedia.be",target:"blank"}),Object(j.jsx)(V,{text:"Dentergem, Belgi\xeb"})]})]})]})})}function Q(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Z,{})})}var U,q=m.b.div(W||(W=Object(d.a)(["\n  padding: 10rem 0;\n  .about__img {\n    max-width: 900px;\n    width: 100%;\n    height: 575px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0rem 0;\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function X(){return Object(j.jsx)(q,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"aboutSection__left",children:[Object(j.jsx)(G,{subheading:"",heading:"Over Mij"}),Object(j.jsx)(g,{children:"Ik ben een jonge dynamische software developer. Ik werk altijd met veel enthousiasme en perfectionisme om een project tot een goed einde te brengen. Management, communicatie, teamwork en leiderschap zijn enkele van mijn sterke punten."}),Object(j.jsxs)("div",{className:"aboutSection__buttons",children:[Object(j.jsx)(L,{btnText:"Projects",btnLink:"/projects"}),Object(j.jsx)(L,{btnText:"Lees meer",btnLink:"/about",outline:!0})]})]}),Object(j.jsx)("div",{className:"aboutSection__right",children:Object(j.jsx)("img",{className:"about__img",src:z,alt:"Img"})})]})})}var $,ee=m.b.div(U||(U=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function ne(e){var n=e.icon,t=void 0===n?Object(j.jsx)(v.c,{}):n,i=e.title,r=void 0===i?"Web Design":i,a=e.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":a;return Object(j.jsxs)(ee,{className:"servicesItem",children:[Object(j.jsx)("div",{className:"servicesItem__icon",children:t}),Object(j.jsx)("div",{className:"servicesItem__title",children:r}),Object(j.jsx)(g,{children:o})]})}var te=m.b.div($||($=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function ie(){return Object(j.jsx)(te,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{subheading:"Wat ik kan doen voor jou",heading:"Services"}),Object(j.jsxs)("div",{className:"services__allItems",children:[Object(j.jsx)(ne,{icon:Object(j.jsx)(v.c,{}),title:"web dev",desc:"Ik cre\xeber moderne en gebruiksvriendelijke websites. Mijn skills omvatten zowel de front-end als de back-end."}),Object(j.jsx)(ne,{icon:Object(j.jsx)(v.b,{}),title:"software dev",desc:"Ik ontwikkel ook desktop applicaties. Tijdens mijn opleiding heb ik kennis gemaakt met heel wat programmeertalen."}),Object(j.jsx)(ne,{icon:Object(j.jsx)(v.g,{}),title:"app dev",desc:"Verder develop ik ook mobiele apps. Deze zijn cross platform, dus zowel voor Android als iOS."})]})]})})}var re,ae=t(48),oe=t(46),ce=t(47),se=t(45),le=t.p+"static/media/projectImg.d3f1ae05.png",de=m.b.div(re||(re=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"])));function me(e){var n=e.img,t=void 0===n?le:n,i=e.title,r=void 0===i?"Project Name":i,a=e.desc,o=void 0===a?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":a;return Object(j.jsxs)(de,{children:[Object(j.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(j.jsx)("img",{src:t,alt:"project img"})}),Object(j.jsxs)("div",{className:"projectItem__info",children:[Object(j.jsx)(s.b,{to:"#",children:Object(j.jsx)("h3",{className:"projectItem__title",children:r})}),Object(j.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(41);var je,be=t(49),he=t.p+"static/media/utracker.f6ed02c0.jpg",pe=(t.p,[{id:Object(be.a)(),name:"Website Flaco Media",desc:"Website voor mijn zelfstandig webdesign bedrijf.",img:he}]);ce.a.use([se.a]);var xe=m.b.div(je||(je=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function ge(){return Object(j.jsx)(xe,{style:{display:"none"},children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{subheading:"enkele van mijn recente werken",heading:"Projects"}),Object(j.jsx)("div",{className:"projects__allItems",children:Object(j.jsx)(ae.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:pe.map((function(e,n){if(!(n>=5))return Object(j.jsx)(oe.a,{children:Object(j.jsx)(me,{title:e.name,img:e.img,desc:e.desc})},e.id)}))})})]})})}var ue,fe,_e=t.p+"static/media/hero.8bd15cdb.png",Oe=t.p+"static/media/social-media-arrow.ecc0133c.svg",ve=t.p+"static/media/scroll-down-arrow.8ad25c53.svg",ke=m.b.div(ue||(ue=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 880px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 250px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 250px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      display: none;\n    }\n    .hero__scrollDown {\n      display: none;\n    }\n  }\n"])));function we(){return Object(j.jsx)(ke,{children:Object(j.jsx)("div",{className:"hero",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{className:"hero__heading",children:[Object(j.jsx)("span",{children:"Hello, I am"}),Object(j.jsx)("span",{className:"hero__name",children:"Mike De Keukeleire"})]}),Object(j.jsx)("div",{className:"hero__img",children:Object(j.jsx)("img",{src:_e,alt:""})}),Object(j.jsxs)("div",{className:"hero__social",children:[Object(j.jsxs)("div",{className:"hero__social__indicator",children:[Object(j.jsx)("p",{children:"Follow"}),Object(j.jsx)("img",{src:Oe,alt:"icon"})]}),Object(j.jsx)("div",{className:"hero__social__text",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/mike-de-keukeleire-002b9019b/",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/MikeDeKeukeleire/",target:"_blank",rel:"noreferrer",children:"GH"})})]})})]}),Object(j.jsxs)("div",{className:"hero__scrollDown",children:[Object(j.jsx)("p",{children:"Scroll"}),Object(j.jsx)("img",{src:ve,alt:"ScrollDown Arrow"})]})]})})})}function ye(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(we,{}),Object(j.jsx)(X,{}),Object(j.jsx)(ie,{}),Object(j.jsx)(ge,{}),Object(j.jsx)(P,{})]})}var Ne,Ie=m.b.div(fe||(fe=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function ze(){var e=Object(a.useState)(""),n=Object(O.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(pe),o=Object(O.a)(r,2),c=o[0],s=o[1];Object(a.useEffect)((function(){""!==t&&s((function(){return pe.filter((function(e){return e.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Ie,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(G,{heading:"Projects",subheading:"some of my recent works"}),Object(j.jsx)("div",{className:"projects__searchBar",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:t,onChange:function(e){e.preventDefault(),i(e.target.value),!e.target.value.length>0&&s(pe)},placeholder:"Project Name"}),Object(j.jsx)(v.i,{className:"searchIcon"})]})}),Object(j.jsx)("div",{className:"projects__allItems",children:c.map((function(e){return Object(j.jsx)(me,{title:e.name,desc:e.desc,img:e.img},e.id)}))})]})})})}function Se(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(y,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(E,{})}),Object(j.jsx)(l.a,{path:"/contact",children:Object(j.jsx)(Q,{})}),Object(j.jsx)(l.a,{path:"/projects",children:Object(j.jsx)(ze,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(ye,{})})]}),Object(j.jsx)(f,{})]})})}var Be,Me=Object(m.a)(Ne||(Ne=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),De=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Le=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Ce=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Re=Object(m.a)(Be||(Be=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),De,Le,Ce);c.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Me,{}),Object(j.jsx)(Re,{}),Object(j.jsx)(Se,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.11acde1c.chunk.js.map