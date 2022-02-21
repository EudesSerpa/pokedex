import { useState, useEffect, useRef } from "react";

export function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const fromRef = useRef(null);

  useEffect(() => {
    let observer;

    let element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries, observer) => {
      const target = entries[0];

      if (target.isIntersecting) {
        setIsVisible(true);
        once && observer.disconnect();
      } else {
        !once && setIsVisible(false);
      }
    };

    // Polyfill by IE
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer && observer.disconnect();
  }, [distance, externalRef, once]);

  return { isVisible, fromRef };
}
