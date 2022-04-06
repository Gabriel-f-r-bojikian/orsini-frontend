import { Legend, LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

import styles from "./oscillographychart.module.scss";

const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page E', uv: 150, pv: 2400, amt: 2400},
];

export default function OscillographyChart(props) {
    const renderLineChart = (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#FAAB4E" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
      );

    return(
        <div className={styles.chartWrapper}>
            {renderLineChart}
        </div>
    )
}