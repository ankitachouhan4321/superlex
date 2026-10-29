import Breadcrumb from '../component/Breadcrumb';
import React, { useEffect, useRef, useState } from "react";
import {Link} from "react-router-dom";



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


const vision = [
  {
    icon: "fa-solid fa-eye",
    title: "Our Vision",
    subtitle: "Lighting the Way to a Better Riding Experience",
    description:
      "To become a trusted name in the motorcycle lighting industry by delivering innovative, durable, and high-quality bike indicators. We aim to expand our presence across India and international markets while setting higher standards in product quality, reliability, and customer satisfaction.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Our Mission",
    subtitle: "Delivering Quality, Innovation & Reliability",
    description:
      "Our mission is to manufacture and supply high-quality motorcycle indicators that combine modern design, dependable performance, and long-lasting durability. Through continuous improvement, efficient manufacturing, and customer-focused service, we strive to meet the needs of motorcycle owners, dealers, distributors, and global buyers.",
  },
  {
    icon: "fa-solid fa-gem",
    title: "Our Core Values",
    subtitle: "Built on Quality, Driven by Trust",
    description:
      "At Superlex, we believe in delivering excellence through quality craftsmanship, honest business practices, and continuous innovation. We value customer satisfaction, product reliability, and long-term business relationships while maintaining consistent quality and professional service.",
  },
];


const counterData = [
  {
    id: 1,
    icon: "fa-solid fa-award",
    target: 5,
    suffix: "+",
    title: "Years Experience",
  },
  {
    id: 2,
    icon: "fa-solid fa-truck-fast",
    target: null,
    title: "All India Delivery",
  },
  {
    id: 3,
    icon: "fa-solid fa-box-open",
    target: 10,
    suffix: "+",
    title: "Our Products",
  },
  {
    id: 4,
    icon: "fa-solid fa-users",
    target: 100,
    suffix: "K+",
    title: "Happy Clients",
  },
];

const AnimatedCounter = ({ target, suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start || target === null) return;

    let animationFrame;
    const duration = 1800;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easeOut * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, target]);

  return (
    <span>
      {target === null ? "PAN INDIA" : `${count}${suffix}`}
    </span>
  );
};


const About = () => {

  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Breadcrumb title="About Us" />

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

                <Link to="/contact" className="contact-btn">
                  Contact Now
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

      {/* counter start */}

      <section
        className="superlex-counter-section"
        ref={sectionRef}
      >
        <div className="container">
          <div className="row g-4">
            {counterData.map((item) => (
              <div
                className="col-lg-3 col-md-6 col-6"
                key={item.id}
              >
                <div className="superlex-counter-item">

                  <div className="superlex-counter-icon">
                    <i className={item.icon}></i>
                  </div>

                  <h2 className="superlex-counter-number">
                    <AnimatedCounter
                      target={item.target}
                      suffix={item.suffix}
                      start={startCounting}
                    />
                  </h2>

                  <h3 className="superlex-counter-title">
                    {item.title}
                  </h3>



                  <div className="superlex-counter-line"></div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* counter end */}


      <section id="vision">
        <div className="vision container py-lg-5 py-3">

          <div className="product-section-heading">
            <span className="section-subtitle">
              WHAT DRIVES SUPERLEX
            </span>

            <h2>Our Vision, Mission & Core Values</h2>

            <p>
              At Superlex, our commitment to quality,
              innovation, and customer satisfaction drives
              everything we do as a manufacturer, exporter,
              and supplier of motorcycle indicators.
            </p>
          </div>
          <br/>

          <div className="row g-4">
            {vision.map((card, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >
                <div className="about-info-card h-100">

                  <div className="about-card-icon">
                    <i className={card.icon}></i>
                  </div>

                  <h3>{card.title}</h3>

                  <h5 className="fs-5">
                    {card.subtitle}
                  </h5>

                  <div className="about-card-line"></div>

                  <p>{card.description}</p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* vision end */ }

      
      
    </>
  )
}

export default About
