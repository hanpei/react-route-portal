import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { FloatingContext } from '../context/FloatingProvider';

export interface IFloatingProxyProps {
  className?: string;
}

export function FloatingProxy(props: IFloatingProxyProps) {
  const { className } = props;
  const ctx = useContext(FloatingContext);
  const update = ctx.setProps;

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    let rect = ref?.current?.getBoundingClientRect();
    if (rect) {
      const { width, height, top, left } = rect;
      update({ width, height, top, left, cls: className });
    }
  }, [update, ref, className]);

  return <div ref={ref} className={className}></div>;
}
