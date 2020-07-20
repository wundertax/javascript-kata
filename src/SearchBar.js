import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");
  // console.log(result);

  const [searchAuthor, setSearchAuthor] = useState("");
  const [resultAuthor, setResultAuthor] = useState("");

  const handleIsbnClick = (event) => {
    event.preventDefault();
    // setResult("");
    const searchType = "isbn";
    if (!search) {
      return;
    }
    const found = data.filter((item) => item[searchType] === search)[0];
    if (!found) {
      return;
    }
    setResult([found]);
  };

  const handleAuthorClick = (event) => {
    event.preventDefault();
    const searchType = "authors";
    if (!searchAuthor) {
      return;
    }
    // Transforming authors emails string into array
    data.map((item) => {
      // console.log(item);
      item.authors = item.authors.split(",");
    });

    let listOfMedia = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].authors.length; j++) {
        if (data[i].authors[j] === searchAuthor) {
          listOfMedia.push(data[i]);
        }
      }
    }

    setResult(listOfMedia);
  };

  return (
    <div>
      <form>
        <label htmlFor="searchIsbn">Search by ISBN: </label>
        <input
          type="text"
          id="searchIsbn"
          placeholder="Enter ISBN here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <button onClick={(event) => handleIsbnClick(event)}>Search</button>
      </form>
      <form>
        <label htmlFor="searchAuthor">Search by author's email: </label>
        <input
          type="text"
          id="searchAuthor"
          placeholder="Enter author's email here..."
          value={searchAuthor}
          onChange={(event) => setSearchAuthor(event.target.value)}
        ></input>
        <button onClick={(event) => handleAuthorClick(event)}>Search</button>
      </form>
      <div>
        {result ? (
          result.map((media) =>
            Object.keys(media).map((key, i) => (
              <div key={i}>
                <div>{key}</div>
                <div>{media[key]}</div>
              </div>
            ))
          )
        ) : search ? (
          <div>Nothing found</div>
        ) : (
          <div>plz search</div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default SearchBar;
