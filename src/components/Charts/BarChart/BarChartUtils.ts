import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import translate from "../../../assets/translate/translate.json";
import { getRandomInt } from "../../../utils";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const FONT_FAMILY = "IRANSans";
const CHART_COLOR = {
  profit: "#0C4A6E",
  damage: "#868e96",
};
const range = {
  max: 1000,
  min: -100,
};
const labels = [...translate.MONTH];
const { SOLD, PROFIT, DAMAGE } = translate.CHARTS;
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
      text: translate.CHARTS.SOLD,
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
      label: PROFIT,
      data: labels.map(() => getRandomInt(range.min, range.max)),
      borderColor: CHART_COLOR.profit,
      backgroundColor: CHART_COLOR.profit,
    },
    {
      label: DAMAGE,
      data: labels.map(() => getRandomInt(range.min, range.max)),
      borderColor: CHART_COLOR.damage,
      backgroundColor: CHART_COLOR.damage,
    },
  ],
};
