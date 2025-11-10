"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="py-24 m-0"
      style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="text-white">
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight">
            Asesoramiento técnico personalizado
          </h2>
          <p className="text-base leading-relaxed text-white/90 mb-12">
            Nuestro equipo de ingenieros agrónomos brinda soporte integral a
            <br />
            productores y distribuidores, ofreciendo recomendaciones según tipo
            de cultivo, zona y condiciones climáticas.
          </p>
          <Link
            href="/contacto"
            className="group relative inline-flex items-center gap-0 pl-5.5 pr-2 py-2 bg-[#1a1a1a] text-white rounded-full text-[15px] font-normal transition-all hover:bg-[#022b3d] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(1,31,43,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Contactanos
            <div className="ml-5 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#011f2b] transition-transform group-hover:scale-105">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <img
            src="/person-installing-solar-panels-on-roof.jpg"
            alt="Professional installing solar panels"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  );
}
