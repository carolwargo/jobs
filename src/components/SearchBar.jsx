import { useEffect, useRef } from 'react';
//import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
 const inputRef = useRef(null);

 useEffect(() => {
 inputRef.current.focus(); // Focus on mount
 }, []);

 return (
 <div className="search-bar d-flex align-items-center w3-margin-bottom">
 {/*<FaSearch
 className="w3-margin-right search-icon"
 style={{ marginLeft: '8px' }}
 />
 */}
 <input
 type="text"
 className="form-control w3-round search-input"
 placeholder="Search jobs (e.g., Hairdresser, Makeup Artist)"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 ref={inputRef}
 aria-label="Search jobs by title or description"
 aria-describedby="search-instruction"
 />
 <span id="search-instruction" className="sr-only">
 Enter a job title or description to filter available beauty professional jobs.
 </span>
 </div>
 );
};

export default SearchBar;