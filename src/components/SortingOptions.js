import React, { Component } from 'react';

export default class SortingOptions extends Component {
  handleChange = event => {
    const { value } = event.target;
    this.props.onChange(value);
  };

  handleReset = () => {
    this.props.onChange('');
  };

  render() {
    const { sortBy } = this.props;

    return (
      <section className="SortingOptions">
        <label>
          <input
            type="radio"
            name="sort"
            value="fullName"
            checked={sortBy === "fullName"}
            onClick={this.handleChange}
          />
          Full Name
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="transgression"
            checked={sortBy === "transgression"}
            onClick={this.handleChange}
          />
          Transgression
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="forgiven"
            checked={sortBy === "forgiven"}
            onClick={this.handleChange}
          />
          Forgiven?
        </label>
        <button onClick={this.handleReset}>Reset</button>
      </section>
    );
  }
}
