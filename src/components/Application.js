import React, { Component } from 'react';
import { chain } from 'lodash';

import initialData from '../data.json';

import DataGrid from './DataGrid';
import SortingOptions from './SortingOptions';
import Filter from './Filter';

export default class Application extends Component {
  state = {
    grudges: initialData,
    sortBy: '',

    filterText: '',
  };

  updateFilterText = filterText => {
    this.setState({ filterText });
  };

  updateSortOrder = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    let { filterText, grudges, sortBy } = this.state;
    grudges = chain(grudges)
      .filter(grudge => grudge.fullName.toLowerCase().includes(filterText))
      .orderBy(sortBy)
      .value();

    return (
      <div className="Application">
        <h1>Grudge List</h1>
        <SortingOptions sortBy={sortBy} onChange={this.updateSortOrder} />
        <Filter filterText={filterText} onChange={this.updateFilterText} />
        <DataGrid grudges={grudges} />
      </div>
    );
  }
}
