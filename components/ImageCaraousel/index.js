import React, { useState } from "react";

export const ImageCarousel = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let images = data.map(i => i.image_url);
  let title = data.map(i => i.title);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="tooltip">
        Title hover here (tooltip!)
        <span className="tooltip-text">{title[currentImageIndex]}</span>
      </div>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};
