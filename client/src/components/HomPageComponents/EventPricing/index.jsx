import React from "react";
import "./index.scss";
const EventPricing = () => {
  return (
    <section id="event-pricing">
      <div className="container">
        <div className="section-heading">
          <p>Devoted to wonderful beauty</p>
          <h3>Events Pricing</h3>
        </div>
        <div className="product-container">
          <div className="row">
            <div className="price-card col-lg-4 col-md-6 col-12">
              <div>
                <span className="price">$16 </span>
                <span>per table</span>
              </div>
              <p className="card-pargraph-2">Birthday Events</p>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Shop Now</button>
            </div>
            <div className="price-card col-lg-4 col-md-6 col-12">
              <div>
                <span className="price">$31 </span>
                <span>Wedding Events</span>
              </div>
              <p className="card-pargraph-2">Birthday Events</p>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Shop Now</button>
            </div>
            <div className="price-card col-lg-4 col-md-6 col-12">
              <div>
                <span className="price">$52 </span>
                <span>Party Events</span>
              </div>
              <p className="card-pargraph-2">Birthday Events</p>
              <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
              <button>Shop Now</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPricing;
