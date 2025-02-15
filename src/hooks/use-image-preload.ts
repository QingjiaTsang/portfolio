import { useEffect } from 'react';

export function useImagePreload(imagePaths: string[]) {
  useEffect(() => {
    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = `/assets/projects${path}`;
    });
  }, [imagePaths]);
} 