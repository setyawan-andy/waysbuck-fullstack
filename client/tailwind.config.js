module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screen: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      },
    },
    fontFamily : {
      noto: ['Noto Serif', 'serif'],
      lato: ['Lato', 'sans-serif'] 
    },
    extend: {
      colors: {
        'maroon': "#BD0707",
        'darkBrown': "#613D2B",
        'lightBrown': "#974A4A",
        'green': "#469F74",
        'card': "#F7DADA",
        'detailprofile' : "#613D2B",
        'backprofile' : "#F6DADA",
        'cancel': "#FF0742",
        'approve': "#0ACF83",
        'success': "#dcfce7",
        'successv2': "#10b981"
      },
      backgroundImage: {
        'hero-image' : "url('../img/jumbotron2.png')",
      },
    },
  },
  plugins: [],
}
