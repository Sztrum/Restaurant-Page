(()=>{"use strict";function e(){const e=document.querySelector("#content");let t=document.createElement("div");t.innerHTML='<h3 class="fs-3 fw-semibold">Our restaurant is the best!</h3>',e.appendChild(t)}e(),document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".nav-item").forEach((e=>{let n=e.querySelector(".nav-link").textContent;t(e,n)}))}));const t=(t,n)=>{t.addEventListener("click",(()=>{switch(document.querySelector("#content").innerHTML="",n=n.toLowerCase()){case"home":default:e();break;case"menu":!function(){const e=document.querySelector("#content");let t=document.createElement("div");t.innerHTML='<h3 class="fs-3 fw-semibold">Our Menu</h3>',e.appendChild(t)}();break;case"about":!function(){const e=document.querySelector("#content");let t=document.createElement("div");t.innerHTML='<h3 class="fs-3 fw-semibold">About us</h3>',e.appendChild(t)}()}}))}})();