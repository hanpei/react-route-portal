import * as React from 'react';

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
