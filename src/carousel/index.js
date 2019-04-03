import React, { useState, useEffect } from "react";
import './styles.css';

const Slide = ({ image, active }) => (
  <li className={`slide ${active ? "active" : "inactive"}`}>
    <img src={image.src} alt={image.alt} />
  </li>
);

const Dot = ({ active, handleClick, index }) => (
  <li className="dot">
    <div
      aria-label={`Select image number ${index + 1}`}
      role="button"
      className={active ? "selected-dot" : "unselected-dot"}
      onClick={() => handleClick(index)}
      onKeyUp={({ keyCode }) =>
        [13, 32].includes(keyCode) && handleClick(index)
      }
      tabIndex={0}
    >
      {active ? "\u25CF" : "\u25CB"}
    </div>
  </li>
);

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    const nextIndex = current === images.length - 1 ? 0 : current + 1;
    setCurrent(nextIndex);
  };

  const previousImage = () => {
    const nextIndex = current === 0 ? images.length - 1 : current - 1;
    setCurrent(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 7000);

    return () => clearInterval(interval);
  });

  return (
    <section className="carousel-wrapper" aria-label="Image Carousel">
      <div className="carousel">
        <button onClick={previousImage}>Prev</button>
        <ul className="carousel-images">
          {images.map((image, index) => (
            <Slide image={image} active={index === current} />
          ))}
        </ul>
        <button onClick={nextImage}>Next</button>
      </div>
      <ul className="dot-list">
        {images.map((image, index) => (
          <Dot
            active={index === current}
            handleClick={setCurrent}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default Carousel;
