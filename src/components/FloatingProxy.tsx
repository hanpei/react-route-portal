import * as React from 'react';
import { useEffect, useRef } from 'react';

export interface IFloatingProxyProps {
  className?: string;
  setAttrs: React.Dispatch<React.SetStateAction<{}>>;
}

export function FloatingProxy(props: IFloatingProxyProps) {
  const ref = useRef<HTMLInputElement>(null);
  const { setAttrs, className } = props;
  useEffect(() => {
    setTimeout(() => {
      let rect = ref?.current?.getBoundingClientRect();
      console.log(rect);
      const { width, height, top, left } = rect!;

      setAttrs({ width, height, top, left, cls: className });
    }, 200);
  }, [setAttrs, ref, className]);

  return (
    <div
      ref={ref}
      className={props.className}
      style={{ background: 'gray' }}
    ></div>
  );
}
