import React from 'react';

function Table({ persons }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;