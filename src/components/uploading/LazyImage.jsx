// LazyImage.js
import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px 200px 0px', // Adjust rootMargin as needed
      }
    );

    observer.observe(document.querySelector(`#image-${src}`));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [src]);

  useEffect(() => {
    if (isVisible && !imageSrc) {
      setImageSrc(src);
    }
  }, [isVisible, imageSrc, src]);

  return (
    <img
      id={`image-${src}`}
      src={imageSrc ? imageSrc : ''}
      alt={alt}
    />
  );
};

export default LazyImage;
