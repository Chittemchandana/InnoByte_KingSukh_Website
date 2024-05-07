import "./App.css";

import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Map from "./components/map/Map";
import Rooms from "./components/rooms/Rooms";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="overflow-hidden">
      <Home />
      <About />
      <Rooms />
      <Services />
      <Gallery />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
