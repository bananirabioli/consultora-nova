import { useEffect } from "react";
import { Link } from "react-router-dom";
import { articulos } from "../../data/blog";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Administrativo Nova";
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Entradas del Blog</h1>
      <div className="space-y-6">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{articulo.titulo}</h2>
            <p className="text-gray-600 mb-4">{articulo.resumen}</p>
            <Link
              to={`/blog/${articulo.slug}`}
              className="text-blue-600 hover:underline"
            >
              Leer más →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}