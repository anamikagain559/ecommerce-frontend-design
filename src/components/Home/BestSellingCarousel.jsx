import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BestSellingCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  React.useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="py-16 bg-[#F8F8F8] relative" id="best-selling">
      <style>{`
        #best-selling .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        #best-selling .swiper-pagination-bullet-active {
          background: #FFA259;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        /* Hide the default Swiper nav arrows */
        #best-selling .swiper-button-next,
        #best-selling .swiper-button-prev {
          display: none !important;
        }
      `}</style>

      <div className="container relative">
        {/* Header Row */}
        <div className="flex justify-between items-end mb-8 px-4">
          <div className="relative">
            <h2 className="font-playfair font-extrabold text-[#1a1a1a]" style={{ fontSize: "36px", margin: 0 }}>
              Best Selling
            </h2>
            <div className="h-[3px] w-14 bg-[#FFA259] mt-2 rounded"></div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/menu"
              className="text-sm font-bold uppercase tracking-wider text-[#888] hover:text-[#FFA259] transition-colors hidden md:block"
            >
              View All
            </Link>

            {/* Custom Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                ref={prevRef}
                className="h-11 w-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#FFA259] hover:text-white hover:border-[#FFA259] transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Previous slide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="h-11 w-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#FFA259] hover:text-white hover:border-[#FFA259] transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Next slide"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          // navigation is set via useEffect after refs are available
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          style={{ paddingBottom: "48px", paddingLeft: "4px", paddingRight: "4px" }}
        >
          {products
            .filter((product) => product.id >= 61 && product.id <= 68)
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 group flex flex-col h-full">
                  <Link to={`/product/${product.id}`} className="block relative h-56 w-full overflow-hidden">
                    <img
                      src={`${product.photo}`}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-[#E15C6C] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                      Best Seller
                    </span>
                  </Link>
                  <div className="p-5 flex flex-col flex-grow text-left">
                    <h4 className="font-playfair font-bold text-gray-900 text-base mb-1 line-clamp-1 group-hover:text-[#FFA259] transition-colors">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h4>
                    <p className="text-xs text-gray-400 mb-4 line-clamp-2 font-light leading-relaxed flex-grow">
                      {product.description || "Fresh and delicious signature bowl."}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[#FFA259] font-extrabold text-xl">৳{product.price}</span>
                      <Link
                        to={`/product/${product.id}`}
                        className="h-9 w-9 rounded-full bg-[#FFA259] text-white flex items-center justify-center hover:bg-[#FF8C3A] transition-colors shadow-sm text-sm"
                      >
                        <i className="fa fa-plus"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingCarousel;
