import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination,  } from "swiper/modules";
import { articulos } from "../Blog/data/blog.ts";
import "swiper/css";
import "swiper/css/pagination";

export default function Index() {
  useEffect(() => {
    document.title = "Inicio | Administrativo Nova";
  }, []);

  return (
    <div className="bg-gray-50">
      <section className="text-center py-16 px-6 bg-white">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Soluciones para tu gran negocio</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Te ayudamos a simplificar tus trámites municipales, estatales y federales con asesoría personalizada y confiable.
        </p>
        <a
          href="/contacto"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Contáctanos
        </a>
      </section>

      <section className="py-12 px-10 bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">Últimas entradas del blog</h2>
        <div className="max-w-3xl mx-auto">
                  <Swiper
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: true,
                    }}
                    direction="horizontal"
                    slidesPerView={2}
                    spaceBetween={50}
                    loop={true}
                    speed={800}
                    mousewheel={true}
                    pagination={{ clickable: true }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    className="w-full max-w-md h-96 mx-auto mySwiper"
                  >
            {articulos.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="bg-white p-6 rounded-lg shadow text-center h-full flex flex-col justify-center">
                  <img
                    src={post.imagen}
                    alt={post.titulo}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold text-blue-700 mb-2">{post.titulo}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.resumen}</p>
                  <a href={`/blog/${post.slug}`} className="text-blue-500 hover:underline text-sm">
                    Leer más
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>

      {/* Beneficios rápidos */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">Beneficios de trabajar con nosotros</h2>
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Trámites sin complicaciones</h3>
            <p className="text-gray-600">Nos encargamos de todo el proceso para que no te preocupes por papeleo innecesario.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Acompañamiento personalizado</h3>
            <p className="text-gray-600">Te guiamos paso a paso en cada trámite según tus necesidades.</p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Atención rápida y profesional</h3>
            <p className="text-gray-600">Respondemos tus dudas de forma clara, efectiva y oportuna.</p>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">¿Por qué elegir Administrativo Nova?</h2>
          <p className="text-gray-700 text-lg">
            Somos una consultora especializada en trámites gubernamentales, con amplia experiencia, ética profesional y un compromiso constante con la transparencia y eficiencia.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tus trámites?</h2>
        <p className="mb-6">Solicita una asesoría gratuita y descubre cómo podemos ayudarte a resolver tus gestiones administrativas.</p>
        <a href="/contacto" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">Solicitar asesoría</a>
      </section>
  </div>
  );
}
