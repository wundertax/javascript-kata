import React from "react";

import authors from "../data/authors.csv";
import booksFromCsv from "../data/books.csv";
import magazinesFromCsv from "../data/magazines.csv";

import Table from "./Table";
import SearchBar from "./SearchBar";
import AddForm from "./AddForm";

const App = () => {
  // A function to transform the string of authors emails received from .csv into an array.
  const splitEmailsStringToArray = (array) => {
    // Deep copy of an array to avoid data mutation.
    const newArray = JSON.parse(JSON.stringify(array));
    newArray.map((item) => (item["authors"] = item["authors"].split(", ")));
    return newArray;
  };
  const books = splitEmailsStringToArray(booksFromCsv);
  const magazines = splitEmailsStringToArray(magazinesFromCsv);

  // A function to compose a unique header for multiple arrays with possibly duplicate fields.
  const composeHeader = (...arrays) => {
    let totalHeader = [];
    for (let i = 0; i < arrays.length; i++) {
      const arrHeader = Object.keys(arrays[i][0]);
      totalHeader = [...totalHeader, ...arrHeader];
    }
    // Remove duplicate header items
    const uniqueHeader = [...new Set(totalHeader)];
    return uniqueHeader;
  };

  // We need an ordered list to coordinate header and body of the table during rendering.
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
  // Creating headers for tables rendering.
  const mediaHeader = composeHeader(books, magazines);
  const authorsHeader = Object.keys(authors[0]);

  const orderedBooks = getOrderedList(books, mediaHeader);
  const orderedMagazines = getOrderedList(magazines, mediaHeader);

  // Creating a composed array of media, sorted by title.
  // This array is passed later to the Table component for rendering.
  const media = [...orderedBooks, ...orderedMagazines].sort();

  return (
    <div>
      <SearchBar data={[...books, ...magazines]} />
      <AddForm data={authors} />
      <Table data={authors} header={authorsHeader} />
      <Table data={media} header={mediaHeader} />
    </div>
  );
};

export default App;
