import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem("kona_cart");
    return localData ? JSON.parse(localData) : [];
  });

  const [promoCode, setPromoCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  useEffect(() => {
    localStorage.setItem("kona_cart", JSON.stringify(cart));
  }, [cart]);

  // Generates a unique key for cart item based on product ID, selected size, chosen option, and addons
  const getCartItemKey = (item) => {
    const sizeName = item.selectedSize ? item.selectedSize.name : "default";
    const optionName = item.selectedOption || "none";
    const addonIds = item.selectedAddons
      ? item.selectedAddons.map((a) => a.id).sort().join(",")
      : "none";
    return `${item.id}-${sizeName}-${optionName}-${addonIds}`;
  };

  const addToCart = (product, size, option, addons = [], quantity = 1) => {
    const basePrice = size ? size.price : product.price;
    const addonsCost = addons.reduce((sum, a) => sum + a.price, 0);
    const itemPrice = basePrice + addonsCost;

    const newItem = {
      id: product.id,
      name: product.name,
      photo: product.photo,
      selectedSize: size || { name: "Standard", price: product.price },
      selectedOption: option || "",
      selectedAddons: addons,
      price: itemPrice,
      quantity: quantity
    };

    setCart((prevCart) => {
      const newItemKey = getCartItemKey(newItem);
      const existingItemIndex = prevCart.findIndex(
        (item) => getCartItemKey(item) === newItemKey
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        return newCart;
      } else {
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (uniqueKey) => {
    setCart((prevCart) =>
      prevCart.filter((item) => getCartItemKey(item) !== uniqueKey)
    );
  };

  const updateQuantity = (uniqueKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(uniqueKey);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        getCartItemKey(item) === uniqueKey
          ? { ...item, quantity: quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode("");
    setDiscountPercentage(0);
  };

  const applyPromo = (code) => {
    const formattedCode = code.toUpperCase().trim();
    if (formattedCode === "KONA20") {
      setPromoCode(formattedCode);
      setDiscountPercentage(20); // 20% discount
      return { success: true, message: "20% discount applied successfully!" };
    } else if (formattedCode === "ALOHA15") {
      setPromoCode(formattedCode);
      setDiscountPercentage(15); // 15% discount
      return { success: true, message: "15% off applied!" };
    }
    return { success: false, message: "Invalid promo code" };
  };

  const removePromo = () => {
    setPromoCode("");
    setDiscountPercentage(0);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercentage) / 100;
  
  // Service charge and VAT calculations (10% Service Charge, 5% VAT typical in BD restaurants)
  const serviceCharge = Math.round((subtotal - discountAmount) * 0.10);
  const vat = Math.round((subtotal - discountAmount) * 0.05);
  const deliveryCost = subtotal > 0 ? 60 : 0; // Flat 60 Taka delivery charge in Dhaka
  
  const grandTotal = subtotal - discountAmount + serviceCharge + vat + deliveryCost;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
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
        removePromo
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
