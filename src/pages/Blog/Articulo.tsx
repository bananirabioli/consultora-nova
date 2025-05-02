import { useParams } from "react-router-dom";
import { JSX, useEffect } from "react";
import { articulos } from "./data/blog";

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
    <div className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
      {/* Navegación lateral */}
      <aside className="md:w-1/4 hidden md:block bg-gray-50 border border-gray-200 p-4 rounded-lg h-fit sticky top-20">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Explorar</h2>
        <ul className="space-y-2 text-blue-700 text-sm">
          {articulos.map((a) => (
            <li key={a.id}>
              <a
                href={`/blog/${a.slug}`}
                className={`hover:underline ${
                  a.slug === slug ? "font-bold" : ""
                }`}
              >
                {a.titulo}
              </a>
            </li>
          ))}
        </ul>
      </aside>
  
      {/* Contenido del artículo */}
      <div className="md:w-3/4 bg-white rounded-lg shadow-md p-6">
        {articulo.imagen && (
          <img
            src={articulo.imagen}
            alt={articulo.titulo}
            className="w-full h-60 object-cover rounded mb-6"
          />
        )}
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 border-b pb-2">
          {articulo.titulo}
        </h1>
            <div className="text-gray-800 text-lg leading-relaxed space-y-4">
            {(() => {
              const palabrasClave = [
                "licencia de funcionamiento",
                "trámites municipales",
                "protección civil",
                "consultoría",
                "plan interno",
                "permiso",
                "avisos de funcionamiento",
                "negocio",
                "Cofepris",
                "Guadalajara",
                "Zapopan",
                "Tlaquepaque",
                "Tlajomulco",
                "Tonala",
                "Jalisco"
                ];

              function marcarPalabrasClave(texto: string) {
              let marcado = texto;
              palabrasClave.forEach((palabra) => {
                const regex = new RegExp(`\\b(${palabra})\\b`, "gi");
                marcado = marcado.replace(regex, "<strong>$1</strong>");
              });
              return marcado;
            }

              const lineas = articulo.contenido.split("\n");
              const elementos: JSX.Element[] = [];
              let listaActual: string[] = [];

              lineas.forEach((linea, index) => {
                const texto = marcarPalabrasClave(linea.trim());

                if (texto.startsWith("### ")) {
                  elementos.push(
                    <h3 key={index} className="text-xl font-semibold text-blue-700 mt-6" dangerouslySetInnerHTML={{ __html: texto.replace("### ", "") }} />
                  );
                } else if (texto.startsWith("•")) {
                  listaActual.push(texto.slice(1).trim());
                } else {
                  if (listaActual.length) {
                    elementos.push(
                      <ul key={`ul-${index}`} className="list-disc list-inside space-y-1">
                        {listaActual.map((item, i) => (
                          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                        ))}
                      </ul>
                    );
                    listaActual = [];
                  }
                  if (texto) {
                    elementos.push(<p key={index} dangerouslySetInnerHTML={{ __html: texto }} />);
                  }
                }
              });

              if (listaActual.length) {
                elementos.push(
                  <ul key="ul-final" className="list-disc list-inside space-y-1">
                    {listaActual.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              }

              return elementos;
            })()}
          </div>
        {/* Artículos relacionados */}
        <div className="mt-12 border-t pt-6">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">Artículos relacionados</h3>
          <ul className="space-y-2">
            {articulos
              .filter((a) => a.id !== articulo.id)
              .map((a) => {
                const palabrasClave = articulo.contenido
                  .toLowerCase()
                  .split(/\W+/)
                  .filter((w) => w.length > 4);

                const coincidencias = palabrasClave.filter((palabra) =>
                  a.titulo.toLowerCase().includes(palabra)
                ).length;

                return { ...a, coincidencias };
              })
              .filter((a) => a.coincidencias > 0)
              .sort((a, b) => b.coincidencias - a.coincidencias)
              .slice(0, 3)
              .map((a) => (
                <li key={a.id}>
                  <a href={`/blog/${a.slug}`} className="text-blue-500 hover:underline">
                    {a.titulo}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}