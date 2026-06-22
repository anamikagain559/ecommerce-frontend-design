import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

const BestSellingCarousel = () => {
  return (
    <section className="py-16 bg-[#F8F8F8] relative" id="best-selling">
      <style>{`
        #best-selling .swiper-button-next,
        #best-selling .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(0,0,0,0.10);
          border: 1px solid #f0f0f0;
          color: #555;
        }
        #best-selling .swiper-button-next::after,
        #best-selling .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 900;
        }
        #best-selling .swiper-button-next:hover,
        #best-selling .swiper-button-prev:hover {
          background: #FFA259;
          color: #fff;
          border-color: #FFA259;
        }
        #best-selling .swiper-pagination-bullet {
          background: #ccc;
          opacity: 1;
        }
        #best-selling .swiper-pagination-bullet-active {
          background: #FFA259;
          width: 24px;
          border-radius: 4px;
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
          <Link
            to="/menu"
            className="text-sm font-bold uppercase tracking-wider text-[#888] hover:text-[#FFA259] transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={false}
          navigation
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
                <div className="bg-white border border-gray-100 rounded-[28px] shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center justify-between text-center h-full">
                  {/* Food Image Circle */}
                  <Link
                    to={`/product/${product.id}`}
                    className="w-36 h-36 rounded-full overflow-hidden bg-gray-50 flex items-center justify-center p-2 mb-4 shadow-inner relative group/img"
                    style={{ display: "flex" }}
                  >
                    <img
                      src={`/erp/images/${product.photo}`}
                      alt={product.name}
                      className="w-[90%] h-[90%] object-cover rounded-full transition-transform duration-500 group-hover/img:scale-110"
                    />
                  </Link>

                  {/* Title & Price */}
                  <div className="flex flex-col flex-grow w-full justify-between">
                    <h4 className="font-playfair font-bold text-gray-900 mb-2 text-base line-clamp-2 min-h-[46px] hover:text-[#FFA259] transition-colors leading-snug">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </h4>
                    <p className="text-[#FFA259] font-bold text-xl mt-auto m-0">
                      ৳{product.price}
                    </p>
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
