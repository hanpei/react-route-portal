import * as React from 'react';
import { useContext } from 'react';
import { FloatingContext } from '../context/FloatingProvider';

export interface IFloatingProps {
  children: React.ReactNode;
}

export function Floating(props: IFloatingProps) {
  const ctx = useContext(FloatingContext);
  console.log(ctx.props);
  const { cls, ...others } = ctx.props;
  return (
    <div
      style={{
        ...others,
        position: 'absolute',
        overflow: 'hidden',
        transition: 'all .5s ease',
        transform: 'translateZ(0)',
      }}
      className={cls as string}
    >
      {props.children}
    </div>
  );
}
