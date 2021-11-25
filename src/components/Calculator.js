import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';
import './calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
  }

  handleClick = (val) => {
    this.setState((prevState) => calculate(prevState, val));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <Display css="output" total={total} next={next} operation={operation} />
        <Button buttonName="AC" handleClick={this.handleClick} />
        <Button buttonName="+/-" handleClick={this.handleClick} />
        <Button buttonName="%" handleClick={this.handleClick} />
        <Button buttonName="÷" css="bg-secondary" handleClick={this.handleClick} />
        <Button buttonName="7" handleClick={this.handleClick} />
        <Button buttonName="8" handleClick={this.handleClick} />
        <Button buttonName="9" handleClick={this.handleClick} />
        <Button buttonName="x" css="bg-secondary" handleClick={this.handleClick} />
        <Button buttonName="4" handleClick={this.handleClick} />
        <Button buttonName="5" handleClick={this.handleClick} />
        <Button buttonName="6" handleClick={this.handleClick} />
        <Button buttonName="-" css="bg-secondary" handleClick={this.handleClick} />
        <Button buttonName="1" handleClick={this.handleClick} />
        <Button buttonName="2" handleClick={this.handleClick} />
        <Button buttonName="3" handleClick={this.handleClick} />
        <Button buttonName="+" css="bg-secondary" handleClick={this.handleClick} />
        <Button buttonName="0" css="span-two" handleClick={this.handleClick} />
        <Button buttonName="." handleClick={this.handleClick} />
        <Button buttonName="=" css="bg-secondary" handleClick={this.handleClick} />
      </div>
    );
  }
}
export default Calculator;
