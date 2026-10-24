
import React, { useState } from "react";

// SAMPLE REVIEWS ONLY — replace with verified customer feedback.
// Do not present these as actual Google reviews.

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

const StarRating = ({ rating }) => (
    <div
        className="superlex-review-stars"
        aria-label={`${rating} out of 5 stars`}
    >
        {Array.from({ length: 5 }, (_, i) => (
            <i
                key={i}
                className={`fa-${i < rating ? "solid" : "regular"} fa-star`}
                aria-hidden="true"
            />
        ))}
    </div>
);

const ReviewCard = ({ review }) => {
    const [expanded, setExpanded] = useState(false);
    const isLong = review.text.length > 150;

    return (
        <article className="superlex-review-card">
            <div className="superlex-review-header">
                <div
                    className="superlex-review-avatar"
                    style={{ backgroundColor: review.color }}
                >
                    {review.initial}
                </div>

                <div className="superlex-review-user">
                    <h3>{review.name}</h3>
                    <span>{review.date}</span>
                </div>

                <div className="superlex-review-google" aria-hidden="true">
                    <span className="google-blue">G</span>
                </div>
            </div>

            <div className="superlex-review-rating">
                <StarRating rating={review.rating} />
                <span>{review.source}</span>
            </div>

            <p className="superlex-review-text">
                {expanded || !isLong
                    ? review.text
                    : `${review.text.slice(0, 150).trimEnd()}...`}
            </p>

            {isLong && (
                <button
                    className="superlex-review-readmore"
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    aria-expanded={expanded}
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}
        </article>
    );
};

const Testimonials = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    return (
        <section
            className="superlex-testimonials-section py-5"
            id="testimonials"
        >
            <div className="container px-3 px-lg-5">
                {/* SECTION HEADING */}
                <div className="product-section-heading text-center mb-4">
                    <span className="section-subtitle">
                        CUSTOMER TESTIMONIALS
                    </span>

                    <h2>What Our Customers Say</h2>

                    <p className="superlex-testimonial-intro mx-auto">
                        Feedback matters to us. Explore how our customers
                        evaluate motorcycle indicator quality, product
                        selection, and their experience with Superlex.
                    </p>
                </div>

                {/* GOOGLE-INSPIRED SUMMARY */}
                <div className="superlex-review-summary mb-4">
                    <div className="superlex-summary-left">
                        <div className="superlex-summary-icon">
                            <i className="fa-solid fa-comments"></i>
                        </div>

                        <div>
                            <h3>Customer Feedback</h3>
                            <p>Experiences shared by our buyers</p>
                        </div>
                    </div>

                    <div className="superlex-summary-right">
                        <span className="superlex-demo-label">
                            Demo reviews — replace before publishing
                        </span>
                    </div>
                </div>

                {/* REVIEW GRID */}
                <div className="row g-4">
                    {reviews.slice(0, visibleCount).map((review) => (
                        <div className="col-lg-4 col-md-6" key={review.id}>
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>

              
            </div>
        </section>
    );
};

export default Testimonials;
