
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
        background: '#000000',
        surface: 'rgba(30, 30, 30, 0.45)',
        surfaceHover: 'rgba(45, 45, 45, 0.55)',
        tiffany: {
          DEFAULT: '#81D8D0',
          glow: 'rgba(129, 216, 208, 0.5)',
          muted: 'rgba(129, 216, 208, 0.1)',
        },
        cyan: {
          DEFAULT: '#81D8D0', // map cyan to tiffany for compatibility
          glow: 'rgba(129, 216, 208, 0.5)',
          muted: 'rgba(129, 216, 208, 0.1)',
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
        'neon-cyan': '0 0 10px rgba(129, 216, 208, 0.4), 0 0 20px rgba(129, 216, 208, 0.2)',
        'neon-blue': '0 0 10px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.3)',
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
