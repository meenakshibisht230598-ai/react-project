import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cartslice";

import img1 from "../assets/photo-3f0.avif";
import img2 from "../assets/photo-196bc.avif";
import img3 from "../assets/z6ii_bodyonly_wht.webp";
import img4 from  "../assets/pdp-29-i.webp";
import lens1 from "../assets/61kBwnHGUdL._SX679_.jpg";
import lens2 from "../assets/61PDQet-AzL._SX522_.jpg";
import lens3 from "../assets/71kltHdtE9L._SX522_.jpg";
import lens4 from "../assets/photo-a33b.avif";
import light1 from "../assets/5AcSeL._SX522_.jpg";
import light2 from "../assets/51jpuZ0zm9L._SX522_.jpg";
import light3 from "../assets/61wAYBPWWIL._SX522_.jpg";
import light4 from "../assets/81My_.jpg";
import bag1 from "../assets/71yUghBd0eL._SX522_.jpg";
import bag2 from  "../assets/photo-9d2.avif";

const Data = [
  { id: 1, name: "Canon EOS R6", category: "Cameras", rating: 4.5, price: 2159, oldPrice: 2399, discount: "10% Off", image: img1 },
  { id: 2, name: "GoPro HERO 9 Black", category: "Cameras", rating: 4.9, price: 360, oldPrice: 450, discount: "20% Off", image: img2 },
  { id: 3, name: "Nikon D850", category: "Cameras", rating: 4.9, price: 2549, oldPrice: 2999, discount: "15% Off", image: img3 },
  { id: 4, name: "Sony a7 III", category: "Cameras", rating: 4.8, price: 1999, oldPrice: 2199, discount: "10% Off", image: img4 },
  { id: 5, name: "Canon RF 24-70mm f/2.8", category: "Lenses", rating: 4.7, price: 2299, oldPrice: 2499, discount: "8% Off", image: lens1 },
  { id: 6, name: "Nikon Z 50mm f/1.8", category: "Lenses", rating: 4.8, price: 599, oldPrice: 699, discount: "14% Off", image: lens2 },
  { id: 7, name: "Canon RF 85mm f/1.2", category: "Lenses", rating: 4.9, price: 2799, oldPrice: 2999, discount: "7% Off", image: lens3 },
  { id: 8, name: "Sony FE 70-200mm f/2.8", category: "Lenses", rating: 4.8, price: 2599, oldPrice: 2799, discount: "10% Off", image: lens4 },
  { id: 9, name: "Profoto A1X AirTTL-N Studio Light", category: "Lighting", rating: 4.7, price: 879, oldPrice: 1099, discount: "20% Off", image: light1 },
  { id: 10, name: "Godox SL-60W LED Video Light", category: "Lighting", rating: 3.6, price: 139, oldPrice: null, discount: null, image: light2 },
  { id: 11, name: "Neewer 660 LED Video Light Panel", category: "Lighting", rating: 4.4, price: 99, oldPrice: 129, discount: "23% Off", image: light3 },
  { id: 12, name: "Elgato Key Light Air", category: "Lighting", rating: 4.8, price: 129, oldPrice: 149, discount: "13% Off", image: light4 },
  { id: 13, name: "Lowepro ProTactic BP 450 AW II Camera Backpack", category: "Bags", rating: 4.6, price: 224, oldPrice: 249, discount: "10% Off", image: bag1 },
  { id: 14, name: "Vanguard Camera Backpack", category: "Bags", rating: 4.6, price: 130, oldPrice: null, discount: "20% Off", image: bag2 },
];

const Productlist = ({ selectedCategory, selectedRating, sortBy }) => {
  let filteredProducts = [...Data];
  const dispatch = useDispatch();

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(item => item.category === selectedCategory);
  }

  if (selectedRating !== null) {
    filteredProducts = filteredProducts.filter(item => item.rating >= selectedRating);
  }

  if (sortBy === "Price - Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price - High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (filteredProducts.length === 0) {
    return <p className="text-center text-xl mt-20 text-blue-900">No products found</p>;
  }

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-7">
    {filteredProducts.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 group overflow-hidden"
      >
        <div className="h-64 flex items-center justify-center bg-gray-50">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-blue-900 text-lg md:text-xl line-clamp-2">
            {item.name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-900">${item.price}</span>
            {item.oldPrice && (
              <span className="text-sm line-through text-gray-400">${item.oldPrice}</span>
            )}
          </div>

          <span className="inline-block bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">
            ⭐ {item.rating}
          </span>

          {item.discount && (
            <p className="text-xs text-red-600 font-medium">{item.discount}</p>
          )}
        <button
        onClick={() => dispatch(addToCart(item))}
        className="mt-3 w-full bg-blue-900 text-white py-2 rounded-lg font-medium 
             hover:bg-blue-600 transition duration-200"
          >
        Add to Cart
       </button>
        </div>
      </div>
    ))}
   </div>
  );
  };
export default Productlist;
