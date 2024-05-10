const API_KEY = "43811002-0821001961ff17859e55caea7"
const BASE_URL = "https://pixabay.com/api/"

export const fetchPhotos = (query) => {
  const searchParams = new URLSearchParams({
    q: query,
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal", 
    safesearch: true
  })
  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}