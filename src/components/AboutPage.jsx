import React from "react";

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      {/* Custom Banner */}
      <div className="custom-banner leaf flower" style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      {/* About Us Content */}
      <section className="section-padding leaf-bottom text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h1 className="font-playfair font-bold mb-40" style={{ fontSize: "42px" }}>
                Kona Café
              </h1>
              
              <div
                className="about-us-all text-justify mx-auto"
                style={{
                  fontSize: "18px",
                  lineHeight: "2em",
                  color: "#333",
                  maxWidth: "900px",
                  textAlign: "justify"
                }}
              >
                <p className="mb-30">
                  <span style={{ fontSize: "36px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#FFA259" }}>
                    A
                  </span>
                  s the radiant sun prepares to duck behind the isles of Hawaii, we begin brewing your day in a cup of
                  Kona here in Bangladesh. Behind every cup is hours of harvesting one of the most exquisite coffee
                  discovered in the world from the volcanic slopes of Hualalai and Mauna Loa.
                </p>

                <p className="mb-30">
                  <span style={{ fontSize: "36px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#00A186" }}>
                    H
                  </span>
                  andpicked from the terrains of sunlit mornings, drizzly afternoons and breezy nights, the beans will
                  sweep you off to a tropical utopia of serene beaches and leisurely moments. Perfectly paired with a
                  refreshing plethora of hearty poke bowl and popping boba varieties, we are here to serve you a big
                  slice of beautiful Hawaii every time you surf into our shacks.
                </p>

                <p className="mb-30">
                  <span style={{ fontSize: "36px", fontFamily: "'Playfair Display', serif", fontWeight: "bold", color: "#E15C6C" }}>
                    S
                  </span>
                  ince 2019, KONA Cafe has been a place where you can go for authentic, tropically-inspired cuisines, always
                  cooked from scratch. Over the years, people have come to our patio to enjoy dishes such as Poke Bowl,
                  Bubble tea, Salads, Savory Desserts, Hotdogs, and Sandwiches!
                </p>

                <p>
                  So, while KONA Cafe might be known for hearty breakfast, authentic lunch and bountiful dinners, anyone
                  who visits us knows that we're more than that - We're also a place where our community can go to relax
                  and have a great meal. Stop by KONA cafe at Lakeshore Hotel, Gulshan, or at Shatarkul Chef’s Table
                  Courtside and experience the tradition of Hawaiian cuisines for yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
