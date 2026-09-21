import './style.css'

const API_KEY = import.meta.env.VITE_NASA_API_KEY || 'DEMO_KEY'
const app = document.querySelector('#app')
const datePicker = document.querySelector('#datepicker')

// Set max date to today so we can't pick future dates
const today = new Date().toISOString().split('T')[0]
datePicker.max = today
datePicker.value = today

function fetchPicture(date = '') {
  app.innerHTML = '<p class="loading">Loading space picture...</p>'

  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  if (date) {
    url += `&date=${date}`
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.error || data.code) {
        app.innerHTML = `<p class="error">${data.msg || data.error?.message || 'Error loading picture'}</p>`
        return
      }

      let mediaElement = ''
      if (data.media_type === 'video') {
        mediaElement = `<iframe class="apod-media" src="${data.url}" allowfullscreen></iframe>`
      } else {
        mediaElement = `<img class="apod-media" src="${data.url}" alt="${data.title}" />`
      }

      app.innerHTML = `
        <h1 class="apod-title">${data.title}</h1>
        <p class="apod-date">${data.date}</p>
        <div class="media-container">
          ${mediaElement}
        </div>
        <p class="apod-explanation">${data.explanation}</p>
      `
    })
    .catch((error) => {
      console.error(error)
      app.innerHTML = '<p class="error">Failed to fetch data from NASA API.</p>'
    })
}

datePicker.addEventListener('change', (event) => {
  const selectedDate = event.target.value
  fetchPicture(selectedDate)
})

fetchPicture(today)
