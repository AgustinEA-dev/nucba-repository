import { createContext } from "react";

export const themes = {
  claro: {
    font: "Black",
    background: "white",
  },
  oscuro: {
    font: "white",
    background: "Black",
  },
};

const ThemeContext = createContext(themes.claro);

export default ThemeContext;
