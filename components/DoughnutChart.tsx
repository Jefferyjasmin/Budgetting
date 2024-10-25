"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((account) => account.name);
  const balanace = accounts.map((account) => account.currentBalance);
  const data = {
    datasets: [
      {
        Label: "Banks",
        data: balanace,
        backgroundColor: ["#747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accountNames,
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
