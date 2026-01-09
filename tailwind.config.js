/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Note: These plugins will be loaded via require() at runtime
    // If you get errors, install: npm install @tailwindcss/forms @tailwindcss/container-queries
  ],
}

