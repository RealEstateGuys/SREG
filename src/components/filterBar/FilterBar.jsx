import React, { useState } from "react";

function FilterBar({ onFiltersChange, fetchListings }) {
  const [minPrice, setMinPrice] = useState("");
  const [bedsMin, setBedsMin] = useState("");

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFiltersChange({ minPrice, bedsMin });
    fetchListings();
  };

  return (
    <form onSubmit={handleFilterSubmit}>
      <div>
        <label htmlFor="minPrice">Min Price</label>
        <input
          id="minPrice"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bedsMin">Min Beds</label>
        <input
          id="bedsMin"
          type="number"
          value={bedsMin}
          onChange={(e) => setBedsMin(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FilterBar;
