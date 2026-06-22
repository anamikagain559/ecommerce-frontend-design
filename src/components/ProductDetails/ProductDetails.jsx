import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../mockData";
import { useCart } from "../../Provider/CartProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="font-playfair text-3xl mb-4 cl-primary">Dish Not Found</h2>
        <p className="text-muted text-sm mb-8">We can't find this item in our kitchen.</p>
        <Link to="/menu" className="bttn-mid btn-fill">
          View Menu
        </Link>
      </div>
    );
  }

  // State hooks for customization options
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedOption, setSelectedOption] = useState(product.options[0]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Sync state on route updates
  useEffect(() => {
    setSelectedSize(product.sizes[0]);
    setSelectedOption(product.options[0]);
    setSelectedAddons([]);
    setQuantity(1);
  }, [id, product]);

  const handleAddonChange = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const handleQuantity = (val) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddToCartSubmit = (e) => {
    e.preventDefault();
    addToCart(product, selectedSize, selectedOption, selectedAddons, quantity);
    
    Swal.fire({
      title: "Added to Order!",
      text: `${product.name} (${selectedSize.name}) has been added to your bag.`,
      icon: "success",
      confirmButtonColor: "#FFA259",
      confirmButtonText: "View Bag",
      showCancelButton: true,
      cancelButtonText: "Continue Ordering",
      cancelButtonColor: "#555",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
  };

  // Compute live price showing on details page
  const livePrice = (selectedSize.price + selectedAddons.reduce((sum, a) => sum + a.price, 0)) * quantity;

  return (
    <div className="page-wrapper">
      {/* Custom Banner */}
      <div className="custom-banner leaf flower" style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* Single Item Details Form */}
      <form onSubmit={handleAddToCartSubmit}>
        <section className="section-padding leaf-bottom text-left">
          <div className="container">
            {/* Top row: Photo and Info */}
            <div className="row mb-40">
              <div className="col-xl-5 col-lg-5 col-md-6 text-center mb-20 mb-md-0">
                <div className="item-photo" style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden", padding: "10px", backgroundColor: "#fff" }}>
                  <img
                    src={`/erp/images/${product.photo}`}
                    alt={product.name}
                    className="img-fluid rounded"
                    style={{ maxHeight: "350px", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 flex flex-col justify-center">
                <div className="item-descriptions pr-lg-40">
                  <h2 className="font-playfair font-bold mb-20" style={{ fontSize: "32px" }}>
                    {product.name}
                  </h2>
                  <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.8em" }}>
                    {product.description}
                  </p>
                  <div className="mt-20 pt-10" style={{ borderTop: "1px solid #eee" }}>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }} className="cl-primary">
                      Current Price: ৳{livePrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Details Grid */}
            <div className="row justify-content-center">
              {/* Option 1: Sizes Selector */}
              <div className="col-xl-12 mb-40 text-center">
                <div className="item-option-title mb-20">
                  <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>Size</h2>
                </div>
                <span className="item-options">
                  <fieldset className="form-group mb-0">
                    <div className="row justify-content-center">
                      {product.sizes.map((size) => (
                        <div key={size.id} className="col-12 col-sm-6 col-md-4 max-w-[280px]">
                          <div className="form-check" id="productSizeButtons">
                            <div className="single-item-radio">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="productSizeId"
                                id={`ps-${size.id}`}
                                value={size.id}
                                checked={selectedSize.id === size.id}
                                onChange={() => setSelectedSize(size)}
                              />
                              <label className="form-check-label" htmlFor={`ps-${size.id}`} style={{ borderRadius: "8px" }}>
                                <strong>{size.name}</strong>
                                <span>Base Price <span>৳{size.price}</span></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </span>
              </div>

              {/* Option 2: Option choices (e.g. Choose base / protein / sweetness) */}
              <div className="col-xl-12 mb-40 text-center">
                <div className="item-option-title mb-20">
                  <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>{product.optionTitle}</h2>
                </div>
                <div className="row justify-content-center">
                  {product.options.map((opt) => (
                    <div key={opt} className="col-12 col-sm-6 col-md-3 max-w-[240px]">
                      <div className="form-check" id="productOptionButtons">
                        <div className="single-item-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productOption"
                            id={`opt-${opt}`}
                            value={opt}
                            checked={selectedOption === opt}
                            onChange={() => setSelectedOption(opt)}
                          />
                          <label className="form-check-label" htmlFor={`opt-${opt}`} style={{ padding: "15px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "8px" }}>
                            <strong>{opt}</strong>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Option 3: Addons checkboxes */}
              <div className="col-xl-12 mb-40 text-center">
                <div className="addon-holder">
                  <div className="item-option-title mb-20">
                    <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>Choose your Addons</h2>
                  </div>
                  <div className="row justify-content-center" id="optionHolderDiv">
                    <ul className="text-center flex flex-wrap justify-content-center gap-4">
                      {product.addons.map((addon) => (
                        <li key={addon.id} className="m-0">
                          <input
                            type="checkbox"
                            id={`addon-${addon.id}`}
                            value={addon.id}
                            checked={!!selectedAddons.find((a) => a.id === addon.id)}
                            onChange={() => handleAddonChange(addon)}
                          />
                          <label htmlFor={`addon-${addon.id}`} style={{ padding: "10px", paddingBottom: "25px", borderRadius: "8px", width: "160px" }}>
                            <img
                              src={`/erp/images/${addon.image}`}
                              alt={addon.name}
                              style={{ width: "80px", height: "80px", objectFit: "cover", margin: "0 auto" }}
                            />
                            <h5 className="mt-10" style={{ fontSize: "14px", fontWeight: "bold" }}>{addon.name}</h5>
                            <h6 className="cl-primary font-semibold">+৳{addon.price}</h6>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="col-xl-12 text-center mb-40">
                <div className="item-option-title mb-15">
                  <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Quantity</h2>
                </div>
                <div className="quantity flex justify-content-center items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuantity(quantity - 1)}
                    className="btn btn-outline-secondary"
                    style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0px", fontSize: "18px" }}
                  >
                    -
                  </button>
                  <input
                    name="productQuantity"
                    type="text"
                    className="form-control text-center font-bold"
                    value={quantity}
                    readOnly
                    style={{ width: "60px", height: "40px", borderRadius: "8px" }}
                  />
                  <button
                    type="button"
                    onClick={() => handleQuantity(quantity + 1)}
                    className="btn btn-outline-secondary"
                    style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0px", fontSize: "18px" }}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-xl-12 text-center mt-30">
                <button type="submit" className="bttn-mid btn-fill">
                  Add To Cart &mdash; ৳{livePrice}
                </button>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProductDetails;
