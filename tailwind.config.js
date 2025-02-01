/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Set Manrope as default sans-serif font
      },
      fontWeight: {
        thin: 100, // Redefine thin if needed
        extralight: 200, // Redefine thin if needed
        50: "10",
      },
    },
  },
  plugins: [],
};
