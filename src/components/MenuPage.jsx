import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { categories, products } from "./mockData";

const categoryMeta = {
  "all": { icon: "🍽️", accent: "#FFA259", bg: "from-[#FFA259]/20 to-[#FF6B6B]/10" },
  "poke-bowls": { icon: "🥗", accent: "#00A186", bg: "from-[#00A186]/20 to-[#00C9B7]/10" },
  "bibimbap": { icon: "🍚", accent: "#E15C6C", bg: "from-[#E15C6C]/20 to-[#FF8A9A]/10" },
  "fries-hotdogs": { icon: "🌭", accent: "#FFA259", bg: "from-[#FFA259]/20 to-[#FF6B6B]/10" },
  "juice-smoothies": { icon: "🧃", accent: "#1494C3", bg: "from-[#1494C3]/20 to-[#00C9B7]/10" },
  "drinks-coffee": { icon: "☕", accent: "#8B5E3C", bg: "from-[#8B5E3C]/20 to-[#C49A6C]/10" },
};

const getBadgeColor = (category) => ({
  "poke-bowls": "#00A186",
  "bibimbap": "#E15C6C",
  "fries-hotdogs": "#FFA259",
  "juice-smoothies": "#1494C3",
  "drinks-coffee": "#8B5E3C",
}[category] || "#FFA259");

const MenuPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [animating, setAnimating] = useState(false);

  // Update category when URL param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (id) => {
    setAnimating(true);
    setTimeout(() => {
      setSelectedCategory(id);
      setAnimating(false);
    }, 200);
  };

  let filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (sortBy === "price-asc") filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  if (sortBy === "price-desc") filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  if (sortBy === "name") filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));

  const activeMeta = categoryMeta[selectedCategory] || categoryMeta["all"];

  return (
    <div className="min-h-screen bg-[#F8F8F8]">

      {/* ── HERO BANNER ── */}
      <div
        className="relative overflow-hidden pt-24 pb-16"
        style={{ background: "linear-gradient(135deg, #6b6b75ff 0%, #5cc096ff 50%, #478bdaff 100%)" }}
      >
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#FFA259]/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#00A186]/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-[#E15C6C]/10 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-extrabold bg-[#FFA259]/15 text-[#FFA259] border border-[#FFA259]/30 px-5 py-2 rounded-full mb-5">
            Cove Cafe Kitchen
          </span>
          <h1 className="font-playfair font-extrabold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 54px)" }}>
            Our Full Menu
          </h1>
          <p className="text-white/50 font-light text-sm md:text-base max-w-lg mx-auto">
            Handcrafted Hawaiian bowls, Korean classics, crispy snacks, refreshing boba & signature coffees.
          </p>

          {/* Live Search */}
          <div className="relative max-w-xl mx-auto mt-10">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search dishes, ingredients, flavours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white/10 border border-white/15 text-white placeholder-white/35 text-sm focus:outline-none focus:border-[#FFA259]/60 transition-colors backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors text-lg"
              >✕</button>
            )}
          </div>
        </div>
      </div>

      {/* ── STICKY CATEGORY BAR ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-[64px] z-30">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-4 px-2">
            {categories.map((cat) => {
              const meta = categoryMeta[cat.id] || categoryMeta["all"];
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 shrink-0"
                  style={{
                    background: isActive ? meta.accent : "#f3f4f6",
                    color: isActive ? "#fff" : "#555",
                    boxShadow: isActive ? `0 4px 14px ${meta.accent}40` : "none",
                  }}
                >
                  <span>{meta.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── RESULTS BAR ── */}
      <div className="container py-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Count */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg shrink-0"
              style={{ background: activeMeta.accent }}
            >{activeMeta.icon}</div>
            <div>
              <p className="font-extrabold text-[#1a1a1a] text-sm">
                {filteredProducts.length} {filteredProducts.length === 1 ? "Dish" : "Dishes"}
              </p>
              <p className="text-xs text-gray-400 font-light">
                {searchQuery ? `matching "${searchQuery}"` : "available to order"}
              </p>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-semibold text-[#1a1a1a] bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#FFA259] transition-colors cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">A – Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="container pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 flex flex-col items-center gap-4">
            <div className="text-7xl">😔</div>
            <h3 className="font-playfair font-bold text-2xl text-[#1a1a1a]">No dishes found</h3>
            <p className="text-gray-400 font-light text-sm">Try a different category or clear your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="mt-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all hover:scale-105"
              style={{ background: "#FFA259" }}
            >Clear Filters</button>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            {filteredProducts.map((product) => {
              const accent = getBadgeColor(product.category);
              const catMeta = categoryMeta[product.category] || categoryMeta["all"];
              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 hover:-translate-y-1.5 flex flex-col"
                >
                  {/* Image */}
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden flex-shrink-0" style={{ height: "200px" }}>
                    <img
                      src={`${product.photo}`}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category badge */}
                    <span
                      className="absolute top-3 left-3 text-[9px] font-extrabold uppercase tracking-wider text-white px-3 py-1.5 rounded-full shadow-md"
                      style={{ background: accent }}
                    >
                      {catMeta.icon} {product.category.replace(/-/g, " ")}
                    </span>

                    {/* Quick order on hover */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-wider text-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap"
                        style={{ background: accent }}
                      >
                        View & Order →
                      </span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="font-playfair font-bold text-[#1a1a1a] text-base mb-2 line-clamp-1 group-hover:text-[#FFA259] transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h4>
                    <p className="text-xs text-gray-400 font-light line-clamp-2 leading-relaxed flex-grow mb-4">
                      {product.description}
                    </p>

                    {/* Addons preview dots */}
                    {product.addons.length > 0 && (
                      <div className="flex items-center gap-1 mb-4">
                        <span className="text-[9px] text-gray-300 uppercase tracking-wider font-bold">Addons</span>
                        {product.addons.slice(0, 3).map((a, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full overflow-hidden border border-white shadow-sm"
                            title={a.name}
                          >
                            <img src={`/erp/images/${a.image}`} alt={a.name} className="w-full h-full object-cover" />
                          </div>
                        ))}
                        {product.addons.length > 3 && (
                          <span className="text-[9px] text-gray-400 font-bold">+{product.addons.length - 3}</span>
                        )}
                      </div>
                    )}

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                      <div>
                        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">From</p>
                        <p className="font-extrabold text-xl" style={{ color: accent }}>৳{product.price}</p>
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-white px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
                          boxShadow: `0 4px 14px ${accent}35`,
                        }}
                      >
                        <span>Order</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
