import ThemeContext, { themes } from "./context";
import NavBar from "./structure/NavBar";
import Body from "./structure/Body";
import Layout from "./structure/Layout";

import { useState } from "react";

import React from "react";

function AppContext() {
  const [tema, setTema] = useState(themes.claro);
  
  const handleTema = () => {
    tema === themes.oscuro ? setTema(themes.claro) : setTema(themes.oscuro);
  };

  return (
    <>
      <div>AppContext</div>
    </>
  );
}
