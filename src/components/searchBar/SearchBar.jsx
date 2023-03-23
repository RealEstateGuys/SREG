import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchBar.css";

const SearchBar = ({ fetchListings, setFilters, filters }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    if (query === "") {
      alert("Please enter a valid input");
    } else {
      e.preventDefault();
      // Reset filters when a new search is submitted
      setFilters({
        ...filters,
        status_type: "",
        sort: "",
        minPrice: "",
        maxPrice: "",
        rentMinPrice: "",
        rentMaxPrice: "",
        bathsMin: "",
        bathsMax: "",
        bedsMin: "",
        bedsMax: "",
        sqftMin: "",
        sqftMax: "",
        buildYearMin: "",
        buildYearMax: "",
        daysOn: "",
        soldInLast: "",
        isBasementFinished: "",
        isBasementUnfinished: "",
        isPendingUnderContract: "",
        isAcceptingBackupOffers: "",
        isComingSoon: "",
        isNewConstruction: "",
        isForSaleForeclosure: "",
        isWaterfront: "",
        hasPool: "",
        hasAirConditioning: "",
        isCityView: "",
        isMountainView: "",
        isWaterView: "",
        isParkView: "",
        isOpenHousesOnly: "",
        is3dHome: "",
      });
      fetchListings(query);
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="searchBar">
      <form className="sBar" onSubmit={onSubmit}>
        <input
          value={query}
          onChange={onChange}
          type="text"
          placeholder=" City, Address, School, Agent, ZIP"
        />
        <button type="submit">
          <AiOutlineSearch className="icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
