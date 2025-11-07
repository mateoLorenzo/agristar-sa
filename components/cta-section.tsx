"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="bg-[#011F2B] py-24 m-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="text-white">
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight mb-8 tracking-tight">
            Became Our Member
          </h2>
          <p className="text-base leading-relaxed text-white/90 mb-12">
            Became our member and save the team with sustainable energy
            <br />
            from the sun going solar means reducing your carbon
          </p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full text-[0.9375rem] font-medium transition-all hover:bg-[#1a1a1a]/90 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            Get Started
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#1a1a1a]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
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
  )
}
