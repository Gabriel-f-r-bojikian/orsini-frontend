import React, { useContext, useEffect, useState, useRef } from 'react';
import { Legend, LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from '../../pages/_app';
const io = require("socket.io-client");
const socket = io("http://localhost:2999", {
  transports: ['websocket']
});


import styles from "./oscillographychart.module.scss";

export default function OscillographyChart(props) {
    const maxDataQueueSize = 100;

    const [dataQueue, setDataQueue] = useState([]);
    const [voltageDataPoints, setVoltageDataPoints] = useState([]);
    const [amperageDataPoints, setAmperageDataPoints] = useState([]);

    useEffect(() => {
        socket.on('incoming message', (message) => {
            if( dataQueue.length > maxDataQueueSize ) {
                dataQueue.shift();
            }
            // console.log(dataQueue);
            dataQueue.push(message);
            setDataQueue(dataQueue);
            const dataPoints = convertDataToChartPoints(dataQueue);
            setVoltageDataPoints(dataPoints.voltage);
            setAmperageDataPoints(dataPoints.amperage);
        })
    }, [socket])

    const renderLineChart = (
        <div>
            <div>
                <h3>Tensão</h3>
                <LineChart width={600} height={300} data={voltageDataPoints} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    {/* <Line type="monotone" dataKey="Va" stroke="#FAAB4E" /> */}
                    <Line type="monotone" dataKey="Va" stroke="#FF0000" dot="" />
                    <Line type="monotone" dataKey="Vb" stroke="#00FF00" dot="" />
                    <Line type="monotone" dataKey="Vc" stroke="#0000FF" dot="" />
                    <Line type="monotone" dataKey="Vn" stroke="#000000" dot="" />
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="timeStamp" />
                    <YAxis />
                </LineChart>
            </div>
            
            <div>
                <h3>Corrente</h3>
                <LineChart width={600} height={300} data={amperageDataPoints} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    {/* <Line type="monotone" dataKey="Va" stroke="#FAAB4E" /> */}
                    <Line type="monotone" dataKey="Ia" stroke="#FF0000" dot="" />
                    <Line type="monotone" dataKey="Ib" stroke="#00FF00" dot="" />
                    <Line type="monotone" dataKey="Ic" stroke="#0000FF" dot="" />
                    <Line type="monotone" dataKey="In" stroke="#000000" dot="" />
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="timeStamp" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
      );

    return(
        <div className={styles.chartWrapper}>
            {renderLineChart}
        </div>
    )
}

function convertDataToChartPoints(dataQueue) {
    const voltageGraphPoints = [];
    const amperageGraphPoints = [];
    dataQueue.forEach( dataPoint => {
        const voltageGraphPoint = {
            timeStamp    : dataPoint.timeStamp,
            Va      : dataPoint.Va,
            Vb      : dataPoint.Vb,
            Vc      : dataPoint.Vc,
            Vn      : dataPoint.Vn,
        }
        voltageGraphPoints.push(voltageGraphPoint);
        const amperageGraphPoint = {
            timeStamp    : dataPoint.timeStamp,
            Ia      : dataPoint.Ia,
            Ib      : dataPoint.Ib,
            Ic      : dataPoint.Ic,
            In      : dataPoint.In,
        }
        amperageGraphPoints.push(amperageGraphPoint);
    });
    
    return({
        voltage     : voltageGraphPoints,
        amperage    : amperageGraphPoints
    })
}