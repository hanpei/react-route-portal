import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { FloatingContext } from '../context/FloatingProvider';

export interface IFloatingProps {
  children: React.ReactNode;
}

export function Floating(props: IFloatingProps) {
  const ctx = useContext(FloatingContext);

  const { cls, ...others } = ctx.props;
  const landDom = document.querySelector('#container')!;
  const flyDom = document.querySelector('#portal')!;
  const [land, setLand] = useState(false);

  const loc = useLocation();

  React.useEffect(() => {
    return () => {
      setLand(false);
    };
  }, [loc]);

  React.useEffect(() => {
    land ? console.log('land') : console.log('fly');
  }, [land]);

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
      onTransitionEnd={() => {
        setLand(true);
      }}
    >
      <Conditional active={land} dom={landDom} dom2={flyDom}>
        {props.children}
      </Conditional>

      <div id="portal"></div>
    </div>
  );
}

export const Conditional = (props: any) => {
  const [targetElement] = useState(() => document.createElement('div'));
  useEffect(() => {
    if (props.active) {
      props.dom && props.dom.appendChild(targetElement);
    } else {
      props.dom2 && props.dom2.appendChild(targetElement);
    }
  }, [props.active, props.dom, props.dom2, targetElement]);
  return <>{createPortal(props.children, targetElement)}</>;
};
