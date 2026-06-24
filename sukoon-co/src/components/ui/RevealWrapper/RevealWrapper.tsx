import React, { useEffect, useRef, useState } from 'react';

interface RevealWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: React.ElementType;
  [key: string]: any;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  className = '',
  delay,
  as: Tag = 'div',
  ...rest
}) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? `d${delay}` : '';
  const classes = ['reveal', visible ? 'visible' : '', delayClass, className]
    .filter(Boolean)
    .join(' ');

  return React.createElement(Tag as string, { ref, className: classes, ...rest }, children);
};

export default RevealWrapper;
