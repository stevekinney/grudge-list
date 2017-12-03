import React, { Component } from 'react';

export default class DataRow extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.grudge !== this.props.grudge;
  }

  render() {
    const { grudge, onToggle } = this.props;
    return (
      <tr>
        <td>{grudge.fullName}</td>
        <td>{grudge.transgression}</td>
        <td>{grudge.forgiven ? 'Yes' : 'No'}</td>
        <td>
          <button onClick={onToggle}>
            {grudge.forgiven ? 'Unforgive' : 'Forgive'}
          </button>
        </td>
      </tr>
    );
  }
}
