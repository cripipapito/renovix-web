import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  { title: "Energía Fotovoltaica", key: "solar", path: "/solar" },
  { title: "Energía Eólica", key: "eolica", path: "/eolica" },
  { title: "Eficiencia Energética", key: "eficiencia", path: "/eficiencia" }
];

export default function RenovixPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Encabezado */}
      <header className="bg-white shadow-lg py-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-700">Renovix</h1>
      </header>

      {/* Sección de Servicios */}
      <section className="py-12 flex justify-center space-x-4">
        {services.map((service) => (
          <motion.div
            key={service.key}
            className="bg-white shadow-md p-6 rounded-lg cursor-pointer hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate(service.path)}
          >
            <h2 className="text-xl font-bold text-center">{service.title}</h2>
          </motion.div>
        ))}
      </section>

      {/* Formulario de Contacto */}
      <section className="text-center py-12 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input type="text" name="name" placeholder="Nombre" onChange={handleChange} className="p-2 w-64 rounded-md" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="p-2 w-64 rounded-md" />
          <textarea name="message" placeholder="Mensaje" onChange={handleChange} className="p-2 w-64 rounded-md" />
          <button type="submit" className="bg-white text-blue-700 px-4 py-2 rounded-md font-bold">Enviar</button>
        </form>
        {submitted && <p className="mt-4 text-green-300">¡Mensaje enviado con éxito!</p>}
      </section>
    </div>
  );
}
