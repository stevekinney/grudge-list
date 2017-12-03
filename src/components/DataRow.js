import React from 'react';

const DataRow = ({ grudge }) => {
  return (
    <tr>
      <td>{grudge.fullName}</td>
      <td>{grudge.transgression}</td>
      <td>{grudge.forgiven ? 'Yes' : 'No'}</td>
      <td>
        <button>{grudge.forgiven ? 'Unforgive' : 'Forgive'}</button>
      </td>
    </tr>
  );
};

export default DataRow;
