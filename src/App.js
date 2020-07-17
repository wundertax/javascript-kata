import React from "react";
import JoinedTable from "./JoinedTable";
import SearchBar from "./SearchBar";

import authors from "../data/authors.csv";
import books from "../data/books.csv";
import magazines from "../data/magazines.csv";

const App = () => {
  const getUniqueHeader = (arr1, arr2) => {
    const arr1Header = Object.keys(arr1[0]);
    const arr2Header = Object.keys(arr2[0]);
    const totalHeader = arr1Header.concat(arr2Header);
    const uniqueHeader = [...new Set(totalHeader)];
    return uniqueHeader;
  };
  const uniqueHeader = getUniqueHeader(books, magazines);

  const addMissingProperty = (arr) => {
    const dataHeader = Object.keys(arr[0]);
    const uniqProp = uniqueHeader.filter((prop) => !dataHeader.includes(prop));
    // deep copy of the array
    const newArray = JSON.parse(JSON.stringify(arr));
    newArray.map((item) => (item[uniqProp] = "-"));
    return newArray;
  };

  // We need an ordered list to coordinate header and body of the table during redering
  const getOrderedList = (list, header) => {
    let orderedList = [];
    for (let i = 0; i < list.length; i++) {
      let orderedMedia = [];
      for (let j = 0; j < header.length; j++) {
        let value = list[i][header[j]];
        orderedMedia.push(value);
      }
      orderedList.push(orderedMedia);
    }
    return orderedList;
  };

  const updBooks = addMissingProperty(books);
  const orderedBooks = getOrderedList(updBooks, uniqueHeader);
  const updMagazines = addMissingProperty(magazines);
  const orderedMagazines = getOrderedList(updMagazines, uniqueHeader);

  const media = [...orderedBooks, ...orderedMagazines];
  const files = [...books, ...magazines];

  return (
    <div>
      <SearchBar data={files} />
      <JoinedTable data={media} header={uniqueHeader} />
    </div>
  );
};

export default App;
