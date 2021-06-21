import { useEffect } from 'react';

function useScrollMove(sessionStorageKey: string, isScroll: boolean): void {
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('🚀 ~ currentScrollY', currentScrollY);
      sessionStorage.setItem(sessionStorageKey, currentScrollY);
    };

    const scrollPosition = Number(sessionStorage.getItem(sessionStorageKey));
    if (isScroll) {
      window.addEventListener('scroll', handleScroll);
      window.scrollTo(0, scrollPosition);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default useScrollMove;
