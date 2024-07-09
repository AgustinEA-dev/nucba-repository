import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import EjemploUseEffect from "./components/Useeffect";
import UseReducerEffect from "./components/UseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EjemploUseEffect />
      <UseReducerEffect />
    </>
  );
}

export default App;
