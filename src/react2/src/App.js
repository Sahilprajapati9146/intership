// import logo from './logo.svg';
import "./App.css";
// import Header from './components/Header';
// import { createElement } from 'react';
import React, { useState } from 'react';

// function Calculator() 
  // return (
  //   <div>
  //     <h1 class="text-center">Hello</h1>
  //     <p>This is a paragraph</p>
  //     <button onClick={() => alert("Button clicked")}>Click Me</button>
  //   </div>

  // );


  //   return React.createElement("div",null,
  //   React.createElement("h1",null,"Hello"),
  //   React.createElement("button",{onClick: () => alert("Alert") },"Click")

  //  );


  // import React, { useState } from 'react';

  function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
  
    const handleCalculate = ()  => {
      let result = 0;
      switch (operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          result = 'Invalid operator';
      }
      setResult(result);
    };
  
    return (
      <div className="calculator">
        <h1>Simple Calculator</h1>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
        <button onClick={handleCalculate}>=</button>
        <input type="text" value={result} readOnly />
      </div>

    );
  }
  
  export default Calculator;