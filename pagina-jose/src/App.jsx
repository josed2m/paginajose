import { useState } from "react";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Star,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";
import fotoJose from "./assets/foto-jose.png";
import logoSanIsidro from "./assets/logo-san-isidro.png";
import logoSantaTeresa from "./assets/logo-santa-teresa.png";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio" },
  { id: "educacion", label: "Educación" },
  { id: "contacto", label: "Contacto" },
];

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-200 last:border-b-0">
      <Icon className="w-5 h-5 text-indigo-900 mt-0.5 flex-shrink-0" />
      <p className="text-sm text-gray-700">
        <span className="font-semibold text-gray-900">{label}: </span>
        {value}
      </p>
    </div>
  );
}

function EducationItem({ years, title, text, badgeColor, logo }) {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-b-0">
      <div
        className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden ${
          logo ? "bg-white border border-gray-200" : badgeColor
        }`}
      >
        {logo ? (
          <img
            src={logo}
            alt={`Logo de ${title}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <GraduationCap className="w-7 h-7 text-white" />
        )}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">
          {title}{" "}
          <span className="font-normal text-gray-500 text-sm">({years})</span>
        </h3>
        <p className="text-sm text-gray-700 mt-1 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ContactRow({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-800">
      <Icon className="w-4 h-4 text-indigo-900 flex-shrink-0" />
      <span>{value}</span>
    </div>
  );
}

function Inicio() {
  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-md overflow-hidden flex-shrink-0 mx-auto sm:mx-0 border border-gray-200">
          <img
            src={fotoJose}
            alt="Foto de José Martínez"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center sm:text-left">
            José Martínez
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed">
            Soy un estudiante de Ingeniería en Sistemas de 21 años, originario
            de La Ceiba. Me caracterizo por ser una persona activa, con
            liderazgo y muchas ideas para resolver problemas. Tengo interés en
            especializarme en el área de redes y ciberseguridad. Además,
            cuento con experiencia en atención al cliente y manejo de
            diferentes tecnologías, lo que me permite adaptarme fácilmente a
            distintos entornos de trabajo.
          </p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md mb-6">
        <InfoRow icon={Calendar} label="Fecha de Nacimiento" value="18 de Mayo de 2005" />
        <InfoRow
          icon={MapPin}
          label="Ubicación (Donde resido)"
          value="La Ceiba, Atlántida, Honduras"
        />
        <InfoRow icon={GraduationCap} label="Carrera" value="Ing. Sistemas" />
      </div>

      <div className="border border-gray-200 rounded-md p-4">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          <h2 className="font-bold text-gray-900">Habilidades</h2>
        </div>
        <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
          <li>Dominio de inglés y español</li>
          <li>Liderazgo y trabajo en equipo</li>
          <li>Conocimiento en programación</li>
          <li>Manejo de bases de datos</li>
          <li>Conocimientos en redes</li>
          <li>Experiencia en atención al cliente</li>
          <li>Capacidad de resolución de problemas</li>
        </ul>
      </div>
    </div>
  );
}

function Educacion() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Educación</h1>
      <div className="border border-gray-200 rounded-md px-4">
        <EducationItem
          years="2009-2010"
          title="Prekinder - Kinder"
          logo={logoSanIsidro}
          text="Realicé mis estudios iniciales en el Kinder Bilingüe Parroquial San Isidro, donde desarrollé mis primeras habilidades académicas en un entorno bilingüe y formativo."
        />
        <EducationItem
          years="2011-2019"
          title="Primaria - Secundaria"
          logo={logoSanIsidro}
          text="Cursé mi educación primaria y secundaria en el CEB Parroquial San Isidro. Durante este periodo destaqué académicamente, obteniendo medalla de oro de forma consecutiva desde primer grado hasta noveno grado. Además, obtuve mi diploma de educación básica al finalizar este nivel."
        />
        <EducationItem
          years="2019-2023"
          title="Bachillerato"
          logo={logoSantaTeresa}
          text="Realicé mis estudios de bachillerato en la Escuela Bilingüe Santa Teresa, donde obtuve el título de Bachiller en Ciencias y Humanidades Internacionales. Mantuve un promedio de 3.9 GPA, logrando el segundo lugar de mi promoción."
        />
      </div>
    </div>
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Contacto</h1>

      <div className="border border-gray-200 rounded-md p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ContactRow icon={Phone} value="+504 9868-8146" />
          <ContactRow icon={Twitter} value="josedmartinez" />
          <ContactRow icon={Facebook} value="josedaniel_2mp" />
          <ContactRow icon={MessageCircle} value="martinez.mp" />
          <ContactRow icon={Instagram} value="josed_2m" />
          <ContactRow icon={Mail} value="josedaniel.mmeza@gmail.com" />
        </div>
      </div>

      <h2 className="font-bold text-gray-900 mb-3">Envíame un mensaje</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-900 text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-indigo-800 transition-colors"
        >
          Enviar mensaje
        </button>
        {enviado && (
          <p className="text-sm text-green-700 font-medium">
            ¡Mensaje enviado con éxito!
          </p>
        )}
      </form>
    </div>
  );
}

export default function PaginaPersonal() {
  const [page, setPage] = useState("inicio");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white rounded-md shadow-lg overflow-hidden">
        {/* Header / Nav */}
        <header className="bg-indigo-900 px-5 py-4 flex items-center justify-between">
          <span className="text-white font-bold text-lg">Página Personal</span>
          <nav className="flex gap-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-medium transition-colors ${
                  page === item.id
                    ? "text-white underline underline-offset-4"
                    : "text-indigo-200 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>

        {/* Content */}
        <main className="min-h-[420px]">
          {page === "inicio" && <Inicio />}
          {page === "educacion" && <Educacion />}
          {page === "contacto" && <Contacto />}
        </main>

        {/* Footer */}
        <footer className="bg-indigo-900 px-5 py-4 text-center">
          <p className="text-indigo-100 italic text-sm">
            "Enfocado en crecimiento profesional y aprendizaje constante"
          </p>
        </footer>
      </div>
    </div>
  );
}
