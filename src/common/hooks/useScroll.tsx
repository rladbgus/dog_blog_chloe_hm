import { useEffect } from 'react';

function useScroll(sessionStorageKey: string, isScroll: boolean): void {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      sessionStorage.setItem(sessionStorageKey, String(currentScrollY));
    };

    const scrollPosition = Number(sessionStorage.getItem(sessionStorageKey));
    if (isScroll) {
      window.addEventListener('scroll', handleScroll);
      window.scrollTo(0, scrollPosition);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default useScroll;
