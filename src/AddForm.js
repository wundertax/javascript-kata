import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const AddForm = ({ data }) => {
  const [authorEmail, setAuthorEmail] = useState("");
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    document.querySelector(".add-button").disabled = true;
  }, []);

  // Removing the disabled attribute if a user filled in all fields.
  if (authorEmail && authorFirstName && authorLastName) {
    document.querySelector(".add-button").disabled = false;
  }

  // Function to reset all states upon clicking on the Add&Download button.
  const resetState = () => {
    setAuthorEmail("");
    setAuthorFirstName("");
    setAuthorLastName("");
    document.querySelector(".add-button").disabled = true;
  };

  // A function to handle click on Add&Download button: creating new object,
  // adding it to the array of objects and downloading to PC.
  const handleAddClick = (event) => {
    event.preventDefault();
    // Creating a new object from input data.
    const newAuthor = {
      email: authorEmail,
      firstname: authorFirstName,
      lastname: authorLastName,
    };
    // Deep copy of the initial array
    const newArrayOfAuthors = JSON.parse(JSON.stringify(data));

    newArrayOfAuthors.push(newAuthor);
    const authorsInCsv = Papa.unparse(newArrayOfAuthors, { delimiter: ";" });

    // Adding an auxiliary DOM object with a "download" attribute to download data into .csv file,
    // and then removing that object.
    const blob = new Blob([authorsInCsv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");

    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "newAuthors.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    setIsDownloaded(true);
    document.body.removeChild(link);
    resetState();
  };

  return (
    <div>
      <h3>Add a new author and download all the authors to a .csv file:</h3>
      <form className="add-form">
        <input
          className="add-input"
          type="email"
          id="authorEmail"
          placeholder="Enter author's email..."
          value={authorEmail}
          onChange={(event) => setAuthorEmail(event.target.value)}
        ></input>
        <input
          className="add-input"
          type="text"
          id="authorFirstName"
          placeholder="Enter author's first name..."
          value={authorFirstName}
          onChange={(event) => setAuthorFirstName(event.target.value)}
        ></input>
        <input
          className="add-input"
          type="text"
          id="authorLastName"
          placeholder="Enter author's last name..."
          value={authorLastName}
          onChange={(event) => setAuthorLastName(event.target.value)}
        ></input>
        <button
          className="add-button"
          onClick={(event) => handleAddClick(event)}
        >
          Add + Download
        </button>
        {isDownloaded ? (
          <div className="is-downloaded-message">
            The file has been downloaded to your PC!
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default AddForm;
