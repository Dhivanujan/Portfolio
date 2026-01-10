/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        obsidian: '#0b0c15',
        charcoal: '#12141e',
        'glass-dark': 'rgba(15, 15, 25, 0.75)',
        'text-primary': '#EAEAF0',
        'text-secondary': '#B5B5C5',
        neon: {
          blue: '#6366f1', // Changed to Indigo (Primary)
          purple: '#a855f7', // Purple
          pink: '#ec4899', // Pink
          cyan: '#22d3ee', // Old blue moved to cyan
        },
        primary: {
          DEFAULT: '#6366f1', // Electric Indigo
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'morph': {
            '0%, 100%': {
                'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
            },
            '50%': {
                'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
            },
        },
        'shimmer': {
            '0%': { 'background-position': '-200% 0' },
            '100%': { 'background-position': '200% 0' },
        },
        'glow-pulse': {
            '0%, 100%': { opacity: '0.5' },
            '50%': { opacity: '1' },
        },
        'gradient-x': {
            '0%, 100%': {
                'background-size': '200% 200%',
                'background-position': 'left center'
            },
            '50%': {
                'background-size': '200% 200%',
                'background-position': 'right center'
            },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
}
