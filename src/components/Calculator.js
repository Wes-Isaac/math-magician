import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const handleClick = (val) => {
    const res = calculate({ total, next, operation }, val);
    setTotal(res.total);
    setNext(res.next);
    setOperation(res.operation);
  };

  return (
    <div className="calculator-grid">
      <Display css="output" total={total} next={next} operation={operation} />
      <Button buttonName="AC" handleClick={handleClick} />
      <Button buttonName="+/-" handleClick={handleClick} />
      <Button buttonName="%" handleClick={handleClick} />
      <Button buttonName="÷" css="bg-secondary" handleClick={handleClick} />
      <Button buttonName="7" handleClick={handleClick} />
      <Button buttonName="8" handleClick={handleClick} />
      <Button buttonName="9" handleClick={handleClick} />
      <Button buttonName="x" css="bg-secondary" handleClick={handleClick} />
      <Button buttonName="4" handleClick={handleClick} />
      <Button buttonName="5" handleClick={handleClick} />
      <Button buttonName="6" handleClick={handleClick} />
      <Button buttonName="-" css="bg-secondary" handleClick={handleClick} />
      <Button buttonName="1" handleClick={handleClick} />
      <Button buttonName="2" handleClick={handleClick} />
      <Button buttonName="3" handleClick={handleClick} />
      <Button buttonName="+" css="bg-secondary" handleClick={handleClick} />
      <Button buttonName="0" css="span-two" handleClick={handleClick} />
      <Button buttonName="." handleClick={handleClick} />
      <Button buttonName="=" css="bg-secondary" handleClick={handleClick} />
    </div>
  );
};
export default Calculator;
