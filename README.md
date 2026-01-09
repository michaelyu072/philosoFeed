# PhilosoBite - React Frontend

A React-based frontend application for the PhilosoBite platform, featuring philosopher chat and debate functionality.

## Project Structure

```
philosophize/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx   # Header component with variants
│   │   ├── Avatar.jsx   # Avatar component
│   │   └── Message.jsx  # Message component for chat/debate
│   ├── pages/           # Page components
│   │   ├── Home.jsx           # Home page with featured philosophers
│   │   ├── Chat.jsx           # Chat page with Socrates
│   │   ├── CreateDebate.jsx   # Create debate form page
│   │   └── Debate.jsx         # Debate viewing page
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Routes

The application has 4 main routes:

- `/` - Home page with featured philosophers
- `/chat` - Chat interface with Socrates
- `/create-debate` - Form to create a new debate
- `/debate` - View an active debate between philosophers

## Features

- **Reusable Components**: Header, Avatar, and Message components that can be used across pages
- **React Router**: Proper routing setup for navigation between pages
- **Tailwind CSS**: Styled with Tailwind CSS matching the original HTML templates
- **Static Content**: All hard-coded static content from the original HTML files is preserved

## Notes

- This is a visual-only setup. JavaScript functionality and API integration are not implemented yet.
- The Tailwind plugins (`@tailwindcss/forms` and `@tailwindcss/container-queries`) are included in package.json but may need to be configured in `tailwind.config.js` if you encounter issues.

