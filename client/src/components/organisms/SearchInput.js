import React from "react";

const SearchInput = props => {
  // props dari pages yang menggunakan Search Input
  const { query, handleChange } = props;
  return (
    <div className="from-group">
      <input
        className="form-control"
        type="text"
        name="query"
        value={query}
        placeholder="Masukan Pencarian Anda"
        // onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
