import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Confirm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleConfirm = () => {
    const proceed = window.confirm("Are you sure you want to proceed?");
    
    if (proceed) {
      setIsLogin(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {isLogin ? <Login /> : <Signup />}

      <p className="text-sm mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={isLogin ? () => setIsLogin(false) : handleConfirm}
          className="text-blue-600 font-semibold"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  );
};

export default Confirm;
