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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.nombre,
          lastName: formData.apellido,
          email: formData.email,
          phone: formData.telefono,
          area: formData.area,
          message: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Consulta enviada correctamente. Nos pondremos en contacto pronto.",
        });
        // Limpiar el formulario
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          area: "",
          mensaje: "",
        });
      } else {
        throw new Error(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Hubo un error al enviar la consulta. Por favor, inténtelo nuevamente.",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-2 md:mb-4">
            Contacto
          </h1>
          <p className="text-base md:text-lg text-[#6B7280]">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Form - Primero en mobile, segundo en desktop */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-xl md:rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 md:p-10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-2">
                Contáctenos
              </h2>
              <p className="text-sm md:text-base text-[#6B7280] mb-6 md:mb-8">
                Complete el formulario y nos pondremos en contacto con usted a
                la brevedad
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Sus Datos */}
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[#1a1a1a] mb-3 md:mb-4">
                    Sus datos
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="nombre"
                        className="text-sm md:text-base text-[#374151]"
                      >
                        Nombre <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => handleChange("nombre", e.target.value)}
                        className="w-full h-10 md:h-11 px-3 md:px-4 text-sm md:text-base border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Apellido */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="apellido"
                        className="text-sm md:text-base text-[#374151]"
                      >
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
                        className="w-full h-10 md:h-11 px-3 md:px-4 text-sm md:text-base border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm md:text-base text-[#374151]"
                      >
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full h-10 md:h-11 px-3 md:px-4 text-sm md:text-base border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Teléfono */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="telefono"
                        className="text-sm md:text-base text-[#374151]"
                      >
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
                        className="w-full h-10 md:h-11 px-3 md:px-4 text-sm md:text-base border border-[#E5E7EB] rounded-lg bg-white text-[#111] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#659C39] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Área */}
                <div className="space-y-2">
                  <Label
                    htmlFor="area"
                    className="text-sm md:text-base text-[#374151]"
                  >
                    Seleccionar área <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.area}
                    onValueChange={(value) => handleChange("area", value)}
                    required
                  >
                    <SelectTrigger className="w-full h-10 md:h-11 text-sm md:text-base border-2 border-[#D1D5DB] shadow-sm hover:border-[#9CA3AF] focus:ring-2 focus:ring-[#659C39] focus:border-[#659C39] transition-all bg-white">
                      <SelectValue placeholder="Seleccione un área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tecnica">Técnica</SelectItem>
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
                  <Label
                    htmlFor="mensaje"
                    className="text-sm md:text-base text-[#374151]"
                  >
                    Su consulta <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={(e) => handleChange("mensaje", e.target.value)}
                    placeholder="Escriba su consulta aquí..."
                    className="min-h-[120px] md:min-h-[150px] text-sm md:text-base resize-none border-[#E5E7EB] focus:ring-2 focus:ring-[#659C39]"
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-3 md:p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <p
                      className={`text-xs md:text-sm ${
                        submitStatus.type === "success"
                          ? "text-green-800"
                          : "text-red-800"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#000] hover:bg-[#111] text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 active:scale-95"
                >
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information - Segundo en mobile, primero en desktop */}
          <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-6">
            <div className="bg-white rounded-xl md:rounded-2xl border border-[#E5E7EB] p-5 md:p-6 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-5 md:mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-5 md:space-y-6">
                {/* Dirección */}
                <div className="flex gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#659C39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#659C39]"
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
                    <h3 className="text-sm md:text-base font-semibold text-[#1a1a1a] mb-1">
                      Dirección
                    </h3>
                    <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed">
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

                {/* Horario */}
                <div className="flex gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 bg-[#659C39]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-[#659C39]"
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
                    <h3 className="text-sm md:text-base font-semibold text-[#1a1a1a] mb-1">
                      Horario de Atención
                    </h3>
                    <p className="text-xs md:text-sm text-[#6B7280]">
                      Lunes a Viernes
                      <br />
                      9:00 - 18:00 hs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl md:rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm flex-1">
              <div className="w-full h-full min-h-[250px] md:min-h-[300px]">
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
        </div>
      </div>
    </main>
  );
}
