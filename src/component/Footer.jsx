
import React from "react";

const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Our Products", url: "/products" },
    { name: "Gallery", url: "/gallery" },
    { name: "Contact Us", url: "/contact" },
];

const productLinks = [
    { name: "LED Headlights", url: "/products" },
    { name: "Fog Lights", url: "/products" },
    { name: "Tail Lights", url: "/products" },
    { name: "Indicator Lights", url: "/products" },
    { name: "Automotive Accessories", url: "/products" },
];

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row gy-5">

                    {/* COLUMN 1 - COMPANY */}
                    <div className="col-lg-3 col-md-6 border-end border-dark">
                        <div className="footer-about">
                            <a href="/" className="footer-logo">
                                <img
                                    src="/img/white-logo.png"
                                    alt="Superlux Auto Lights"
                                    className="img-fluid"
                                />
                            </a>

                            <p>
                                Superlux Auto Lights offers automotive lighting
                                solutions designed to enhance vehicle style,
                                visibility and performance.
                            </p>

                            <div className="footer-social">
                                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>

                                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>

                                <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>

                                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2 - QUICK LINKS */}
                    <div className="col-lg-3 col-md-6">
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

                    {/* COLUMN 3 - PRODUCTS */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="footer-title">Our Products</h4>

                        <ul className="footer-links">
                            {productLinks.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>
                                        <i className="fa-solid fa-angle-right"></i>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 4 - MAP */}
                    <div className="col-lg-3 col-md-6">
                        <h4 className="footer-title">Our Location</h4>

                        <div className="footer-map">
                            <iframe
                                title="Superlux Auto Lights Location"
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

                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-contact-item">
                                        <div className="footer-contact-icon">
                                            <i className="fa-solid fa-phone-volume"></i>
                                        </div>
                                        <div>
                                            <h5>Phone</h5>
                                            <a href="tel:+9189XXXXXXXX">
                                                +91 89XXXXXXXX
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="footer-contact-item">
                                        <div className="footer-contact-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <h5>Address</h5>
                                            <p>New Delhi 110086, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12">
                                    <div className="footer-contact-item">
                                        <div className="footer-contact-icon">
                                            <i className="fa-regular fa-clock"></i>
                                        </div>
                                        <div>
                                            <h5>Opening Hours</h5>
                                            <p>Monday till Friday 10 to 6 EST</p>
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
                                © {new Date().getFullYear()} Superlux Auto Lights.
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
    );
};

export default Footer;
