import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {

  const images = [
    "./imageProjects/11060738_47581.jpg",
    "./imageProjects/7529.jpg",
    "./imageProjects/female-legs-sneakers-with-flowers-yellow-background.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mx-auto bg-gray-100">
      <div>
        <img
          src={images[currentImage]}
          alt="Sneakers"
          className="w-screen h-[800px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;