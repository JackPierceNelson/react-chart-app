// Imports the necessary dependencies: React hooks (useEffect and useRef) and Chart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// The component accepts type, data, and options as props, which correspond to Chart.js configuration
const ChartComponent = ({ type, data, options }) => {
    // use useRef to create references for the chart canvas and the Chart.js instance
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
// The useEffect hook is used to manage the chart lifecycle:

//It checks if the canvas reference exists.
//If a chart instance already exists, it destroys it to prevent memory leaks.
//It creates a new Chart.js instance with the provided type, data, and options.
//The cleanup function destroys the chart instance when the component unmounts.

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type,
        data,
        options
      });
    }

    // Cleanup function
    return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
      // The effect depends on type, data, and options, so it will re-run if any of these props change
    }, [type, data, options]);
  // Finally, it renders a canvas element with the chartRef
    return <canvas ref={chartRef} />;
  };
  
  export default ChartComponent;