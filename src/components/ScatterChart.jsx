import React from 'react';
import ChartComponent from './ChartComponent';
import financialData from '../financial_data.json';
// Inside the ScatterChart component, a data object is created:

//A single dataset is defined with the label "Expenses vs Profits".
//The data property uses map to create an array of objects, where each object represents a point on the scatter plot.
//Each point has an x value (expense) and a y value (corresponding profit).
//The backgroundColor sets the color of the data points.

const ScatterChart = () => {
  const data = {
    datasets: [{
      label: 'Expenses vs Profits',
      data: financialData.expenses.map((expense, index) => ({
        x: expense,
        y: financialData.profits[index]
      })),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };
// The options object is defined to customize the chart's appearance:

//The x-axis is configured to display the title "Expenses".
//The y-axis is set to display the title "Profits".
//A title "Expenses vs Profits" is added to the chart using the plugins option.

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Profits'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Expenses vs Profits'
      }
    }
  };
// The component returns a ChartComponent, passing three props:

//type="scatter" specifies that this is a scatter plot.
//data={data} passes the prepared data object.
//options={options} passes the configuration options.

  return <ChartComponent type="scatter" data={data} options={options} />;
};

export default ScatterChart;