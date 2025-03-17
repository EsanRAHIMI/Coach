// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          DEFAULT: 'rgba(10, 25, 47, 0.8)',
          border: 'rgba(255, 255, 255, 0.15)',
          highlight: 'rgba(255, 255, 255, 0.05)'
        },
        primary: {
          DEFAULT: "#00ff9d",
          dark: "#00cc7d"
        },
        secondary: {
          DEFAULT: "#00a3ff",
          dark: "#0082cc"
        },
        dark: "#0a192f",
        light: "#ccd6f6",
      },
      backdropFilter: {
        'glass': 'blur(12px)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #00ff9d, #00a3ff)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}