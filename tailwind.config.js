/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Semantic Tokens mapped to CSS variables
        background: 'var(--bg-color)',
        surface: 'var(--surface-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        'text-main': 'var(--text-main)',
        'text-sub': 'var(--text-sub)',
        border: 'var(--border-color)',
        
        // Button specific text color if needed (contrast)
        'btn-text': 'var(--btn-text)',
      },
      fontFamily: {
        lora: ['"Lora"', 'serif'], // for headers
        titillium: ['"Titillium Web"', 'sans-serif'], //for body
      },
      animation: {
        slide: 'slide 1s cubic-bezier(0.32, 0, 0.67, 0) 1s 1 alternate both',
        bounce: 'bounce 1s cubic-bezier(0.32, 0, 0.67, 0) 1s 1 alternate both',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounce: {
          '0%': { animationTimingFunction: 'ease-in', opacity: '0', transform: 'scale(0)' },
          '38%': { animationTimingFunction: 'ease-out', opacity: '1', transform: 'scale(1)' },
          '55%': { animationTimingFunction: 'ease-in', transform: 'scale(0.7)' },
          '72%': { animationTimingFunction: 'ease-out', transform: 'scale(1)' },
          '81%': { animationTimingFunction: 'ease-in', transform: 'scale(0.84)' },
          '89%': { animationTimingFunction: 'ease-out', transform: 'scale(1)' },
          '95%': { animationTimingFunction: 'ease-in', transform: 'scale(0.95)' },
          '100%': { animationTimingFunction: 'ease-out', transform: 'scale(1)' },
        },
        fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
        },
        backgroundImage: {
          'blurStain': "url('./public/bg.png')", 
        },
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar-hide') // Removed to fix build error, already implemented in CSS
  ], 
}

