(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>c});var o=e(81),a=e.n(o),i=e(645),r=e.n(i)()(a());r.push([n.id,"body {\n    background-color: #ff9922;\n    margin: 0;\n}\n\np,\nh1 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    font-family: 'Indie Flower', cursive;\n}\n\n.subtitle {\n    font-family: 'PT Serif', serif;\n    margin: 0;\n}\n\n.small-text-home {\n    font-family: 'Roboto', sans-serif;\n}\n\n#content {\n    transition: all 0.5s;\n    margin: 25px 175px;\n    padding: 50px 25px;\n    background-color: white;\n\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);\n}\n\nbutton {\n    border: 2px solid #ff9922;\n    padding: 16px 32px;\n    margin: 4px 2px;\n    border-radius: 5px;\n\n    font-family: 'Roboto', sans-serif;\n\n    text-decoration: none;\n    font-size: 16px;\n    transition-duration: 0.4s;\n    cursor: pointer;\n    background-color: white;\n    color: black;\n}\n\nbutton:hover {\n    background-color: #ff9922;\n    color: white;\n}\n\n.current-button {\n    border-color: #ff9922;\n    background-color: rgba(0, 0, 0, 0.25);\n    color: white;\n}\n\n/* Nav Bar */\n#tab {\n    max-width: 100%;\n    position: fixed;\n    top: 0;\n    width: 100vw;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n\n    background-color: #EE8000;\n\n    padding: 5px 0;\n\n    z-index: 99;\n}\n\n\n/* Home Content */\n#home-content,\n#contact-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n\n/* Menu Stuff */\n#menu-content {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 450px));\n    grid-auto-rows: 500px;\n    justify-items: center;\n    align-items: center;\n    justify-content: space-around;\n    gap: 25px;\n    padding-bottom: 25px;\n}\n\n.food-image {\n    height: 400px;\n    width: 100%;\n    object-fit: cover;\n\n    border-radius: 5.5% 5.5% 0 0;\n}\n\n.food-item {\n    height: 450px;\n    width: 450px;\n    background-color: white;\n    border: 1px black solid;\n    position: relative;\n\n    transition: all 0.5s;\n\n    font-size: 1.5rem;\n\n    border-radius: 5%;\n}\n\n.food-item:hover {\n    transform: scale(1.1) translate(0, -10px);\n}\n\n.food-name {\n    position: absolute;\n    bottom: 1px;\n    width: 100%;\n    font-family: 'Roboto', sans-serif;\n    height: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.overlay {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0;\n    transition: all .5s;\n    background-color: rgba(0, 0, 0, 0.75);\n    border-radius: 5%;\n}\n\n.food-item:hover .overlay {\n    opacity: 1;\n}\n\n.food-description {\n    font-family: 'Roboto', sans-serif;\n    color: white;\n    font-size: 20px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n\n\n#content>* {\n    transition: all 0.5s;\n}\n\n/* Contact Styling */\n#contact-content {\n    gap: 25px;\n}\n\n.contact-item {\n    width: 80%;\n    border: black 5px solid;\n    padding: 0 10px;\n\n    position: relative;\n\n    background-color: #2288FF;\n    color: white;\n\n    transition: all 0.5s;\n}\n\n.contact-item:hover {\n    width: 90%;\n}\n\n.contact-title {\n    margin-top: 0.5em;\n    font-size: 2rem;\n    text-align: left;\n\n    font-family: 'Oswald', sans-serif;\n}\n\n.contact-text {\n    font-size: 1.1rem;\n    font-family: 'PT Serif', serif;\n}\n\n.contact-number {\n    margin-bottom: 0.5em;\n    font-size: 1.5rem;\n    text-align: right;\n\n    font-family: 'PT Serif', serif;\n}\n\n.contact-image {\n    border-radius: 50%;\n    height: 100px;\n    width: 100px;\n\n    position: absolute;\n    top: -25px;\n    right: -15px;\n\n    object-fit: cover;\n}\n\n\n/* Media */\n@media (max-width: 1250px) {\n    #content {\n        margin: 25px;\n    }\n}\n\n@media (max-width: 1050px) {\n    .goku-eating {\n        width: 700px;\n    }\n}\n\n@media (max-width: 780px) {\n    .goku-eating {\n        width: 550px;\n    }\n\n    .food-item {\n        height: 400px;\n        width: 400px;\n        color: white;\n        -webkit-text-stroke: 0.5px black;\n    }\n\n    .food-image {\n        border-radius: 5.5%;\n    }\n}\n\n@media (max-width: 620px) {\n    .goku-eating {\n        width: 350px;\n    }\n\n    .food-item {\n        height: 300px;\n        width: 300px;\n        color: white;\n        -webkit-text-stroke: 0.5px black;\n    }\n\n    #menu-content {\n        grid-auto-rows: 400px;\n    }\n\n    .food-image {\n        height: 300px;\n    }\n}\n\n@media (max-width: 420px) {\n    .goku-eating {\n        width: 275px;\n    }\n}",""]);const c=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&r[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},r=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=e(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=a(p,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}r.push(u)}return r}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var i=o(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var c=e(i[r]);t[c].references--}for(var s=o(n,a),d=0;d<i.length;d++){var l=e(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,a&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{const n=document.querySelector("#content"),t=()=>{const t=document.createElement("h1");t.textContent="Kooky Cook's Cooks";const e=document.createElement("h2");e.classList.add("subtitle"),e.textContent="For all your Saiyan needs.";const o=document.createElement("p");o.classList.add("small-text-home"),o.textContent="This is a wonderful restaurant full of different kinds of food. Everything a Saiyan needs.";const a=document.createElement("img");a.classList.add("goku-eating"),a.src="https://gifdb.com/images/high/goku-and-gohan-eating-noodles-44xss069dt71aoct.gif";let i=document.createElement("div");i.id="home-content",i.append(t,e,o,a),i.style.opacity=0,n.append(i),setTimeout((()=>{i.style.opacity=1}),250)},o=document.querySelector("#content"),a=[{name:"Pudding",link:"https://static.wikia.nocookie.net/dragonball/images/a/ae/Puddings.png/revision/latest?cb=20201120020120",description:"Almost caused the universe to be destroyed from how good it is."},{name:"Paradise herb",link:"https://static.wikia.nocookie.net/dragonball/images/d/d8/Paradise_herb.jpg/revision/latest?cb=20180826194338",description:"Increase your life span by 1,000 years, but you'd have to live on an island alone with a talking turtle."},{name:"Ramen",link:"https://static.wikia.nocookie.net/dragonball/images/7/77/RamenDBS.png/revision/latest?cb=20201120020507",description:"Good ol' ramen. Most common food, but tasets especially good from Kooky Cook."},{name:"Fruit of the Tree of Might",link:"https://static.wikia.nocookie.net/dragonball/images/7/7a/Dbz_movie3_1193.jpg/revision/latest?cb=20180522175046",description:"Fills you with energy that is extracted from an entire planet."},{name:"Eggs",link:"https://static.wikia.nocookie.net/dragonball/images/c/ce/PteroEggs.png/revision/latest?cb=20111227002822",description:"Chicken eggs, Dragon eggs, Demon King eggs, Cell eggs, Magic eggs, you name it."},{name:"Fancy Chocolates",link:"https://static.wikia.nocookie.net/dragonball/images/f/f4/Dbz237_-_by_%28dbzf.ten.lt%29_20120329-16570146.jpg/revision/latest?cb=20120331090659",description:"Totally not poisonous."}],i=()=>{const n=document.createElement("h1");n.textContent="Kooky Cook's Specials",o.append(n);let t=document.createElement("div");t.id="menu-content";for(let n of a){let e=document.createElement("div");e.classList.add("food-item");let o=n.name,a=n.link,i=document.createElement("p");i.textContent=o,i.classList.add("food-name");let r=document.createElement("img");r.classList.add("food-image"),r.src=a;let c=document.createElement("div");c.classList.add("overlay");let s=document.createElement("div");s.classList.add("food-description"),s.textContent=n.description,c.append(s),e.append(r,i,c),t.append(e)}n.style.opacity=0,t.style.opacity=0,o.append(t),setTimeout((()=>{n.style.opacity=1,t.style.opacity=1}),250)},r=document.querySelector("#content"),c=()=>{const n=document.createElement("h1");n.textContent="Contact Kooky",r.append(n);const t=[{name:"Instant Transmission",FlavourText:"We'll be right there in an instant.",Number:"142-123",Image:"https://media.tenor.com/S7irk8ycZwkAAAAM/teleportation-goku.gif"},{name:"Flying Nimbus",FlavourText:"Someone pure of heart will come flying down from the sky.",Number:"003-003",Image:"https://media.tenor.com/V0kbuapUuewAAAAM/goku-kid.gif"},{name:"Time Machine",FlavourText:"We're already on the job before you contact us, and it's probably already done.",Number:"335-122",Image:"https://static.wikia.nocookie.net/powerlisting/images/8/8f/Trunks_Time_Machine_Dragon_Ball_Z.gif"}];let e=document.createElement("div");e.id="contact-content";for(let n of t){let t=document.createElement("div");t.classList.add("contact-item");let o=n.name,a=n.FlavourText,i=n.Number,r=document.createElement("p");r.classList.add("contact-title"),r.textContent=o;let c=document.createElement("p");c.classList.add("contact-text"),c.textContent=a;let s=document.createElement("p");s.classList.add("contact-number"),s.textContent=i;let d=document.createElement("img");d.src=n.Image,d.classList.add("contact-image"),t.append(r,c,s,d),e.append(t)}n.style.opacity=0,e.style.opacity=0,r.append(e),setTimeout((()=>{n.style.opacity=1,e.style.opacity=1}),250)};var s=e(379),d=e.n(s),l=e(795),u=e.n(l),m=e(569),p=e.n(m),f=e(565),g=e.n(f),h=e(216),b=e.n(h),x=e(589),y=e.n(x),v=e(426),k={};k.styleTagTransform=y(),k.setAttributes=g(),k.insert=p().bind(null,"head"),k.domAPI=u(),k.insertStyleElement=b(),d()(v.Z,k),v.Z&&v.Z.locals&&v.Z.locals,function(){const n=document.createElement("div");n.id="tab";const t=document.createElement("button");t.id="home-button",t.classList.add("current-button"),t.textContent="Home";const e=document.createElement("button");e.id="menu-button",e.textContent="Menu";const o=document.createElement("button");o.id="contact-button",o.textContent="Contact",n.append(t,e,o),document.body.prepend(n)}(),t();const w=document.querySelector("#content");console.log("Hey! It's me! Goku!");const E=document.querySelector("#home-button"),C=document.querySelector("#menu-button"),T=document.querySelector("#contact-button");function S(n,t){for(let n=0;n<w.children.length;n++)w.children[n].style.opacity=0;setTimeout((()=>{var e;w.innerHTML="",n(),e=t,E.classList.remove("current-button"),C.classList.remove("current-button"),T.classList.remove("current-button"),e.classList.add("current-button")}),250)}document.body.addEventListener("click",(n=>{"home-button"==n.target.id?S(t,E):"menu-button"==n.target.id?S(i,C):"contact-button"==n.target.id&&S(c,T)}))})()})();