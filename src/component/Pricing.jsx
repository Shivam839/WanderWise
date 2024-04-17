import React from "react";
import "./Pricing.css";
function Pricing() {
  return (
    <div>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center pricingText">
        <h1>Travel Packages</h1>
        <p>
          Explore our exciting travel packages tailored just for you. Whether
          you're seeking adventure, relaxation, or cultural immersion, we have
          something for every traveler.
        </p>
      </div>

      <div class="container">
        <div class="card-deck mb-3 text-center pricingCard">
          <div class="card mb-4 shadow-sm pricingSmallCard">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Explorer</h4>
            </div>
            <div class="card-body ">
              <h1 class="card-title pricing-card-title">
                $499 <small class="text-muted">/ person</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>7-day adventure</li>
                <li>Accommodation included</li>
                <li>Local guides</li>
                <li>Transportation</li>
              </ul>
              <button
                type="button"
                class="btn btn-lg btn-block btn-outline-danger"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="card mb-4 shadow-sm pricingSmallCard">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Relaxation</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                $799 <small class="text-muted">/ person</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>10-day luxury getaway</li>
                <li>5-star accommodations</li>
                <li>Spa treatments</li>
                <li>Exclusive dining experiences</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-danger">
                Book Now
              </button>
            </div>
          </div>
          <div class="card mb-4 shadow-sm pricingSmallCard">
            <div class="card-header">
              <h4 class="my-0 font-weight-normal">Culture</h4>
            </div>
            <div class="card-body ">
              <h1 class="card-title pricing-card-title">
                $649 <small class="text-muted">/ person</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>14-day cultural immersion</li>
                <li>Homestay experiences</li>
                <li>Local cuisine workshops</li>
                <li>Guided tours of historical sites</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-danger">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
