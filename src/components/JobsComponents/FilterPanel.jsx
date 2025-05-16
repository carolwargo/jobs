const FilterPanel = ({ filters, setFilters }) => {
  const jobTypes = ['', 'Full-time', 'Part-time', 'Contract'];
  const locations = ['', 'New York, NY', 'Los Angeles, CA', 'Miami, FL', 'Chicago, IL'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-panel d-flex gap-2">
<select
  name="jobType"
  value={filters.jobType}
  onChange={handleFilterChange}
  onFocus={() => console.log('Job Type dropdown focused')}
  className="toolbar-btn w3-round"
  aria-label="Filter by job type"
>
        <option value="" >All Job Types</option>
        {jobTypes.slice(1).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        name="location"
        value={filters.location}
        onChange={handleFilterChange}
          onFocus={() => console.log('Location dropdown focused')}
        className="toolbar-btn w3-round"
        aria-label="Filter by location"
      >
        <option value="">All Locations</option>
        {locations.slice(1).map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPanel;