import React, { useState } from "react";

const SearchBar = ({ data }) => {
  console.log(data);
  const [search, setSearch] = useState("");

  const filterByKey = (key) => {
    if (search != "") {
      return data.filter((item) => item[key] === search);
    }
  };
  const result = filterByKey("isbn");
  let res = {};

  if (result) {
    res = Object.values(result)[0];
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
      <div>
        {Object.keys(res).map((key) => (
          <div>
            <div>{key}</div>
            <div>{res[key]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// _renderObject(){
//     return Object.keys(ObjectTest).map(obj, i) => {
//         return (
//             <div>
//                 id is: {ObjectTest[obj].id} ;
//                 name is: {ObjectTest[obj].name}
//             </div>
//         )
//     })
// }

export default SearchBar;
