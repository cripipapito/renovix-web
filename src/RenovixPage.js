import { useState } from "react";
import { motion } from "framer-motion";

export default function RenovixPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!form.name || !form.email || !form.message) {
      alert("Por favor, completa todos los campos.");
      e.preventDefault();
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

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-700 text-white">
        <h1 className="text-5xl font-extrabold">Energía Limpia para un Futuro Sostenible</h1>
        <p className="mt-4 text-lg">Únete al cambio con soluciones ecológicas y eficientes.</p>
      </section>

      {/* Formular
