import DisplayContext from "../context";
import { useContext } from "react";

function Layout({ children }) {
  const { display } = useContext(DisplayContext);
  return <div>{children}</div>;
}

export default Layout;
