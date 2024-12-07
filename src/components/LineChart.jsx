import React from 'react';
import ChartComponent from './ChartComponent';
import financialData from '../financial_data.json';
// Inside the LineChart component, a data object is created:

//labels are set to the months array from the financial data, which contains 60 months from January 2019 to December 2023.
//A single dataset is defined with the label "Monthly Profits".
//The data for this dataset is set to the profits array from the financial data.
//Visual styles are set, including fill: false for an unfilled line, borderColor for the line color, and tension for slight curve smoothing.

const LineChart = () => {
  const data = {
    labels: financialData.months,
    datasets: [{
      label: 'Monthly Profits',
      data: financialData.profits,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
// An options object is defined to customize the chart's appearance:

//The y-axis is configured to start at zero and display the title "Profits".
//The x-axis is set to display the title "Month".
//A title "Monthly Profits" is added to the chart using the plugins option.

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Profits'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Monthly Profits'
      }
    }
  };
//The component returns a ChartComponent, passing three props:

//type="line" specifies that this is a line chart.
//data={data} passes the prepared data object.
//options={options} passes the configuration options.

  return <ChartComponent type="line" data={data} options={options} />;
};

export default LineChart;