import React from "react";
import { events } from "./mockData";

const EventsPage = () => {
  return (
    <div className="page-wrapper bg-[#F8F8F8]">
      {/* Custom Banner */}
      <div className="custom-banner" style={{ minHeight: "180px", display: "flex", alignItems: "center" }}>
        <div className="container text-center pt-20">
          <h1 className="font-playfair font-extrabold text-white tracking-wider animate-slide-up" style={{ fontSize: "42px" }}>
            Kona Cafe Happenings
          </h1>
          <p className="text-white opacity-85 text-sm uppercase tracking-widest mt-10">
            Join the Aloha Spirit &bull; Live Music, Boba Workshops & More
          </p>
        </div>
      </div>

      {/* Events Listing */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <h2 className="font-playfair font-extrabold text-center mb-50" style={{ fontSize: "36px" }}>
                Events at Our Shacks
              </h2>
              
              <div className="space-y-12 flex flex-col gap-10">
                {events.map((event, idx) => (
                  <div
                    key={event.id}
                    className="row items-center bg-white p-24 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    style={{
                      margin: "0px",
                      borderRadius: "24px",
                      flexDirection: idx % 2 === 1 ? "row-reverse" : "row"
                    }}
                  >
                    {/* Event image column */}
                    <div className="col-12 col-md-5 pl-0 pr-0 mb-20 mb-md-0 overflow-hidden rounded-2xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="rounded img-fluid w-full hover:scale-105 transition-transform duration-700"
                        style={{ height: "260px", objectFit: "cover", borderRadius: "16px" }}
                      />
                    </div>

                    {/* Event details column */}
                    <div className={`col-12 col-md-7 ${idx % 2 === 1 ? "pr-md-30 pl-md-0" : "pl-md-30 pr-md-0"}`}>
                      <span className="text-[10px] uppercase tracking-widest text-[#FFA259] font-bold bg-[#FFA259]/10 px-3 py-1.5 rounded-full mb-15 inline-block">
                        Shack Gathering
                      </span>
                      <h3 className="font-bold font-playfair mb-15 leading-snug" style={{ fontSize: "26px", color: "#1A1A1A" }}>
                        {event.title}
                      </h3>
                      
                      <div className="text-sm font-semibold mb-20 text-muted space-y-2">
                        <div className="flex items-center gap-2">
                          <i className="fa fa-calendar text-[#00A186]"></i>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="fa fa-map-marker text-[#E15C6C]"></i>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.7em" }} className="font-light">
                        {event.description}
                      </p>
                      
                      <div className="mt-20">
                        <button className="bttn-small btn-fill" style={{ fontSize: "11px", padding: "8px 20px" }}>
                          RSVP &bull; Free Admission
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
