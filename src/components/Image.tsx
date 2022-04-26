import * as React from 'react';

const src =
  'https://images.unsplash.com/photo-1649516702655-e4ea2a1ea09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

const src2 =
  'https://images.unsplash.com/photo-1650493134353-dab5042297ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';

export interface IImageProps {
  src: string;
  alt?: string;
}

export function Image() {
  return (
    <img src={src} alt="img" className="w-full h-full object-cover block" />
  );
}
