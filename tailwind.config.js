module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryGrey: "#383E46",
      primaryBlue: "#6252BD",
      secondBlue: "#71C8DC",
      white: "#fff",
      lightGrey: "#F1F3F3",
      disabledGrey: "#9D9D9D",
      badgeSuccess: "#66bb6a",
      badgePending: "#FA8F61",
      badgeTextSuccess: "#6E9F78",
      badgeTextPending: "#DDB990",
    },
    borderRadius: {
      "30p": "30px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
