
import React, { useState } from "react";
import Breadcrumb from "../component/Breadcrumb";

// Keep your existing 18 Hero products here unchanged

const products = [
  {
    id: 1,
    part: "NI-1101",
    name: "Blinker Assy Splendor Plus (L+R)",
    image: "",
    image2: "",
  },
  {
    id: 2,
    part: "NI-1102",
    name: "Blinker Assy Splendor Pro (L+R)",
    image: "",
    image2: "",
  },
  {
    id: 3,
    part: "NI-1101A",
    name: "Blinker Assy Splendor Plus Universal",
    image: "",
    image2: "",
  },
  {
    id: 4,
    part: "NI-1101B",
    name: "Blinker Assy Splendor Pro Universal",
    image: "img/prod/4.jpg",
    image2: "img/prod/4.1.jpg",
  },
  {
    id: 5,
    part: "NI-1103",
    name: "Blinker Assy Passion Plus Universal",
    image: "",
    image2: "",
  },
  {
    id: 6,
    part: "NI-1104",
    name: "Blinker Assy Passion Pro Natural Universal",
    image: "",
    image2: "",
  },
  {
    id: 7,
    part: "NI-1105",
    name: "Blinker Assy CD-Deluxe (Long Stay) (Yellow)",
    image: "",
    image2: "",
  },
  {
    id: 8,
    part: "NI-1106",
    name: "Blinker Assy Passion Pro N/M 2016 (L+R)",
    image: "",
    image2: "",
  },
  {
    id: 9,
    part: "NI-1107",
    name: "Blinker Assy Passion X-Pro",
    image: "",
    image2: "",
  },
  {
    id: 10,
    part: "NI-1108",
    name: "Blinker Assy Glamour Red/Achiever (Universal)",
    image: "",
    image2: "",
  },
  {
    id: 11,
    part: "NI-1109",
    name: "Blinker Assy Glamour White/HF DLX/NXG (Universal)",
    image: "",
    image2: "",
  },
  {
    id: 12,
    part: "NI-1110",
    name: "Blinker Assy Hunk/Glamour N/M",
    image: "",
    image2: "",
  },
  {
    id: 13,
    part: "NI-1111",
    name: "Blinker Assy CD-100 Front (L+R)",
    image: "",
    image2: "",
  },
  {
    id: 14,
    part: "NI-1112",
    name: "Blinker Assy CD-100 Rear",
    image: "",
    image2: "",
  },
  {
    id: 15,
    part: "NI-1113",
    name: "Blinker Assy CD-100/SS (Long Wire)",
    image: "",
    image2: "",
  },
  {
    id: 16,
    part: "NI-1114",
    name: "Blinker Assy Glamour New Model F.I (Universal)",
    image: "img/prod/16.jpg",
    image2: "img/prod/16.1.jpg",
  },
  {
    id: 17,
    part: "NI-1115",
    name: "Blinker Assy Passion Pro 110CC BS6/Glamour 125 CC BS6",
    image: "",
    image2: "",
  },
  {
    id: 18,
    part: "NI-1116",
    name: "Blinker Assy Super SPL 125 CC BS6 (2021 Model)",
    image: "",
    image2: "",
  },
];


// Add Bajaj Series products here

const bajajProducts = [
  {
    id: 1,
    part: "NI-1151",
    name: "BLINKER ASSY PLATINA / PULSAR (WHITE)",
    image: "",
    image2: "",
  },
  {
    id: 2,
    part: "NI-1152",
    name: "BLINKER ASSY PLATINA / PULSAR (RED)",
    image: "",
    image2: "",
  },
  {
    id: 3,
    part: "NI-1153",
    name: "BLINKER ASSY CT-100",
    image: "",
    image2: "",
  },
  {
    id: 4,
    part: "NI-1154",
    name: "BLINKER ASSY XCD 125CC",
    image: "",
    image2: "",
  },
  {
    id: 5,
    part: "NI-1155",
    name: "BLINKER ASSY XCD 135CC / PULSAR 135CC",
    image: "",
    image2: "",
  },
  {
    id: 6,
    part: "NI-1156",
    name: "BLINKER ASSY PULSAR DTSI SINGLE COUPLER",
    image: "",
    image2: "",
  },
  {
    id: 7,
    part: "NI-1157",
    name: "BLINKER ASSY PULSAR DTSI DUBBLE COUPLER",
    image: "",
    image2: "",
  },
  {
    id: 8,
    part: "NI-1158",
    name: "BLINKER ASSY DISCOVER ST/DISCOVER M/DIS 150 UNIVERSAL",
    image: "",
    image2: "",
  },
  {
    id: 9,
    part: "NI-1159",
    name: "BLINKER ASSY DISCOVER 100CC (NATURAL) (SHOCKER FITTING)",
    image: "",
    image2: "",
  },
  {
    id: 10,
    part: "NI-1160",
    name: "BLINKER ASSY AVENGER FRONT (BLACK BODY) SHOKER FTD (R+L)",
    image: "",
    image2: "",
  },
  {
    id: 11,
    part: "NI-1161",
    name: "BLINKER ASSY AVENGER REAR (BLACK BODY) UNIVERSAL",
    image: "",
    image2: "",
  },
  {
    id: 12,
    part: "NI-1162",
    name: "BLINKER ASSY AVENGER FRONT 220 STREET (CHROME BODY) (L+R)",
    image: "",
    image2: "",
  },
  {
    id: 13,
    part: "NI-1163",
    name: "BLINKER ASSY AVENGER REAR (CHROME BODY) UNIVERSAL",
    image: "",
    image2: "",
  },
  {
    id: 14,
    part: "NI-1164",
    name: "BLINKER ASSY PULSAR 200 NS",
    image: "",
    image2: "",
  },
  {
    id: 15,
    part: "NI-1165",
    name: "BLINKER ASSY PLATINA ES 110 CC BS6 (2020 MODEL)",
    image: "",
    image2: "",
  },
];


const Products = () => {
  const [activeSeries, setActiveSeries] = useState("hero");

  const displayedProducts =
    activeSeries === "hero" ? products : bajajProducts;

  return (
    <>
      <Breadcrumb title="Our Products" />

      <section className="py-lg-5 py-3">
        <div className="container-lg">

          <div className="product-section-heading text-center">
            <h2>Explore Our Products</h2>
            <p>Discover premium-quality motorcycle indicators by Superlex, a trusted manufacturer, exporter, and supplier of bike indicator lights. We offer a wide range of **Hero Series and Bajaj Series indicators**, designed for durability, reliable performance, precise fitting, and enhanced visibility. Explore our collection of high-quality bike indicators, ideal for dealers, distributors, wholesalers, and automotive spare parts businesses.</p>
          </div>

          {/* SERIES BUTTONS */}
          <div className="product-series-tabs pb-3">
            <button
              type="button"
              className={`product-series-btn ${activeSeries === "hero" ? "active" : ""
                }`}
              onClick={() => setActiveSeries("hero")}
            >
              Hero Series
            </button>

            <button
              type="button"
              className={`product-series-btn ${activeSeries === "bajaj" ? "active" : ""
                }`}
              onClick={() => setActiveSeries("bajaj")}
            >
              Bajaj Series
            </button>
          </div>

          {/* PRODUCT CARDS - UNCHANGED */}
          <div className="row">
            {displayedProducts.map((product) => (
              <div
                className="col-lg-3 col-sm-6 mt-3"
                key={product.id}
              >
                <div className="product-card">

                  {/* PRODUCT IMAGE */}
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="img1"
                    />
                    <img
                      src={product.image2}
                      alt={product.name}
                      loading="lazy"
                      className="img2"
                    />
                  </div>

                  {/* PRODUCT CONTENT */}
                  <div className="product-card-content">
                    <h5>{product.part}</h5>

                    <h3>{product.name}</h3>

                    <a
                      href={`https://wa.me/919654475016?text=${encodeURIComponent(
                        `Hello Superlex, I want to enquire about ${product.name}. Please share the price and details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="product-enquiry-btn"
                    >
                      Enquiry Now
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Products;
