import React, { useState, useEffect } from "react";
import Table from "./Table";

const SearchBar = ({ data }) => {
  const [search, setSearch] = useState("");

  const filterByIsbn = () => {
    if (search != "") {
      return data.filter((item) => item.isbn === search);
    }
  };
  const result = filterByIsbn();
  console.log(result);

  return (
    <div>
      <form>
        <label htmlFor="search">Search by ISBN: </label>
        <input
          type="text"
          id="search"
          placeholder="Enter ISBN here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </form>
      <div></div>
    </div>
  );
};

export default SearchBar;
