import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Brands />
      <Footer />
    </>
  );
}
export default Home;
