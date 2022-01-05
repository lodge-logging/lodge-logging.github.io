module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "30": "50%",
    },

    backgroundPosition: {
      "left-center": "2% 60%",
    },

    extend: {
      backgroundImage: {
        'logo': "url('./images/logo/Lodge_graphic_color.svg')"
      },
      colors: {
        "raisin": "#20232b",
        "cyan": "#1ba8e0",
        "yellowgreen": "#92c83e"
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
