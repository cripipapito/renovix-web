import { useState } from "react";
import { motion } from "framer-motion";

export default function RenovixPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // URLs de imágenes desde un repositorio confiable
  const images = {
    solar: "https://raw.githubusercontent.com/tu-repo/imagenes/main/solar.jpg",
    eolica: "https://raw.githubusercontent.com/tu-repo/imagenes/main/eolica.jpg",
    eficiencia: "https://raw.githubusercontent.com/tu-repo/imagenes/main/eficiencia.jpg"
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Encabezado */}
      <header className="bg-white shadow-lg py-6 flex flex-col items-center">
        <img src="https://raw.githubusercontent.com/tu-repo/imagenes/main/logo.png" 
             alt="Renovix Logo" 
             className="h-20 w-auto mb-2" />
        <h1 className="text-4xl font-bold text-blue-700">Renovix</h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-700 text-white">
        <h1 className="text-5xl font-extrabold">Energía Limpia para un Futuro Sostenible</h1>
        <p className="mt-4 text-lg">Únete al cambio con soluciones ecológicas y eficientes.</p>
      </section>

      {/* Servicios */}
      <section className="container mx-auto py-12 grid md:grid-cols-3 gap-8 text-center">
        {[
          { title: "Energía Fotovoltaica", key: "solar" },
          { title: "Energía Eólica", key: "eolica" },
          { title: "Eficiencia Energética", key: "eficiencia" }
        ].map((service, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={images[service.key]} alt={service.title} className="w-full h-48 object-cover rounded-lg" onError={(e) => e.target.style.display='none'} />
            <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
          </motion.div>
        ))}
      </section>

      {/* Formulario de contacto */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">¿Listo para hacer el cambio?</h2>
        <p className="mt-4 text-lg">Déjanos tus datos y te contactaremos para ofrecerte una asesoría personalizada.</p>
        <form className="mt-6 max-w-lg mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="Tu Nombre" 
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
          />
          <input 
            type="email" 
            placeholder="Correo Electrónico" 
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
            onChange={(e) => setForm({ ...form, email: e.target.value })} 
          />
          <textarea 
            placeholder="Cuéntanos sobre tu proyecto" 
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400 h-32"
            onChange={(e) => setForm({ ...form, message: e.target.value })} 
          />
          <button className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800">
            Solicitar Asesoría
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        © 2025 Renovix - Energía para un futuro brillante
      </footer>
    </div>
  );
}
