import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const steps = ["Confirmed", "Shipped", "Out for Delivery", "Delivered"];

  
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrders((prevOrders) => {
        const today = new Date();

        const updatedOrders = prevOrders.filter(
          (order) => new Date(order.deliveryDate) >= today
        );

        localStorage.setItem("orders", JSON.stringify(updatedOrders));
        return updatedOrders;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

 
  const handlePlaceOrder = () => {
    const today = new Date();

    const delivery = new Date();
    delivery.setDate(today.getDate() + 3); 

    const newOrder = {
      id: Date.now(),
      date: today.toISOString(),
      deliveryDate: delivery.toISOString(),
    };

    setOrders((prevOrders) => {
      const updatedOrders = [newOrder, ...prevOrders]; 
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      return updatedOrders;
    });
  };

  const deleteOrder = (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    const filteredOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(filteredOrders));
    setOrders(filteredOrders);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
          My Orders
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-900 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-600"
          >
            Place Test Order
          </button>
        </div>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No orders found.</p>
        ) : (
          orders.map((order) => {
            const today = new Date();
            const orderDate = new Date(order.date);
            const deliveryDate = new Date(order.deliveryDate);

            const diffDays = Math.ceil(
              (deliveryDate - today) / (1000 * 60 * 60 * 24)
            );

            let status = "Confirmed";

            if (diffDays <= 0) status = "Delivered";
            else if (diffDays === 1) status = "Out for Delivery";
            else if (diffDays === 2) status = "Shipped";

            const currentStep = steps.indexOf(status);
            const progressPercent = ((currentStep + 1) / steps.length) * 100;

            const daysRemaining = Math.max(0, diffDays);

            return (
              <div
                key={order.id}
                className="bg-white rounded-3xl shadow-xl p-8 mb-10"
              >
                <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
                  <div>
                    <p className="font-bold text-xl text-gray-800">
                      Order ID: {order.id}
                    </p>
                    <p className="text-sm text-gray-500">
                      Ordered on: {orderDate.toLocaleDateString()}
                    </p>
                    <p className="text-sm text-blue-900 font-semibold mt-1">
                      🚚 Expected Delivery:{" "}
                      {deliveryDate.toLocaleDateString()}
                    </p>
                  </div>
                  <span className="px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    {status}
                  </span>
                </div>

                <div className="relative mb-6">
                  <div className="absolute top-4 left-0 w-full h-2 bg-gray-200 rounded-full"></div>
                  <div
                    className="absolute top-4 left-0 h-2 bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  ></div>

                  <div className="relative flex justify-between">
                    {steps.map((step, i) => (
                      <div key={i} className="flex flex-col items-center w-full">
                        <div
                          className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold ${
                            i < currentStep
                              ? "bg-green-500"
                              : i === currentStep
                              ? "bg-blue-600 scale-110"
                              : "bg-gray-300"
                          }`}
                        >
                          {i < currentStep ? "✓" : i + 1}
                        </div>

                        <p
                          className={`mt-3 text-xs text-center ${
                            i <= currentStep
                              ? "text-gray-800 font-medium"
                              : "text-gray-400"
                          }`}
                        >
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {status !== "Delivered" && (
                  <div className="text-center font-medium text-blue-900 mb-4">
                    {daysRemaining > 0
                      ? `📦 Will arrive in ${daysRemaining} day(s)`
                      : "🚚 Arriving Today"}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;