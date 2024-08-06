import React, { useState } from 'react';

const images = [
  { src: '../../../src/assets/1.png', alt: 'Image 1' },
  { src: '../../../src/assets/2.png', alt: 'Image 2' },
  { src: '../../../src/assets/3.png', alt: 'Image 3' },
  { src: '../../../src/assets/1.png', alt: 'Image 4' },
  { src: '../../../src/assets/2.png', alt: 'Image 5' },
  { src: '../../../src/assets/3.png', alt: 'Image 6' }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setSelectedImage(null);
    }
  };


  return (
    <div className="text-center p-10 h-full">
    <h2 className='font-bold text-4xl text-center my-5'>Portfolio Section</h2>
    <div className="flex flex-wrap justify-center">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative m-2 cursor-pointer w-1/4 p-2 "
          onClick={() => handleImageClick(image)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-5xl">+</span>
          </div>
        </div>
      ))}
    </div>
    {selectedImage && (
      <div
        className="modal fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        onClick={handleCloseClick}
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="max-w-90 max-h-90"
        />
      </div>
    )}
  </div>
  );
};

export default Portfolio;
