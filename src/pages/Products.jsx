import React from 'react'
import Breadcrumb from '../component/Breadcrumb';



const products = [
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
  }


];


const Products = () => {
  return (
    <>
      <Breadcrumb title="Our Products" />
      <section className='py-lg-5 py-3'>
        <div class="container-lg">
          <div className="product-section-heading text-center">
            <h2>Explore Our Products</h2>
          </div>
          <br/>

          <div class="row">
            {products.map((product) => (
              <div className='col-lg-4' key={product.id}>
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
              </div>
            ))}
          </div>

        </div>

      </section>

    </>
  )
}

export default Products
