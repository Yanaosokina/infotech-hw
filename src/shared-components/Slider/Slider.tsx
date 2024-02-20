import React, { useState } from 'react';
import './Slider.css';

interface SliderProps {
  images: string[];
}

export const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider">
      <div className="slider__main-image-container">
        <img src={images[currentImageIndex]} className="slider__main-image" alt={`image_${currentImageIndex}`} />
      </div>
      <div className="slider__thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image_${index}`}
            onClick={() => setCurrentImageIndex(index)}
            className={index === currentImageIndex ? 'slider__thumbnail_active slider__thumbnail' : 'slider__thumbnail'}
          />
        ))}
      </div>
    </div>
  );
};
