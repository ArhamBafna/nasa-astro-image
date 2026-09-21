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

      let media = ''
      if (data.media_type === 'image') {
        media = `<img class="apod-media" src="${data.url}" alt="${data.title}" />`
      } else if (data.url.includes('youtube') || data.url.includes('youtu.be')) {
        media = `<iframe class="apod-media" src="${data.url}" allowfullscreen></iframe>`
      } else {
        media = `<video class="apod-media" src="${data.url}" controls></video>`
      }

      app.innerHTML = `
        <h1 class="apod-title">${data.title}</h1>
        <p class="apod-date">${data.date}</p>
        <div class="media-container">
          ${media}
        </div>
        <p class="apod-explanation">${data.explanation}</p>
      `
    })
    .catch((err) => {
      console.error(err)
      app.innerHTML = `<p class="error">Error: ${err.message || 'Failed to load astronomy picture'}</p>`
    })
}

datePicker.addEventListener('change', (event) => {
  const selectedDate = event.target.value
  fetchPicture(selectedDate)
})

fetchPicture(today)
