import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Provider/CartProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, promoCode, discountPercentage, discountAmount, serviceCharge, vat, deliveryCost, subtotal, grandTotal, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod"); // cash on delivery as default for food
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Dhaka",
    area: "",
    notes: ""
  });

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center px-6 text-center bg-[#F8F8F8]">
        <h2 className="font-playfair text-3xl font-semibold mb-4 cl-primary">No Items for Checkout</h2>
        <Link to="/menu" className="bttn-mid btn-fill">
          View Menu
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const orderId = "KC-" + Math.floor(100000 + Math.random() * 900000);

    Swal.fire({
      title: "Order Placed Successfully!",
      html: `
        <div class="text-left space-y-3 mt-10 text-sm text-gray-700" style="font-family: 'Poppins', sans-serif;">
          <p>Your order has been received by Kona Cafe. Our kitchen is starting to prepare your meal!</p>
          <div class="bg-gray-100 p-15 rounded border border-gray-200 space-y-2 mt-10" style="border-radius: 8px;">
            <p><strong>Order ID:</strong> ${orderId}</p>
            <p><strong>Estimated Delivery:</strong> 35-45 Minutes</p>
            <p><strong>Payment Method:</strong> ${paymentMethod === "cod" ? "Cash On Delivery" : "Online Payment (SSLCommerz)"}</p>
            <p><strong>Total Amount:</strong> ৳${grandTotal.toLocaleString()}</p>
          </div>
          <p class="text-xs text-muted-500 mt-15">Receipt invoice details and order tracking details have been sent to <strong>${formData.email}</strong>.</p>
        </div>
      `,
      icon: "success",
      background: "#FFF",
      confirmButtonColor: "#FFA259",
      confirmButtonText: "Done",
    }).then(() => {
      clearCart();
      navigate("/");
    });
  };

  return (
    <div className="page-wrapper bg-[#F8F8F8]">
      {/* Custom Banner */}
      <div className="custom-banner leaf flower" style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* Checkout Section */}
      <section className="section-padding leaf-bottom text-left">
        <div className="container">
          {/* Title */}
          <div className="row mb-30">
            <div className="col-12">
              <h1 className="font-playfair font-bold" style={{ fontSize: "38px" }}>
                Acquisition Registry
              </h1>
            </div>
          </div>

          <form onSubmit={handlePlaceOrder} className="row">
            {/* Form side (8 columns) */}
            <div className="col-lg-8">
              <div
                className="bg-white p-30 rounded shadow-sm border border-gray-100 space-y-6"
                style={{ borderRadius: "12px" }}
              >
                <h3 className="font-playfair font-bold border-b pb-15 mb-20" style={{ fontSize: "22px" }}>
                  Delivery Credentials
                </h3>

                <div className="row">
                  {/* Full Name */}
                  <div className="col-md-6 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sir Alistair Sterling"
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px" }}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sterling@clans.com"
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px" }}
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">Contact Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +88017XXXXXXXX"
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px" }}
                    />
                  </div>

                  {/* City */}
                  <div className="col-md-6 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">City</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px" }}
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chittagong">Chittagong</option>
                      <option value="Sylhet">Sylhet</option>
                    </select>
                  </div>

                  {/* Shipping Address */}
                  <div className="col-12 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">Delivery Street Address</label>
                    <textarea
                      name="address"
                      required
                      rows="3"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House No, Road No, Apartment details..."
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px", resize: "none" }}
                    ></textarea>
                  </div>

                  {/* Order Notes */}
                  <div className="col-12 mb-20">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-600 block mb-5">Special Kitchen Notes (Optional)</label>
                    <input
                      type="text"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="e.g. No onions, extra spicy, etc."
                      className="form-control px-15 py-10"
                      style={{ fontSize: "14px", borderRadius: "8px" }}
                    />
                  </div>
                </div>

                {/* Settlement Methods */}
                <h3 className="font-playfair font-bold border-b pb-15 mb-20 pt-20" style={{ fontSize: "22px" }}>
                  Payment Method
                </h3>
                <div className="row">
                  <div className="col-12 flex gap-4">
                    {/* COD Option */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="payment-cod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        style={{ display: "inline-block", marginRight: "10px", marginTop: "4px" }}
                      />
                      <label
                        htmlFor="payment-cod"
                        style={{
                          display: "inline-block",
                          border: "none",
                          padding: 0,
                          margin: 0,
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "14px"
                        }}
                      >
                        Cash on Delivery (COD)
                      </label>
                    </div>

                    {/* Online payment option */}
                    <div className="form-check ml-30">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="payment-online"
                        value="online"
                        checked={paymentMethod === "online"}
                        onChange={() => setPaymentMethod("online")}
                        style={{ display: "inline-block", marginRight: "10px", marginTop: "4px" }}
                      />
                      <label
                        htmlFor="payment-online"
                        style={{
                          display: "inline-block",
                          border: "none",
                          padding: 0,
                          margin: 0,
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "14px"
                        }}
                      >
                        SSLCommerz Payment Gateway (Card/MFS)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary sidebar (4 columns) */}
            <div className="col-lg-4 mt-40 mt-lg-0">
              <div
                className="bg-white p-30 rounded shadow-sm border border-gray-100 space-y-6"
                style={{ borderRadius: "12px", borderTop: "4px solid #FFA259" }}
              >
                <h4 className="font-playfair font-bold text-center border-b pb-15 mb-20" style={{ fontSize: "22px" }}>
                  Acquisition Summary
                </h4>

                {/* Items listing */}
                <div className="order-summary-items-list mb-20" style={{ maxHeight: "250px", overflowY: "auto" }}>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-10" style={{ borderBottom: "1px solid #f2f2f2" }}>
                      <div className="text-left">
                        <span className="font-bold text-sm block" style={{ color: "#333" }}>{item.name}</span>
                        <span className="text-xs text-muted block">Size: {item.selectedSize.name} &bull; Qty: {item.quantity}</span>
                      </div>
                      <span className="font-bold text-sm">৳{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4" style={{ fontSize: "14px", color: "#333" }}>
                  <div className="flex justify-between">
                    <span className="text-muted">Subtotal:</span>
                    <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                  </div>

                  {discountPercentage > 0 && (
                    <div className="flex justify-between text-green-600 font-semibold pt-10" style={{ borderTop: "1px solid #f2f2f2" }}>
                      <span>Discount ({discountPercentage}%):</span>
                      <span>-৳{discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between pt-10" style={{ borderTop: "1px solid #f2f2f2" }}>
                    <span className="text-muted">Service Charge (10%):</span>
                    <span>৳{serviceCharge.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between pt-10" style={{ borderTop: "1px solid #f2f2f2" }}>
                    <span className="text-muted">VAT (5%):</span>
                    <span>৳{vat.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between pt-10" style={{ borderTop: "1px solid #f2f2f2" }}>
                    <span className="text-muted">Delivery:</span>
                    <span>৳{deliveryCost.toLocaleString()}</span>
                  </div>

                  <div
                    className="flex justify-between pt-15 font-bold cl-primary"
                    style={{ borderTop: "2px solid #FFA259", fontSize: "18px" }}
                  >
                    <span>Total Cost:</span>
                    <span>৳{grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-20">
                  <button
                    type="submit"
                    className="w-full bttn-mid btn-fill text-center font-bold uppercase tracking-wider text-sm py-15"
                    style={{ border: "none" }}
                  >
                    Place Order (৳{grandTotal})
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
