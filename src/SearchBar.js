import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [searchByIsbn, setSearchByIsbn] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Function for resetting state when clicking on another search button.
  const resetState = (searchType) => {
    setFirstTime(false);
    setSearchResult("");
    // Switch to reset data in another input field.
    switch (searchType) {
      case "isbn":
        setSearchByEmail("");
        break;
      case "authors":
        setSearchByIsbn("");
    }
  };

  // A function to search for books or magazines based on their ISBN number
  const handleIsbnClick = (event) => {
    const isbn = "isbn";
    event.preventDefault();
    resetState(isbn);

    if (!searchByIsbn) {
      return;
    }
    const found = data.filter((item) => item[isbn] === searchByIsbn)[0];
    if (!found) {
      return;
    }
    setSearchResult([found]);
  };

  // A function to search for books or magazines based on the email of their author(s)
  const handleEmailClick = (event) => {
    const authors = "authors";
    event.preventDefault();
    resetState(authors);

    if (!searchByEmail) {
      return;
    }

    // Searching for a match/matches using the nested loop.
    let listOfMedia = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i][authors].length; j++) {
        if (data[i][authors][j] === searchByEmail) {
          listOfMedia.push(data[i]);
        }
      }
    }
    if (listOfMedia.length === 0) {
      return;
    }
    setSearchResult(listOfMedia);
  };

  return (
    <div className="search-bar">
      <h3>Search through the lists of authors, books & magazines:</h3>

      {/* Form for searching by ISBN */}
      <form className="search-form">
        <label htmlFor="searchByIsbn" className="search-label">
          Search by ISBN:
        </label>
        <input
          type="text"
          id="searchByIsbn"
          value={searchByIsbn}
          onChange={(event) => setSearchByIsbn(event.target.value)}
        ></input>
        <button
          onClick={(event) => handleIsbnClick(event)}
          className="search-button"
        >
          Search
        </button>
      </form>
      {/* Form for searching by an author email */}
      <form className="search-form">
        <label htmlFor="searchByEmail" className="search-label">
          Search by author's email:
        </label>
        <input
          type="text"
          id="searchByEmail"
          value={searchByEmail}
          onChange={(event) => setSearchByEmail(event.target.value)}
        ></input>
        <button
          onClick={(event) => handleEmailClick(event)}
          className="search-button"
        >
          Search
        </button>
      </form>
      {/* Rendering search results: */}
      <div className="result-media">
        {firstTime ? (
          <div style={{ color: "green" }}>Search for something!</div>
        ) : searchResult ? (
          searchResult.map((media, i) => (
            <div className="result-media__wrapper" key={i}>
              {Object.keys(media).map((key, i) => (
                <div className="result-media__row" key={i}>
                  <div className="result-media__key">{key.toUpperCase()}</div>
                  <div className="result-media__data">{media[key]}</div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div style={{ color: "red" }}>Nothing found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
