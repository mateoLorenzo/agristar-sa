"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function CTASection() {
  // Animaciones escalonadas para elementos de texto
  const titleAnimation = useScrollAnimation({ delay: 0 });
  const descriptionAnimation = useScrollAnimation({ delay: 0.15 });
  const buttonAnimation = useScrollAnimation({ delay: 0.3 });
  const imageAnimation = useScrollAnimation({ delay: 0 });

  return (
    <section
      className="py-16 md:py-20 lg:py-24 m-0"
      style={{
        // background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%)",
        // background: "linear-gradient(135deg, #659C39 0%, #4c752b 100%)",
        background: "linear-gradient(135deg, #273E3D 0%, #1d2d2c 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="text-white order-2 lg:order-1">
          <h2
            ref={titleAnimation.ref}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-6 md:mb-8 tracking-tight"
            style={{
              opacity: titleAnimation.isVisible ? 1 : 0,
              transform: titleAnimation.isVisible
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Calidad única
          </h2>
          <p
            ref={descriptionAnimation.ref}
            className="text-sm sm:text-base font-light leading-relaxed text-white/90 mb-8 md:mb-12 max-w-[540px]"
            style={{
              opacity: descriptionAnimation.isVisible ? 1 : 0,
              transform: descriptionAnimation.isVisible
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Nuestro equipo de ingenieros agrónomos brinda soporte integral a
            productores y distribuidores, ofreciendo recomendaciones según tipo
            de cultivo, zona y condiciones climáticas.
          </p>
          <div
            ref={buttonAnimation.ref}
            style={{
              opacity: buttonAnimation.isVisible ? 1 : 0,
              transform: buttonAnimation.isVisible
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <Link
              href="/contacto"
              className="group relative inline-flex items-center gap-0 pl-5 sm:pl-5.5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 bg-[#0f1c1d] text-white rounded-full text-sm sm:text-[15px] font-normal transition-all hover:bg-[#0d191a] active:scale-95 sm:hover:-translate-y-0.5 hover:shadow-[0_5px_25px_rgba(1,31,43,0.3)] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Contactanos
              <div className="ml-3 sm:ml-5 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-[#011f2b] transition-transform group-hover:scale-105">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="sm:w-[17px] sm:h-[17px]"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageAnimation.ref}
          className="rounded-xl md:rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] aspect-square max-w-[500px] mx-auto lg:mx-0 w-full order-1 lg:order-2"
          style={{
            opacity: imageAnimation.isVisible ? 1 : 0,
            transform: imageAnimation.isVisible
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <img
            // src="/person-installing-solar-panels-on-roof.jpg"
            src="/image-1.jpg"
            alt="Professional installing solar panels"
            // className="w-full h-auto block"
            className="h-full w-full block object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
