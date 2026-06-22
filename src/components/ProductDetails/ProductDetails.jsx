import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../mockData";
import { useCart } from "../../Provider/CartProvider";
import Swal from "sweetalert2";

const categoryColors = {
  "poke-bowls":      { accent: "#00A186", bg: "#00A18612", label: "Poke Bowls" },
  "bibimbap":        { accent: "#E15C6C", bg: "#E15C6C12", label: "Bibimbap" },
  "fries-hotdogs":   { accent: "#FFA259", bg: "#FFA25912", label: "Fries & Hotdogs" },
  "juice-smoothies": { accent: "#1494C3", bg: "#1494C312", label: "Juice & Smoothies" },
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#F8F8F8]">
        <div className="text-7xl mb-6">🍽️</div>
        <h2 className="font-playfair text-4xl font-extrabold mb-3 text-[#1a1a1a]">Dish Not Found</h2>
        <p className="text-gray-400 font-light mb-8">We can't find this item in our kitchen.</p>
        <Link to="/menu" className="bttn-mid btn-fill">← Back to Menu</Link>
      </div>
    );
  }

  const theme = categoryColors[product.category] || { accent: "#FFA259", bg: "#FFA25912", label: "Menu" };

  const [selectedSize, setSelectedSize]     = useState(product.sizes[0]);
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity]             = useState(1);
  const [imgLoaded, setImgLoaded]           = useState(false);

  useEffect(() => {
    setSelectedSize(product.sizes[0]);
    setSelectedOption(product.options[0]);
    setSelectedAddons([]);
    setQuantity(1);
    setImgLoaded(false);
  }, [id, product]);

  const handleAddonChange = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      return exists ? prev.filter((a) => a.id !== addon.id) : [...prev, addon];
    });
  };

  const handleQuantity = (val) => { if (val >= 1) setQuantity(val); };

  const addonTotal = selectedAddons.reduce((s, a) => s + a.price, 0);
  const livePrice  = (selectedSize.price + addonTotal) * quantity;

  const handleAddToCartSubmit = (e) => {
    e.preventDefault();
    addToCart(product, selectedSize, selectedOption, selectedAddons, quantity);
    Swal.fire({
      title: "Added to Order! 🎉",
      text: `${product.name} (${selectedSize.name}) has been added to your bag.`,
      icon: "success",
      confirmButtonColor: theme.accent,
      confirmButtonText: "View Bag",
      showCancelButton: true,
      cancelButtonText: "Continue Ordering",
      cancelButtonColor: "#888",
    }).then((result) => { if (result.isConfirmed) navigate("/cart"); });
  };

  return (
    <div className="page-wrapper bg-[#F8F8F8] pt-24">

      {/* ── HERO BANNER ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}18 0%, #fff 60%)`,
          minHeight: "90px",
        }}
      >
        {/* decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ background: theme.accent }} />
        <div className="absolute top-10 left-1/3 w-32 h-32 rounded-full opacity-5 pointer-events-none"
          style={{ background: theme.accent }} />

        <div className="container relative z-10 py-5">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/menu" className="hover:text-gray-600 transition-colors">Menu</Link>
            <span>/</span>
            <span style={{ color: theme.accent }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <form onSubmit={handleAddToCartSubmit}>
        <div className="container py-10 md:py-16">

          {/* TOP: Image + Info */}
          <div className="row items-start gap-y-10 mb-14">

            {/* LEFT: Product Image */}
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="relative">
                {/* Glow backdrop */}
                <div
                  className="absolute -inset-4 rounded-[40px] blur-2xl opacity-30 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${theme.accent}, transparent 70%)` }}
                />

                {/* Image card */}
                <div className="relative rounded-[32px] overflow-hidden border border-white shadow-2xl bg-white"
                  style={{ aspectRatio: "4/3" }}>
                  <img
                    src={`/erp/images/${product.photo}`}
                    alt={product.name}
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 ${imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  />
                  {/* Category badge */}
                  <span
                    className="absolute top-4 left-4 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow-md"
                    style={{ backgroundColor: theme.accent }}
                  >
                    {theme.label}
                  </span>
                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* RIGHT: Info + Price Sticky Panel */}
            <div className="col-xl-7 col-lg-7 col-md-6 flex flex-col gap-6">

              {/* Name & desc */}
              <div>
                <h1 className="font-playfair font-extrabold text-[#1a1a1a] leading-tight mb-4"
                  style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>
                  {product.name}
                </h1>

                {/* Rating stars (decorative) */}
                <div className="flex items-center gap-2 mb-5">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-[#FFA259] text-lg">★</span>
                  ))}
                  <span className="text-xs text-gray-400 font-light ml-1">(48 reviews)</span>
                </div>

                <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                  {product.description}
                </p>
              </div>

              {/* Live Price Card */}
              <div
                className="rounded-2xl p-5 flex items-center justify-between border"
                style={{ background: theme.bg, borderColor: `${theme.accent}30` }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1">Total Price</p>
                  <p className="font-extrabold text-3xl md:text-4xl" style={{ color: theme.accent }}>
                    ৳{livePrice}
                  </p>
                  {addonTotal > 0 && (
                    <p className="text-xs text-gray-400 font-light mt-1">
                      Base ৳{selectedSize.price} + Addons ৳{addonTotal} × {quantity}
                    </p>
                  )}
                </div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}cc)` }}
                >
                  🍽️
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["Fresh Daily", "No MSG", "Halal Certified"].map(tag => (
                  <span key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border"
                    style={{ color: theme.accent, borderColor: `${theme.accent}40`, background: theme.bg }}>
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── CUSTOMIZATION SECTION ── */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">

            {/* Section Header */}
            <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm"
                style={{ background: theme.accent }}>✦</div>
              <h2 className="font-playfair font-bold text-[#1a1a1a] text-xl">Customize Your Order</h2>
            </div>

            <div className="px-6 md:px-10 py-8 flex flex-col gap-10">

              {/* 1. SIZE SELECTOR */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg">📏</span>
                  <h3 className="font-bold text-[#1a1a1a] text-base">Choose Size</h3>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ml-auto"
                    style={{ background: theme.bg, color: theme.accent }}>
                    Required
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {product.sizes.map((size) => {
                    const active = selectedSize.id === size.id;
                    return (
                      <label
                        key={size.id}
                        htmlFor={`ps-${size.id}`}
                        className="relative flex flex-col gap-1 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md"
                        style={{
                          borderColor: active ? theme.accent : "#e5e7eb",
                          background: active ? theme.bg : "#fafafa",
                        }}
                      >
                        <input
                          type="radio"
                          name="productSizeId"
                          id={`ps-${size.id}`}
                          value={size.id}
                          checked={active}
                          onChange={() => setSelectedSize(size)}
                          className="sr-only"
                        />
                        {active && (
                          <span
                            className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                            style={{ background: theme.accent }}>✓</span>
                        )}
                        <span className="font-bold text-[#1a1a1a] text-sm">{size.name}</span>
                        <span className="font-extrabold text-lg" style={{ color: theme.accent }}>৳{size.price}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* 2. OPTION SELECTOR */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg">🎯</span>
                  <h3 className="font-bold text-[#1a1a1a] text-base">{product.optionTitle}</h3>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ml-auto"
                    style={{ background: theme.bg, color: theme.accent }}>
                    Required
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.options.map((opt) => {
                    const active = selectedOption === opt;
                    return (
                      <label
                        key={opt}
                        htmlFor={`opt-${opt}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 cursor-pointer transition-all duration-200 font-semibold text-sm hover:shadow-sm"
                        style={{
                          borderColor: active ? theme.accent : "#e5e7eb",
                          background: active ? theme.bg : "#fafafa",
                          color: active ? theme.accent : "#555",
                        }}
                      >
                        <input
                          type="radio"
                          name="productOption"
                          id={`opt-${opt}`}
                          value={opt}
                          checked={active}
                          onChange={() => setSelectedOption(opt)}
                          className="sr-only"
                        />
                        {active && <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px]"
                          style={{ background: theme.accent }}>✓</span>}
                        {opt}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* 3. ADDONS */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg">✨</span>
                  <h3 className="font-bold text-[#1a1a1a] text-base">Choose Addons</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ml-auto bg-gray-100 text-gray-400">
                    Optional
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {product.addons.map((addon) => {
                    const checked = !!selectedAddons.find((a) => a.id === addon.id);
                    return (
                      <label
                        key={addon.id}
                        htmlFor={`addon-${addon.id}`}
                        className="relative flex flex-col items-center text-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md group"
                        style={{
                          borderColor: checked ? theme.accent : "#e5e7eb",
                          background: checked ? theme.bg : "#fafafa",
                        }}
                      >
                        <input
                          type="checkbox"
                          id={`addon-${addon.id}`}
                          value={addon.id}
                          checked={checked}
                          onChange={() => handleAddonChange(addon)}
                          className="sr-only"
                        />
                        {checked && (
                          <span
                            className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                            style={{ background: theme.accent }}>✓</span>
                        )}
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                          <img
                            src={`/erp/images/${addon.image}`}
                            alt={addon.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="font-bold text-[#1a1a1a] text-xs leading-tight">{addon.name}</span>
                        <span className="font-extrabold text-sm" style={{ color: theme.accent }}>+৳{addon.price}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              {/* 4. QUANTITY + ADD TO CART */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* Quantity */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Quantity</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQuantity(quantity - 1)}
                      className="w-11 h-11 rounded-xl border-2 border-gray-200 flex items-center justify-center text-xl font-bold text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-all active:scale-95"
                    >−</button>
                    <span className="w-12 text-center font-extrabold text-2xl text-[#1a1a1a]">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => handleQuantity(quantity + 1)}
                      className="w-11 h-11 rounded-xl border-2 flex items-center justify-center text-xl font-bold text-white transition-all active:scale-95 shadow-md"
                      style={{ background: theme.accent, borderColor: theme.accent }}
                    >+</button>
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  type="submit"
                  className="flex-1 sm:max-w-xs flex items-center justify-center gap-3 py-4 px-8 rounded-2xl text-white font-extrabold text-base tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accent}cc 100%)`,
                    boxShadow: `0 12px 32px ${theme.accent}45`,
                  }}
                >
                  <span>🛒</span>
                  <span>Add to Cart — ৳{livePrice}</span>
                </button>
              </div>

            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="font-playfair font-extrabold text-[#1a1a1a] text-2xl">You May Also Like</h3>
              <div className="flex-1 h-px bg-gray-200" />
              <Link to="/menu" className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#FFA259] transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products
                .filter((p) => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden" style={{ height: "140px" }}>
                      <img
                        src={`/erp/images/${p.photo}`}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h5 className="font-bold text-[#1a1a1a] text-sm line-clamp-1 mb-1 group-hover:text-[#FFA259] transition-colors">
                        {p.name}
                      </h5>
                      <p className="font-extrabold text-base" style={{ color: theme.accent }}>৳{p.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
