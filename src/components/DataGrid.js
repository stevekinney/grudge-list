import React, { Component } from 'react';
import DataRow from './DataRow';

export default class DataGrid extends Component {
  render() {
    const { grudges } = this.props;

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
            <DataRow grudge={grudge} key={Math.random()} />
          ))}
        </tbody>
      </table>
    );
  }
}
