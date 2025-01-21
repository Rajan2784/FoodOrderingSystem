import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MenuPage from "./pages/MenuPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Promotions from "./pages/Promotions";

function App() {
  return (
    <div className="relative">
      <div className="container px-20 pt-12 pb-3 bg-gray-100 mx-auto">
        <Router>
          <div className="fixed w-full left-0 top-0 z-50">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
