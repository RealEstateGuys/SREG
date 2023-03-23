import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Home from "./routes/Home";
import Navbar from "./components/navbar/NavBar";
import Listings from "./routes/Listings";
import Footer from "./components/footer/Footer";
import FilterPanel from "./components/FilterPanel";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    location: "",
    home_type: "",
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
  const host = "zillow-com1.p.rapidapi.com";
  const key = process.env.REACT_APP_API_BLUEFIN_ZILLOW_API_KEY;

  const fetchListings = (query) => {
    setLoading(true);
      const {
      location,
      home_type,
      status_type,
      sort,
      minPrice,
      maxPrice,
      rentMinPrice,
      rentMaxPrice,
      bathsMin,
      bathsMax,
      bedsMin,
      bedsMax,
      sqftMin,
      sqftMax,
      buildYearMin,
      buildYearMax,
      daysOn,
      soldInLast,
      isBasementFinished,
      isBasementUnfinished,
      isPendingUnderContract,
      isAcceptingBackupOffers,
      isComingSoon,
      isNewConstruction,
      isForSaleForeclosure,
      isWaterfront,
      hasPool,
      hasAirConditioning,
      isCityView,
      isMountainView,
      isWaterView,
      isParkView,
      isOpenHousesOnly,
      is3dHome,
    } = filters;

    let url = `https://zillow-com1.p.rapidapi.com/propertyExtendedSearch?location=${location}&test=true`;


  if (status_type !== "") {
  url += `&status_type=${status_type}`;
}

if (home_type !== "") {
  url += `&home_type=${home_type}`;
}

if (sort !== "") {
  url += `&sort=${sort}`;
}

if (minPrice !== "") {
  url += `&minPrice=${minPrice}`;
}

if (maxPrice !== "") {
  url += `&maxPrice=${maxPrice}`;
}

if (rentMinPrice !== "") {
  url += `&rentMinPrice=${rentMinPrice}`;
}

if (rentMaxPrice !== "") {
  url += `&rentMaxPrice=${rentMaxPrice}`;
}

if (bathsMin !== "") {
  url += `&bathsMin=${bathsMin}`;
}

if(bathsMax !== "") {
  url += `&bathsMax=${bathsMax}`;
}

if (bedsMin !== "") {
  url += `&bedsMin=${bedsMin}`;
}

if (bedsMax !== "") {
  url += `&bedsMax=${bedsMax}`;
}

if (sqftMin !== "") {
  url += `&sqftMin=${sqftMin}`;
}

if (sqftMax !== "") {
  url += `&sqftMax=${sqftMax}`;
}

if (buildYearMin !== "") {
  url += `&buildYearMin=${buildYearMin}`;
}

if (buildYearMax !== "") {
  url += `&buildYearMax=${buildYearMax}`;
}

if (daysOn !== "") {
  url += `&daysOn=${daysOn}`;
}

if (soldInLast !== "") {
  url += `&soldInLast=${soldInLast}`;
}

if (isBasementFinished !== "") {
  url += `&isBasementFinished=${isBasementFinished}`;
}

if (isBasementUnfinished !== "") {
  url += `&isBasementUnfinished=${isBasementUnfinished}`;
}

if (isPendingUnderContract !== "") {
  url += `&isPendingUnderContract=${isPendingUnderContract}`;
}

if (isAcceptingBackupOffers !== "") {
  url += `&isAcceptingBackupOffers=${isAcceptingBackupOffers}`;
}

if (isComingSoon !== "") {
  url += `&isComingSoon=${isComingSoon}`;
}

if (isNewConstruction !== "") {
  url += `&isNewConstruction=${isNewConstruction}`;
}

if (isForSaleForeclosure !== "") {
  url += `&isForSaleForeclosure=${isForSaleForeclosure}`;
}

if (isWaterfront !== "") {
  url += `&isWaterfront=${isWaterfront}`;
}

if (hasPool !== "") {
  url += `&hasPool=${hasPool}`;
}

if (hasAirConditioning !== "") {
  url += `&hasAirConditioning=${hasAirConditioning}`;
}

if (isCityView !== "") {
  url += `&isCityView=${isCityView}`;
}

if (isMountainView !== "") {
  url += `&isMountainView=${isMountainView}`;
}

if (isWaterView !== "") {
  url += `&isWaterView=${isWaterView}`;
}

if (isParkView !== "") {
  url += `&isParkView=${isParkView}`;
}

if (isOpenHousesOnly !== "") {
  url += `&isOpenHousesOnly=${isOpenHousesOnly}`;
}

if (is3dHome !== "") {
  url += `&is3dHome=${is3dHome}`;
}

var options = {
  method: "GET",
  url: url,
  headers: {
    "x-rapidapi-host": host,
    "x-rapidapi-key": key,
  },
};

return axios
  .request(options)
  .then((response) => {
    setListings(response.data.props);
    setLoading(false);
    return response.data.props;
  })
  .catch((error) => {
    console.error(error);
  });
};

const onApplyFilters = (newFilters) => {
setFilters(newFilters);
fetchListings(newFilters);
};

const handleApplyFilters = () => {
onApplyFilters(filters);
};

const router = createBrowserRouter([
{
path: "/",
element: (
<Home
     fetchListings={fetchListings}
     listings={listings}
     loading={loading}
     setFilters={setFilters}
     filters={filters}
   />
),
},
{
path: "/listings",
element: (
<Listings
     fetchListings={fetchListings}
     listings={listings}
     loading={loading}
     setFilters={setFilters}
     filters={filters}
   >
<FilterPanel onApplyFilters={onApplyFilters} />
</Listings>
),
},
]);

return (
<>
<Navbar />
<RouterProvider router={router} />
<button className="btn btn-primary" onClick={handleApplyFilters}>
Apply Filters
</button>
<Footer />
</>
);
}
export default App;
