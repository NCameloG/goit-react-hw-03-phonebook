import React, { Component } from 'react';

class Filter extends Component {
  handleChange = e => {
    this.props.setFilter(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <input
        className="Input"
        type="text"
        value={filter}
        onChange={this.handleChange}
        placeholder="Search contacts..."
      />
    );
  }
}

export default Filter;
