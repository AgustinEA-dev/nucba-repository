import "./App.css";

import ThemeContext, { themes } from "./context";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Layout from "./components/Layout";

import { useState } from "react";

function App() {
  const [tema, setTema] = useState(themes.claro);

  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro);
  };
  return (
    <>
      <div>
        <ThemeContext.Provider value={{ tema, handleTema }}>
          <Layout>
            <Navbar />
            <Body />
          </Layout>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
