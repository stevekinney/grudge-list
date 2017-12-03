import React, { Component } from 'react';
import { chain, orderBy, filter } from 'lodash';

import initialData from '../data.json';

import SortingOptions from './SortingOptions';
import Filter from './Filter'

export default class Application extends Component {
  state = {
    grudges: initialData,
    sortBy: '',

    filterText: '',
  }

  updateFilterText = (filterText) => {
    this.setState({ filterText });
  }

  updateSortOrder = (sortBy) => {
    this.setState({ sortBy });
  }

  render() {
    let { filterText, grudges, sortBy } = this.state;
    grudges = chain(grudges).orderBy(sortBy).value()

    return (
      <div className="Application">
        <h1>Grudge List</h1>
        <SortingOptions sortBy={sortBy} onChange={this.updateSortOrder} />
        <Filter filterText={filterText} onChange={this.updateFilterText} />
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
