"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, rootMargin]);

  return { ref: elementRef, isVisible };
}
