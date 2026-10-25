# Enhanced Colin Portfolio

## Folder structure
- `src/main.jsx` — React components and project data
- `src/styles.css` — responsive styling and hover/scroll animations
- `public/images/colin.jpg` — your portrait
- `public/images/vision-project.jpg` — screenshot from your vision inspection POC
- `public/images/eeg-project.jpg` — EEG project screenshot or signal visualization
- `public/images/detox-project.jpg` — screenshot of your Digital Detox Companion
- `public/images/bmi-project.jpg` — screenshot of your BMI Health Tracker

## How to add images
Put your images in `public/images/` with the exact filenames listed above. JPG, PNG, and WebP are fine; if using PNG/WebP, either rename them to the listed `.jpg` names (file contents do not actually have to be JPEG, but use matching extensions) or update the `image` paths in `src/main.jsx`.

Recommended images:
- Portrait: vertical photo, 4:5 or 3:4, good light, simple background.
- Project screenshots: landscape, around 16:10 or 16:9. Crop out private information and browser tabs if needed.
- For the vision POC, use a genuine ArenaView capture or your own inspection output.
- For EEG, use your own graph/result screenshot, not patient-identifiable data.
- For web projects, use the running app screenshot.

If a project image is missing, a designed purple/blue/pink/orange placeholder automatically appears, so the layout still works.

## Run in VS Code
```bash
npm install
npm run dev
```
Open the localhost URL Vite prints.

## Personalize contact links
Search `src/main.jsx` for:
- `YOUR_EMAIL@example.com`
- `YOUR-LINKEDIN`
- `YOUR-GITHUB`

Replace each with your actual details. Project `link: ""` values can be replaced with your live demo or repository URLs.

## Deploy
Push the project to GitHub, then import it into Vercel. Build command: `npm run build`; output directory: `dist`.
