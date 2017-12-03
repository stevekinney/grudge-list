import React, { PureComponent } from 'react';

export default class Pagination extends PureComponent {
  static defaultProps = {
    perPage: 10,
    render: () => {}
  }

  state = {
    page: 0,
  }

  decrementPage = () => {
    const { page } = this.state;
    if (page > 0) {
      this.setState({
        page: page - 1
      })
    }
  }

  incrementPage = () => {
    const { page } = this.state;
    if (page < this.totalPages) {
      this.setState({
        page: page + 1
      })
    }
  }

  get totalPages() {
    const { grudges, perPage } = this.props;
    const lastIndex = grudges.length;
    return Math.ceil(lastIndex / perPage)
  }

  render() {
    const { grudges, perPage, render } = this.props;
    const { page } = this.state;

    const startingPoint = page * perPage;
    const endingPoint = startingPoint + perPage;

    const grudgesToDisplay = grudges.slice(startingPoint, endingPoint);

    return (
      <section className="Pagination">
        <div className="Pagination--controls">
          <span className="Pagination--pageCount">Page {page} of {this.totalPages}</span>
          <button onClick={this.decrementPage} disabled={page === 0} >Previous</button>
          <button onClick={this.incrementPage} disabled={page >= this.totalPages}>Next</button>
        </div>
        { render(grudgesToDisplay) }
      </section>
    )
  }
}
