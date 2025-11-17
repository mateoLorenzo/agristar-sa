"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function HomeHero() {
  const title = useScrollAnimation({ delay: 0.2 });
  const subtitle = useScrollAnimation({ delay: 0.3 });
  const buttons = useScrollAnimation({ delay: 0.4 });
  const chevron = useScrollAnimation({ delay: 0.6 });

  const handleScrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight - 50,
      behavior: "smooth",
    });
  };

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

      <div className="relative z-[1] text-center px-6 md:px-12 max-w-[1100px] mx-auto">
        {/* Animated Title */}
        <div
          ref={title.ref}
          style={{
            opacity: title.isVisible ? 1 : 0,
            transform: title.isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.2] text-white mb-8 tracking-tight"
            style={{
              textShadow:
                "0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <span className="block">Evolución para su cultivo</span>
            <span className="block whitespace-nowrap">
              Eficiencia, rendimiento y confianza
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div
          ref={subtitle.ref}
          style={{
            opacity: subtitle.isVisible ? 1 : 0,
            transform: subtitle.isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <p className="text-lg leading-relaxed text-white/90 mb-12 max-w-[700px] mx-auto">
            Innovamos en agroquímicos y bioinsumos para lograr cultivos más
            <br />
            sanos, productivos y sustentables.
          </p>
        </div>

        {/* Animated Buttons */}
        <div
          ref={buttons.ref}
          style={{
            opacity: buttons.isVisible ? 1 : 0,
            transform: buttons.isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
          }}
        >
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link
              href="/productos?cat=Línea Bio"
              className="inline-flex items-center justify-center px-8 py-4 text-[0.9375rem] font-medium rounded-lg transition-all bg-white text-[#1a1a1a] hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 w-full md:w-auto"
            >
              Nueva línea BIO
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-[0.9375rem] font-medium rounded-lg transition-all bg-transparent text-white border-2 border-white hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 w-full md:w-auto"
            >
              Contactanos
            </Link>
          </div>
        </div>
      </div>

      {/* Animated Chevron for scroll to next section */}
      <div
        ref={chevron.ref}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[2]"
        style={{
          opacity: chevron.isVisible ? 1 : 0,
          transform: chevron.isVisible
            ? "translate(-50%, 0)"
            : "translate(-50%, -20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <button
          onClick={handleScrollToNext}
          className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded"
          aria-label="Scroll a la siguiente sección"
        >
          {/* <span className="text-sm font-light tracking-wide">Explorar</span> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </section>
  );
}
