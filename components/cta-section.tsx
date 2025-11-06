"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Became Our Member</h2>
          <p className="cta-description">
            Became our member and save the team with sustainable energy
            <br />
            from the sun going solar means reducing your carbon
          </p>
          <Link href="/contacto" className="cta-button">
            Get Started
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="cta-image-wrapper">
          <img src="/person-installing-solar-panels-on-roof.jpg" alt="Professional installing solar panels" className="cta-image" />
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, #1e3a5f 0%, #2d5a7b 100%);
          padding: var(--spacing-3xl) 0;
          margin: var(--spacing-3xl) 0;
        }
        
        .cta-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--container-padding);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }
        
        .cta-content {
          color: var(--color-white);
        }
        
        .cta-title {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: var(--spacing-lg);
          letter-spacing: -0.02em;
        }
        
        .cta-description {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-xl);
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--color-white);
          color: var(--color-text);
          border-radius: 2rem;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .cta-button:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        
        .cta-button:focus-visible {
          outline: 2px solid var(--color-white);
          outline-offset: 2px;
        }
        
        .cta-image-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .cta-image {
          width: 100%;
          height: auto;
          display: block;
        }
        
        @media (max-width: 1024px) {
          .cta-container {
            grid-template-columns: 1fr;
          }
          
          .cta-title {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  )
}
