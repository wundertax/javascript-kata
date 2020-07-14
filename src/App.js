import React from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";

import authors from "../data/authors.csv";
import books from "../data/books.csv";
import magazines from "../data/magazines.csv";

const App = () => {
  return (
    <div>
      <SearchBar data={books}></SearchBar>
      <div>
        <Table data={authors}></Table>
        <Table data={magazines}></Table>
        <Table data={books}></Table>
      </div>
    </div>
  );
};

export default App;
