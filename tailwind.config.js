/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        title:
          "url(https://react18-ecommerce.vercel.app/images/products-page-heading.jpg)",
        "search-icon": "url(/src/assets/search-svgrepo-com.svg)",
      },
    },
  },
  plugins: [],
};
