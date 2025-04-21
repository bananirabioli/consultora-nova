import { useEffect, useState } from "react";

export default function Contacto() {
  useEffect(() => {
    document.title = "Contacto | Administrativo Nova";
  }, []);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    tramite: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mkgrwgpw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          nombre: "",
          telefono: "",
          correo: "",
          tramite: "",
          mensaje: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Contáctanos</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-2">
          Si tienes dudas o necesitas una asesoría personalizada, no dudes en ponerte en contacto con nosotros. Estamos para ayudarte en tus trámites.
        </p>
        <ul className="text-gray-800 space-y-2">
          <li><strong>Correo:</strong> contacto@administrativonova.com</li>
          <li><strong>Teléfono:</strong> +52 3333030049</li>
          <li><strong>Teléfono:</strong> +52 3333080486</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-blue-50 border border-blue-100 rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Formulario de contacto</h2>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          required
          className="w-full p-2 border rounded"
          value={formData.nombre}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Número de teléfono"
          className="w-full p-2 border rounded"
          value={formData.telefono}
          onChange={handleChange}
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          required
          className="w-full p-2 border rounded"
          value={formData.correo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tramite"
          placeholder="Tipo de trámite"
          required
          className="w-full p-2 border rounded"
          value={formData.tramite}
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          required
          className="w-full p-2 border rounded h-32"
          value={formData.mensaje}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar"}
        </button>
        {status === "success" && (
          <p className="text-green-600">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Hubo un error al enviar. Intenta nuevamente más tarde.</p>
        )}
      </form>
    </div>
  );
}
