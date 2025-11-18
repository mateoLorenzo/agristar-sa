"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    area: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede implementar la lógica de envío del formulario
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen pt-[120px] pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-4">
            Contacto
          </h1>
          <p className="text-lg text-[#6B7280]">Estamos aquí para ayudarte</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#1a1a1a] mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#659C39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#659C39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">
                      Dirección
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      Garibaldi 2619
                      <br />
                      B1834BCD Llavallol
                      <br />
                      Provincia de Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#659C39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#659C39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">
                      Teléfono
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      <a
                        href="tel:+541142312052"
                        className="hover:text-[#659C39] transition-colors"
                      >
                        (011) 4231-2052
                      </a>
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#659C39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#659C39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a1a] mb-1">
                      Horario de Atención
                    </h3>
                    <p className="text-sm text-[#6B7280]">
                      Lunes a Viernes
                      <br />
                      9:00 - 18:00 hs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm flex-1">
              <div className="w-full h-full min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5548770805686!2d-58.43397232346224!3d-34.76686637289836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sGaribaldi%202619%2C%20B1834BCD%20Llavallol%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Agri Star S.A."
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-2">
                Contáctenos
              </h2>
              <p className="text-[#6B7280] mb-8">
                Complete el formulario y nos pondremos en contacto con usted a
                la brevedad
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Sus Datos */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">
                    Sus datos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-[#374151]">
                        Nombre <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className="w-full h-11 px-4 border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Apellido */}
                    <div className="space-y-2">
                      <Label htmlFor="apellido" className="text-[#374151]">
                        Apellido <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="apellido"
                        type="text"
                        required
                        value={formData.apellido}
                        onChange={(e) =>
                          handleChange("apellido", e.target.value)
                        }
                        className="w-full h-11 px-4 border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#374151]">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full h-11 px-4 border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-[#374151]">
                        Teléfono <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="telefono"
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) =>
                          handleChange("telefono", e.target.value)
                        }
                        className="w-full h-11 px-4 border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Área */}
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-[#374151]">
                    Seleccionar área <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.area}
                    onValueChange={(value) => handleChange("area", value)}
                    required
                  >
                    <SelectTrigger className="w-full h-11 border-2 border-[#D1D5DB] shadow-sm hover:border-[#9CA3AF] focus:ring-2 focus:ring-[#659C39] focus:border-[#659C39] transition-all bg-white">
                      <SelectValue placeholder="Seleccione un área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnica">Técnica</SelectItem>
                      <SelectItem value="administrativo">
                        Administrativo
                      </SelectItem>
                      <SelectItem value="comercial-cuyo">
                        Comercial Zona Cuyo y Valle (Mendoza, San Luis, San
                        Juan, Rio Negro y Neuquén)
                      </SelectItem>
                      <SelectItem value="comercial-sur-ba">
                        Comercial Zona Sur Buenos Aires (Centro y sur de Buenos
                        Aires hasta Viedma)
                      </SelectItem>
                      <SelectItem value="comercial-norte-ba">
                        Comercial Zona Norte Buenos Aires y Santa Fe (Cinturón
                        Hortícola La Plata, San Pedro, Rosario y Santa Fe)
                      </SelectItem>
                      <SelectItem value="comercial-nea">
                        Comercial Zona Nea (Entre Ríos, Corrientes y Chaco)
                      </SelectItem>
                      <SelectItem value="comercial-noa">
                        Comercial Zona Noa (Santiago del Estero, Tucumán, Salta
                        Y Jujuy)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Su Consulta */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-[#374151]">
                    Su consulta <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                    placeholder="Escriba su consulta aquí..."
                    className="min-h-[150px] resize-none border-[#E5E7EB] focus:ring-2 focus:ring-[#659C39]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-[#000] hover:bg-[#000 text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Enviar consulta
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
