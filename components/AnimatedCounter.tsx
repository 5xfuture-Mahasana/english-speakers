'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

type Props = {
  value: string; // e.g. "10k+", "36+", "100%", "Ph.D."
  className?: string;
};

function parseValue(raw: string): { num: number; prefix: string; suffix: string } | null {
  const match = raw.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return null;
  return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] };
}

export default function AnimatedCounter({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(value);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!isInView || !parsed) return;
    const { num, prefix, suffix } = parsed;
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const count = Math.round(eased * num);
      setDisplay(`${prefix}${count}${suffix}`);
      if (current >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isInView]);

  return <span ref={ref} className={className}>{display}</span>;
}
