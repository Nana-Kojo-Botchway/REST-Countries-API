import React, { useEffect, useState } from 'react';

const Search = () => {
  const [filterOption, setFilterOption] = useState('Filter by region');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleSearch = () => {
      const countryName = document.querySelectorAll('.country-name');

      countryName.forEach((name) => {
        const parentElement = name.parentElement.parentElement;
        const region = parentElement.querySelector('.country-region');

        const matchesFilter = filterOption === 'Filter by region' || region.innerText.includes(filterOption);
        const matchesSearch = name.innerText.toLowerCase().includes(searchValue.toLowerCase());

        if (matchesFilter && matchesSearch) {
          parentElement.style.display = 'block';
        } else {
          parentElement.style.display = 'none';
        }
      });
    };

    const handleRegionFilter = (e) => {
      const { value } = e.target;
      const countryRegion = document.querySelectorAll('.country-region');

      countryRegion.forEach((region) => {
        const parentElement = region.parentElement.parentElement;
        const countryName = parentElement.querySelector('.country-name');

        const matchesFilter = value === 'Filter by region' || region.innerText.includes(value);
        const matchesSearch = countryName.innerText.toLowerCase().includes(searchValue.toLowerCase());

        if (matchesFilter && matchesSearch) {
          parentElement.style.display = 'grid';
        } else {
          parentElement.style.display = 'none';
        }
      });
    };

    const searchInput = document.getElementById('search');
    const selectInput = document.getElementById('select');

    searchInput.addEventListener('input', handleSearch);
    selectInput.addEventListener('change', handleRegionFilter);

    return () => {
      searchInput.removeEventListener('input', handleSearch);
      selectInput.removeEventListener('change', handleRegionFilter);
    };
  }, [filterOption, searchValue]);

  return (
    <section className="filter">
      <form className="form-control">
        <div className="search-container">
          <i className="fas fa-search" id="search-icon"></i>
          <input
            type="search"
            name="search"
            id="search"
            className="search"
            placeholder="Search Country"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </form>

      <div className="filter-region">
        <select
          name="select"
          id="select"
          className="select"
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="Filter by region">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Search;
