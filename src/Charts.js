import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Charts = ({ mydata, filled }) => {

  const [chartData, setChartData] = useState({});
  const chart = () => {
    let days = [];
    let avgs = [];
    let mins = [];
    let maxs = [];
    for (const dataObj of mydata) {
      days.push(dataObj.day);
      avgs.push(dataObj.avg);
      mins.push(dataObj.min);
      maxs.push(dataObj.max);
    }
    setChartData({
      labels: days,
      datasets: [
        {
          label: "Min",
          data: mins,
          borderWidth: 0,
          backgroundColor: '#7cfc00'
        },
        {
          label: "Average",
          data: avgs,
          borderWidth: 0,
          backgroundColor: '#ffff00'
        },
        {
          label: "Max",
          data: maxs,
          borderWidth: 0,
          backgroundColor: '#ee4b2b'
        }
      ]
    });
  };

  useEffect(() => {
    chart();
  }, [filled]);
  return (
    <div className="App">
      <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              y: {
                gridLines: {
                  display: false
                }
              },
              x: {
                gridLines: {
                  display: false
                }
              }
            }
          }}
        />
    </div>
  );
}

export default Charts;