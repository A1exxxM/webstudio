!function(){"use strict";window.addEventListener("DOMContentLoaded",(()=>{(function(){const e=document.querySelector(".header__wrapper");function t(e,t){e.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({behavior:"smooth"})}))}e.style.display="none",setTimeout((function(){e.style.display="",e.classList.add("animate__animated","animate__fadeInDown")}),1e3);const o=document.querySelector("#about"),s=document.querySelector(".about"),n=document.querySelector("#servicing"),a=document.querySelector(".services"),c=document.querySelector("#portfolio"),r=document.querySelector(".works"),i=document.querySelector("#blog"),d=document.querySelector(".blog"),l=document.querySelector("#contacts"),m=document.querySelector(".contacts"),_=document.querySelector("#team"),u=document.querySelector(".team");t(o,s),t(n,a),t(c,r),t(i,d),t(l,m),t(_,u)})(),function(){const e=document.querySelector(".promo__title"),t=document.querySelector(".promo__subtitle");e.style.display="none",t.style.display="none",setTimeout((function(){e.style.display="",e.classList.add("animate__animated","animate__fadeInDown"),t.style.display="",t.classList.add("animate__animated","animate__fadeInDown")}),1700);const o=document.querySelector(".promo__wrapper"),s=document.querySelector(".promo__icon");function n(e,t){e.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({behavior:"smooth"})}))}o.style.display="none",s.style.display="none",setTimeout((function(){o.style.display="",o.classList.add("animate__animated","animate__fadeInDown"),s.style.display="",s.classList.add("animate__animated","animate__fadeInDown")}),2500);const a=document.querySelector(".promo__services"),c=document.querySelector(".promo__hire"),r=document.querySelector(".services"),i=document.querySelector(".price"),d=document.querySelector(".about");n(a,r),n(c,i),n(s,d)}(),function(){const e=document.querySelector(".about__wrapper");window.addEventListener("scroll",(()=>{window.scrollY>=700&&e.classList.add("about__wrapper-active")}))}(),function(){const e=document.querySelectorAll(".services__item-btn"),t=document.querySelectorAll(".services__phone");e.forEach((e=>{e.addEventListener("mouseover",(e=>{e.target.parentNode.classList.add("services__item-active"),e.target.classList.add("services__item-btn_active"),t.forEach((t=>{e.target.parentNode.contains(t)&&(t.src="icons/smartphone.webp")}))})),e.addEventListener("mouseout",(e=>{e.target.parentNode.classList.remove("services__item-active"),e.target.classList.remove("services__item-btn_active"),t.forEach((t=>{e.target.parentNode.contains(t)&&(t.src="icons/smartphone_main.webp")}))}))}))}(),function(){const e=document.querySelectorAll(".works__btn"),t=document.querySelectorAll(".works__item");function o(){e.forEach((e=>{e.classList.remove("works__btn-active")}))}function s(t=0){e[t].classList.add("works__btn-active")}o(),s(),e.forEach(((e,n)=>{e.addEventListener("click",(()=>{var a;o(),s(n),t.forEach((e=>{e.style.display=""})),a=e,t.forEach((e=>{a.dataset.type!==e.dataset.type&&(e.style.display="none"),"all"==a.dataset.type&&(e.style.display="")}))}))}));const n=["Hand Watch","One Day Pass","Modal T-shirt","Container","Discovery","The Kitchens"],a=["Web Design","UI/UX Design","Mockups"];t.forEach(((e,t)=>{const o=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div");e.addEventListener("mouseover",(r=>{o.classList.add("works__block"),s.classList.add("works__block-title"),s.textContent=n[t],c.classList.add("works__block-subtitle"),"ui"==e.dataset.type?c.textContent=a[1]:"web"==e.dataset.type?c.textContent=a[0]:"mock"==e.dataset.type?c.textContent=a[2]:c.textContent="Error",o.append(s),o.append(c),"IMG"==r.target.nodeName&&r.target.parentNode.appendChild(o)})),e.addEventListener("mouseleave",(e=>{o.classList.remove("works__block"),e.target.classList.contains("works__item")&&e.target.removeChild(o)}))}));const c=document.querySelector(".works__full");c.addEventListener("click",(()=>{t.forEach((e=>{e.classList.contains("works__item-hide")?(e.classList.remove("works__item-hide"),e.classList.add("works__item-show"),c.textContent="Hide Part"):e.classList.contains("works__item-show")&&(e.classList.remove("works__item-show"),e.classList.add("works__item-hide"),c.textContent="View All")}))}))}(),document.querySelectorAll(".price__item-order").forEach((e=>{e.addEventListener("mouseover",(t=>{e==t.target&&e.classList.add("price__item-order_active")})),e.addEventListener("mouseout",(t=>{e==t.target&&e.classList.remove("price__item-order_active")}))})),function(){const e=document.querySelectorAll(".team__slide"),t=document.querySelector(".team__wrapper"),o=document.querySelector(".team__inner"),s=window.getComputedStyle(t).width,n=document.querySelectorAll(".team__dots-item");let a=0,c=e.length;function r(e=0){n.forEach((e=>{e.classList.remove("team__dots-item_active")})),n[e].classList.add("team__dots-item_active")}o.style.width=100*c+"%",t.style.overflow="hidden",e.forEach((e=>{e.style.width=s})),r(),n.forEach(((e,t)=>{e.addEventListener("click",(e=>{const n=e.target.getAttribute("data-slide");a=+s.replace(/\D/g,"")*(n-1),o.style.transform=`translateX(-${a}px)`,r(t)}))}))}(),function(){const e=document.querySelectorAll(".blog__item");e.forEach((e=>{e.style.transition="1.3s all",e.style.opacity="0"})),window.addEventListener("scroll",(()=>{window.scrollY>=6700&&e.forEach((e=>{e.style.opacity="1"}))}));const t=document.querySelector(".blog__btn");t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("blog__item-hide")?(e.classList.remove("blog__item-hide"),e.classList.add("blog__item-show"),t.textContent="Hide Part",window.scrollTo(t)):e.classList.contains("blog__item-show")&&(e.classList.remove("blog__item-show"),e.classList.add("blog__item-hide"),t.textContent="More View",window.scrollTo(t))}))}))}(),function(){const e=document.querySelector(".contacts__wrapper");e.style.opacity="0",e.style.transition="0.8s all",window.addEventListener("scroll",(()=>{window.scrollY>=8400&&(e.style.opacity="1")}))}(),function(){document.querySelector(".contacts__submit");const e=document.querySelector(".modal"),t=document.querySelector(".modal__close"),o=document.querySelector(".contacts__form");function s(){e.classList.remove("modal_active","animate__animated","animate__fadeIn")}o.addEventListener("submit",(t=>{t.preventDefault(),e.classList.add("modal_active","animate__animated","animate__fadeIn")})),t.addEventListener("click",(()=>{s(),o.reset()})),e.addEventListener("click",(t=>{t.target===e&&(s(),o.reset())}))}()}))}();