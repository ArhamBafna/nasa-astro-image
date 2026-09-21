# NASA Astronomy Picture of the Day (APOD)

A retro-styled web app to explore NASA's daily astronomy photos and cosmic videos across time.

![NASA APOD Preview](./public/preview.png)

## Try It

**[Live Demo](https://arhambafna.github.io/nasa-astro-image/)**

## Quick Start

Open the live site above. No setup needed

## Features

- **Daily Astronomy Showcase**: Fetches the official daily image or video directly from NASA's APOD API.
- **Time Travel Calendar**: Pick any past date back through NASA's archive to see historical astronomical captures.
- **Smart Media Handling**: Detects whether NASA shared a high-res photo, YouTube embed, or raw video and renders it cleanly.
- **Retro-Cyber Space Aesthetic**: Styled with custom dark nebula purples, Orbitron & Black Ops One typography, and geometric neon borders.
- **Instant Feedback**: Shows helpful loading indicators and error states if NASA's API hits a snag.

## How to Run It Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or newer recommended)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ArhamBafna/nasa-astro-image.git
   cd nasa-astro-image
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set your NASA API key:
   Create a `.env` file in the root folder if you have your own key (defaults to `DEMO_KEY` if omitted):
   ```env
   VITE_NASA_API_KEY=your_api_key_here
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

## How It Works

- **Direct Client Fetching**: Built with vanilla JavaScript on top of Vite. The app sends requests straight to NASA's Planetary API without requiring a heavy backend.
- **Dynamic Media Fallbacks**: NASA frequently posts YouTube embeds, Vimeo links, or raw video clips instead of plain images. The app inspects the incoming media payload and dynamically switches between an `<img>`, `<iframe>`, and `<video>` tag so media never breaks.
- **Pure CSS Accents**: Uses CSS `clip-path: polygon(...)` to generate custom neon side borders alongside neon glow effects, keeping load times near zero without heavy graphic assets.

## Credits & Acknowledgements

- **[NASA APOD API](https://api.nasa.gov/)**: For cosmic imagery, video feeds, and scientific context.
- **[Google Fonts](https://fonts.google.com/)**: Orbitron & Black Ops One for futuristic space vibes.
- **[Hack Club](https://hackclub.com/)**: Built for the Hack Club Stardance mission!
