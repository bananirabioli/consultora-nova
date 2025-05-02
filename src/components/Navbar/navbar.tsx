import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (path: string) =>
    `block px-4 py-2 text-sm md:text-base ${
      location.pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600 transition duration-300"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-white shadow" : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition duration-300">Nova</div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={navLinkClass("/")}>
              Inicio
            </Link>
            <Link to="/servicios" className={navLinkClass("/servicios")}>
              Servicios
            </Link>
            <Link to="/contacto" className={navLinkClass("/contacto")}>
              Contacto
            </Link>
            <Link to="/nosotros" className={navLinkClass("/nosotros")}>
              Nosotros
            </Link>
            <Link to="/blog" className={navLinkClass("/blog")}>
              Blog
            </Link>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>
              Inicio
            </Link>
            <Link to="/servicios" onClick={() => setMenuOpen(false)} className={navLinkClass("/servicios")}>
              Servicios
            </Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)} className={navLinkClass("/contacto")}>
              Contacto
            </Link>
            <Link to="/nosotros" onClick={() => setMenuOpen(false)} className={navLinkClass("/nosotros")}>
              Nosotros
            </Link>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className={navLinkClass("/blog")}>
              Blog
            </Link>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
}