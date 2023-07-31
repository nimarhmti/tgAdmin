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
import { getRandomInt } from "../../../utils";
import translate from "../../../assets/translate/translate.json";
const FONT_FAMILY = "IRANSans";
const CHART_COLOR = {
  profit: "#0C4A6E",
  damage: "#868e96",
};
const range = {
  max: 1000,
  min: -100,
};
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        font: {
          family: FONT_FAMILY,
        },
      },
    },
    title: {
      display: true,
      text: translate.CHARTS.BUY,
      font: {
        family: FONT_FAMILY,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: translate.CHARTS.PROFIT,
      data: labels.map(() => getRandomInt(range.min, range.max)),
      borderColor: CHART_COLOR.profit,
      backgroundColor: CHART_COLOR.profit,
    },
    {
      label: translate.CHARTS.DAMAGE,
      data: labels.map(() => getRandomInt(range.min, range.max)),
      borderColor: CHART_COLOR.damage,
      backgroundColor: CHART_COLOR.damage,
    },
  ],
};
