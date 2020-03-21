import React from "react";

// need to search everytime onChange and apply the logic equal to the filter
const SearchBar = ({ onChange, value }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control col-lg-4 mb-2"
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
      placeholder="Search for user..."
    ></input>
  );
};

export default SearchBar;
