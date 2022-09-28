import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.sass';
import Footer from "./pages/Footer";
import Home from "./pages/home/Home";
import Navber from "./pages/Navber";
import About from "./pages/About";
import Event from "./pages/Event";
import Gallary from "./pages/Gallary";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Admission from "./pages/Admission";
import Teachers from "./pages/Teachers";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/event" element={<Event />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
