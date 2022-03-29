module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'base': '18px',
      },
      screens: {
        'u-sm': '640px',
        'd-sm': { 'max': '639px' },

        'u-md': '768px',
        'd-md': { 'max': '767px' },

        'u-lg': '1024px',
        'd-lg': { 'max': '1023px' },

        'u-xl': '1280px',
        'd-xl': { 'max': '1279px' },

        'u-2xl': '1536px',
        'd-2xl': {'max': '1535px'},
      },
      container: {
        center: true,
        padding: '15px'
      }
    },
  },
  plugins: [],
}
