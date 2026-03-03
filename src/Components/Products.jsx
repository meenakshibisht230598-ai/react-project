import product1 from  "../assets/61kBwnHGUdL._SX679_.jpg";
import product2 from  "../assets/photo-a33b.avif";
import product3 from  "../assets/61PDQet-AzL._SX522_.jpg";
import product4 from  "../assets/81My_.jpg";
import product5 from  "../assets/image.webp";
import product6 from  "../assets/photo-196bc.avif";
import product7 from  "../assets/61wAYBPWWIL._SX522_.jpg";
import product8 from  "../assets/photo-3.avif";

const products = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
  { id: 5, image: product5 },
  { id: 6, image: product6 },
  { id: 7, image: product7 },
  { id: 8, image: product8 },
];

function Products() {
  return (
    <section className="px-6 py-10 bg-gradient-to-r from-green-100 to-purple-200 mt-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-10 text-center">
        Trending Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt="product"
              className="h-40 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Products;
