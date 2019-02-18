import React from "react";

export const SearchInput = props => {
  // props dari pages yang menggunakan Search Input
  const { query } = props;
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
