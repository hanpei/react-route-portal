import * as React from 'react';
import { withFloating } from '../context/FloatingProvider';

const src1 =
  'https://images.unsplash.com/photo-1649516702655-e4ea2a1ea09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const src2 =
  'https://images.unsplash.com/photo-1650493134353-dab5042297ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';

export interface IImageProps {
  src: string;
  alt?: string;
}

export function Image() {
  const [src, setSrc] = React.useState(src1);
  const toggle = () => {
    if (src === src1) {
      setSrc(src2);
    } else {
      setSrc(src1);
    }
  };
  return (
    <img
      onClick={toggle}
      src={src}
      alt="img"
      className="w-full h-full object-cover block"
    />
  );
}

export const FloatingWithImage = withFloating(Image);
