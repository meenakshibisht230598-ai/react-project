import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("meenakshibisht230598@gmail.com");
  const [password, setPassword] = useState("2305");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email & Password required");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email); 

    navigate("/checkout");
  };

  return (
    <div className="max-w-sm mx-auto mt-10 border p-6">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full p-2 mb-3"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border w-full p-2 mb-4"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;