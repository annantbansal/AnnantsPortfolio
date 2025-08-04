/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.015)' },
        },
        float:{
          '0%, 100%':{transform:'translateY(0)'},
          '50%':{transform:'translateY(-10px)'}
        },
        lr:{
          '0%, 100%':{transform:'rotate(-90deg) translateY(0)'},
          '50%':{transform:'rotate(-90deg) translateY(-10px)'}
        },
        starMove: {
  '0%, 100%': {
    transform: 'translate(0, 0) rotate(0deg)',
  },
  '50%': {
    transform: 'translate(30px, 30px) rotate(180deg)',
  },
},
flip:{
 '0%': { transform: 'rotateY(0deg)' },
  '50%': { transform: 'rotateY(180deg)' },
  '100%': { transform: 'rotateY(360deg)' },
},
 glitch: {
          '0%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-2px, -2px) skew(-2deg)' },
          '20%': { transform: 'translate(2px, 2px) skew(1deg)' },
          '30%': { transform: 'translate(-2px, 1px) skew(-1deg)' },
          '40%': { transform: 'translate(2px, -1px) skew(2deg)' },
          '50%': { transform: 'translate(0)' },
          '60%': { transform: 'translate(1px, 1px) skew(0deg)' },
          '70%': { transform: 'translate(-1px, -2px) skew(-2deg)' },
          '80%': { transform: 'translate(1px, 2px) skew(2deg)' },
          '90%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
        },
        blobanimate: {
  '0%, 100%': {
    transform: 'translate(-50%, -50%)',
  },
  '50%': {
    transform: 'translate(-46%, -54%)', // or adjust subtly
  },
},
      },
      animation: {
        zoom: 'zoom 4s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        lr:'lr 3s ease-in-out infinite',
        star: 'starMove 4s ease-in-out infinite',
        flip:'flip 2s ease-in-out infinite',
        glitch: 'glitch 1s infinite',
        blobanimate: 'blobanimate 3s linear infinite',
      },
    },
  },
  plugins: [],
}