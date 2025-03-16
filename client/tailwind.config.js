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
          DEFAULT: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(255, 255, 255, 0.12)',
          highlight: 'rgba(255, 255, 255, 0.05)'
        },
        primary: {
          text: "#f7f7f7",
          DEFAULT: "#0a192f"
        },
        secondary: {
          text: "#00ff9d",
          DEFAULT: "#00ff9d"
        },
        accent: {
          text: "#ec4899",
          DEFAULT: "#ec4899"
        },
        neutral: {
          text: "#ccd6f6",
          DEFAULT: "#ccd6f6"
        }
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(45deg, rgba(0,255,157,0.08), rgba(236,72,153,0.08))',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px', 
        lg: '16px',
        xl: '24px',
        '2xl': '32px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}