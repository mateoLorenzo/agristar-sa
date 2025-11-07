"use client"

import Link from "next/link"

export default function HomeHero() {
  return (
    <section className="hero">
      {/* Hero background image - maps to the wind turbine landscape in the template */}
      <div className="hero-background">
        <img src="/wind-turbines-in-green-landscape-aerial-view.jpg" alt="Wind turbines in a lush green landscape" className="hero-image" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Harnessing the Infinite
          <br />
          Power of Nature
        </h1>

        <p className="hero-subtitle">
          We are dedicated to providing cutting-edge renewable energy solutions that
          <br />
          not only meet today's energy demands but also ensure a sustainable future.
        </p>

        <div className="hero-actions">
          <Link href="/contacto" className="btn btn-primary">
            Get Started
          </Link>
          <Link href="/contacto" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0 var(--container-padding);
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 600;
          line-height: 1.1;
          color: var(--color-white);
          margin-bottom: var(--spacing-lg);
          letter-spacing: -0.02em;
        }
        
        .hero-subtitle {
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-xl);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          align-items: center;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;
          font-size: 0.9375rem;
          font-weight: 500;
          border-radius: 0.5rem;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .btn-primary {
          background: var(--color-white);
          color: var(--color-text);
        }
        
        .btn-primary:hover {
          background: rgba(255, 255, 255, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .btn-primary:focus-visible {
          outline: 2px solid var(--color-white);
          outline-offset: 2px;
        }
        
        .btn-outline {
          background: transparent;
          color: var(--color-white);
          border: 2px solid var(--color-white);
        }
        
        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .btn-outline:focus-visible {
          outline: 2px solid var(--color-white);
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
