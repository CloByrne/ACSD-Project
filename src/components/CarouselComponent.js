import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css';

const CarouselComponent = ({ images }) => {
  return (
    <div className="container3">
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={image.id}>
          <img
            className="d-block custom-image mx-auto"
            src={image.src}
            alt={image.alt}
          />
          <Carousel.Caption>
              <h3>{image.name}</h3>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default CarouselComponent;
