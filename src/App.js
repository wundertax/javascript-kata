import React from "react";
import JoinedTable from "./JoinedTable";
import SearchBar from "./SearchBar";

import authors from "../data/authors.csv";
import books from "../data/books.csv";
import magazines from "../data/magazines.csv";

const App = () => {
  // books.map((item) => {
  //   console.log(item);
  //   item.authors = item.authors.split(",");
  // });

  // magazines.map((item) => {
  //   item.authors = item.authors.split(",");
  // });

  const getUniqueHeader = (...arrays) => {
    let totalHeader = [];
    for (let i = 0; i < arrays.length; i++) {
      const arrHeader = Object.keys(arrays[i][0]);
      totalHeader = [...totalHeader, ...arrHeader];
    }
    // Remove duplicate header items
    const uniqueHeader = [...new Set(totalHeader)];
    return uniqueHeader;
  };

  const addMissingProperty = (arr, uniqueHeader) => {
    const dataHeader = Object.keys(arr[0]);
    const uniqProp = uniqueHeader.filter(
      (prop) => !uniqueHeader.includes(prop)
    );
    // Deep copy of the array
    const newArray = JSON.parse(JSON.stringify(arr));
    // Transforming authors emails string into array
    newArray.map((item) => {
      item.authors = item.authors.split(",");
    });

    newArray.map((item) => (item[uniqProp] = "-"));
    return newArray;
  };

  // We need an ordered list to coordinate header and body of the table during rendering
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

  const mediaHeader = getUniqueHeader(books, magazines);
  const authorsHeader = getUniqueHeader(authors);

  // const toArray = books.map((book) => console.log(book.authors.split(",")));

  const updBooks = addMissingProperty(books, mediaHeader);
  const orderedBooks = getOrderedList(updBooks, mediaHeader);
  const updMagazines = addMissingProperty(magazines, mediaHeader);
  const orderedMagazines = getOrderedList(updMagazines, mediaHeader);

  const media = [...orderedBooks, ...orderedMagazines];
  const files = [...books, ...magazines];

  return (
    <div>
      <SearchBar data={files} />
      <JoinedTable data={authors} header={authorsHeader}></JoinedTable>
      <JoinedTable data={media} header={mediaHeader} />
    </div>
  );
};

export default App;
