import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categories, products } from "./mockData";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper bg-[#F8F8F8]">
      {/* Custom Banner */}
      <div className="custom-banner leaf flower" style={{ minHeight: "180px", display: "flex", alignItems: "center" }}>
        <div className="container text-center pt-20">
          <h1 className="font-playfair font-extrabold text-white tracking-wider animate-slide-up" style={{ fontSize: "42px" }}>
            Our Hawaiian Kitchen Menu
          </h1>
          <p className="text-white opacity-85 text-sm uppercase tracking-widest mt-10">
            Handcrafted Bowls & Fresh Boba Infusions
          </p>
        </div>
      </div>

      {/* Food Items Area */}
      <section className="section-padding leaf-bottom">
        <div className="container">
          <h6 className="font-bold text-center mb-30" style={{ fontSize: "16px", color: "#888" }}>
            Ordering Online &bull; Fresh & Wholesome Hawaiian Bowls
          </h6>

          {/* Search bar */}
          <div className="row justify-content-center mb-50">
            <div className="col-12 col-md-6">
              <div className="relative shadow-sm hover:shadow-md transition-shadow" style={{ borderRadius: "50px" }}>
                <input
                  type="text"
                  placeholder="Search dishes (e.g. Poke, Bibimbap, Fries)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                  style={{
                    borderRadius: "50px",
                    padding: "16px 30px",
                    border: "2px solid #FFA259",
                    fontSize: "15px",
                    backgroundColor: "#fff",
                    boxShadow: "none"
                  }}
                />
                <i 
                  className="fa fa-search absolute right-6 top-5 text-[#FFA259]" 
                  style={{ fontSize: "18px" }}
                ></i>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12">
              {/* Category selector (Pills) */}
              <div className="cat-mainmenu mb-40">
                <ul className="flex flex-wrap justify-content-center gap-3">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={selectedCategory === cat.id ? "active arrow_box" : ""}
                      style={{ cursor: "pointer", border: "none" }}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span className="font-semibold text-sm uppercase tracking-wider">{cat.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Food Items Grid */}
              <div className="tab-content mt-40">
                <div className="tab-pane fade show active" role="tabpanel">
                  {filteredProducts.length === 0 ? (
                    <div className="text-center py-40">
                      <h4 className="text-muted font-playfair animate-pulse">No dishes found matching your criteria.</h4>
                    </div>
                  ) : (
                    <div className="row justify-content-center animate-fade-in">
                      {filteredProducts.map((product) => (
                        <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-30 flex">
                          <div 
                            className="food-item-card flex flex-col justify-between w-full" 
                            style={{ 
                              minHeight: "380px", 
                              backgroundColor: "#fff", 
                              borderRadius: "24px",
                              overflow: "hidden"
                            }}
                          >
                            <Link to={`/product/${product.id}`} className="block overflow-hidden rounded-2xl">
                              <div className="item-img relative" style={{ height: "180px", overflow: "hidden" }}>
                                <img
                                  src={`/erp/images/${product.photo}`}
                                  alt={product.name}
                                  className="transition-transform duration-700 hover:scale-105"
                                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                                {/* Category Badge */}
                                <span 
                                  className="absolute bottom-3 left-3 px-3 py-1 text-[9px] font-bold text-white uppercase tracking-widest"
                                  style={{
                                    background: product.category === "poke-bowls" ? "#00A186" :
                                                product.category === "bibimbap" ? "#1494C3" :
                                                product.category === "fries-hotdogs" ? "#FFA259" : "#E15C6C",
                                    borderRadius: "30px"
                                  }}
                                >
                                  {product.category.replace("-", " ")}
                                </span>
                              </div>
                            </Link>
                            
                            <div className="item-title mt-15 text-left">
                              <h4 style={{ fontSize: "16px", fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }} className="hover:text-[#FFA259] transition-colors">
                                <Link to={`/product/${product.id}`}>{product.name}</Link>
                              </h4>
                            </div>

                            <p 
                              className="text-muted text-left mt-5 line-clamp-2" 
                              style={{ flexGrow: 1, fontSize: "12px", height: "36px", overflow: "hidden", lineHeight: "1.5em" }}
                            >
                              {product.description}
                            </p>

                            <div className="item-meta mt-15 flex justify-between items-center" style={{ borderTop: "1px solid #f2f2f2", paddingTop: "15px" }}>
                              <div className="price font-bold" style={{ fontSize: "18px", color: "#FF6B6B" }}>
                                ৳{product.price}
                              </div>
                              <div className="button">
                                <Link to={`/product/${product.id}`} className="bttn-small btn-fill" style={{ fontSize: "10px", padding: "8px 20px" }}>
                                  Order
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
