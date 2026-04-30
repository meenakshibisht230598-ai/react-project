import logo from "../assets/logo.22.svg"
 
function Footer() {
  return (
    <footer className="bg-blue-100/80 backdrop-blur-md shadow-md text-blue-900 mt-10">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        
    <div className="md:w-1/4">
    <div className="bg-blue-900 inline-block p-4 rounded mb-4">
    <img src={logo} alt="SnapShop Logo" className="h-16 w-auto" />

    </div>
    <p className="text-blue-900 text-2xl">
    One stop shop for all your Photography needs!
    </p>
    </div>

    <div className="md:w-1/5 text-2xl">
    <h3 className="text-blue-900 font-semibold mb-4">Categories</h3>
    <ul>
     {["Cameras", "Lenses", "Lighting", "Accessories", "Bags"].map((item) => (
    <li
    key={item}
     className="py-1 hover:text-blue-700 cursor-pointer transition"
    >
     {item}
    </li>
    ))}
    </ul>
    </div>

    <div className="md:w-1/5 text-2xl">
    <h3 className="text-blue-900 font-semibold mb-4">Follow Us</h3>
    <ul>
     {["Instagram", "Twitter", "LinkedIn"].map((item) => (
    <li
    key={item}
    className="py-1 hover:text-blue-800 cursor-pointer transition"
     >
     {item}
     </li>
    ))}
    </ul>
    </div>
    </div>

    <div className="text-center text-blue-900 mt-5 pb-2 text-2xl">
    <p>© SnapShop {new Date().getFullYear()}</p>
    <p>Built with love by Meenakshi </p>
    </div>
    </footer>
  );
}
export default Footer;
