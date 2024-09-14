import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import About from "./components/about/about.component";
import Products from "./components/products/products.component";
import Contact from "./components/contact/contact.component";

import Home from "./routes/home/home.component";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
