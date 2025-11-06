"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ProductosContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("cat")
  const subcategory = searchParams.get("sub")

  return (
    <main className="page-main">
      <div className="page-container">
        {category && subcategory ? (
          <>
            <h1 className="page-title">
              {category} - {subcategory}
            </h1>
            <p className="page-description">Explorá nuestra selección de {subcategory.toLowerCase()}</p>
          </>
        ) : (
          <>
            <h1 className="page-title">Productos</h1>
            <p className="page-description">Explorá todos nuestros productos</p>
          </>
        )}
      </div>

      <style jsx>{`
        .page-main {
          min-height: calc(100vh - 200px);
          padding-top: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .page-container {
          text-align: center;
          padding: 0 var(--container-padding);
        }
        
        .page-title {
          font-size: 3rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--spacing-md);
        }
        
        .page-description {
          font-size: 1.125rem;
          color: var(--color-text-light);
        }
        
        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  )
}

export default function ProductosPage() {
  return (
    <Suspense
      fallback={
        <main className="page-main">
          <div className="page-container">
            <h1 className="page-title">Productos</h1>
          </div>
        </main>
      }
    >
      <ProductosContent />
    </Suspense>
  )
}
