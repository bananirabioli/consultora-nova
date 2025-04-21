import { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const servicios = [
  {
    categoria: "Licencias Municipales",
    detalles: [
      "Licencias de funcionamiento por categorías: A, B, C y D",
      "Permisos Eventuales",
      "Levantamiento de clausuras",
      "Seguimiento de Infracciones",
      "Asesoramiento en establecimientos",
      "DTU (Dictamen trazos usos y destinos)",
      "Reconsideración de Uso de Suelo",
      "Dictamen de anuncio de centro histórico",
      "Licencias de anuncios",
      "Asesoría integral para apertura de tu negocio",
      "Auditorías internas municipales",
    ],
  },
  {
    categoria: "Protección Civil",
    detalles: [
      "Elaboración de plan interno de riesgos",
      "Cursos y capacitaciones de brigadas de protección civil",
      "Análisis de riesgos",
      "Cursos de manejo de montacargas. DC-3",
      "Venta y recarga de extintores y señalización de seguridad",
    ],
  },
  {
    categoria: "COFEPRIS",
    detalles: [
      "Aviso de publicidad web",
      "Aviso de funcionamiento con responsable sanitario",
    ],
  },
  {
    categoria: "Comisión Federal de Electricidad",
    detalles: [
      "Verificación eléctrica y carta UVIE acreditada",
      "Elaboración de plano unifilar",
      "Elaboración de cuadro de cargas",
      "Alta y baja de servicios (bifásico y trifásico)",
      "Obra civil",
    ],
  },
  {
    categoria: "Ecología y Medio Ambiente",
    detalles: [
      "Estudio y dictamen sonométrico",
      "Dictamen de Unidad Verificadora de Gas LP certificada",
      "Permiso de poda/derribo/tala",
    ],
  },
  {
    categoria: "Relaciones Exteriores",
    detalles: ["Citas para pasaporte mexicano"],
  },
  {
    categoria: "Obras Públicas y Ordenamiento del Territorio",
    detalles: [
      "Licencias de construcción",
      "Certificado de habitabilidad",
      "Cálculos estructurales por perito certificado",
      "Elaboración de proyectos arquitectónicos y planos",
      "Firma de bitácoras de DRO",
      "Dictamen técnico de anuncios",
      "DTU (Dictamen trazos usos y destinos)",
    ],
  },
  {
    categoria: "Registro Civil",
    detalles: [
      "Corrección de actas de Jalisco",
      "Apostille de actas de Jalisco",
      "Certificado de documentos del registro del estado de Jalisco",
      "Búsqueda de actas de Jalisco (nacimiento, defunción, matrimonio, etc.)",
      "Copias certificadas de instrumentos públicos",
      "Generación de guías de pago para registro público estado de Jalisco",
      "Certificación de CURP estado de Jalisco",
    ],
  },
  {
    categoria: "Servicios para PYMES",
    detalles: [
      "Elaboración de manual de procedimientos y de organización",
      "Consultoría de recursos humanos",
      "Análisis y mejora de procesos impulsados por IA",
    ],
  },
];

export default function Servicios() {
  useEffect(() => {
    document.title = "Servicios | Administrativo Nova";
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Nuestros Servicios</h1>
      <div className="space-y-4">
        {servicios.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>{item.categoria}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-blue-500 transition-transform duration-200 ${
                      open ? "rotate-180 transform" : "rotate-0"
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-700">
                  <ul className="list-disc list-inside space-y-1">
                    {item.detalles.map((detalle, i) => (
                      <li key={i}>{detalle}</li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}