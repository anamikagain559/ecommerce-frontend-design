import React, { useState } from "react";
import { Link } from "react-router-dom";

const FindOurShacks = () => {
  const [activeShack, setActiveShack] = useState(0);

  const shacks = [
    {
      id: 0,
      name: "Lakeshore Hotel Shack",
      tag: "Open 24/7",
      color: "#00A186",
      address: "House: 46, Road: 41, Gulshan 2, Dhaka 1212",
      hotline: "+8801300290494",
      image: "/assets/images/about-4.png",
      hours: "Always Open (24 Hours)",
      feature: "Valet Parking & Dine-in Patio"
    },
    {
      id: 1,
      name: "Chefs Table Courtside",
      tag: "12:00 PM - 10:00 PM",
      color: "#E15C6C",
      address: "Madani Ave, Shatarkul, Dhaka 1212",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-1.png",
      hours: "12:00 PM - 10:00 PM Daily",
      feature: "Kids Play Zone & Outdoors Seating"
    },
    {
      id: 2,
      name: "Banani Lakeside Shack",
      tag: "11:00 AM - 11:00 PM",
      color: "#FFA259",
      address: "House: 82, Road: 11, Block H, Banani, Dhaka 1213",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-2.png",
      hours: "11:00 AM - 11:00 PM Daily",
      feature: "Lakeside View Deck & Brew Bar"
    },
    {
      id: 3,
      name: "Dhanmondi Lake Shack",
      tag: "11:00 AM - 10:30 PM",
      color: "#1494C3",
      address: "House: 35, Road: 27 Old, Dhanmondi, Dhaka 1209",
      hotline: "+8801300290494",
      image: "/assets/images/gallery-3.png",
      hours: "11:00 AM - 10:30 PM Daily",
      feature: "Dine-in Cabin & Bubble Tea Lounge"
    }
  ];

  return (
    <section>

    </section>
  );
};

export default FindOurShacks;
