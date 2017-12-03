import React from 'react';
import DataRow from './DataRow';

const DataGrid = ({ grudges }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Transgression</th>
          <th>Forgiven?</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {grudges.map((grudge, index) => (
          <DataRow grudge={grudge} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
