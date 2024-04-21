// ImageOptimizer.js
import React from 'react';
import imageCompression from 'browser-image-compression'; // Library for image compression

const ImageOptimizer = async (imageFile) => {
  try {
    // Compression options
    const options = {
      maxSizeMB: 1,          // Max size in megabytes
      maxWidthOrHeight: 1920, // Max width or height
      useWebWorker: true,    // Use web worker for compression
    };

    // Compress the image
    const compressedFile = await imageCompression(imageFile, options);

    return compressedFile; // Return the compressed image data
  } catch (error) {
    console.error('Image optimization error:', error);
    return null;
  }
};

export default ImageOptimizer;
