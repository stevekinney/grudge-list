import React, { Component } from 'react';
import { chain, orderBy, filter } from 'lodash';

import initialData from '../data.json';

import DataGrid from './DataGrid';
import SortingOptions from './SortingOptions';
import Filter from './Filter'
import NewGrudge from './NewGrudge';
import Pagination from './Pagination';

export default class Application extends Component {
  state = {
    grudges: initialData,
    sortBy: '',

    filterText: '',
  }

  addGrudge = grudge => {
    const { grudges } = this.state;
    this.setState({
      grudges: [grudge, ...grudges],
    });
  }

  toggleGrudge = id => {
    console.log('toggleGrudge', id);
    const grudges = this.state.grudges.map(grudge => {
      if (id !== grudge.id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
    this.setState({ grudges });
  }

  updateFilterText = (filterText) => {
    this.setState({ filterText });
  }

  updateSortOrder = (sortBy) => {
    this.setState({ sortBy });
  }

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
        <NewGrudge onSubmit={this.addGrudge} />
        <Pagination
          grudges={grudges}
          render={(grudgesToDisplay) => {
            return <DataGrid grudges={grudgesToDisplay} onToggle={this.toggleGrudge} />
          }}
        />
      </div>
    );
  }
}
