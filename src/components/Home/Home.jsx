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
  // Popup modal on load disabled
  useEffect(() => {
    // Popup logic removed as requested
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
