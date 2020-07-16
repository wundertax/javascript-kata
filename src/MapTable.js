import React, { Fragment } from "react";

const MapTable = ({ data }) => {
  const dataMap = new Map();
  dataMap.set("header", Object.keys(data[0]));

  for (let i = 0; i < data.length; i++) {
    dataMap.set(data[i].isbn, Object.values(data[i]));
  }

  [...dataMap].forEach((item) => {
    if (item[0] != "header") {
      // console.log("new row");
      // item[1].map((cell) => console.log("cell: " + cell));
    }
  });

  const test = [...dataMap].map((item) => {
    console.log(item);
    // <tr>
    //   {item[1].map((cell) => (
    //     <td key={cell}>{cell}</td>
    //   ))}
    // </tr>;
  });
  // console.log(test);

  return (
    <table>
      <thead>
        <tr>
          {dataMap.get("header").map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default MapTable;
