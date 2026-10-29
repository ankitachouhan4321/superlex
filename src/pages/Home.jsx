import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {Link} from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FaqSection from '.././component/FaqSection'
import Testimonials from '.././component/Testimonials'



const bannerImages = [
    "/img/banner1.png",
    "/img/banner1.png",
    "/img/banner1.png",
];
const bannerImages2 = [
    "/img/banner1-short.png",
    "/img/banner1-short.png",
    "/img/banner1-short.png",
];


;

const qualityPoints = [
    {
        icon: "fa-solid fa-magnifying-glass",
        title: "Careful Product Inspection",
        description:
            "We focus on checking the appearance, finish, and overall condition of our motorcycle indicators to maintain consistent product quality."
    },
    {
        icon: "fa-solid fa-lightbulb",
        title: "Lighting Performance",
        description:
            "Our quality approach emphasizes clear illumination and dependable indicator functionality for everyday motorcycle use."
    },
    {
        icon: "fa-solid fa-gears",
        title: "Durability & Reliability",
        description:
            "We prioritize durable materials, practical designs, and dependable performance to meet the needs of the two-wheeler market."
    },
    {
        icon: "fa-solid fa-box-open",
        title: "Quality-Focused Supply",
        description:
            "We aim to deliver well-finished products with consistent quality to dealers, distributors, wholesalers, and automotive businesses."
    }
];

const reviews = [
    {
        id: 1,
        name: "Verified Customer 01",
        initial: "C",
        color: "#527ba0",
        date: "Sample review",
        rating: 5,
        text: "Good quality bike indicators. The finishing looks neat and the product design is practical.",
        source: "Demo testimonial",
    },
    {
        id: 2,
        name: "Verified Customer 02",
        initial: "C",
        color: "#926e59",
        date: "Sample review",
        rating: 5,
        text: "We were looking for a motorcycle indicator supplier for our automotive accessories business. The product range and designs were the main reasons we considered Superlex. Communication regarding different models was helpful, and the overall experience was satisfactory.",
        source: "Demo testimonial",
    },
    {
        id: 3,
        name: "Verified Customer 03",
        initial: "C",
        color: "#628777",
        date: "Sample review",
        rating: 4,
        text: "Nice product range and good finishing.",
        source: "Demo testimonial",
    },
    {
        id: 4,
        name: "Verified Customer 04",
        initial: "C",
        color: "#8669a0",
        date: "Sample review",
        rating: 5,
        text: "Our business deals in motorcycle spare parts, so product consistency is important for us. We wanted indicators with clean lens finishing, practical designs, and a good overall appearance. Superlex had options that matched what we were searching for. A positive experience overall.",
        source: "Demo testimonial",
    },
    {
        id: 5,
        name: "Verified Customer 05",
        initial: "C",
        color: "#b18145",
        date: "Sample review",
        rating: 5,
        text: "Good experience. The indicators have a nice appearance.",
        source: "Demo testimonial",
    },
    {
        id: 6,
        name: "Verified Customer 06",
        initial: "C",
        color: "#537b8a",
        date: "Sample review",
        rating: 4,
        text: "Superlex offers a useful range of bike indicators for dealers and motorcycle accessory businesses. We appreciated the attention given to product details and the different available designs. Looking forward to exploring more products.",
        source: "Demo testimonial",
    },
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
        link: "/our-products",
        theme: "dark",
    },
    {
        title: "QUALITY YOU CAN TRUST",
        subtitle: "MANUFACTURER, EXPORTER & SUPPLIER",
        link: "/our-products",
        theme: "red",
    },
];

const products = [
    {
        id: 1,
        part:"NI-1114",
        name: "Glamour New Model F.I (Universal)",
        image: "/img/prod/1.jpg",
        image2: "/img/prod/1.1.jpg",
    },
    {
        id: 2,
        part: "NI-1101A",
        name: "Blinker Assy Splendor Plus (Universal)",
        image: "/img/prod/2.jpg",
        image2: "/img/prod/2.1.jpg",
    },
    {
        id: 1,
        part: "NI-1114",
        name: "Glamour New Model F.I (Universal)",
        image: "/img/prod/1.jpg",
        image2: "/img/prod/1.1.jpg",
    },
    {
        id: 2,
        part: "NI-1101A",
        name: "Blinker Assy Splendor Plus (Universal)",
        image: "/img/prod/2.jpg",
        image2: "/img/prod/2.1.jpg",
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

const processSteps = [
    {
        icon: "fa-solid fa-lightbulb",
        title: "1.Design",
    },
    {
        icon: "fa-solid fa-screwdriver-wrench",
        title: "2.Development",
    },
    {
        icon: "fa-solid fa-industry",
        title: "3.Production",
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "4.Quality Check",
    },
];

const Practice = [
    1, 2, 3, 4
]



const Home = () => {

    return (
        <>
        <div>
               
        </div>


            {/* hero-banner start */}

            <section className="hero-banner" id="hero-banner1">
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

            <section className="hero-banner" id="hero-banner2">
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
                        {bannerImages2.map((image, index) => (
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
                        {bannerImages2.map((image, index) => (
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
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                data-aos-duration="800"
                                data-aos-easing="ease-in-out"
                                data-aos-once="true"
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
                        <div className="col-lg-7" data-aos="fade-right">
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

                                <Link to="/about" className="contact-btn">
                                    Read More
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>

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

            <section className="why-choose-section" id="why-choose">
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
                                        src="/img/light-blink.gif"
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
                    <div class="container">

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
                                slidesPerView: 4,
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
                                            className='img1'
                                        />
                                        <img
                                            src={product.image2}
                                            alt={product.name}
                                            loading="lazy"
                                            className='img2'
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                </div>
            </section>
            {/* product-sec end */}

            {/* quality start */}
            <section className="quality-assurance-section py-5" id="quality-assurance">
                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* LEFT IMAGE */}
                        <div className="col-lg-5">
                            <div className="qa-image-wrapper">

                                <div className="qa-image-frame">
                                    <img
                                        src="/img/Quality.png"
                                        alt="Superlex Motorcycle Indicator Quality Assurance"
                                        className="img-fluid qa-main-image"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="qa-floating-badge">
                                    <div className="qa-badge-icon">
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </div>

                                    <div>
                                        <h4>Quality First</h4>
                                        <span>Our Commitment</span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-7">
                            <div className="qa-content">

                                <span className="qa-small-title">
                                    OUR QUALITY APPROACH
                                </span>

                                <h3>
                                    Reliable Motorcycle Indicators
                                    Backed by Quality-Focused Practices
                                </h3>

                                <p className="qa-description">
                                    As a manufacturer, exporter, and supplier
                                    of bike indicators, Superlex understands
                                    the importance of product quality and
                                    consistent performance. We emphasize
                                    attention to detail, product reliability,
                                    and customer satisfaction throughout
                                    our approach.
                                </p>

                                {/* QUALITY POINTS */}
                                <div className="row g-3 mt-3">
                                    {qualityPoints.map((item, index) => (
                                        <div
                                            className="col-md-6"
                                            key={index}
                                        >
                                            <div className="qa-feature-card h-100">

                                                <div className="qa-feature-icon">
                                                    <i className={item.icon}></i>
                                                </div>

                                                <h4>{item.title}</h4>

                                                <p>{item.description}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </section>

            {/* quality end */}

            {/* process start */}

            <section
                className="superlex-process-section"
                aria-label="Superlex manufacturing process"
            >
                <div className="container">
                    <div className="superlex-process-grid">

                        {processSteps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="superlex-process-item">
                                    <div className="superlex-process-icon">
                                        <i className={step.icon}></i>
                                    </div>

                                    <span className="superlex-process-line"></span>

                                    <h3>{step.title}</h3>
                                </div>

                                {index < processSteps.length - 1 && (
                                    <div
                                        className="superlex-process-arrow"
                                        aria-hidden="true"
                                    >

                                        <svg
                                            viewBox="0 0 110 45"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {/* FIRST CURVED LINE */}
                                            <path
                                                d="M4 8 C30 39 70 40 96 18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />

                                            {/* SECOND CURVED LINE */}
                                            <path
                                                d="M4 14 C30 45 72 45 99 23"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />

                                            {/* FIRST ARROW HEAD */}
                                            <path
                                                d="M84 12 L101 18 L92 32"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* SECOND ARROW HEAD */}
                                            <path
                                                d="M81 8 L106 18 L94 36"
                                                stroke="currentColor"
                                                strokeWidth="1.3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>

                                    </div>
                                )}
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </section>

            {/* process end */}

            {/* faq start */}
            <FaqSection />

            {/* faq end */}

            {/* export start */}

            <section className="superlex-export-section" id="export-supply">
                <div className="container px-3 px-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 col-md-11">

                            <div className="superlex-export-content text-center">

                                <div className="product-section-heading">

                                    <span className="section-subtitle">
                                        EXPORT & SUPPLY
                                    </span>

                                    <h2>
                                        Connecting Quality Motorcycle
                                        Indicators with Global Markets
                                    </h2>

                                </div>

                                <p className="superlex-export-description">
                                    Superlex is a manufacturer, exporter,
                                    and supplier of motorcycle indicators,
                                    committed to delivering quality products
                                    to dealers, distributors, wholesalers,
                                    and international buyers. We focus on
                                    reliable supply, customer satisfaction,
                                    and building long-term business
                                    partnerships.
                                </p>

                                <Link
                                    to="/contact"
                                    className="superlex-export-btn"
                                >
                                    Enquire for Bulk Supply
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* export end */}


            <Testimonials/>

        </>
    )
}

export default Home
