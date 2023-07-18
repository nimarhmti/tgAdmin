/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "signIn-pic": "url('/src/assets/pic/signin.jpg')",
      },
      colors: {
        "login-form-bg": "#CDD7D8",
        "Input-color": "#f1f3f5",
      },
    },
  },
  plugins: [],
};
