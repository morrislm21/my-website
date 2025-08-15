import { useEffect } from 'react';

/**
 * Hook to reveal an element on scroll using IntersectionObserver.
 * @param {React.RefObject} ref - The ref of the element to observe.
 * @param {string} className - The class to add when element becomes visible (default: "visible").
 * @param {number} threshold - Intersection threshold (default: 0.2)
 */
export default function useScrollReveal(ref, className = 'visible', threshold = 0.2) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, className, threshold]);
}
