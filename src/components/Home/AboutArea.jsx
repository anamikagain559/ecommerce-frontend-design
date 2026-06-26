import React from "react";
import { Link } from "react-router-dom";

const AboutArea = () => {
  return (
    <section className="banner-area section-padding bg-white text-left relative" id="about" style={{ height: "auto", minHeight: "auto" }}>
      <div className="container">
        <div className="row items-center">
          <div className="col-xl-6 col-md-6 text-center mb-40 mb-md-0">
            <div className="banner-img relative inline-block group">
              <div className="absolute inset-0 bg-[#00A186]/5 rounded-3xl blur scale-105 pointer-events-none"></div>
              <img
                src="/assets/images/about-3.png"
                alt="Animal Fries and Hot Dogs"
                className="img-fluid rounded-3xl relative z-10 transform transition-transform duration-700 group-hover:scale-102"
                style={{ borderRadius: "24px", filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.06))" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 pl-xl-50">
            <div className="banner space-y-4">
              <h3 className="cl-mint font-playfair font-extrabold mb-20 leading-tight" style={{ fontSize: "36px" }}>
                Animal Fries and Hot Dogs: <br />
                Treat for Everyone
              </h3>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: "1.8em" }} className="font-light">
                Whether it’s Crunchy or Spicy, there’s a choice for everyone. Our tasty fries & in-house Hawaiian
                Bun for Hot Dogs make everything better. Grab a bowl of loaded fries topped with caramelized onions
                and our secret sweet-savory sauce, or pair it with our toasted hot dog bun!
              </p>
              <div className="pt-20">
                <Link to="/menu" className="bttn-mid btn-fill" style={{ background: "linear-gradient(135deg, #00A186 0%, #00C9B7 100%)", boxShadow: "0 8px 20px rgba(0, 161, 134, 0.2)" }}>
                  Explore Snacks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
