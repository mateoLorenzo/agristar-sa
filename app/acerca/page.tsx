"use client"

export default function AcercaPage() {
  return (
    <main className="page-main">
      <div className="page-container">
        <h1 className="page-title">Acerca</h1>
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
