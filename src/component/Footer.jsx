
import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Products", url: "/our-products" },
    { name: "Faqs", url: "/faqs" },
    { name: "Contact Us", url: "/contact" },
];

const productLinks = [
    { name: "Blinker Assy Splendor Plus (L+R)", id: "/our-products" },
    { name: "Blinker Assy Splendor Pro (L+R)", id: "/our-products" },
    { name: "Blinker Assy Splendor Plus Universal", id: "products" },
    { name: "Blinker Assy Passion Plus Universal", id: "/our-products" },
    { name: "Blinker Assy Passion X-Pro", id: "/our-products" },
];

const Footer = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container-lg">
                    <div className="row gy-5">

                        {/* COLUMN 1 - COMPANY */}
                        <div className="col-lg-3 col-sm-6 border-end border-dark">
                            <div className="footer-about">
                                <a href="/" className="footer-logo">
                                    <img
                                        src="/img/white-logo.png"
                                        alt="Superlex Auto Lights"
                                        className="img-fluid"
                                    />
                                </a>

                                <p>
                                    Superlex Auto Lights offers automotive lighting
                                    solutions designed to enhance vehicle style,
                                    visibility and performance.
                                </p>

                                <div className="footer-social">
                                    <a href="https://www.facebook.com/people/Superlex/61551375550117/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>

                                    <a href="https://www.instagram.com/superlexautolight" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>

                                    <a href="https://www.youtube.com/@SuperlexAutoLights" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>


                                </div>
                            </div>
                        </div>

                        {/* COLUMN 2 - QUICK LINKS */}
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="footer-title">Quick Links</h4>

                            <ul className="footer-links">
                                {quickLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>
                                            <i className="fa-solid fa-angle-right"></i>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="col-lg-3 col-sm-6">
                            <h4 className="footer-title">Our Best Products</h4>

                            <ul className="footer-links">
                                {productLinks.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.id}>
                                            <i className="fa-solid fa-angle-right"></i>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 4 - MAP */}
                        <div className="col-lg-3 col-sm-6">
                            <h4 className="footer-title">Our Location</h4>

                            <div className="footer-map">
                                <iframe
                                    title="Superlex Auto Lights Location"
                                    src="https://maps.google.com/maps?q=New%20Delhi%20110086%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="200"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* CONTACT INFORMATION ROW */}
                        <div className="col-12">
                            <div className="footer-contact">
                                <div className="row gy-4">

                                    <div className="col-lg-4 col-msm-6">
                                        <div className="footer-contact-item">
                                            <div className="footer-contact-icon">
                                                <i className="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div>
                                                <h5>Phone</h5>
                                                <a href="tel:+919654475016">
                                                    +91 96544 75016
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-msm-6">
                                        <div className="footer-contact-item">
                                            <div className="footer-contact-icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div>
                                                <h5>Email</h5>
                                                <a href="mailto:superlexautolight@gmail.com">
                                                    superlexautolight@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-msm-6">
                                        <div className="footer-contact-item">
                                            <div className="footer-contact-icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div>
                                                <h5>Address</h5>
                                                <p>Dharma Enterprises
                                                    superlexautolight@gmail.com
                                                    J-213, Sector 2, Bawana Industrial Area, New Delhi – 110039, </p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* BOTTOM FOOTER */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center gy-2">

                            <div className="col-md-6 text-center text-md-start">
                                <p>
                                    © {new Date().getFullYear()} Superlex Auto Lights.
                                    All Rights Reserved.
                                </p>
                            </div>

                            <div className="col-md-6 text-center text-md-end">
                                <p>
                                    Designed by{" "}
                                    <a
                                        href="https://viraladsmedia.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Viral Ads Media
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;
