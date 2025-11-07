"use client"

export default function GradientSeparator() {
  return (
    <div className="gradient-separator">
      <style jsx>{`
        .gradient-separator {
          position: relative;
          height: 200px;
          margin-top: -200px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 30%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 1) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  )
}
