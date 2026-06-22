import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Provider/CartProvider";
import { FiTrash2, FiTag, FiX } from "react-icons/fi";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getCartItemKey,
    promoCode,
    discountPercentage,
    discountAmount,
    serviceCharge,
    vat,
    deliveryCost,
    subtotal,
    grandTotal,
    applyPromo,
    removePromo,
  } = useCart();

  const [promoInput, setPromoInput] = useState("");

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const result = applyPromo(promoInput);
    if (result.success) {
      Swal.fire({
        title: "Promo Code Applied",
        text: result.message,
        icon: "success",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        background: "#FFF",
        confirmButtonColor: "#FFA259",
      });
      setPromoInput("");
    } else {
      Swal.fire({
        title: "Invalid Promo Code",
        text: "The promo code entered does not exist or has expired.",
        icon: "error",
        confirmButtonColor: "#FFA259",
      });
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center px-6 text-center bg-[#F8F8F8]">
        <div className="border-2 border-[#FFA259] p-8 rounded-full bg-white mb-6 text-[#FFA259]">
          <i className="fa fa-shopping-cart" style={{ fontSize: "48px" }}></i>
        </div>
        <h2 className="font-playfair text-3xl font-semibold tracking-wide text-black mb-3">
          Your Shopping Bag is Empty
        </h2>
        <p className="text-muted text-sm leading-relaxed max-w-sm mb-8">
          You haven't selected any Hawaiian bowls or refreshments yet. Check out our menu to order!
        </p>
        <Link to="/menu" className="bttn-mid btn-fill">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper bg-[#F8F8F8]">
      {/* Custom Banner */}
      <div className="custom-banner leaf flower" style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* Cart Items List */}
      <section className="section-padding leaf-bottom text-left">
        <div className="container">
          <div className="row mb-20">
            <div className="col-12">
              <h1 className="font-playfair font-bold mb-30" style={{ fontSize: "38px" }}>
                Your Shopping Cart
              </h1>
            </div>
          </div>

          <div className="row">
            {/* Cart Table (8 columns) */}
            <div className="col-lg-8">
              <div
                className="bg-white p-20 rounded shadow-sm border border-gray-100 table-responsive"
                style={{ borderRadius: "12px" }}
              >
                <table className="table align-middle" style={{ minWidth: "600px", fontSize: "14px" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #FFA259", color: "#333", fontWeight: "bold" }}>
                      <th scope="col" style={{ border: "none" }}>Product</th>
                      <th scope="col" style={{ border: "none" }}>Details</th>
                      <th scope="col" style={{ border: "none" }} className="text-center">Quantity</th>
                      <th scope="col" style={{ border: "none" }} className="text-right">Price</th>
                      <th scope="col" style={{ border: "none" }} className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => {
                      const uniqueKey = getCartItemKey(item);
                      return (
                        <tr key={uniqueKey} style={{ borderBottom: "1px solid #eee" }}>
                          {/* Image and name */}
                          <td style={{ padding: "15px 0" }}>
                            <div className="flex items-center gap-3">
                              <img
                                src={`/erp/images/${item.photo}`}
                                alt={item.name}
                                style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "8px" }}
                              />
                              <div>
                                <h6 style={{ fontWeight: "bold", margin: 0 }}>{item.name}</h6>
                              </div>
                            </div>
                          </td>

                          {/* Sizes, Options & Addons */}
                          <td>
                            <span className="text-xs text-muted block">Size: {item.selectedSize.name}</span>
                            {item.selectedOption && (
                              <span className="text-xs text-muted block">Option: {item.selectedOption}</span>
                            )}
                            {item.selectedAddons.length > 0 && (
                              <span className="text-xs text-success block mt-1">
                                + {item.selectedAddons.map((a) => `${a.name} (৳${a.price})`).join(", ")}
                              </span>
                            )}
                          </td>

                          {/* Quantity inputs */}
                          <td className="text-center">
                            <div
                              className="input-group justify-content-center mx-auto"
                              style={{ width: "110px", border: "1px solid #ddd", borderRadius: "20px", overflow: "hidden" }}
                            >
                              <button
                                type="button"
                                className="btn btn-sm btn-light"
                                onClick={() => updateQuantity(uniqueKey, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span className="input-group-text bg-white border-0 text-xs font-bold w-30 text-center flex items-center justify-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                className="btn btn-sm btn-light"
                                onClick={() => updateQuantity(uniqueKey, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>

                          {/* Line Total */}
                          <td className="text-right font-bold" style={{ verticalAlign: "middle" }}>
                            ৳{(item.price * item.quantity).toLocaleString()}
                          </td>

                          {/* Remove button */}
                          <td className="text-right" style={{ verticalAlign: "middle" }}>
                            <button
                              onClick={() => removeFromCart(uniqueKey)}
                              className="btn btn-sm text-danger"
                              style={{ background: "transparent" }}
                              title="Delete Item"
                            >
                              <FiTrash2 size={16} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Coupon Box and back link */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-20 pr-10">
                <Link to="/menu" className="text-sm font-semibold cl-primary">
                  &larr; Return to Menu
                </Link>

                <form onSubmit={handleCouponSubmit} className="flex border border-gray-300 rounded-lg overflow-hidden max-w-sm w-full bg-white shadow-sm">
                  <input
                    type="text"
                    placeholder="PROMO CODE (e.g. KONA20)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="px-4 py-2.5 text-xs uppercase font-semibold text-black placeholder-gray-400 w-full focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="btn-fill font-bold px-6 text-xs uppercase tracking-widest transition-all shrink-0"
                    style={{ border: "none" }}
                  >
                    Apply
                  </button>
                </form>
              </div>
            </div>

            {/* Cart Summary Card (4 columns) */}
            <div className="col-lg-4 mt-40 mt-lg-0">
              <div
                className="bg-white p-30 rounded shadow-sm border border-gray-100 space-y-6"
                style={{ borderRadius: "12px", borderTop: "4px solid #FFA259" }}
              >
                <h4 className="font-playfair font-bold text-center border-b pb-15 mb-20" style={{ fontSize: "22px" }}>
                  Order Summary
                </h4>

                <div className="space-y-4" style={{ fontSize: "14px", color: "#333" }}>
                  <div className="flex justify-between">
                    <span className="text-muted">Subtotal:</span>
                    <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                  </div>

                  {discountPercentage > 0 && (
                    <div className="flex justify-between items-center text-green-600 font-semibold pt-10">
                      <div className="flex items-center gap-1">
                        <FiTag size={14} />
                        <span>Promo Discount ({discountPercentage}%):</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>-৳{discountAmount.toLocaleString()}</span>
                        <button onClick={removePromo} className="text-muted hover:text-red-500">
                          <FiX size={14} />
                        </button>
                      </div>
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
                    <span className="text-muted">Delivery Fee:</span>
                    <span>৳{deliveryCost.toLocaleString()}</span>
                  </div>

                  <div
                    className="flex justify-between pt-15 font-bold cl-primary"
                    style={{ borderTop: "2px solid #FFA259", fontSize: "18px" }}
                  >
                    <span>Grand Total:</span>
                    <span>৳{grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-20">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bttn-mid btn-fill text-center font-bold uppercase tracking-wider text-sm py-15"
                    style={{ border: "none" }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
