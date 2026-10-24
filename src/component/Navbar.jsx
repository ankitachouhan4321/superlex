
import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", link: "#home" },
        { name: "About Us", link: "#about" },
        { name: "Products", link: "#products" },
        { name: "Gallery", link: "#gallery" },
        { name: "Contact Us", link: "#contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">

            {/* TOP HEADER - SAME DESIGN */}
            <div className="header-top">
                <div className="container header-top-inner">

                    <div className="top-left">
                        <div className="social-links">
                            <a
                                href="https://www.facebook.com/people/Superlex/61551375550117/"
                                aria-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a
                                href="https://www.instagram.com/superlexautolight"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="https://www.youtube.com/@SuperlexAutoLights"
                                aria-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                          
                        </div>

                        <a className="hotline" href="tel:+919654475016">
                            <i className="fa-solid fa-phone-volume fa-wag"></i>
                            <span>Phone : +91 96544 75016</span>
                        </a>
                    </div>

                    <div className="top-right">
                        <p>Bawana Industrial Area, New Delhi – 110039, </p>
                    </div>

                </div>
            </div>

            {/* MAIN NAVBAR */}
            <div className="container nav-overlap">
                <nav className="main-navbar">

                    {/* LOGO */}
                    <a href="/" className="brand-logo" onClick={closeMenu}>
                        <img
                            src="/img/logo.png"
                            alt="Superlux Auto Lights"
                            className="img-fluid"
                        />
                    </a>

                    {/* NAVIGATION MENU */}
                    <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className={index === 0 ? "active" : ""}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT SIDE */}
                    <div className="nav-right">

                        <a href="#contact" className="contact-btn">
                            <span>Contact Us</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>

                        {/* MOBILE TOGGLE */}
                        <button
                            type="button"
                            className="nav-menu-btn"
                            aria-label="Toggle navigation"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <i
                                className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"
                                    }`}
                            ></i>
                        </button>

                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Navbar;
