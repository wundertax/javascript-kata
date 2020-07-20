import React from "react";

const JoinedTable = (props) => {
  const header = props.header;
  const data = props.data;

  return (
    <table>
      <thead>
        <tr>
          {header.map((item, i) => (
            <th key={i}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((cell, i) => (
              <td key={i}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default JoinedTable;
