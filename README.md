# PhilosoFeed - React Frontend

A React-based frontend application for the PhilosoFeed platform, featuring philosopher chat and debate functionality.

GCP backend daily generates a small philosophy debate for daily dose of wisdom.


Demo Video:

https://drive.google.com/file/d/1BHKKMjmNgw77jh7k9BlvGzCDEk7vmZkw/view?usp=sharing

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

The application has 2 main routes:

- `/` - Home page with featured philosophers
- `/debate` - View an active daily debate between philosophers

