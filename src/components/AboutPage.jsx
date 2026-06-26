import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="page-wrapper bg-white font-sans text-gray-800">
      
      {/* Hero Section */}
      <div className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/gallery-1.png" 
            alt="Cove Cafe Ambiance" 
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
        </div>
        <div className="container relative z-10 text-center px-4">
          <span className="text-[#FFA259] font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">
            Established 2019
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Where the warmth of Hawaiian hospitality meets the vibrant pulse of Bangladesh. We’re more than just a cafe; we’re a tropical escape.
          </p>
        </div>
      </div>

      {/* The Origin Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A186]/5 rounded-full blur-3xl -z-10"></div>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#FFA259]/20 rounded-full blur-2xl"></div>
              <img 
                src="/assets/images/about-2.png" 
                alt="Harvesting Coffee" 
                className="relative z-10 w-full rounded-[2rem] shadow-2xl object-cover h-[500px]"
              />
              <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] hidden md:block">
                <p className="font-playfair font-bold text-2xl text-[#00A186]">100%</p>
                <p className="text-sm text-gray-500 font-medium">Volcanic Soil Coffee Beans</p>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-[#FFA259] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">The Beginning</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Brewed from the Slopes of Hawaii
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                As the radiant sun prepares to duck behind the isles of Hawaii, we begin brewing your day here in Bangladesh. Our journey started with a simple passion: to bring the world’s most exquisite, volcanic-soil coffee beans from Hualalai and Mauna Loa directly to your cup.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Every bean is handpicked from sunlit mornings and breezy nights, sweeping you off to a tropical utopia with every single sip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Cuisine Section */}
      <section className="py-24 bg-[#F8F9FA] relative">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img 
                src="/assets/images/food-2.png" 
                alt="Hawaiian Cuisine" 
                className="relative z-10 w-full rounded-[2rem] shadow-xl object-cover h-[500px]"
              />
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-[#00A186] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00A186]">The Cuisine</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Slice of the Tropics
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Since our doors opened in 2019, Cove Cafe has been the destination for authentic, tropically-inspired cuisines cooked entirely from scratch. We perfectly pair our premium coffee with a refreshing plethora of hearty Poke Bowls and popping Boba varieties.
              </p>
              <ul className="grid grid-cols-2 gap-4 pt-4">
                {['Signature Poke Bowls', 'Refreshing Boba Tea', 'Fresh Salads', 'Savory Sandwiches'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#00A186]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-white text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            More Than Just a Cafe
          </h2>
          <p className="text-gray-600 text-xl font-light leading-relaxed mb-10">
            We are a sanctuary for the community. Whether you're here for a hearty breakfast, an authentic lunch, or a bountiful dinner, Cove Cafe is a place to relax, connect, and enjoy a great meal. Stop by our locations at Lakeshore Hotel, Gulshan, or Shatarkul Chef’s Table Courtside to experience the tradition for yourself.
          </p>
          <Link to="/menu" className="inline-flex items-center justify-center px-8 py-4 bg-[#00A186] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#008f77] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore Our Menu
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
