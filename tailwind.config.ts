import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        borel: "'Borel', cursive",
        merriweather: "--font-merriweather",
        ubuntu: "--font-ubuntu",
        // Sans: "'Open Sans', sans-serif",
        // Poppins: "'Poppins', sans-serif",
        // Roboto: "'Roboto Mono', monospace",
      },
      colors: {
        bookBtn: "#1d4ed8",
        borderClr: "rgba(0,0,0,0.05)",
        borderClrDark: "rgba(255,255,255,0.05)",
        secondaryBG: "rgba(0,0,0,0.1)",
        inputBorder: "rgba(109,107,107,0.49)",
        textDark: "rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
