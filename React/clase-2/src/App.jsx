import { useState } from "react";
import Hijo from "./Hijo";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hijo nombre="Laura" />
      <Hijo nombre="Agustín" />
      <Hijo nombre="Juan Carlos" />
      <Hijo nombre="Paula" />
      <Hijo nombre="Diego" />
      <Hijo nombre="Sofía" />
    </>
  );
}

export default App;
