export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:  '#185FA5',
          gold:  '#BA7517',
          light: '#EAF2FC',
          dark:  '#0C1A2E',
        }
      },
      fontFamily: {
        serif: ['Georgia','serif'],
        sans:  ['Inter','system-ui','sans-serif'],
      }
    }
  },
  plugins: []
}
