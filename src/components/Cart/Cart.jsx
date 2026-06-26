import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Provider/CartProvider";
import { FiTag, FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import CartItemCard from "./CartItemCard";

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
      <div className="custom-banner" style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* Cart Items List */}
          <section className="py-12 bg-[#F8F8F8] min-h-screen">
            <div className="container mx-auto">
              {/* Title */}
              <h1 className="font-playfair font-bold text-3xl text-center mb-8">Your Shopping Cart</h1>

              {/* Grid layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items Column (span 2) */}
                <div className="lg:col-span-2 space-y-6">
                  {cart.length === 0 ? (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                  ) : (
                    cart.map((item) => {
                      const uniqueKey = getCartItemKey(item);
                      return (
                        <CartItemCard
                          key={uniqueKey}
                          item={item}
                          uniqueKey={uniqueKey}
                          updateQuantity={updateQuantity}
                          removeFromCart={removeFromCart}
                        />
                      );
                    })
                  )}

                  {/* Coupon & Back to Menu */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                    <Link to="/menu" className="text-sm font-semibold text-[#FFA259] hover:underline">
                      &larr; Return to Menu
                    </Link>
                    <form onSubmit={handleCouponSubmit} className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
                      <input
                        type="text"
                        placeholder="PROMO CODE (e.g. COVE20)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="px-4 py-2 text-xs uppercase font-semibold text-black placeholder-gray-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="bg-[#FFA259] hover:bg-[#FF8C3A] text-white px-4 py-2 text-xs font-bold transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  </div>
                </div>

                {/* Order Summary Card */}
                <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col space-y-4">
                  <h2 className="font-playfair font-bold text-center text-xl border-b pb-2 mb-4">Order Summary</h2>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-bold">৳{subtotal.toLocaleString()}</span>
                  </div>
                  {discountPercentage > 0 && (
                    <div className="flex justify-between items-center text-green-600 text-sm">
                      <div className="flex items-center gap-1">
                        <FiTag size={14} />
                        <span>Promo Discount ({discountPercentage}%):</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>-৳{discountAmount.toLocaleString()}</span>
                        <button onClick={removePromo} className="text-gray-600 hover:text-red-500">
                          <FiX size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Service Charge (10%):</span>
                    <span>৳{serviceCharge.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                    <span className="text-gray-600">VAT (5%):</span>
                    <span>৳{vat.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Delivery Fee:</span>
                    <span>৳{deliveryCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-4 border-t border-gray-300">
                    <span>Grand Total:</span>
                    <span>৳{grandTotal.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-[#FFA259] hover:bg-[#FF8C3A] text-white font-bold py-3 rounded transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default Cart;
