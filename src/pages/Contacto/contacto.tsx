import { useEffect, useState } from "react";
import MailIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import PhoneIcon from "@heroicons/react/24/outline/PhoneIcon";

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
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-md rounded-lg p-6 mb-8 border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 flex items-center gap-2">
          <PhoneIcon className="w-7 h-7 text-blue-500" />
          Contáctanos
        </h1>
        <p className="text-gray-700 mb-4 italic">
          ¿Tienes dudas o necesitas asesoría personalizada? Completa el formulario o contáctanos directamente.
        </p>
        <ul className="text-gray-800 space-y-3">
          <li className="flex items-center gap-2">
            <MailIcon className="w-5 h-5 text-blue-500" />
            <span><strong>Correo:</strong> contacto@administrativonova.com</span>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-blue-500" />
            <span><strong>Teléfono:</strong> +52 3333030049</span>
          </li>
          <li className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-blue-500" />
            <span><strong>Teléfono:</strong> +52 3333080486</span>
          </li>
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
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">¡Éxito!</strong>
            <span className="block sm:inline ml-2">Tu mensaje fue enviado correctamente. Te contactaremos pronto.</span>
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline ml-2">Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo más tarde.</span>
          </div>
        )}
      </form>
    </div>
  );
}
