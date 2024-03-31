import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import { Line } from "react-chartjs-2";
import jsonData from "./fmp-data (2).json";

// line styling
// options:{
//     pointStyle:'cross',
//     borderWidth:'5',//ipmportant
//     hitRadius:'2',  //important
//     borderColor:'green', //important
//     backgroundColor:'blue',
//     hoverRadius:'2',
//     fill:'false',
//     tension:'0.5', //important
//   },

//cartesian styling
// options: {
//     hidden:true,
//     scales: {
//         x: {
//           grid: {
//             color: 'red',
//             borderColor: 'yellow',
//             tickColor: 'red'
//           },
//           ticks:{
//             color:'blue'
//           },
//           title: {
//             color: 'red',
//             display: true,
//             text: 'day'
//           }
//         } //important
//       },
//     parsing: {
//       xAxisKey: 'date',
//       yAxisKey: 'close'
//     }
//   }
// });
const DaughnutTest = () => {
  useEffect(() => {
    const lineStyle = {
      borderColor: "#5755FE",
      tension: "0.3",
    };
    const pointStyle = {
      pointStyle: "circle",
      backgroundColor:'#5755FE',
      hitRadius:'5',
      tension: "0.3",
    };
    const plugin = {
      id: 'customCanvasBackgroundColor',
      beforeDraw: (chart, args, options) => {
        const {ctx} = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#99ffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };
    const cartesianStyle = {
      scales: {
        y: {
          grid: {
            color:'#000',
            tickColor:'white',
            lineWidth:'0.1',
          },
          ticks: {
            display:false
          },
          title: {
            display:false
          },
          border: {
            display:false,
            color: "black",
          },
        },
        x: {
          grid: {
            color: "#8B93FF",
            tickColor: "white",
            lineWidth:'0.5',
          },
          border: {
            color: "black",
          },
        },
      },
    };

    const jsDt = jsonData.slice(1, 8);
    const canvas = document.getElementById("acquisitions");
    const ctx = canvas.getContext("2d");

    // Check if there's an existing chart instance and destroy it
    if (window.myChart) {
      window.myChart.destroy();
    }

    // Create new chart instance
    window.myChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            data: jsDt,
          },
        ],
      },
      options: {
        plugins: {
            legend: {
                display:false
            },
            title:{
              text:'USD/JPY',
              display:true,
              fullSize:true,
              padding:10
            },
            customCanvasBackgroundColor: {
              color: 'rgb(255, 247, 252)',
            }
        },
        elements:{
          line:{...lineStyle},
          point:{...pointStyle}
        },
        ...cartesianStyle,  
        parsing: {
          xAxisKey: "date",
          yAxisKey: "close",
        },
      },
      plugins: [plugin]
    });
    console.log(jsDt);

    // Clean up function to destroy the chart when component unmounts
    return () => {
      window.myChart.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once after component mounts

  return (
    <div style={{ position: "relative", height: "1000px", width: "1000px" }}>
      <canvas id="acquisitions"></canvas>
      test
    </div>
  );
};

export default DaughnutTest;
