import React, { useState } from 'react';

const FilterPanel = ({ onApplyFilters }) => {

  const [minPriceDropdown, setMinPriceDropdown] = useState('');
  const [maxPriceDropdown, setMaxPriceDropdown] = useState('');
  const [status_type, setStatus] = useState('');
  const [sort, setSort] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [rentMinPrice, setMinRent] = useState('');
  const [rentMaxPrice, setMaxRent] = useState('');
  const [bathsMin, setMinBaths] = useState('');
  const [bathsMax, setMaxBaths] = useState('');
  const [bedsMin, setMinBeds] = useState('');
  const [bedsMax, setMaxBeds] = useState('');
  const [sqftMin, setMinSqft] = useState('');
  const [sqftMax, setMaxSqft] = useState('');
  const [buildYearMin, setMinYearBuilt] = useState('');
  const [buildYearMax, setMaxYearBuilt] = useState('');
  const [daysOn, setDOM] = useState('');
  const [soldInLast, setSoldinLast] = useState('');
  const [isBasementFinished, setFinished] = useState('');
  const [isBasementUnfinished, setUnfinished] = useState('');
  const [isPendingUnderContract, setPending] = useState('');
  const [isAcceptingBackupOffers, setAcceptingBackupOffers] = useState('');
  const [isComingSoon, setComingSoon] = useState('');
  const [isNewConstruction, setNewConstruction] = useState('');
  const [isForSaleForeclosure, setForeclosure] = useState('');
  const [isWaterfront, setWaterfront] = useState('');
  const [hasPool, setPool] = useState('');
  const [hasAirConditioning, setAirConditioning] = useState('');
  const [isCityView, setCity] = useState('');
  const [isMountainView, setMountains] = useState('');
  const [isWaterView, setWater] = useState('');
  const [isParkView, setParks] = useState('');
  const [isOpenHousesOnly, setOpenHouses] = useState('');
  const [is3dHome, set3DTour] = useState('');
  const [home_type, setPropertyType] = useState([]);

  const handlePriceDropdownChange = (setter, setterDropdown, e) => {
    const value = e.target.value;
    setter(value);
    if (value) {
      setterDropdown(value);
    }
  };


  const applyFilters = () => {
    onApplyFilters({
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
      home_type,
    });
  };
  // Recommendation #3: Refactor <label> elements
  const renderLabel = (text, children) => (
    <label>
      {text}
      {children}
    </label>
  );

  const sortLabel = sort ? `Sort By: ${sort.replace(/_/g, ' ')}` : 'Sort By:';

  return (
    <div className="filter-panel">
      <h2>Filters</h2>
      {renderLabel(
        'Property Type',
        <select
          multiple
          value={home_type}
          onChange={(e) =>
            setPropertyType(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value=""> </option>
          <option value="Houses">Houses</option>
          <option value="Condos">Condos</option>
          <option value="Townhomes">Townhomes</option>
          <option value="Multifamily">Multi-Family</option>
          <option value="Manufactured">Manufactured</option>
          <option value="Land">LotsLand</option>
        </select>
      )}

      {renderLabel(
        'Min Price',
        <>
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          <select value={minPriceDropdown} onChange={(e) => handlePriceDropdownChange(setMinPriceDropdown, e)}>
            <option value="">Select</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
            <option value="500000">$500,000</option>
            <option value="600000">$600,000</option>
            <option value="700000">$700,000</option>                    </select>
        </>
      )}

      {renderLabel(
        'Max Price',
        <>
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          <select value={maxPriceDropdown} onChange={(e) => handlePriceDropdownChange(setMaxPriceDropdown, e)}>
            <option value="">Select</option>
            <option value="100000">$100,000</option>
            <option value="200000">$200,000</option>
            <option value="300000">$300,000</option>
            <option value="400000">$400,000</option>
            <option value="500000">$500,000</option>
            <option value="600000">$600,000</option>
            <option value="700000">$700,000</option>
          </select>
        </>
      )}

      <label>
        Sold in Last
        <select value={soldInLast} onChange={(e) => setSoldinLast(e.target.value)}>
          <option value=""> </option>
          <option value="1">1 Days</option>
          <option value="7">7 Days</option>
          <option value="14">14 Days</option>
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
          <option value="6m">6 Months</option>
          <option value="12m">12 Months</option>
          <option value="24m">24 Months</option>
          <option value="36m">36 Months</option>
        </select>
      </label>

      <label>
        DOM
        <select value={daysOn} onChange={(e) => setDOM(e.target.value)}>
          <option value=""> </option>
          <option value="1">1 Days</option>
          <option value="7">7 Days</option>
          <option value="14">14 Days</option>
          <option value="30">30 Days</option>
          <option value="60">60 Days</option>
          <option value="90">90 Days</option>
          <option value="6m">6 Months</option>
          <option value="12m">12 Months</option>
          <option value="24m">24 Months</option>
          <option value="36m">36 Months</option>
        </select>
      </label>

      <label>
        Status
        <select value={status_type} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Any</option>
          <option value="ForSale">For Sale</option>
          <option value="ForRent">For Rent</option>
          <option value="RecentlySold">Recently Sold</option>
        </select>
      </label>

      <label>
        Min Beds
        <input type="number" value={bedsMin} onChange={(e) => setMinBeds(e.target.value)} />
      </label>

      <label>
        Max Beds
        <input type="number" value={bedsMax} onChange={(e) => setMaxBeds(e.target.value)} />
      </label>

      <label>
        Min Baths
        <input type="number" value={bathsMin} onChange={(e) => setMinBaths(e.target.value)} />
      </label>

      <label>
        Max Baths
        <input type="number" value={bathsMax} onChange={(e) => setMaxBaths(e.target.value)} />
      </label>

      <label>
        Min Sqft
        <input type="number" value={sqftMin} onChange={(e) => setMinSqft(e.target.value)} />
      </label>

      <label>
        Max Sqft
        <input type="number" value={sqftMax} onChange={(e) => setMaxSqft(e.target.value)} />
      </label>



      <label>
        Min Rent
        <input type="number" value={rentMinPrice} onChange={(e) => setMinRent(e.target.value)} />
      </label>

      <label>
        Max Rent
        <input type="number" value={rentMaxPrice} onChange={(e) => setMaxRent(e.target.value)} />
      </label>

      <label>
        Max Year Built
        <input type="number" value={buildYearMax} onChange={(e) => setMaxYearBuilt(e.target.value)} />
      </label>

      <label>
        Min Year Built
        <input type="number" value={buildYearMin} onChange={(e) => setMinYearBuilt(e.target.value)} />
      </label>

      <label>
        Coming Soon
        <input type="checkbox" checked={isComingSoon} onChange={() => setComingSoon(!isComingSoon)} />
      </label>

      <label>
        Pending
        <input type="checkbox" checked={isPendingUnderContract} onChange={() => setPending(!isPendingUnderContract)} />
      </label>

      <label>
        New Construction
        <input type="checkbox" checked={isNewConstruction} onChange={() => setNewConstruction(!isNewConstruction)} />
      </label>

      <label>
        Foreclosure
        <input type="checkbox" checked={isForSaleForeclosure} onChange={() => setForeclosure(!isForSaleForeclosure)} />
      </label>

      {/* <label>
        FSBO
        <input type="checkbox" checked={saleByOwner} onChange={() => setFSBO(!saleByOwner)} />
      </label> */}

      {/* <label>
        FSBA
        <input type="checkbox" checked={saleByAgent} onChange={() => setFSBA(!saleByAgent)} />
      </label> */}

      <label>
        Accepting Backup Offers
        <input type="checkbox" checked={isAcceptingBackupOffers} onChange={() => setAcceptingBackupOffers(!isAcceptingBackupOffers)} />
      </label>

      <label>
        Waterfront
        <input type="checkbox" checked={isWaterfront} onChange={() => setWaterfront(!isWaterfront)} />
      </label>

      <label>
        Pool
        <input type="checkbox" checked={hasPool} onChange={() => setPool(!hasPool)} />
      </label>

      <label>
        Air Conditioning
        <input type="checkbox" checked={hasAirConditioning} onChange={() => setAirConditioning(!hasAirConditioning)} />
      </label>

      <label>
        City
        <input type="checkbox" checked={isCityView} onChange={() => setCity(!isCityView)} />
      </label>

      <label>
        Mountains
        <input type="checkbox" checked={isMountainView} onChange={() => setMountains(!isMountainView)} />
      </label>

      <label>
        Water
        <input type="checkbox" checked={isWaterView} onChange={() => setWater(!isWaterView)} />
      </label>

      <label>
        Parks
        <input type="checkbox" checked={isParkView} onChange={() => setParks(!isParkView)} />
      </label>

      <label>
        Finished
        <input type="checkbox" checked={isBasementFinished} onChange={() => setFinished(!isBasementFinished)} />
      </label>

      <label>
        Unfinished
        <input type="checkbox" checked={isBasementUnfinished} onChange={() => setUnfinished(!isBasementUnfinished)} />
      </label>

      <label>
        Open Houses
        <input type="checkbox" checked={isOpenHousesOnly} onChange={() => setOpenHouses(!isOpenHousesOnly)} />
      </label>

      <label>
        3D Tour
        <input type="checkbox" checked={is3dHome} onChange={() => set3DTour(!is3dHome)} />
      </label>

      <label htmlFor="sort">
        {sortLabel}
        <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="Homes_for_You">Homes for You</option>
          <option value="Price_High_Low">Price (High to Low)</option>
          <option value="Price_Low_High">Price (Low to High)</option>
          <option value="Newest">Newest</option>
          <option value="Bedrooms">Bedrooms</option>
          <option value="Bathrooms">Bathrooms</option>
          <option value="Square_Feet">Square Feet</option>
          <option value="Lot_Size">Lot Size</option>
        </select>
        <button onClick={applyFilters}>Apply Filters</button>
      </label>
    </div>
  );
};

export default FilterPanel;
