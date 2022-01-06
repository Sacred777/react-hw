import {useEffect, useRef} from "react";

export function useHandlerOnEvent(func: (() => void) | undefined) {
  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClick(event: MouseEvent) {
        if (event.target instanceof Node && !ref.current?.contains(event.target)) {
          func?.();
        }
      }

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      }
    }, []);

    return [ref];
}