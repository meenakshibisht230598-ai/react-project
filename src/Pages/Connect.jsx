import { useState } from "react";
import myimg from "../assets/photo-32ba.avif";

const Connect = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [messageText, setMessageText] = useState("");
  const [message, setMessage] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();

    if (name && lastName && email && number && messageText) {
      setMessage(`Thanks ${name} ${lastName}, we will contact you soon!`);
      
      setName("");
      setLastName(""); 
      setEmail("");
      setNumber("");
      setMessageText("");
    } else {
      setMessage("Please fill all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleConnect} className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            
            <input 
              type="text"
              placeholder="Last Name*"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={lastName} 
              onChange={(e)=> setLastName(e.target.value)} 
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile*"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <textarea
              placeholder="Message*"
              className="w-full px-4 py-2 border rounded-xl h-28 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>


            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>

          {message && (
            <p className="text-green-600 mt-4 font-medium">{message}</p>
          )}
        </div>

        <div className="hidden md:block">
          <img
            src={myimg}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};
export default Connect;