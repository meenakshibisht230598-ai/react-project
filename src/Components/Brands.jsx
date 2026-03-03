import my from "../assets/trending_brand_logo_186.svg";
import img from "../assets/trending_vg.svg";
import myimg from "../assets/trending_brand_logo_3.svg";
import imesej from "../assets/trending_brand_logo_4.9ca7.svg";
import dnbjh from "../assets/trending_brand_logo_5.svg";

function Brands() {
  return (
    <section className="px-6 mt-12 bg-blue-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4 text-center">
        Trending Brands
      </h1>

      <p className="text-lg text-center text-black-700 mb-10 max-w-3xl mx-auto">
        We meticulously select the finest options, ensuring uncompromising quality,
        product excellence, user-friendly experience, and long-lasting durability.
      </p>

      <div className="bg-gray-200 flex flex-wrap justify-center gap-5 p-10 rounded-xl mb-12">
        <img src={my} alt="brand" className="h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
        <img src={img} alt="brand" className="h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
        <img src={myimg} alt="brand" className="h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
        <img src={imesej} alt="brand" className="h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
        <img src={dnbjh} alt="brand" className="h-16 sm:h-20 grayscale hover:grayscale-0 transition" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-100 p-8 rounded-xl">
  <div className="feature-card">
    <h2 className="feature-title">Free & Fast Shipping</h2>
    <p className="feature-text">Fast delivery in 5–7 days</p>
  </div>

  <div className="feature-card">
    <h2 className="feature-title">Genuine Products</h2>
    <p className="feature-text">Original & trustworthy products</p>
  </div>

  <div className="feature-card">
    <h2 className="feature-title">Fast Support</h2>
    <p className="feature-text">Dedicated and quick support</p>
  </div>

  <div className="feature-card ">
    <h2 className="feature-title ">100% Secure Checkout</h2>
    <p className="feature-text ">Netbanking | UPI | Wallet | EMI</p>
  </div>
</div>
    </section>
  );
}

export default Brands;
