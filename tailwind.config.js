/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
        "sidebar-collapsed": "64px auto", //for collapsed sidebar layout
      },
      backgroundImage: {
        "signIn-pic": "url('/src/assets/pic/signin.jpg')",
      },
      colors: {
        "login-form-bg": "#CDD7D8",
        "input-color": "#868e96",
        "card-color": "#f1f3f5",
      },
    },
  },
  plugins: [],
};
