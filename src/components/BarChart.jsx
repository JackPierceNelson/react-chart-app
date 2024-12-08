import React from 'react';
import ChartComponent from './ChartComponent';
import financialData from './data/financial_data.json';
// Inside the BarChart component, a data object is created:

//labels are set to the months array from the financial data.
//A single dataset is defined with the label "Monthly Sales".
//The data for this dataset is set to the sales array from the financial data.
//Visual styles are set, including background and border colors.

const BarChart = () => {
  const data = {
    labels: financialData.months,
    datasets: [{
      label: 'Monthly Sales',
      data: financialData.sales,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
// An options object is defined to customize the chart's appearance:

//The y-axis is configured to start at zero and display the title "Sales".
//The x-axis is set to display the title "Month".
//A title "Monthly Sales" is added to the chart using the plugins option.

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales'
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
        text: 'Monthly Sales'
      }
    }
  };
//The component returns a ChartComponent, passing three props:

//type="bar" specifies that this is a bar chart.
//data={data} passes the prepared data object.
//options={options} passes the configuration options.

  return <ChartComponent type="bar" data={data} options={options} />;
};

export default BarChart;