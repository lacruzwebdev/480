# 480 Weather App 🌤️

### Check out the [deployed version](https://480-kjnhdzdit-lacruzwebdevs-projects.vercel.app/)!

A simple weather application built using **React** and **TypeScript**, developed as a technical test for **[480](https://cuatroochenta.com/)**. The app provides weather information with smooth animations and efficient data handling.

## Features ✨

- **Weather Information:** Get real-time weather details from OpenWeatherMap API.
- **Caching:** API calls are cached!
- **Animations:** Subtle and engaging animations using Framer Motion.
- **Internationalization:** Multilingual support powered by i18Next.
- **Form Handling:** Robust form validation with React Hook Form and Zod.

## Authentication 🔒

This application includes a **mock authentication system** for demonstration purposes. The authentication flow mimics a real-world login system with the following features:

- **Mock Login:** Accepts the email `480@example.com` and password `480` as valid credentials.
- **Simulated Delay:** Introduces a 1-second delay to emulate an API call.
- **Session Management:** Uses cookies to store and retrieve user session data.
- **Login & Logout:** Provides login and logout functionality via a context provider.
- **User Settings:** English is the default language, but after that, the user's selected language is stored in local storage.

## Technologies & Dependencies 🚀

- [**React**](https://reactjs.org/) + [**TypeScript**](https://www.typescriptlang.org/): For building a scalable and maintainable user interface.
- **CSS Modules**: For styling components with ease using the latest CSS syntax, like nesting!
- [**TanStack Query**](https://tanstack.com/query/latest): Efficient querying and caching of weather data.
- [**React Hook Form**](https://react-hook-form.com/): For handling and validating forms effortlessly.
- [**DayJS**](https://day.js.org/): Lightweight and fast date manipulation.
- [**Zod**](https://zod.dev/): Type-safe schema validation.
- [**i18Next**](https://www.i18next.com/): Localization and translation support.
- [**lucide-react**](https://lucide.dev/): Sleek and modern icons.
- [**Framer Motion**](https://www.framer.com/motion/): For smooth and elegant animations.

## Getting Started 🛠️

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16 or higher recommended)
- **pnpm**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lacruzwebdev/480.git
   cd 480
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the project:
   ```bash
   pnpm dev
   ```

Make sure to include your own OpenWeatherMap API key in the `.env` file!
