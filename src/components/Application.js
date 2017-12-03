import React, { Component } from 'react';

import data from '../data.json';

import NewGrudge from './NewGrudge';
import Filter from './Filter';
import DataGrid from './DataGrid';
import Pagination from './Pagination';
import SortingOptions from './SortingOptions';

export default class Application extends Component {
  state = {
    data,
    filterText: '',
    sortBy: '',
  };

  addGrudge = datum => {
    const { data } = this.state;
    this.setState({
      data: [...data, datum],
    });
  };

  forgiveGrudge = id => {
    console.log('forgive', this.state.data, id);
    const data = this.state.data.map(datum => {
      if (id !== datum.id) return datum;
      return { ...datum, forgiven: !datum.forgiven };
    });
    this.setState({ data });
  };

  updateFilterText = filterText => {
    this.setState({ filterText });
  };

  updateSortColumn = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    return (
      <div className="Application">
        <h1>Grudge List</h1>
        <NewGrudge onSubmit={this.addGrudge} />
        <SortingOptions
          sortBy={this.state.sortBy}
          onChange={this.updateSortColumn}
        />
        <Filter
          data={this.state.data}
          render={data => {
            <Pagination
              data={data}
              perPage={10}
              render={(data, fullData) => {
                return (
                  <DataGrid
                    data={data}
                    fullData={fullData}
                    filterText={this.state.filterText}
                    onForgive={this.forgiveGrudge}
                    onSort={this.updateSortColumn}
                    sortBy={this.state.sortBy}
                  />
                );
              }}
            />;
          }}
        />
      </div>
    );
  }
}
