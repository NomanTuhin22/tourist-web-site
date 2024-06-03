/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      // ***my animation***
      animation:{
        "zoomIn":"zoomIn .5s ease-in-out 1",
        "button":"button 2.5s ease-in-out both infinite",
        "tada":"tada 1.3s both .5s 2",
        "fadeIn":"fadeIn .5s ease-in-out 1 both",
      },
      keyframes: {
        "zoomIn":{
          "0%": {
            opacity: "0",
            transform: "scale(50%)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(90%)",
          },
        },
       
        "button":{
          "0%": {
            background : "#047857",
          },
          "25%": {
            background : "#059669",
          },
          "50%": {
            background : "#10b981",
          },
          "70%": {
            background : "#047857",
          },
          "100%": {
            background : "#047857",
          },
        },
        "tada":{
          "0%": {transform: "scale3d(1, 1, 1)"},
          "10% 20%": {transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"},
          "30%, 50%, 70%, 90%": {transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},
          "40%, 60%, 80%": {transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},
          "100%": {transform: "scale3d(1, 1, 1)"},
        },
        "fadeIn":{
          "0%":{opacity:"0", transform:"translate3d(0, -50%, 0)"},
          "100%":{opacity:"1",transform:"transform: none"},
        }
      },
      screens:{
        'x-sm': '576px',
        'sm': '640px',
        'md': '	768px',
        'lg': '992px',
        'xl': '1200px',
        '1xl': '1270px',
        '2xl': '1500px',
      },
      boxShadow:{
        'card-shadow':'0px 1px 40px 1px #e5e7eb'
      },
      fontFamily :{
        'Oswald': ["Oswald"],
        'Jaro': ["Jaro"],
        'Roboto':["Roboto"]
      },
    },
  },
  plugins: [],
}

