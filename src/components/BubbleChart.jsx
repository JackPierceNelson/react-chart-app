import React from 'react';
import ChartComponent from './ChartComponent';
import financialData from '../financial_data.json';
//Inside the BubbleChart component, a data object is created:

//A single dataset is defined with the label "Sales, Profits, and Expenses".
//The data property uses map to create an array of objects, where each object represents a bubble in the chart.
//Each bubble has three properties:
//    x: The expense value
 //   y: The corresponding profit value
  //  r: The sales value divided by 10 (to scale the bubble size)
//The backgroundColor sets the color of the bubbles.

const BubbleChart = () => {
  const data = {
    datasets: [{
      label: 'Sales, Profits, and Expenses',
      data: financialData.expenses.map((expense, index) => ({
        x: expense,
        y: financialData.profits[index],
        r: financialData.sales[index] / 10
      })),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };
// The options object is defined to customize the chart's appearance:

//The x-axis is configured to display the title "Expenses".
//The y-axis is set to display the title "Profits".
//A title "Sales, Profits, and Expenses" is added to the chart.
//A custom tooltip is defined to display all three metrics for each bubble.

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
        text: 'Sales, Profits, and Expenses'
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const dataPoint = context.raw;
            return `Expenses: ${dataPoint.x}, Profits: ${dataPoint.y}, Sales: ${dataPoint.r * 10}`;
          }
        }
      }
    }
  };
// The component returns a ChartComponent, passing three props:

//type="bubble" specifies that this is a bubble chart.
//data={data} passes the prepared data object.
//options={options} passes the configuration options.

  return <ChartComponent type="bubble" data={data} options={options} />;
};

export default BubbleChart;