import React from "react";

const MapTable = (props) => {
  const header = props.header;
  const data = props.data;

  return (
    <table>
      <thead>
        <tr>
          {header.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.isbn}>
            {Object.values(row).map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapTable;
