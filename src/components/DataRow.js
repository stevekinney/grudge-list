import React, { Component } from 'react';

export default class DataRow extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps === this.props;
  }

  render() {
    const { grudge } = this.props;

    return (
      <tr>
        <td>{grudge.fullName}</td>
        <td>{grudge.transgression}</td>
        <td>{grudge.forgiven ? 'Yes' : 'No'}</td>
        <td>
          <button>{grudge.forgiven ? 'Unforgive' : 'Forgive'}</button>
        </td>
      </tr>
    )
  }
}
