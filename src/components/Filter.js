import React, { Component } from 'react';

export default class Filter extends Component {
  handleChange = event => {
    const { value } = event.target;
    this.props.onChange(value);
  };

  render() {
    return (
      <section className="Filter">
        <input
          type="text"
          name="filterText"
          placeholder="Filter by Full Name"
          value={this.props.filterText}
          onChange={this.handleChange}
        />
      </section>
    );
  }
}
