import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Catalog from "./components/Catalog";
import PopualarProducts from "./components/PopularProducts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Services />
        <Catalog />
        <PopualarProducts />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
