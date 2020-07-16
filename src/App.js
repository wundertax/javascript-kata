import React from "react";
import MapTable from "./MapTable";
// import SearchBar from "./SearchBar";

import authors from "../data/authors.csv";
import books from "../data/books.csv";
import magazines from "../data/magazines.csv";

const App = () => {
  const booksHeader = Object.keys(books[0]);
  const magazinesHeader = Object.keys(magazines[0]);
  const generalHeader = booksHeader.concat(magazinesHeader);
  // console.log(generalHeader);

  const media = [...books, ...magazines];
  // console.log(media);
  return (
    <div>
      <div>
        <MapTable data={media}></MapTable>
      </div>
    </div>
  );
};

export default App;
