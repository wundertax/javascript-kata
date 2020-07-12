import React, { useRef, useState, useEffect } from "react";
import Papa from "papaparse";

const App = () => {
  const fileInput = useRef();
  const [data, setData] = useState([]);
  const [dataKeys, setDataKeys] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    Papa.parse(fileInput.current.files[0], {
      complete: function (results) {
        setData(results.data);
        setDataKeys(Object.keys(results.data[0]));
      },
      header: true,
    });
  };
  console.log(data);
  let myMap = new Map();
  for (let i = 0; i < data.length; i++) {
    myMap.set(data[i].email, data[i]);
  }
  console.log(myMap.get("null-walter@echocat.org"));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" id="input" ref={fileInput}></input>
        <br></br>
        <button type="submit">Submit</button>
        <div>
          <table>
            <thead>
              <tr>
                {dataKeys.map((key) => (
                  <td>{key}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr>
                  {Object.values(item).map((element) => (
                    <td>{element}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default App;
