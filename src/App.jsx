import React, { useState, useEffect } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json')
      .then(response => response.json())
      .then(data => setChartData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  /*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
    */
  return (
    <div className="App">
      <h1>Financial Data Visualization</h1>
      <div className="chart-grid">
        <div className="chart-item">
          <h2>Monthly Sales</h2>
          <BarChart data={chartData} />
        </div>
        <div className="chart-item">
          <h2>Monthly Profits</h2>
          <LineChart data={chartData} />
        </div>
        <div className="chart-item">
          <h2>Expenses vs. Profits</h2>
          <ScatterChart data={chartData} />
        </div>
        <div className="chart-item">
          <h2>Combined Metrics</h2>
          <BubbleChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default App
