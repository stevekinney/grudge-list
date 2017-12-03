import React, { PureComponent } from 'react';

export default class DataRow extends PureComponent {
  handleToggle = () => {
    const { grudge, onToggle } = this.props;
    onToggle(grudge.id);
  };

  render() {
    const { grudge } = this.props;
    return (
      <tr>
        <td>{grudge.fullName}</td>
        <td>{grudge.transgression}</td>
        <td>{grudge.forgiven ? 'Yes' : 'No'}</td>
        <td>
          <button onClick={this.handleToggle}>
            {grudge.forgiven ? 'Unforgive' : 'Forgive'}
          </button>
        </td>
      </tr>
    );
  }
}
