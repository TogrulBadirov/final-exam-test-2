import React from "react";
import "./index.scss";
const OurTeam = () => {
  return (
    <section id="our-team">
      <div className="container">
        <div className="section-heading">
          <p>Devoted to wonderful beauty</p>
          <h3>Events Pricing</h3>
        </div>
        <div className="product-container">
          <div className="row">
            <div className="price-card col-lg-4 col-md-6 col-12">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
                alt=""
              />
              <h5>Velva Kopf</h5>
              <p>Biologist</p>
            </div>
            <div className="price-card col-lg-4 col-md-6 col-12">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
                alt=""
              />
              <h5>Velva Kopf</h5>
              <p>Biologist</p>
            </div>
            <div className="price-card col-lg-4 col-md-6 col-12">
              <img
                src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
                alt=""
              />
              <h5>Velva Kopf</h5>
              <p>Biologist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
