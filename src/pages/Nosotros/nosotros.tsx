import React from "react";

export default function Nosotros() {
  return (
    <section className="bg-white py-16 px-4 md:px-10" id="nosotros">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">¿Quiénes somos?</h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          En <strong>Nova</strong> somos una consultora comprometida con el crecimiento de tu negocio.
          Ayudamos a PYMES, emprendedores y empresas establecidas a navegar el mundo de los trámites municipales, estatales y federales con claridad, eficiencia y profesionalismo.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-center">
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Visión</h3>
          <p className="text-gray-600">Ser una referencia nacional en asesoría integral para trámites administrativos, destacando por nuestra ética, innovación y cercanía.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Misión</h3>
          <p className="text-gray-600">Facilitar los procesos regulatorios de nuestros clientes mediante soluciones personalizadas, acompañamiento profesional y atención humana.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Valores</h3>
          <p className="text-gray-600">Empatía, responsabilidad, transparencia y compromiso con el desarrollo sostenible de cada proyecto que atendemos.</p>
        </div>
      </div>
    </section>
  );
}