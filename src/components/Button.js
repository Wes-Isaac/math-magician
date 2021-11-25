import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
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
