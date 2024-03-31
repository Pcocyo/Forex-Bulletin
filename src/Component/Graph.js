import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import jsonData from '../Tests/fmp-data (2).json'
import {Box} from '@chakra-ui/react'
const Graph = () => {
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
                  color: 'white',
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
      }, []);
    return (
        <Box 
        h='100%'
        w='100%'
        
        bgColor='white'
        boxShadow='0 2px 5px rgba(57, 55, 254, 0.2)'
        >
          <canvas id="acquisitions"></canvas>
        </Box>
      );
}

export default Graph