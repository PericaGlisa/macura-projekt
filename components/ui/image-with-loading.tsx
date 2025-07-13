'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from './skeleton';

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
}

export function ImageWithLoading({ src, alt, className, skeletonClassName }: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <Skeleton className={`absolute inset-0 ${skeletonClassName}`} />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}