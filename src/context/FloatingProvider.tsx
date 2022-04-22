import * as React from 'react';
import { useContext } from 'react';

type Ctx = {
  props: Record<string, unknown>;
  setProps: React.Dispatch<React.SetStateAction<{}>>;
};

type FloatingProviderProps = {
  children: React.ReactNode;
};

export const FloatingContext = React.createContext<Ctx>({
  props: {},
  setProps: () => {},
});

export function FloatingProvider({ children }: FloatingProviderProps) {
  const [props, setProps] = React.useState({});
  return (
    <FloatingContext.Provider
      value={{
        props,
        setProps,
      }}
    >
      {children}
    </FloatingContext.Provider>
  );
}

export interface IFloatingProps {
  children: React.ReactNode;
}

export function withFloating(WrappedComponent: React.ComponentType<any>) {
  return function Floating() {
    const ctx = useContext(FloatingContext);

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
        <WrappedComponent />
      </div>
    );
  };
}
