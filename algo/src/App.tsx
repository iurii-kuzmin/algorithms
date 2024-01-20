import React, { useState } from 'react';
import './App.css';
import { testBubbleSort } from './algorithms/bubbleSort';
import { testBinarySearch } from './algorithms/binarySearch';
import { testRomanToInteger } from './algorithms/romanToInteger';
import { testParentheses } from './algorithms/validParentheses';
import { testSqrt } from './algorithms/sqrt';

function TestRunner({testName, test}: {testName: string, test: () => string | null}) {
  const [result, setResult] = useState("not executed")

  function runTest() {
    const error = test()
    setResult(error ? error : "Success")
  }

  return (
    <div className="Test-runner">
      <button onClick={runTest}>{testName}</button>
      <span>{result}</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <TestRunner testName='Bubble Sort' test={testBubbleSort}/>
      <TestRunner testName='Binary Search' test={testBinarySearch}/>
      <TestRunner testName='Roman to Iteger' test={testRomanToInteger}/>
      <TestRunner testName='testParentheses' test={testParentheses}/>
      <TestRunner testName='testSqrt' test={testSqrt}/>
    </div>
  );
}

export default App;
