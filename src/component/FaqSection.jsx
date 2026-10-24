
import React, { useState } from "react";

const faqData = [
    {
        question: "What products does Superlex manufacture?",
        answer:
            "Superlex specializes in manufacturing, exporting, and supplying motorcycle indicators. Our product range focuses on dependable bike indicator solutions that combine functionality, durability, and modern styling."
    },
    {
        question: "Is Superlex a manufacturer or supplier of bike indicators?",
        answer:
            "Superlex operates as a manufacturer, exporter, and supplier of motorcycle indicators, serving the requirements of dealers, wholesalers, distributors, and automotive businesses."
    },
    {
        question: "Does Superlex supply motorcycle indicators in bulk?",
        answer:
            "Superlex serves businesses looking for motorcycle indicator supply. For bulk orders, product availability, minimum order quantities, and pricing, you can contact our team directly."
    },
    {
        question: "What makes Superlex motorcycle indicators reliable?",
        answer:
            "We focus on quality, practical design, and dependable functionality. Our approach emphasizes durable products and consistent quality to meet the requirements of the two-wheeler market."
    },
    {
        question: "Does Superlex export bike indicators?",
        answer:
            "Yes, Superlex is a motorcycle indicator exporter. International buyers and distributors can contact us to discuss product requirements, export inquiries, and supply opportunities."
    },
    {
        question: "How can I become a Superlex dealer or distributor?",
        answer:
            "If you are interested in becoming a dealer, distributor, or wholesale business partner, you can contact Superlex through our website to discuss product availability and business opportunities."
    }
];

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="superlex-faq-section py-md-5 py-3" id="faq">
            <div className="container py-md-5 py-3">

                <div className="row align-items-start g-5">

                  
                    {/* RIGHT FAQ ACCORDION */}
                    <div className="col-lg-8 col-12 m-auto">
                        <div className="superlex-faq-left">

                            <div className="product-section-heading text-center">

                                <span className="section-subtitle">
                                    FREQUENTLY ASKED QUESTIONS
                                </span>

                                <h2>
                                    Everything You Need to Know About Superlex
                                </h2>

                            </div>

                            <p className="superlex-faq-intro">
                                Have questions about our motorcycle indicators,
                                manufacturing capabilities, bulk supply, or
                                dealership opportunities? Find answers to
                                commonly asked questions about Superlex and
                                our products.
                            </p>



                        </div>


                        <div className="superlex-faq-list">

                            {faqData.map((item, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        className={`superlex-faq-item ${
                                            isActive ? "active" : ""
                                        }`}
                                        key={index}
                                    >

                                        <button
                                            type="button"
                                            className="superlex-faq-question"
                                            onClick={() => toggleFaq(index)}
                                            aria-expanded={isActive}
                                            aria-controls={`faq-answer-${index}`}
                                            id={`faq-question-${index}`}
                                        >

                                            <span className="superlex-faq-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="superlex-faq-question-text">
                                                {item.question}
                                            </span>

                                            <span className="superlex-faq-toggle">
                                                <i
                                                    className={`fa-solid ${
                                                        isActive
                                                            ? "fa-minus"
                                                            : "fa-plus"
                                                    }`}
                                                ></i>
                                            </span>

                                        </button>

                                        <div
                                            id={`faq-answer-${index}`}
                                            className="superlex-faq-answer-wrap"
                                            role="region"
                                            aria-labelledby={`faq-question-${index}`}
                                            aria-hidden={!isActive}
                                            inert={!isActive}
                                        >
                                            <div className="superlex-faq-answer-inner">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default FaqSection;
