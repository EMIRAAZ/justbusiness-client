import React, { useRef, useState } from "react";

function UploadingImage({
  maxSize = 10 * 1024 * 1024,
  onError,
  isLoading,
  previewUrl,
  selectedFile,
}) {
  const uploadImage = useRef(null);
  const uploadImageButton = () => uploadImage.current.click();

  const hanldeUploading = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= maxSize) {
      selectedFile(file);
      previewUrl(URL.createObjectURL(file)); // Preview the selected image
    } else {
      onError("File size exceeds the limit, maximu is 1MB");
    }
  };

  return (
    <div>
      <input
        disabled={isLoading}
        ref={uploadImage}
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={hanldeUploading}
        className="hidden"
      />
      <div
        onClick={uploadImageButton}
        className="w-48 h-11 bg-[#016EFF] text-[#fff] hover:bg-[#016EFF] flex justify-center items-center rounded-[4px] cursor-pointer"
      >
        <span>Select Image </span>
      </div>
    </div>
  );
}

export default UploadingImage;
