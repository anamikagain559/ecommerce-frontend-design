import React, { useEffect } from "react";
import Swal from "sweetalert2";

import HeroSlider from "./HeroSlider";
import AboutArea from "./AboutArea";
import BestSellingCarousel from "./BestSellingCarousel";
import CategoryShowcase from "./CategoryShowcase";
import WhyChooseUs from "./WhyChooseUs";
import CustomerReviews from "./CustomerReviews";
import Newsletter from "./Newsletter";
import FindOurShacks from "./FindOurShacks";

const Home = () => {
  // Popup modal on load
  useEffect(() => {
    const shown = sessionStorage.getItem("cove_popup_shown");
    if (!shown) {
      setTimeout(() => {
        Swal.fire({
          title: "Sign Up for our Newsletter!",
          text: "We’ll be sending you offers and discounts every week",
          input: "email",
          inputPlaceholder: "Enter your email address",
          imageUrl: "/assets/images/popup.jpg",
          imageWidth: 400,
          imageHeight: 250,
          imageAlt: "Newsletter Popup",
          background: "#FFFFFF",
          color: "#000000",
          confirmButtonColor: "#FFA259",
          confirmButtonText: "Signup Now",
          showCloseButton: true,
          customClass: {
            popup: "rounded-3xl shadow-2xl",
            confirmButton: "bttn-mid btn-fill"
          }
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              title: "Welcome aboard!",
              text: "Thank you for subscribing to Cove Cafe updates.",
              icon: "success",
              confirmButtonColor: "#FFA259",
            });
          }
        });
        sessionStorage.setItem("cove_popup_shown", "true");
      }, 2000);
    }
  }, []);

  return (
    <div className="page-wrapper bg-[#F8F8F8] overflow-hidden">
      <HeroSlider />
      <AboutArea />
      <BestSellingCarousel />
      <CategoryShowcase />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
      <FindOurShacks />
    </div>
  );
};

export default Home;
