import { createContext } from "react";

export const navDisplay = {
  visible: {
    display: "flex",
  },
  noVisible: {
    display: "none",
  },
};

const DisplayContext = createContext(navDisplay.visible);

export default DisplayContext;
