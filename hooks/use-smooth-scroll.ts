'use client';

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string) => {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const cleanId = elementId.replace('#', '');
      const element = document.getElementById(cleanId);
      
      if (element) {
        const headerHeight = 100; // Increased header height for better spacing
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }, []);

  return { scrollToElement };
}