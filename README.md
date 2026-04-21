# Klimate

Klimate is a modern weather dashboard built with React, TypeScript, and Vite that turns live weather data into a clean, polished user experience. Instead of feeling like a simple API demo, the app is designed like a product: it detects the user's location, fetches current conditions in real time, supports city-based exploration, remembers recent searches, and keeps the interface responsive with loading states, caching, and error handling.

For recruiters and hiring teams, this project demonstrates more than UI styling. It shows practical frontend engineering decisions around API integration, async state management, reusable component design, client-side persistence, routing, and user-centered UX.

## Why This Project Stands Out

- Built as a real product experience, not just a single-page tutorial app.
- Uses browser geolocation plus reverse geocoding to personalize the default view.
- Integrates multiple OpenWeatherMap endpoints for current weather, forecast data, and city search.
- Applies React Query to manage caching, stale data, and refetching behavior cleanly.
- Persists recent searches in local storage to create continuity across sessions.
- Includes thoughtful UX states for loading, missing permissions, and failed API requests.
- Uses a reusable component system with Tailwind CSS, Radix UI primitives, and accessible patterns.
- Supports light/dark theme switching for a more complete, production-style interface.

## Core Features

### 1. Location-Aware Weather Dashboard
On first load, Klimate requests browser geolocation and uses the user's coordinates to fetch live weather conditions. If location access is denied or unavailable, the UI gracefully explains the issue and provides a recovery path.

### 2. City Search With Persistent History
Users can search for cities through a command-style modal and navigate directly to a dedicated city page. Recent searches are saved locally and surfaced back in the UI, making the app feel personalized and stateful.

### 3. Real-Time Weather Presentation
The dashboard displays:

- Current temperature
- Feels-like temperature
- Daily low and high
- Humidity
- Wind speed
- Weather condition icons and descriptions

### 4. Responsive, Polished UI
The interface uses cards, dialog-based search, skeleton loading states, gradient backgrounds, and theme switching to create a smoother product experience than a typical CRUD-style sample project.

## Technical Highlights

### Frontend Architecture
- `React 19` for the UI layer
- `TypeScript` for safer, more maintainable code
- `Vite` for a fast local development experience and optimized builds
- `React Router` for page-level navigation
- `@tanstack/react-query` for async state, caching, and request lifecycle control

### UI and Design System
- `Tailwind CSS` for utility-first styling
- `Radix UI` primitives for composable, accessible interactions
- `Lucide React` for iconography
- Reusable shared UI components for buttons, cards, dialogs, alerts, skeletons, and command menus

### Data and State Strategy
- Geolocation handled with a custom React hook
- Weather, forecast, reverse geocoding, and location search abstracted behind an API layer
- Search history persisted with local storage and synchronized through React Query
- Refetch and cache timing configured deliberately to balance freshness and performance

## What This Demonstrates As A Candidate Project

This project highlights the kind of skills recruiters and engineering teams often look for in frontend candidates:

- Building from an external API and shaping raw data into user-friendly UI
- Managing async flows and edge cases without cluttering components
- Designing reusable abstractions through hooks, components, and typed service layers
- Thinking beyond "it works" toward usability, responsiveness, and product polish
- Structuring a codebase in a scalable way that is easy to extend

## Project Structure

The application code lives inside the `weather-app/` directory.

```text
Weather-App/
├── README.md
├── package-lock.json
└── weather-app/
    ├── public/
    ├── src/
    │   ├── api/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   ├── pages/
    │   └── lib/
    ├── package.json
    └── .env.example
```

## Getting Started

### 1. Install dependencies

```bash
cd weather-app
npm install
```

### 2. Configure environment variables

Create a `.env` file inside `weather-app/` and add your OpenWeatherMap API key:

```env
VITE_OPENWEATHER_API_KEY=your_key_here
```

You can use `.env.example` as a reference.

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- TanStack React Query
- Tailwind CSS
- Radix UI
- Lucide Icons
- OpenWeatherMap API

## Future Improvements

The current implementation already covers the core user journey well. Strong next steps could include:

- Multi-day forecast visualizations
- Unit switching between Celsius and Fahrenheit
- Favorite cities and saved locations
- Better mobile-first weather detail layouts
- Offline handling and retry strategies
- Test coverage for hooks, API helpers, and critical UI flows

## Summary

Klimate is a strong frontend portfolio project because it combines API integration, state management, routing, persistence, and polished UX into one cohesive application. It reflects the ability to build software that is not only functional, but thoughtful, maintainable, and user-focused.
