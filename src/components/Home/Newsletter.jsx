import React from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden" id="newsletter">
      <div className="container relative z-10">
        <div
          className="relative mx-auto rounded-[2rem] overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #00A186 0%, #00C9B7 100%)",
            maxWidth: "1000px"
          }}
        >
          {/* Decorative glows & shapes inside the banner */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Soft light blurs */}
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white/20 blur-3xl"></div>

            {/* Decorative Coffee Beans Pattern (Matching Testimonial Section) */}
            <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-[0.15] transform -rotate-12">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round">
                <path d="M25,45 C15,35 25,15 40,25 C45,30 40,50 25,45 Z" />
                <path d="M22,33 C28,30 32,38 38,35" strokeDasharray="2 2" />
              </svg>
            </div>
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-[0.15] transform rotate-45 hidden md:block">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round">
                <path d="M50,25 C42,18 52,5 62,12 C66,16 62,30 50,25 Z" />
                <path d="M48,16 C53,14 56,20 60,18" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 md:py-20 md:px-12">

            {/* Minimal Pill Badge */}
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#00A186] font-extrabold bg-white px-5 py-2.5 rounded-full inline-block mb-6 shadow-sm">
              Stay Connected
            </span>

            {/* Heading */}
            <h2 className="font-playfair font-extrabold text-white mb-4" style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>
              Subscribe to Our Newsletter
            </h2>

            {/* Description */}
            <p className="text-white/90 font-light text-base mb-10 max-w-lg leading-relaxed">
              Get weekly deals, new menu drops, exclusive event invites, and a <strong className="font-bold text-[#FFA259] bg-white/10 px-2 py-0.5 rounded">15% discount</strong> on your next order – straight to your inbox.
            </p>

            {/* Input form */}
            <form
              className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto relative z-20"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                if (email) {
                  e.target.reset();
                  // SweetAlert customized to match the theme
                  Swal.fire({
                    title: "You're Subscribed! 🎉",
                    text: "Welcome to the Kona family! Check your inbox for your 15% discount code.",
                    icon: "success",
                    confirmButtonColor: "#00A186", // Teal Theme Color
                    background: "#ffffff",
                    customClass: {
                      title: 'font-playfair font-bold text-[#1a1a1a]',
                      popup: 'rounded-[24px] shadow-2xl pb-6',
                      confirmButton: 'rounded-full px-8 py-3 text-sm font-bold tracking-wide'
                    }
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
                className="flex-1 bg-white border-0 text-[#1a1a1a] placeholder-gray-400 rounded-full px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-inner"
              />
              <button
                type="submit"
                className="bg-[#FFA259] hover:bg-[#FF8C3A] text-white font-bold text-sm px-8 py-4 rounded-full transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-[#FFA259]/40 whitespace-nowrap flex items-center justify-center gap-2"
              >
                Subscribe Now
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>

            <p className="text-white/60 text-xs mt-6 font-light">
              No spam ever. Unsubscribe anytime with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;