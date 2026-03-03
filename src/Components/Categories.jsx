import React from "react";
import { Link } from "react-router-dom";
import cameras from "../assets/photo-3f0.avif";
import lenses from "../assets/photo-a33b.avif";
import lighting from "../assets/photo-32ba.avif";
import accessories from "../assets/photo-4526.avif";
import bags from "../assets/photo-16d2.avif";

const categories = [
  { id: 1, name: "Cameras", img: cameras },
  { id: 2, name: "Lenses", img: lenses },
  { id: 3, name: "Lighting", img: lighting },
  { id: 4, name: "Accessories", img: accessories },
  { id: 5, name: "Bags", img: bags },
];

const Categories = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-900 text-center mt-5">
        Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10 px-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.name.toLowerCase()}`}
            className="text-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-2 text-blue-900 text-lg font-semibold">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Categories;
