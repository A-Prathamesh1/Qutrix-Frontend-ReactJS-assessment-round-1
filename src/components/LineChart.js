import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
);

export const options = {
        responsive: true,
        plugins: {
                legend: {
                        position: 'top',
                },
                title: {
                        display: true,
                        text: 'Chart.js Line Chart',
                },
        },
};

let xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
let yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

export const data = {
        labels: xValues,
        datasets: [
                {
                        label: 'Dataset 1',
                        data: yValues,
                        borderColor: 'rgb(0, 0, 0)',
                        backgroundColor: 'rgb(0,0,0)',
                },
        ],
};
function LineChart() {
        return <Line options={options} data={data} />;
}
export default LineChart;
