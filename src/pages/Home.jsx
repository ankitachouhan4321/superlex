import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerImages = [
    "/img/banner1.png",
    "/img/banner1.png",
    "/img/banner1.png",
];


const features = [
    {
        icon: "fa-solid fa-industry fa-flip-360",
        title: "EXPERT MANUFACTURING",
        description:
            "Specialized in manufacturing automotive indicators with a focus on quality, precision, and durability.",
    },
    {
        icon: "fa-solid fa-shield-halved fa-flip-360",
        title: "QUALITY ASSURANCE",
        description:
            "Our automotive indicators are designed to deliver reliable performance and long-lasting durability.",
    },
    {
        icon: "fa-solid fa-globe fa-flip-360",
        title: "MANUFACTURER & EXPORTER",
        description:
            "We manufacture, export, and supply automotive indicators for domestic and international markets.",
    },
    {
        icon: "fa-solid fa-headset fa-flip-360",
        title: "CUSTOMER SUPPORT",
        description:
            "Get assistance with product inquiries, specifications, bulk orders, and supply requirements.",
    },
];


const banners = [
    {
        title: "PREMIUM BIKE INDICATORS",
        subtitle: "BUILT FOR STYLE & RELIABLE PERFORMANCE",
        link: "/products",
        theme: "dark",
    },
    {
        title: "QUALITY YOU CAN TRUST",
        subtitle: "MANUFACTURER, EXPORTER & SUPPLIER",
        link: "/products",
        theme: "red",
    },
];

const products = [
    {
        id: 1,
        name: "LED Headlights",
        image: "/img/prod.png",
    },
    {
        id: 2,
        name: "Fog Lights",
        image: "/img/prod.png",
    },
    {
        id: 3,
        name: "Tail Lights",
        image: "/img/prod.png",
    },
    {
        id: 4,
        name: "Indicator Lights",
        image: "/img/prod.png",
    },
    {
        id: 5,
        name: "Automotive LED Lights",
        image: "/img/prod.png",
    },
    {
        id: 6,
        name: "Car Lighting Accessories",
        image: "/img/prod.png",
    },
];


const aboutCards = [
    {
        icon: "fa-solid fa-industry",
        title: "Quality Manufacturing",
        description:
            "We focus on manufacturing dependable motorcycle indicators with attention to product quality, durability, and modern design."
    },
    {
        icon: "fa-solid fa-globe",
        title: "Export & Supply",
        description:
            "As a manufacturer, exporter, and supplier, Superlex serves dealers, distributors, and automotive businesses across domestic and international markets."
    },
    {
        icon: "fa-solid fa-handshake",
        title: "Customer Satisfaction",
        description:
            "We believe in building lasting business relationships through consistent product quality, reliable supply, and customer-focused service."
    }
];


const whyChoosePoints = [
    {
        description:
            "Quality-focused manufacturing of motorcycle indicators designed for durability, reliable performance, and modern styling."
    },
    {
        description:
            "A dedicated range of bike indicators developed to meet the changing requirements of the two-wheeler market."
    },
    {
        description:
            "Manufacturer, exporter, and supplier serving automotive dealers, distributors, wholesalers, and businesses."
    },
    {
        description:
            "Committed to customer satisfaction through consistent product quality, dependable supply, and long-term business relationships."
    }
];

const Home = () => {

    return (
        <>
            {/* hero-banner start */}

            <section className="hero-banner">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                    data-bs-interval="4500"
                    data-bs-pause="hover"
                    data-bs-touch="true"
                >
                    {/* Carousel Indicators */}
                    <div className="carousel-indicators custom-indicators">
                        {bannerImages.map((image, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? "active" : ""}
                                aria-current={index === 0 ? "true" : undefined}
                                aria-label={`Slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Carousel Images */}
                    <div className="carousel-inner">
                        {bannerImages.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === 0 ? "active" : ""
                                    }`}
                            >
                                <div className="banner-image-wrapper">
                                    <img
                                        src={image}
                                        className="d-block w-100 banner-img"
                                        alt={`Superlux Auto Lights Banner ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Previous Arrow */}
                    <button
                        className="carousel-control-prev custom-carousel-arrow"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    {/* Next Arrow */}
                    <button
                        className="carousel-control-next custom-carousel-arrow"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* hero-banner-end */}

            {/* features-section start */}

            <section className="features-section">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {features.map((item, index) => (
                            <div
                                className="col-lg-3 col-md-6 col-12"
                                key={index}
                            >
                                <div className="feature-item text-center h-100">
                                    <div className="feature-icon mx-auto">
                                        <i className={item.icon}></i>
                                    </div>

                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* features-section end */}

            {/* about-sec start */}


            <section className="about-section py-5" id="about">
                <div className="container px-3 px-lg-5">

                    {/* ABOUT TOP SECTION */}
                    <div className="row align-items-center g-5">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-7">
                            <div className="product-section-heading">

                                <span className="section-subtitle">
                                    ABOUT SUPERLEX
                                </span>

                                <h2>Trusted Manufacturer, Exporter & Supplier of Bike Indicators</h2>

                                <p className="mb-3">
                                    Welcome to <b> Superlex, </b>a manufacturer, exporter,
                                    and supplier of motorcycle indicators. We
                                    specialize in providing quality bike indicators
                                    that combine modern styling, durability, and
                                    dependable performance. Our products are
                                    designed to meet the requirements of motorcycle
                                    dealers, distributors, wholesalers, and
                                    automotive businesses.
                                </p>

                                <p className="mb-4">
                                    At Superlex, we focus on product quality,
                                    practical design, and customer satisfaction.
                                    Our goal is to deliver reliable motorcycle
                                    indicator solutions while building long-term
                                    business relationships. With a commitment to
                                    consistent quality and responsive service,
                                    we strive to be a trusted choice for bike
                                    indicator supply in domestic and international
                                    markets.
                                </p>

                                <a href="/about" className="contact-btn">
                                    Read More
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>

                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-5">
                            <div className="about-image-wrap">

                                <img
                                    src="/img/about.jpg"
                                    alt="Superlex Bike Indicator Manufacturer, Exporter and Supplier"
                                    className="img-fluid about-main-image"
                                    loading="lazy"
                                />

                                {/* QUALITY BADGE */}
                                <div className="about-experience">
                                    <h3>Quality First</h3>
                                    <span>BUILT ON TRUST</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BOTTOM CARDS */}
                    <div className="row g-4 mt-5">
                        {aboutCards.map((card, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                            >
                                <div className="about-info-card h-100">

                                    <div className="about-card-icon">
                                        <i className={card.icon}></i>
                                    </div>

                                    <h3>{card.title}</h3>

                                    <div className="about-card-line"></div>

                                    <p>{card.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* about-sec end */}


            {/* why-choose start */}


            <section className="why-choose-section">
                <div className="container-fluid px-3 px-lg-5">
                    <div className="container">
                        <div className="row align-items-center g-5">

                            {/* LEFT CONTENT */}
                            <div className="col-lg-7">
                                <div className="why-choose-content">

                                    <h2 className="text-white fw-bold mt-3 mb-3">
                                        Why Choose Superlex?
                                    </h2>

                                    <div className="why-heading-line"></div>

                                    <p className="why-intro">
                                        At Superlex, we are committed to delivering
                                        quality motorcycle indicators that combine
                                        durability, modern design, and dependable
                                        performance. As a manufacturer, exporter,
                                        and supplier of bike indicators, we focus
                                        on meeting the needs of dealers,
                                        distributors, wholesalers, and automotive
                                        businesses with reliable products and
                                        customer-focused service.
                                    </p>

                                    {/* FOUR POINTS */}
                                    <div className="why-points">
                                        {whyChoosePoints.map((item, index) => (
                                            <div className="why-point" key={index}>

                                                <div className="why-check-icon">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>

                                                <div className="why-point-content">
                                                    <p>{item.description}</p>
                                                </div>

                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="col-lg-5">
                                <div className="why-image-box">
                                    <img
                                        src="/img/why-choose-us.jpg"
                                        alt="Superlex Motorcycle Indicator Manufacturer and Supplier"
                                        className="img-fluid"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* why-choose end */}


            {/* promo-section start */}
            <section className="promo-section">
                <div className="container">
                    <div className="row g-4">
                        {banners.map((item, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div className={`promo-card promo-${item.theme}`}>

                                    {/* TEXT CONTENT */}
                                    <div className="promo-content">
                                        <h2>{item.title}</h2>
                                        <p>{item.subtitle}</p>

                                        <a href={item.link} className="promo-btn">
                                            SHOP NOW
                                        </a>
                                    </div>



                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* promo-section end */}


            {/* product-sec start */}

            <section className="product-section" id="products">
                <div className="container-fluid px-3 px-lg-5">

                    {/* SECTION HEADING */}
                    <div className="row align-items-center mb-4">
                        <div className="col-lg-8 col-md-8">
                            <div className="product-section-heading">
                                <span className="section-subtitle">
                                    SUPERLUX AUTO LIGHTS
                                </span>

                                <h2>Our Featured Products</h2>

                                <p>
                                    Explore our range of automotive lighting
                                    products designed for modern vehicles.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="product-slider-arrows">
                                <button
                                    className="product-prev"
                                    aria-label="Previous product"
                                >
                                    <i className="fa-solid fa-arrow-left"></i>
                                </button>

                                <button
                                    className="product-next"
                                    aria-label="Next product"
                                >
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SWIPER SLIDER */}
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={800}
                        loop={products.length > 4}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: ".product-next",
                            prevEl: ".product-prev",
                        }}

                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        className="product-swiper"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="product-card">

                                    {/* PRODUCT IMAGE */}
                                    <div className="product-image">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* PRODUCT CONTENT */}
                                    <div className="product-card-content">
                                        <h3>{product.name}</h3>

                                        <a
                                            href={`/contact?product=${encodeURIComponent(
                                                product.name
                                            )}`}
                                            className="product-enquiry-btn"
                                        >
                                            Enquiry Now
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* product-sec end */}

      



        </>
    )
}

export default Home
