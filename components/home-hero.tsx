"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image - maps to the wind turbine landscape in the template */}
      <div className="absolute inset-0 z-0">
        <img
          // src="/wind-turbines-in-green-landscape-aerial-view.jpg" // TODO: Change to the actual image
          src="/hero-image.jpg"
          alt="Wind turbines in a lush green landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-[1] text-center px-6 md:px-12 max-w-[900px] mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-medium leading-[1.1] text-white mb-8 tracking-tight">
          Evolución para su cultivo
          <br />
          Eficiencia, rendimiento y confianza
        </h1>

        <p className="text-lg leading-relaxed text-white/90 mb-12 max-w-[700px] mx-auto">
          Innovamos en agroquímicos y bioinsumos para lograr cultivos más
          <br />
          sanos, productivos y sustentables.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/productos?cat=Línea Bio"
            className="inline-flex items-center justify-center px-8 py-4 text-[0.9375rem] font-medium rounded-lg transition-all bg-white text-[#1a1a1a] hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 w-full md:w-auto"
          >
            Conozca nuestra línea BIO
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-[0.9375rem] font-medium rounded-lg transition-all bg-transparent text-white border-2 border-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 w-full md:w-auto"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}
