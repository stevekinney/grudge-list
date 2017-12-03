import React, { PureComponent } from 'react';

export default class NewGrudge extends PureComponent {
  state = {
    fullName: '',
    transgression: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { fullName, transgression } = this.state;

    onSubmit({
      id: Date.now(),
      fullName,
      transgression,
      forgiven: false,
      dateAdded: new Date(),
    });

    this.setState({
      fullName: '',
      transgression: '',
    });
  };

  render() {
    const { fullName, transgression } = this.state;
    return (
      <form className="NewGrudge" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={fullName}
          name="fullName"
          placeholder="Full Legal Name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={transgression}
          name="transgression"
          placeholder="What did they do?"
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}
