import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchBar.css";

const SearchBar = ({ fetchListings }) => {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    fetchListings(query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="searchBar">
      <form className="sBar" onSubmit={onSubmit}>
        <input
          value={query}
          onChange={handleInputChange}
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
