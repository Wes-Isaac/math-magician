import { Component } from 'react';

class Button extends Component {
  render() {
    const { buttonName, css, handleClick } = this.props;
    return (
      <button className={css} onClick={() => handleClick(buttonName)}>
        {buttonName}
      </button>
    );
  }
}

export default Button;
