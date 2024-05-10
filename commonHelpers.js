import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=o=>o.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:a,downloads:u})=>`
        <li class="gallery-item">
          <img class="gallery-image" src="${r}" alt="${i}" />
            <div class="card-body">
              <p class="text-body"><span class="bigger-text">Likes: </span>${e}</p>
              <p class="text-body"><span class="bigger-text">Views: </span>${t}</p>
              <p class="text-body"><span class="bigger-text">Comments: </span>${a}</p>
              <p class="text-body"><span class="bigger-text">Downloads: </span>${u}</p>
          </div>
      </li>


      `).join(""),m="43811002-0821001961ff17859e55caea7",p="https://pixabay.com/api/",f=o=>{const r=new URLSearchParams({q:o,key:m,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},n=document.querySelector(".gallery-list"),g=document.querySelector(".search-form"),c=document.querySelector(".loader");c.classList.add("is-hidden");function y(o){o.preventDefault();const r=o.target.elements.query.value.trim();if(console.log(r),r===""){n.innerHTML="",o.target.reset(),l.error({message:"Input field can't be empty",timeout:3e3});return}n.innerHTML="",c.classList.remove("is-hidden"),f(r).then(s=>{s.total===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3}),n.innerHTML=d(s.hits)}).catch(s=>console.log(s)).finally(()=>{o.target.reset(),c.classList.add("is-hidden")})}g.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
