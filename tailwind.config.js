
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#05070d',
        surface: '#0f1422',
        surfaceHover: '#1a2133',
        cyan: {
          DEFAULT: '#00e5ff',
          glow: 'rgba(0, 229, 255, 0.5)',
          muted: 'rgba(0, 229, 255, 0.1)',
        },
        blue: {
          DEFAULT: '#3b82f6',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        violet: {
          DEFAULT: '#7c3aed',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 229, 255, 0.5), 0 0 20px rgba(0, 229, 255, 0.3)',
        'neon-blue': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
