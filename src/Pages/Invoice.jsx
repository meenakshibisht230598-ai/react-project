import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Invoice = () => {
  const { id } = useParams();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((o) => String(o.id) === id);

  if (!order) return <p className="text-center mt-10">Order not found</p>;

  const totalAmount = (order.items || []).reduce(
    (sum, item) => sum + Number(item.qty) * Number(item.price),
    0
  );

  const downloadPDF = async () => {
    const input = document.getElementById("invoice");
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`invoice-${order.id}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div
        id="invoice"
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-2 text-blue-900">SnapShop</h1>
        <h2 className="text-xl font-semibold mb-6">Invoice</h2>

        <div className="mb-4">
          <p><strong>Order ID:</strong> {order.id}</p>
          <p>
            <strong>Date:</strong>{" "}
            {order.date ? new Date(order.date).toLocaleDateString() : "-"}
          </p>
          <p><strong>Name:</strong> {order.name || "-"}</p>
          <p><strong>Phone:</strong> {order.phone || "-"}</p>
          <p><strong>Address:</strong> {order.address || "-"}</p>
        </div>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Items:</h3>
        <table className="w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Product</th>
              <th className="text-center">Qty</th>
              <th className="text-center">Price</th>
              <th className="text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {(order.items || []).map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{item.name || "-"}</td>
                <td className="text-center">{Number(item.qty) || 0}</td>
                <td className="text-center">₹{Number(item.price) || 0}</td>
                <td className="text-center">
                  ₹{Number(item.qty) * Number(item.price) || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right mt-4">
          <p className="text-lg font-bold">Total: ₹{totalAmount}</p>
          <p className="text-sm text-gray-500">
            Payment: {order.paymentMethod || "-"}
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Download Invoice PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;