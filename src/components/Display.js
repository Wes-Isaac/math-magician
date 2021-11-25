import React, { Component } from 'react';

class Display extends Component {
  render() {
    const {
      css,
      total,
      next,
      operation,
    } = this.props;
    return (
      <div className={css}>
        {total}
        {operation}
        {next}
      </div>
    );
  }
}

export default Display;
