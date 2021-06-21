import { useEffect } from 'react';

export default function useScrollMove(
  sessionStorageKey: string,
  setCondition: boolean
): void {
  // const [scrollYStorage, setScrollYStorage] = useState<number>(0);

  useEffect(() => {
    console.log('페이지 들어왔을때');
    const scrollPosition = sessionStorage.getItem(sessionStorageKey);
    console.log('🚀 ~ scrollPosition', scrollPosition);
    // setScrollYStorage(scrollPosition);

    if (setCondition) {
      window.scrollTo(0, scrollPosition);
    }
  }, [setCondition]);

  useEffect(() => {
    return () => {
      console.log('페이지 나갈때');
      console.log('🚀 ~ scrollY', window.scrollY);
      console.log('🚀 ~ pageYOffset', window.pageYOffset);
      sessionStorage.setItem(sessionStorageKey, window.pageYOffset);
    };
  }, []);
}
