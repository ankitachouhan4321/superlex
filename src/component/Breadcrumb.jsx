
import React from "react";

const Breadcrumb = ({
    title = "Contact Us",
    backgroundImage = "/img/bread.png",
}) => {
    return (
        <section
            className="superlex-breadcrumb"
            style={{
                backgroundImage: `
          linear-gradient(
            rgba(16, 16, 16, 0.65),
            rgba(16, 16, 16, 0.65)
          ),
          url("${backgroundImage}")
        `,
            }}
        >
            <div className="container superlex-breadcrumb-container">

                {/* Breadcrumb Navigation */}
                <nav
                    className="superlex-breadcrumb-nav"
                    aria-label="breadcrumb"
                >
                    <ol className="superlex-breadcrumb-list">
                        <li>
                            <a href="/">HOME</a>
                        </li>

                        <li className="superlex-breadcrumb-arrow">
                            →
                        </li>

                        <li
                            className="superlex-breadcrumb-current"
                            aria-current="page"
                        >
                            {title}
                        </li>
                    </ol>
                </nav>

                {/* Main Heading */}
                <h1 className="superlex-breadcrumb-title">
                    {title}
                </h1>

            </div>
        </section>
    );
};

export default Breadcrumb;
