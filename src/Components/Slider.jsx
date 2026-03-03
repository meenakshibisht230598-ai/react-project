import React, { useState, useEffect } from "react";
import heroImage from "../assets/DGimbal-India.webp";
import img from    "../assets/image.webp";
import myimg from   "../assets/photo-0845.avif";
import jh from    "../assets/PCP_kxkhz.webp";

const Slider = () => {
  const slides = [heroImage, img, myimg, jh];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden  shadow-lg">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-conten transition-opacity duration-1000 ease-in-out ${
         index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute top-1/4 left-10 text-white max-w-lg">
        <h2 className="text-3xl sm:text-2xl font-bold mb-4 drop-shadow-lg">
          Unleash Your Photography Potential with Our Range of Professional Gear.
        </h2>
        <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-5 py-2 rounded shadow-lg">
          Explore now
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
              index === current ? "bg-purple-600" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
