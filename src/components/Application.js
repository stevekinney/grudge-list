import React, { Component } from 'react';
import { orderBy } from 'lodash';

import initialData from '../data.json';

import SortingOptions from './SortingOptions';

export default class Application extends Component {
  state = {
    grudges: initialData,
    sortBy: ''
  }

  updateSortOrder = (sortBy) => {
    this.setState({ sortBy });
  }

  render() {
    let { grudges, sortBy } = this.state;
    grudges = orderBy(grudges, sortBy);

    return (
      <div className="Application">
        <h1>Grudge List</h1>
        <SortingOptions sortBy={sortBy} onChange={this.updateSortOrder} />
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
