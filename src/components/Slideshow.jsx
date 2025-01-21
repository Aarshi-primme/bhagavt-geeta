import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css"; 

const images = [
  "/images/s1.jpg",
  "/images/s2.jpg",
  "/images/s3.jpg"
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <img src={images[index]} alt="Slide" className="slide-image" />
    </div>
  );
};

export default Slideshow;
