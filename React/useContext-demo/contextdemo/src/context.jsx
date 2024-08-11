import { createContext } from "react";

export const themes = {
  claro: {
    font: "black",
    background: "white",
    display: "none",
  },
  oscuro: {
    font: "white",
    background: "black",
  },
};

const ThemeContext = createContext(themes.claro);

export default ThemeContext;
