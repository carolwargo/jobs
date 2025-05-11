import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar d-flex align-items-center w3-margin-bottom">
      <FaSearch className="w3-margin-right" />
      <input
        type="text"
        className="form-control w3-round"
        placeholder="Search jobs (e.g., Hairdresser, Makeup Artist)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;