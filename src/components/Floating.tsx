import * as React from 'react';

export interface IFloatingProps {
  children: React.ReactNode;
  attrs: any;
}

export function Floating(props: IFloatingProps) {
  const { cls, ...others } = props.attrs;

  console.log(others);
  return (
    <div
      style={{
        ...others,
        position: 'absolute',
        overflow: 'hidden',
        transition: 'all .5s ease-in-out',
        transform: 'translate3d(0,0,0)',
      }}
      className={cls}
    >
      {props.children}
    </div>
  );
}
