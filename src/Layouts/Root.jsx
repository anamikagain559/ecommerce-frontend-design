import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Sticky header */}
      <Navbar />

      {/* Main page content area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Smooth scroll to top on navigation */}
      <ScrollRestoration />
    </div>
  );
};

export default Root;
