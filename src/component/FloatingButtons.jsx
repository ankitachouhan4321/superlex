
import React, { useEffect, useState } from "react";

const FloatingButtons = () => {
    const [showTop, setShowTop] = useState(false);

    const phoneNumber = "919654475016";

    const whatsappMessage =
        "Hello Superlex, I want to enquire about your motorcycle indicators. Please share more details.";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="superlex-floating-buttons">

            {/* WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="superlex-float-btn superlex-whatsapp"
                aria-label="Chat with Superlex on WhatsApp"
                title="WhatsApp Enquiry"
            >
                <i className="fa-brands fa-whatsapp"></i>
                <span className="superlex-float-tooltip">
                    WhatsApp Us
                </span>
            </a>

            {/* Call Button */}
            <a
                href={`tel:+${phoneNumber}`}
                className="superlex-float-btn superlex-call"
                aria-label="Call Superlex"
                title="Call Now"
            >
                <i className="fa-solid fa-phone-volume"></i>
                <span className="superlex-float-tooltip">
                    Call Now
                </span>
            </a>

            {/* Scroll to Top */}
            <button
                type="button"
                className={`superlex-float-btn superlex-scroll-top ${showTop ? "show" : ""
                    }`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                title="Back to Top"
                tabIndex={showTop ? 0 : -1}
            >
                <i className="fa-solid fa-arrow-up"></i>
                <span className="superlex-float-tooltip">
                    Back to Top
                </span>
            </button>

        </div>
    );
};

export default FloatingButtons;
