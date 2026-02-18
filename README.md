[![Netlify Status](https://api.netlify.com/api/v1/badges/c5ea0837-d85a-4949-88d9-49f7b4d174b5/deploy-status)](https://app.netlify.com/projects/ravenous-guide/deploys)

# Ravenous

A Yelp-like restaurant/business discovery app built with React + TypeScript.

Users can search by business term and location, then re-sort already loaded results instantly on the client without additional API calls.

## Live Demo

[ravenous-guide.netlify.app](https://ravenous-guide.netlify.app/)

## Features

- Search businesses by term and location
- Responsive, card-based UI with custom branding
- Visual loading states with progress percentage while waiting for API responses
- Clear empty-state, no-results, and server-error messaging
- Client-side sorting:
  - Best Match
  - Highest Rated
  - Most Reviewed
- Footer and polished layout for desktop/mobile

## Tech Stack

- React 17
- TypeScript
- Sass (SCSS)
- `react-loading`
- Yelp Fusion API (via backend proxy service)

## Getting Started

### Prerequisites

- Node.js 16+ (18 LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/BadaCorp/ravenous.git
cd ravenous
npm install
```

### Run Locally

```bash
npm start
```

App runs at `http://localhost:3000` by default.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds for production
- `npm run eject` - Ejects CRA config (irreversible)

If you hit OpenSSL issues during build on newer Node versions, run:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

## API Notes

- Frontend request entry point: `src/util/Yelp.tsx`
- Default API URL:
  - `https://ravenous-api.onrender.com/yelp`
- Backend is on a free tier and may sleep after inactivity, causing slower first response.
- Ensure backend CORS allows your local origin (for example `http://localhost:3000`,).

## Sorting Behavior

To reduce API calls, sorting buttons now reorder the currently displayed result set on the client.  
A new API request is made only when a new search is submitted.

## Project Structure

```text
src/
  components/
    App/
    SearchBar/
    Business/
    BusinessList/
  util/
    Yelp.tsx
```

## Credits

- Original project concept: Codecademy Ravenous project
- Data source: [Yelp Fusion API](https://www.yelp.com/developers/documentation/v3)
