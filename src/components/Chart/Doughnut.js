import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Buys", "Sales"],
  datasets: [
    {
      label: "# of Votes",
      data: [149.58, 49.58],
      backgroundColor: ["rgb(0,0, 0)", "rgb(0, 210, 91)"],
      borderColor: ["rgb(0,0, 0)", "rgb(0, 210, 91)"],
      borderWidth: 1,
    },
  ],
};

const DoughnutCharts = () => {
  return <Doughnut data={data} />;
};

export default DoughnutCharts;
