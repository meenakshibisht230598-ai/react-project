import { useNavigate, useParams } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-xl mx-auto mt-20 text-center border p-8 rounded shadow-lg bg-white">
      <h1 className="text-3xl font-bold text-green-600">
        ✅ Order Confirmed!
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Your order has been successfully placed.
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Order ID: <b>{id}</b>
      </p>

      <p className="mt-4 text-gray-600">
        📦 Your order will be delivered soon.
      </p>

      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        
        <button
          onClick={() => navigate("/")}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => navigate("/orders")}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          View Orders tracking
        </button>

        <button
          onClick={() => navigate(`/invoice/${id}`)}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          View Invoice
        </button>

      </div>
    </div>
  );
};
export default SuccessPage;