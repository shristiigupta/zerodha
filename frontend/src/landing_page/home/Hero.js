import React from "react";

function Hero() {
  return (
    <div className="container p-3 mb-2">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="mb-5"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </div>
        <div className="col-12 text-center">
          <h1 className="mt-5">Invest in everything</h1>
          <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        </div>
        <div className="col-12 text-center">
          <button className="p-2 btn btn-primary fs-5 mb-5 col-md-4 col-8">
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
