
import React, { useState } from "react";

// Replace these placeholders with official Superlex details.
const CONTACT = {
    phones: ["+91 96544 75016"],
    email: "info.viraladsmedia@gmail.com",
    address: "J-213, Sector 2, Bawana Industrial Area, New Delhi – 110039, ",
    image: "/img/superlex-contact.jpg",
};

const enquiryOptions = [
    "Product Enquiry",
    "Bulk Order Enquiry",
    "Export Enquiry",
    "Dealership & Distribution",
    "Other Enquiry",
];

const initialForm = {
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
    website: "",
};

const ContactUs = () => {
    const [formData, setFormData] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading || formData.website.trim()) return;

        if (!CONTACT.email) {
            setStatus({
                type: "danger",
                message:
                    "Please configure the official Superlex enquiry email.",
            });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch(
                `https://formsubmit.co/ajax/${encodeURIComponent(
                    CONTACT.email
                )}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name.trim(),
                        email: formData.email.trim(),
                        phone: formData.phone.trim(),
                        enquiry_type: formData.enquiryType,
                        message: formData.message.trim(),
                        _subject: `Superlex Website Enquiry - ${formData.enquiryType}`,
                        _template: "table",
                        _replyto: formData.email.trim(),
                    }),
                }
            );

            const result = await response.json();

            if (
                !response.ok ||
                (result.success !== true &&
                    result.success !== "true")
            ) {
                throw new Error(
                    result.message || "Unable to submit your enquiry."
                );
            }

            setStatus({
                type: "success",
                message:
                    "Thank you for contacting Superlex! Your enquiry has been submitted successfully.",
            });

            setFormData(initialForm);
        } catch (error) {
            setStatus({
                type: "danger",
                message:
                    error instanceof TypeError
                        ? "Network error. Please try again."
                        : error.message || "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <section className="superlex-contact-section">
            <div className="container">

                {/* Contact Information Cards */}
                <div className="row g-4 superlex-info-row">

                    {/* Phone Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="superlex-info-card">
                            <div className="superlex-info-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>

                            <h3>Phone Number</h3>

                            {CONTACT.phones.length ? (
                                CONTACT.phones.map((phone) => (
                                    <a
                                        key={phone}
                                        href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                                    >
                                        {phone}
                                    </a>
                                ))
                            ) : (
                                <p>Contact number coming soon</p>
                            )}
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="col-lg-4 col-md-6">
                        <div className="superlex-info-card">
                            <div className="superlex-info-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>

                            <h3>Email Address</h3>

                            {CONTACT.email ? (
                                <a href={`mailto:${CONTACT.email}`}>
                                    {CONTACT.email}
                                </a>
                            ) : (
                                <p>Email address coming soon</p>
                            )}
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="col-lg-4 col-md-12">
                        <div className="superlex-info-card">
                            <div className="superlex-info-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>

                            <h3>Office Address</h3>

                                <p>Dharma Enterprises
<br/>
                                {CONTACT.address ||
                                    "Official Superlex address coming soon"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="superlex-contact-wrapper">
                    <div className="row g-4 align-items-stretch">

                        {/* Left Side Form */}
                        <div className="col-lg-7">
                            <div className="superlex-form-content">

                                <div class="product-section-heading">
                                    <span class="section-subtitle">  GET IN TOUCH</span>
                                    <h2>Contact Us</h2>
                                    <p className="pb-3">Looking for quality motorcycle indicators?
                                        Contact Superlex for product enquiries,
                                        bulk orders, export requirements and
                                        distribution opportunities.</p></div>

                                <form onSubmit={handleSubmit}>

                                    {/* Honeypot Spam Protection */}
                                    <input
                                        type="text"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                        aria-hidden="true"
                                        style={{ display: "none" }}
                                    />

                                    <div className="row g-3">

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="name"
                                                className="superlex-form-control"
                                                placeholder="Your Name *"
                                                aria-label="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                autoComplete="name"
                                                maxLength={100}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="superlex-form-control"
                                                placeholder="Phone Number *"
                                                aria-label="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="tel"
                                                pattern="[0-9+\s()\-]{10,20}"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                className="superlex-form-control"
                                                placeholder="Email Address *"
                                                aria-label="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                                maxLength={150}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <select
                                                name="enquiryType"
                                                className="superlex-form-control"
                                                aria-label="Enquiry Type"
                                                value={formData.enquiryType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">
                                                    Select Enquiry Type *
                                                </option>

                                                {enquiryOptions.map((option) => (
                                                    <option
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                className="superlex-form-control"
                                                rows="5"
                                                placeholder="Tell us about your requirements *"
                                                aria-label="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                maxLength={3000}
                                                required
                                            ></textarea>
                                        </div>

                                        {status.message && (
                                            <div className="col-12">
                                                <div
                                                    className={`alert alert-${status.type}`}
                                                    role="status"
                                                    aria-live="polite"
                                                >
                                                    {status.message}
                                                </div>
                                            </div>
                                        )}

                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="contact-btn "
                                                disabled={loading}
                                            >
                                                {loading
                                                    ? "Sending..."
                                                    : "Send Enquiry"}

                                                {!loading && (
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                )}
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Side Product Image */}
                        <div className="col-lg-5">
                            <div className="superlex-contact-image">
                                <img
                                    src={CONTACT.image}
                                    alt="Superlex motorcycle indicator lights"
                                    loading="lazy"
                                />

                                <div className="superlex-image-overlay">
                                    <span>SUPERLEX</span>
                                    <h3>
                                        Quality Motorcycle Indicators
                                    </h3>
                                    <p>
                                        Manufacturer | Exporter | Supplier
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
            <iframe
                title="Superlux Auto Lights Location"
                src="https://maps.google.com/maps?q=New%20Delhi%20110086%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
            ></iframe>
        </>
    );
};

export default ContactUs;
