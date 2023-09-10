/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        banner_content_bg_img: "url('./images/banner_content_bg.png')",
      },
      colors: {
        link_color: "#3C354F",
        list_bg: "rgba(11, 2, 35, 0.10)",
        tube_color: "#F61C0D",
        gra_start: "rgba(255, 66, 165, 0.03)",
        gra_end: "rgba(255, 66, 165, 0.03)",
        over_start: "rgba(0, 0, 0, 0.60)",
        over_end: "rgba(0, 0, 0, 0.60)",
        text_start: "#FF42A5",
        terms_color: "rgba(255, 255, 255, 0.60)",
      },
      fontFamily: {
        work_sans: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        nav_shadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
