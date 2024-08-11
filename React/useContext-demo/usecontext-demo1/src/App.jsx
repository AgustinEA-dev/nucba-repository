import { useState } from "react";

import DisplayContext, { navDisplay } from "./context";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";

function App() {
  const [visibility, setDisplay] = useState(navDisplay.visible);

  const handleDisplay = () => {
    visibility === navDisplay.visible
      ? setDisplay(navDisplay.noVisible)
      : setDisplay(navDisplay.visible);
  };

  return (
    <>
      <DisplayContext.Provider value={{ visibility, handleDisplay }}>
        <Layout>
          <Navbar />
        </Layout>
      </DisplayContext.Provider>
    </>
  );
}

export default App;
