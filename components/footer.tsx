"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-description">
              Powering tomorrow's world through innovative solutions. We are committed to creating a cleaner, efficient,
              and sustainable future for all.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li>
                <Link href="/acerca">Home</Link>
              </li>
              <li>
                <Link href="/acerca">About us</Link>
              </li>
              <li>
                <Link href="/productos">Service</Link>
              </li>
              <li>
                <Link href="/informacion">Testimonial</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>
                <Link href="/contacto">Get Help</Link>
              </li>
              <li>
                <Link href="/informacion">Our Story</Link>
              </li>
              <li>
                <Link href="/contacto">Our Client</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-links">
              <li>
                <a href="tel:+6281234567890">+62 812 3456 7890</a>
              </li>
              <li>
                <a href="mailto:hello@company.com">hello@company.com</a>
              </li>
              <li>Jalan Danau Sunter Utara, Sunter Jaya, Tanjung Priok Jakarta Utara 14350</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #0f172a;
          color: var(--color-white);
          padding: var(--spacing-3xl) 0 var(--spacing-xl);
        }
        
        .footer-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }
        
        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        
        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9375rem;
          line-height: 1.6;
          max-width: 400px;
        }
        
        .footer-heading {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-white);
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9375rem;
          transition: color 0.2s;
        }
        
        .footer-links a:hover {
          color: var(--color-white);
        }
        
        .footer-bottom {
          padding-top: var(--spacing-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }
        
        .social-link {
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.2s;
        }
        
        .social-link:hover {
          color: var(--color-white);
        }
        
        .social-link:focus-visible {
          outline: 2px solid var(--color-white);
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  )
}
