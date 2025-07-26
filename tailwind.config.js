module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontSize: {
        'title-main': '36px',      
        'title-section': '30px',   
        'title-card': '24px',      
        'body-main': '16px',      
        'meta': '14px',           
      },
      colors: {
        primary: {
          DEFAULT: '#10b981',      
          hover: '#059669',        
        },
        secondary: {
          DEFAULT: '#0ea5e9',      
          nav: '#0284c7',         
        },
        neutral: {
          main: '#111827',        
          sub: '#4b5563',         
          bg: '#f3f4f6',           
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}