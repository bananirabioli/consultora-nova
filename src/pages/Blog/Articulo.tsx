import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { articulos } from "../../data/blog";

export default function Articulo() {
  const { slug } = useParams();
  const articulo = articulos.find((a) => a.slug === slug);

  useEffect(() => {
    if (articulo) {
      document.title = `${articulo.titulo} | Administrativo Nova`;
    } else {
      document.title = "Artículo no encontrado | Administrativo Nova";
    }
  }, [articulo]);

  if (!articulo) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Artículo no encontrado</h1>
        <p className="text-gray-700">Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{articulo.titulo}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {articulo.contenido}
      </p>
    </div>
  );
}