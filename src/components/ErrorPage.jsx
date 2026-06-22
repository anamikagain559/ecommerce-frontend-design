import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center justify-center p-6 text-center">
      <div
        className="max-w-md w-full border border-gray-200 bg-white p-40 rounded-2xl shadow-md text-center"
        style={{ borderRadius: "16px", borderTop: "4px solid #FFA259" }}
      >
        <div className="flex justify-center mb-20 text-[#FFA259]">
          <i className="fa fa-exclamation-triangle" style={{ fontSize: "56px" }}></i>
        </div>

        <h1 className="font-playfair text-5xl font-bold mb-10 text-black">
          404
        </h1>
        <h2 className="text-lg font-bold mb-15 uppercase tracking-wide" style={{ color: "#E15C6C" }}>
          Lost in the Waves
        </h2>
        <p className="text-muted text-sm leading-relaxed mb-30">
          The page or dish you are looking for has slipped away. Let us guide you back to our Hawaiian shacks.
        </p>

        <Link
          to="/"
          className="bttn-mid btn-fill"
          style={{ fontSize: "14px", padding: "12px 30px" }}
        >
          Return to Shore
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
