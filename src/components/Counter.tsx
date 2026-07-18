import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const range = end - start;
    let current = start;
    const increment = end > 1000 ? Math.ceil(range / 60) : Math.ceil(range / 100);
    const stepTime = Math.abs(Math.floor(duration / (range / increment)));

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, Math.max(stepTime, 16)); // Target 60fps or slow it down for small numbers

    return () => clearInterval(timer);
  }, [hasStarted, value]);

  // Format big numbers
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + ',000';
    }
    return num.toString();
  };

  return (
    <span ref={elementRef} className="font-sans font-bold tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
