import React, { useState } from "react";

const SearchBar = ({ data }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [searchByIsbn, setSearchByIsbn] = useState("");
  const [searchByEmail, setSearchByEmail] = useState("");
  const [result, setResult] = useState("");

  const handleIsbnClick = (event) => {
    event.preventDefault();
    setFirstTime(false);
    setResult("");
    setSearchByEmail("");
    const isbn = "isbn";
    if (!searchByIsbn) {
      return;
    }

    const found = data.filter((item) => item[isbn] === searchByIsbn)[0];
    if (!found) {
      return;
    }
    setResult([found]);
  };

  const handleEmailClick = (event) => {
    event.preventDefault();
    setFirstTime(false);
    setResult("");
    setSearchByIsbn("");

    const authors = "authors";
    if (!searchByEmail) {
      return;
    }

    // Searching for a match/matches
    let listOfMedia = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i][authors].length; j++) {
        if (data[i][authors][j] === searchByEmail) {
          listOfMedia.push(data[i]);
        }
      }
    }
    if (listOfMedia.length === 0) {
      document.getElementById("searchByEmail").style.outline = "2px dotted red";
      return;
    }
    document.getElementById("searchByEmail").style.outline = "2px dotted green";
    setResult(listOfMedia);
  };

  return (
    <div className="search-bar">
      {/* Form for searching by ISBN */}
      <form className="search-form">
        <label htmlFor="searchByIsbn" className="search-label">
          Search by ISBN:
        </label>
        <input
          type="text"
          id="searchByIsbn"
          placeholder="Enter ISBN..."
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
          placeholder="Enter author's email..."
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
          <div>Search for something!</div>
        ) : result ? (
          result.map((media, i) => (
            <div className="result-media__wrapper" key={i}>
              {Object.keys(media).map((key, i) => (
                <div className="result-media__row" key={i}>
                  <div className="result-media__key">{key}</div>
                  <div className="result-media__data">{media[key]}</div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div style={{ color: "green" }}>Nothing found.</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
