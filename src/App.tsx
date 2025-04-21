import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios/servicios";
import Contacto from "./pages/Contacto/contacto";
import Navbar from "./components/Navbar/navbar";
import WhatsAppButton from "./components/WhatsAppButton/whatsappbutton";
import Articulo from "./pages/Blog/Articulo";
import Blog from "./pages/Blog/blog";
import { articulos } from "./data/blog";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog/:slug" element={<Articulo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Index />} />
        <Route path="/blog/:slug" element={<Articulo />} />
      
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;