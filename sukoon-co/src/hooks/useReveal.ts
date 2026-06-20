import { useEffect, useRef, useState, useCallback, MutableRefObject } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useReveal = (options: UseRevealOptions = {}) => {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    (ref as MutableRefObject<HTMLElement | null>).current = node;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref: setRef, isVisible };
};
