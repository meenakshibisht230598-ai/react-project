import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.22.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Cart", path: "/Cart" },
    { name: "Profile", path: "/Profile" },
    { name: "Connect", path: "/Connect" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-blue-100 px-6 py-4 flex items-center justify-between shadow-sm z-50">
    
      <div className="flex items-center gap-2">
        <img src={logo} alt="SnapShop" className="w-8 h-8" />
        <span className="text-xl font-semibold text-blue-900">SnapShop</span>
      </div>
     
      <div className="hidden md:flex items-center gap-10 text-blue-900 text-lg md:mr-20">
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="relative flex items-center gap-1">
            {item.name === "Cart" ? (
              <>
                🛒 Cart
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </>
            ) : (
              item.name
            )}
          </Link>
        ))}
      </div>

     
      <button
        className="md:hidden text-blue-900 text-2xl h-10 w-10 flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

     
      {open && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-blue-100 shadow-lg 
        flex flex-col p-4 gap-4 z-40">
          
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex justify-between items-center text-blue-900 text-lg"
            >
              {item.name === "Cart" ? (
                <>
                  <span>🛒 Cart</span>
                  {cart.length > 0 && (
                    <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </>
              ) : (
                item.name
              )}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;