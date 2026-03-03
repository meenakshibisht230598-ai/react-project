import React from "react";
import myimg from "../assets/photo-4526.avif";
import img from "../assets/photo-3f0.avif";

function About() {
  return (
    <div className="bg-gray-50 py-10">

      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        About Photography
      </h1>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <img
          src={myimg}
          alt="Photography 1"
          className="md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
        <img
          src={img}
          alt="Photography 2"
          className="md:w-1/2 rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
      </div>
      <div className="max-w-4xl mx-auto mt-8 px-6">
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Photography is a world full of adventures, stories, colors, and light.
          As one of the most fascinating forms of art, it has influenced human
          life for centuries. In the 19th century, photography was even considered
          a science that helped record reality.
          <br /><br />
          Today, photography is both an art and a science. A photographer is like
          a painter who captures emotions and experiences on a canvas. Through a
          camera lens, reality can be shown as it is — or interpreted in a unique
          way. Every photograph tells a story beyond just an image.
        </p>
      </div>
    </div>
  );
}
export default About;
