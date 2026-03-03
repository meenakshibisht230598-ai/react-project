import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const cartItems = useSelector((state) => state.cart?.items || []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && !/^\d*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (!formData.payment) {
      newErrors.payment = "Please select payment method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const today = new Date();
    const delivery = new Date();
    delivery.setDate(today.getDate() + 3); 

    const order = {
      id: Date.now(),
      date: today.toISOString(),
      deliveryDate: delivery.toISOString(), 
      name: formData.fullName,
      address: formData.address,
      phone: formData.phone,
      paymentMethod:
        formData.payment === "cod"
          ? "Cash on Delivery"
          : "Online Payment",
      items: cartItems.map((item) => ({
        name: item.name,
        qty: item.quantity,
        price: item.price,
      })),
      total: totalPrice,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]));

    localStorage.removeItem("cart");
    navigate(`/order-success/${order.id}`);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-6">
      <h2 className="text-2xl font-bold text-center">Checkout Page</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-red-500">
          Your cart is empty
        </p>
      ) : (
        <form onSubmit={handlePlaceOrder} className="space-y-6">
          
          <div className="border p-4 space-y-3">
            <h3 className="font-semibold">Delivery Address</h3>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 w-full"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-2 w-full"
              placeholder="Address"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={10}
              className="border p-2 w-full"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

           Payment 
          <div className="border p-4 space-y-2">
            <h3 className="font-semibold">Payment Method</h3>

            <label className="flex gap-2">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.payment === "cod"}
                onChange={handleChange}
              />
              Cash on Delivery
            </label>

            <label className="flex gap-2">
              <input
                type="radio"
                name="payment"
                value="online"
                checked={formData.payment === "online"}
                onChange={handleChange}
              />
              Online Payment
            </label>

            {errors.payment && (
              <p className="text-red-500 text-sm">{errors.payment}</p>
            )}
          </div>
          <div className="border p-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <p>Total Items: {totalItems}</p>
            <p className="font-bold">Total Amount: ₹{totalPrice}</p>
          </div>

          <button
            type="submit"
            className="block w-64 mx-auto bg-blue-900 text-white py-3 rounded hover:bg-blue-800"
          >
            Confirm & Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;