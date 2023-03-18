import React, { useState, useEffect } from "react";
import Map from "../components/map/Map";
import SearchBar from "../components/searchBar/SearchBar";
import ListingList from "../components/listingsList/ListingList";
import FilterBar from "../components/filterBar/FilterBar";

const Listings = ({ fetchListings, listings, loading, filters, onFiltersChange }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Filter listings based on filter values
    const filtered = listings.filter((listing) => {
      let isValid = true;

      if (filters.minPrice && listing.price < filters.minPrice) {
        isValid = false;
      }
      if (filters.maxPrice && listing.price > filters.maxPrice) {
        isValid = false;
      }
      if (filters.bedsMin && listing.bedrooms < filters.bedsMin) {
        isValid = false;
      }
      // Add more filters here as needed

      return isValid;
    });

    setFilteredData(filtered);
  }, [listings, filters]);

  return (
    <div className="listings">
      <SearchBar fetchListings={(q) => { setQuery(q); fetchListings(q); }} />
      <div className="listingsPage">
        <FilterBar
          filters={filters}
          onFiltersChange={onFiltersChange}
          fetchListings={() => fetchListings(query, filters)}
          />
        <Map listings={filteredData} />
        <ListingList listings={filteredData} />
      </div>
    </div>
  );
};

export default Listings;
