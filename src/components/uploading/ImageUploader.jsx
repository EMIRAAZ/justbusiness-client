import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageOptimizer from './ImageOptimizer';
import LazyImage from './LazyImage';

const ImageUploader = ({ accept, maxSize, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.size <= maxSize) {
      const optimizedImage = await ImageOptimizer(file);
      setSelectedFile(optimizedImage);
    } else {
      console.error('File size exceeds the limit');
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Perform image upload here
      onUpload(selectedFile);
    } else {
      console.error('No file selected');
    }
  };

  return (
    <div>
      <input type="file" accept={accept} onChange={handleFileChange} />
      {selectedFile && <LazyImage src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" />}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

ImageUploader.propTypes = {
  accept: PropTypes.string,
  maxSize: PropTypes.number,
  onUpload: PropTypes.func.isRequired,
};

ImageUploader.defaultProps = {
  accept: 'image/*',
  maxSize: 10 * 1024 * 1024,
};

export default ImageUploader;
