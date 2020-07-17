import React, { useState, useEffect } from "react";
import MapTable from "./MapTable";

const SearchBar = ({ data }) => {
  const [search, setSearch] = useState("");
  // const [result, setResult] = useState("");

  const filterByKey = (key) => {
    if (search != "") {
      return data.filter((item) => item[key] === search);
    }
  };
  const result = filterByKey("isbn");
  let res = {};

  if (result) {
    // console.log(Object.values(result));
    res = Object.values(result);
    // console.log(Object.keys(res[0]));
  }

  return (
    <div>
      <form>
        <label htmlFor="search">Search by ISBN: </label>
        <input
          type="text"
          id="search"
          placeholder="Enter ISBN here..."
          // value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </form>
      {/* <div>{res.map((item) => console.log(item))}</div> */}
      <MapTable data={res} />
    </div>
  );
};

export default SearchBar;
