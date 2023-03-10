import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ForSale from "../../assets/forSale.jpg";
import MarketUpdate from "../../assets/marketUpdate.jpg";
import Rental from "../../assets/rental.jpg";

import "./CtaSection.css";

const CtaSection = () => {
  return (
    <div className="ctaSection">
      <div className="Section">
        <img alt="for sale house" src={ForSale} />
        <div className="verbiage">
          <h2> Sell for more than the house next door </h2>
          <p>
            Agents who will price your home right and make it shine online.
            Get started on your next chapter today.
          </p>
          <form className="search">
            <input type="text" placeholder=" Enter your street address" />
            <button disabled>Next</button>
          </form>
        </div>
      </div>
      <div className="Section">
        <div className="verbiage">
          <h2> Find your next rental property </h2>
          <p>
            Join hundreds of investors that let us improve their portfolios. 
          </p>
          <form className="search">
            <input
              type="text"
              placeholder="City, Address, School, Agent, ZIP"
            />
            <button className="searchBtn" disabled>
              <AiOutlineSearch className="icon" />
            </button>
          </form>
        </div>
        <img alt="for sale house" src={Rental} />
      </div>
      <div className="Section">
        <img alt="for sale house" src={MarketUpdate} />
        <div className="verbiage">
          <h2> Get real-time market updates </h2>
          <p>
            We’re bringing you the latest on how COVID-19 is impacting the real
            estate market.
          </p>
          <button disabled>Housing News</button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
