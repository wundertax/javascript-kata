import React from "react";

const Table = ({ data }) => {
  const keysArr = Object.keys(data[0]);
  console.log(keyArr);
  //   const dataMap = new Map();
  //   for (let i = 0; i < data.length; i++) {
  //     dataMap.set(data[i].isbn, data[i]);
  //   }

  return (
    <div>
      <h2>
        {keysArr.includes("firstname")
          ? "Authors"
          : keysArr.includes("description")
          ? "Books"
          : "Magazines"}
      </h2>
      <table>
        <thead>
          <tr>
            {keysArr.map((key) => (
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
  );
};

export default Table;
