import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, remove } from "../Redux/Cartslice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="text-center mt-20 text-xl">Cart is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-3 border p-4">
          <img src={item.image} className="w-30 h-24 object-contain" />

          <div className="flex-1">
            <h3 className="font-semibold">{item.name}</h3>
            <p>₹{item.price}</p>
          </div>

          <div className="flex items-center gap-5">
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
          </div>

          <button onClick={() => dispatch(remove(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-6">
        Total: ₹{totalPrice}
      </h2>
      <div className="flex justify-center mt-4">
      <button
      onClick={() => navigate("/Confirm")}
      className="bg-blue-600 text-white px-6 py-2 rounded"
       >
      Confirm Order
     </button>
</div>
    </div>
  );
};

export default Cart;
