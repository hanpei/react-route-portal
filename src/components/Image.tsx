import * as React from 'react';

export interface IImageProps {
  src: string;
  alt?: string;
}

export function Image({ src, alt = 'img' }: IImageProps) {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover block" />
  );
}
