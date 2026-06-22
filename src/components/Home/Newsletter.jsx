import React from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  return (
    <section className="py-0 my-0 relative overflow-hidden" id="newsletter">
      <div
        className="relative mx-4 md:mx-12 lg:mx-20 rounded-[32px] md:rounded-[48px] overflow-hidden mb-16"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
        }}
      >
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#FFA259]/15 blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#00A186]/10 blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center py-16 px-8 md:px-20">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-[#FFA259]/20 border border-[#FFA259]/30 flex items-center justify-center mb-6">
            <i className="fa fa-envelope text-[#FFA259] text-xl"></i>
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFA259] font-extrabold bg-[#FFA259]/10 px-4 py-2 rounded-full inline-block mb-5">
            Stay Connected
          </span>
          <h2 className="font-playfair font-extrabold text-white mb-4" style={{ fontSize: "36px" }}>
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/60 font-light text-sm mb-8 max-w-md leading-relaxed">
            Get weekly deals, new menu drops, exclusive event invites, and a <strong className="text-[#FFA259]">15% discount</strong> on your next order – straight to your inbox.
          </p>

          {/* Input form */}
          <form
            className="flex flex-col sm:flex-row gap-3 w-full max-w-lg"
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) {
                e.target.reset();
                Swal.fire({
                  title: "You're Subscribed! 🎉",
                  text: "Welcome to the Kona family! Check your inbox for your 15% discount code.",
                  icon: "success",
                  confirmButtonColor: "#FFA259",
                  background: "#fff",
                });
              }
            }}
          >
            <input
              id="newsletter-email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address..."
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#FFA259] transition-colors backdrop-blur-sm"
            />
            <button
              type="submit"
              className="bg-[#FFA259] hover:bg-[#FF8C3A] text-white font-bold text-sm px-8 py-3.5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-white/30 text-[10px] mt-4 font-light">No spam ever. Unsubscribe anytime with one click.</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
