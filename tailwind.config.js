/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier', 'monospace'],
        'times': ['Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};
