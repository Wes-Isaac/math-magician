import React from 'react';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-grid">
        <div className="output">0</div>
        <button>AC</button>
        <button>+/-</button>
        <button>%</button>
        <button className="bg-secondary">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="bg-secondary">x</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="bg-secondary">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="bg-secondary">+</button>
        <button className="span-two">0</button>
        <button>.</button>
        <button className="bg-secondary">=</button>
      </div>
    );
  }
}
export default Calculator;
