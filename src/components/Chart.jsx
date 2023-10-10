import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({arr=[],currency,days}) => {
    const prices=[1,2,34];
    const date=["12/2/22","22/2/22","32/2/22"]

    const data={

    }
  return (
    <Line options={{
        responsive:true,
    }}
    data={{
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data:prices,borderColor:"rgba(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.3)",
        }]
    }} />
  )
}

export default Chart;
