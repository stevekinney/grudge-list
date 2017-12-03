import React, { Component } from 'react';

import initialData from '../data.json';

export default class Application extends Component {
  state = {
    grudges: initialData
  }

  render() {
    const { grudges } = this.state;

    return (
      <div className="Application">
        <h1>Grudge List</h1>
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
            { grudges.map((grudge, index) => (
              <tr key={index}>
                <td>{ grudge.fullName }</td>
                <td>{ grudge.transgression }</td>
                <td>{ grudge.forgiven ? 'Yes' : 'No' }</td>
                <td><button>{ grudge.forgiven ? 'Unforgive' : 'Forgive' }</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}
