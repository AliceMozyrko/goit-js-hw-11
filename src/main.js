// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import { markup } from "./js/render-functions.js";
import { fetchPhotos } from "./js/pixabay-api.js";

const galleryEl = document.querySelector(".gallery-list")
const searchFormEl = document.querySelector(".search-form")
const loaderEl = document.querySelector(".loader")

loaderEl.classList.add("is-hidden")

function onSearchFormSubmit(event) {
  event.preventDefault()
  const searchQuery = event.target.elements.query.value.trim()
  console.log(searchQuery);
  if (searchQuery === "") {
    galleryEl.innerHTML = ""
    event.target.reset()
    iziToast.error({
      message: "Input field can't be empty",
      timeout: 3000,
    })
    return;
  }

  galleryEl.innerHTML = "";
  loaderEl.classList.remove("is-hidden")

  fetchPhotos(searchQuery) 
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        timeout: 3000,
      })
      }
      galleryEl.innerHTML = markup(imagesData.hits); 
    })
    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset()
      loaderEl.classList.add("is-hidden")
    })
}

searchFormEl.addEventListener("submit", onSearchFormSubmit)
