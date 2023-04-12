import { useEffect } from 'react';

export function useWindowEventLisenter(event: string, on: EventListener) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(event, on);
    }
    return () => {
      window.removeEventListener(event, on);
    };
  }, [event, on]);
}
