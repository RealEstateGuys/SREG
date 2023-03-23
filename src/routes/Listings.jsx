import React, { useState } from "react";
import Map from "../components/map/Map";
import SearchBar from "../components/searchBar/SearchBar";
import ListingList from "../components/listingsList/ListingList";
import FilterPanel from "../components/FilterPanel";

const Listings = ({ fetchListings, listings, loading, setFilters, filters, updateListings }) => {
  const [lastSearchedLocation, setLastSearchedLocation] = useState("");

  const onApplyFilters = (newFilters) => {
    setFilters(newFilters);
    if (lastSearchedLocation) {
      fetchListings(lastSearchedLocation);
    }
  };
  
  const handleFetchListings = (query) => {
    setLastSearchedLocation(query);
    fetchListings(query, filters).then((fetchedListings) => {
      const updatedListings = fetchedListings.map((listing) => ({
        zpid: listing.zpid,
        price: listing.price,
        latitude: listing.latitude,
        longitude: listing.longitude,
        imgSrc: listing.photos ? listing.photos[0]?.url : null,
        bedrooms: listing.bedrooms,
        bathrooms: listing.bathrooms,
        livingArea: listing.livingAreaSqFt,
        address: `${listing.address.streetAddress}, ${listing.address.city}, ${listing.address.state}, ${listing.address.zipcode}`,
      }));
  
      updateListings(updatedListings);
    });
  };
  
  

  return (
    <div className="listings">
      <SearchBar fetchListings={handleFetchListings} setFilters={setFilters} filters={filters} />
      <FilterPanel onApplyFilters={onApplyFilters} applyFilters={fetchListings} />
      <div className="listingsPage">
        <Map listings={listings} />
        <ListingList listings={listings} />
      </div>
    </div>
  );
};

export default Listings;
