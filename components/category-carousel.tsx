"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"

const categories = [
  {
    name: "Fungicidas",
    image: "/fungicide-agricultural-spray-crops.jpg",
    date: "19 August 2025",
  },
  {
    name: "Insecticidas",
    image: "/insecticide-pest-control-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Herbicidas",
    image: "/herbicide-weed-control-farming.jpg",
    date: "19 August 2025",
  },
  {
    name: "Fertilizantes",
    image: "/fertilizer-soil-nutrients-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Coadyuvantes, Fitoreguladores y PGR",
    image: "/plant-growth-regulator-agriculture.jpg",
    date: "19 August 2025",
  },
  {
    name: "Fumigantes de suelo",
    image: "/soil-fumigation-agriculture-treatment.jpg",
    date: "19 August 2025",
  },
]

export default function CategoryCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScroll()
    container.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      container.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 340
    const targetScroll = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    })
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <p className="carousel-label">Subscribe</p>
          <h2 className="carousel-title">
            Catch up on today's top updates and the
            <br />
            stories that matter most
          </h2>
        </div>

        <div className="carousel-wrapper">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="carousel-nav carousel-nav-left"
            aria-label="Previous categories"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div ref={scrollContainerRef} className="carousel-track">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/productos?cat=Agroquímicos&sub=${encodeURIComponent(category.name)}`}
                className="category-card"
              >
                <div className="card-image-wrapper">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.name} category`}
                    className="card-image"
                  />
                  <div className="card-overlay" />
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                <div className="card-content">
                  <p className="card-date">{category.date}</p>
                  <h3 className="card-title">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="carousel-nav carousel-nav-right"
            aria-label="Next categories"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-footer">
          <Link href="/productos" className="show-all-link">
            Show All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .carousel-section {
          padding: var(--spacing-3xl) 0;
          background: var(--color-white);
        }
        
        .carousel-container {
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }
        
        .carousel-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }
        
        .carousel-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: var(--spacing-sm);
        }
        
        .carousel-title {
          font-size: 2.5rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }
        
        .carousel-wrapper {
          position: relative;
          margin-bottom: var(--spacing-xl);
        }
        
        .carousel-track {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0;
        }
        
        .carousel-track::-webkit-scrollbar {
          display: none;
        }
        
        .category-card {
          flex: 0 0 320px;
          scroll-snap-align: start;
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }
        
        .category-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .category-card:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        .card-image-wrapper {
          position: relative;
          height: 240px;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .category-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }
        
        .card-icon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-white);
          transition: all 0.3s;
        }
        
        .category-card:hover .card-icon {
          background: rgba(255, 255, 255, 0.3);
          transform: rotate(45deg);
        }
        
        .card-content {
          padding: 1.5rem;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-top: none;
        }
        
        .card-date {
          font-size: 0.875rem;
          color: var(--color-text-light);
          margin-bottom: 0.5rem;
        }
        
        .card-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.4;
        }
        
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          background: var(--color-white);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
          transition: all 0.2s;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .carousel-nav:hover:not(:disabled) {
          background: var(--color-text);
          color: var(--color-white);
          transform: translateY(-50%) scale(1.1);
        }
        
        .carousel-nav:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .carousel-nav:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        .carousel-nav-left {
          left: -24px;
        }
        
        .carousel-nav-right {
          right: -24px;
        }
        
        .carousel-footer {
          display: flex;
          justify-content: center;
        }
        
        .show-all-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          background: var(--color-text);
          color: var(--color-white);
          border-radius: 2rem;
          font-size: 0.9375rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        
        .show-all-link:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .show-all-link:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        
        @media (max-width: 768px) {
          .carousel-title {
            font-size: 1.75rem;
          }
          
          .carousel-nav {
            display: none;
          }
          
          .category-card {
            flex: 0 0 280px;
          }
        }
      `}</style>
    </section>
  )
}
