import { FloatingProxy } from '../components/FloatingProxy';
import { Floating } from '../components/Floating';

export function withFloating(WrappedComponent: React.ComponentType<any>) {
  const FloatingContainer = () => (
    <Floating>
      <WrappedComponent />
    </Floating>
  );
  return {
    FloatingContainer,
    FloatingProxy,
  };
}
