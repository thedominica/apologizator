(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(2),r=n.n(a),c=n(12),i=n.n(c),s=(n(18),n(19),n(20),["Roboto","Open_Sans","Raleway","Rakkas","Abril_Fatface","Berkshire_Swash","Arvo","Spectral","Germania_one"]);function l(){return"#"+Math.random().toString(16).slice(2,8)}function h(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)}document.body.onkeyup=function(e){if(32===e.keyCode){var t=s[Math.floor(Math.random()*s.length)],o=function(e,t){0===e.indexOf("#")&&(e=e.slice(1));3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);if(6!==e.length)throw new Error("Invalid HEX color.");var n=parseInt(e.slice(0,2),16),o=parseInt(e.slice(2,4),16),a=parseInt(e.slice(4,6),16);if(t)return.299*n+.587*o+.114*a>186?"#000000":"#FFFFFF";return n=(255-n).toString(16),o=(255-o).toString(16),a=(255-a).toString(16),"#"+h(n)+h(o)+h(a)}(l());n(23).get("https://apologizator.herokuapp.com/generate",{crossDomain:!0}).then((function(e){console.log(e),document.getElementById("apology").innerHTML=e.data})).then((function(e){!function(){var e=l();document.body.style.background=e}(),document.getElementById("apology").style.color=o,document.getElementById("apology").className=t}))}};var d=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Roboto|Rakkas|Abril+Fatface|Berkshire+Swash|Arvo|Spectral|Germania+One",rel:"stylesheet"}),Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("div",{class:"text",children:Object(o.jsx)("h1",{id:"apology",children:"Press spacebar to apologize"})})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),o(e),a(e),r(e),c(e)}))};n(42),n(43);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),u()}},[[44,1,2]]]);
//# sourceMappingURL=main.bc4d4443.chunk.js.map