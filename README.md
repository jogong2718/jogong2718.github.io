# Personal Website

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install` or `yarn install`.
3. Run `npm run dev` (or `yarn dev`) to start the development server.
4. Open http://localhost:3000 in your browser.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS & DaisyUI (for styling)

## Project Structure

- `app/` — Main application components and pages.
- `public/` — Static assets/images.
- `...existing code...`

## Environment Setup

To develop locally, ensure you have:

- Node.js (v16+ recommended)
- npm or yarn
- (Optional) A .env file for any environment variables.

You can configure environment variables by creating a .env file at the project root. Reference them in your Next.js app via process.env.VARIABLE_NAME.

## Detailed Features

1. Interactive Home Page:

   - Animated Neural Network theme with clickable toggles to explore blog, projects, and resume.

2. Blog Section:

   - Contains personal posts with images and commentary.

3. Projects Section:

   - Showcases various projects, with short descriptions and links to repositories or live demos.

4. Experience Section:
   - Shows recent and notable experience.

## Running Tests

If you have tests configured (e.g., Jest or Cypress):

1. Run `npm test` or `yarn test` to execute tests.
2. Check coverage if needed (once configured) with `npm run coverage`.

## Build & Deploy

- Run `npm run build` (or `yarn build`) to compile.
- Run `npm run start` (or `yarn start`) to serve the production build.

## Deployment

You can deploy this site via:

- Vercel: Link your GitHub repo in Vercel.
- Netlify: Configure build settings (build command: `npm run build`, publish directory: `.next`).
- Docker/Custom server: Build the production bundle locally, then serve with `npm run start`.

## Contributing

1. Fork this repo and create a new branch.
2. Make changes and ensure linting/testing passes.
3. Submit a pull request for review.
