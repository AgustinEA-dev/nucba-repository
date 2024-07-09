import CardsProductos from "./components/Productos/CardsProductos";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Categorias from "./components/Categorias/Categorias";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Categorias />
        <CardsProductos />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
