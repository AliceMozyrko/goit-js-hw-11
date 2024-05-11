import{S as d,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=o=>o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}" 
              alt="${i}" 
            />
          </a>
          <div class="card-body">
              <p class="text-body"><span class="bigger-text">Likes: </span>${e}</p>
              <p class="text-body"><span class="bigger-text">Views: </span>${t}</p>
              <p class="text-body"><span class="bigger-text">Comments: </span>${a}</p>
              <p class="text-body"><span class="bigger-text">Downloads: </span>${u}</p>
          </div>
      </li>
      `).join(""),f="43811002-0821001961ff17859e55caea7",p="https://pixabay.com/api/",g=o=>{const s=new URLSearchParams({q:o,key:f,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},n=document.querySelector(".gallery-list"),y=document.querySelector(".search-form"),c=document.querySelector(".loader");c.classList.add("is-hidden");function h(o){o.preventDefault();const s=o.target.elements.query.value.trim();if(console.log(s),s===""){n.innerHTML="",o.target.reset(),l.error({message:"Input field can't be empty",timeout:3e3});return}n.innerHTML="",c.classList.remove("is-hidden"),g(s).then(r=>{r.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3}),n.innerHTML=m(r.hits),b.refresh()}).catch(r=>console.log(r)).finally(()=>{o.target.reset(),c.classList.add("is-hidden")})}y.addEventListener("submit",h);const b=new d(".gallery-link");
//# sourceMappingURL=commonHelpers.js.map
