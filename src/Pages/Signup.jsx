const Signup = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className="border w-full p-2 mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="border w-full p-2 mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="border w-full p-2 mb-4"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded w-full">
        Sign Up
      </button>
    </>
  );
};

export default Signup;
