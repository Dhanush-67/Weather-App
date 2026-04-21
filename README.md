# Klimate

Klimate is a weather dashboard built with React, TypeScript, and Vite
that focuses on turning live weather data into a clean and responsive
user experience. It detects the user's location, fetches current
conditions in real time, supports city-based exploration, remembers
recent searches, and handles loading and error states smoothly.

## Overview

-   Uses browser geolocation to show weather for the current location
-   Allows searching for cities and navigating to dedicated views
-   Displays real-time weather data including temperature, humidity, and
    wind
-   Persists recent searches locally for continuity across sessions
-   Handles loading, errors, and permission states in a user-friendly
    way
-   Supports light and dark themes

![Klimate Screenshot](Screenshot%202026-04-21%20185805.png)
![Screenshot 2026-04-21 185816](Screenshot%202026-04-21%20185816.png)
![Screenshot 2026-04-21 193309](Screenshot%202026-04-21%20193309.png)

## Core Features

### Location-Based Weather

On load, the app requests geolocation and fetches weather data based on
coordinates. If permission is denied, it provides a fallback and
explanation.

### City Search

Users can search for cities through a command-style modal and navigate
to a city-specific page. Recent searches are saved locally.

### Weather Data Display

The dashboard includes:

-   Current temperature
-   Feels-like temperature
-   Daily high and low
-   Humidity
-   Wind speed
-   Weather conditions and icons

### UI Experience

The interface uses cards, dialogs, skeleton loading states, and
responsive layouts to keep the experience smooth and usable.

## Technical Details

### Frontend

-   React 19
-   TypeScript
-   Vite
-   React Router
-   @tanstack/react-query

### UI

-   Tailwind CSS
-   Radix UI
-   Lucide React

### Data Handling

-   Geolocation handled via a custom hook
-   API interactions abstracted into a service layer
-   React Query used for caching and request lifecycle
-   Local storage used for persisting search history

## Project Structure

The application code lives inside the `weather-app/` directory.

``` text
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

### Install dependencies

``` bash
cd weather-app
npm install
```

### Configure environment variables

Create a `.env` file inside `weather-app/` and add your OpenWeatherMap
API key:

``` env
VITE_OPENWEATHER_API_KEY=your_key_here
```

### Run locally

``` bash
npm run dev
```

### Build

``` bash
npm run build
```

## Tech Stack

-   React
-   TypeScript
-   Vite
-   React Router
-   TanStack React Query
-   Tailwind CSS
-   Radix UI
-   Lucide Icons
-   OpenWeatherMap API
