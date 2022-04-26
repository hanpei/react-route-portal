import { FloatingProxy } from '../components/FloatingProxy';
import { Floating } from '../components/Floating';

export function withFloating(WrappedComponent: React.ComponentType<any>) {
  const FloatingContainer = ({ props }: any) => {
    return (
      <Floating {...props}>
        <WrappedComponent {...props} />
      </Floating>
    );
  };
  return {
    FloatingContainer,
    FloatingProxy,
  };
}
