import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ForSale from "../../assets/forSale.png";
import MarketUpdate from "../../assets/marketUpdate.jpg";
import Rental from "../../assets/rental.jpg";

import "./CtaSection.css";

const handleSearchSubmit = (event) => {
  event.preventDefault(); // prevent form from submitting normally
  const searchQuery = event.target[0].value;
  window.location.href = `https://rent.report/spearrealestategroup?query=${searchQuery}`;
};

const handleSellerClick = () => {
  window.location.href = "https://spearrealestate.homes/sellers";
};

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    event.target.nextSibling.click();
  }
};

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
          <button className="sellBtn" onClick={handleSellerClick}>
            Sell for more
          </button>
        </div>
      </div>
      <div className="Section">
        <div className="verbiage">
          <h2> Analyze Investment Deals </h2>
          <p>
            Take control of your financial future and live life on your own terms with real estate investing.
          </p>
          <form className="search" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="City, Address, School, Agent, ZIP"
              onKeyPress={handleKeyPress}
            />
            <button className="searchBtn">
              <AiOutlineSearch className="icon" />
            </button>
          </form>
        </div>
        <img alt="rental property for sale" src={Rental} />
      </div>
      <div className="Section">
        <img alt="cat reading the news" src={MarketUpdate} />
        <div className="verbiage">
          <h2> Know The Important Stuff. </h2>
          <p>
            We focus on all the key market trends, so you can focus on what's important to you.
          </p>
          <a href="https://SpearRealEstate.homes/blog">
            <button>Stay Informed</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
