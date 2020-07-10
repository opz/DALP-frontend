import React, { useState, useEffect, useContext } from "react";
import { Card } from "../styled";
import { DataContext } from "../../providers/data";
import { Line } from 'react-chartjs-2';
import moment from "moment";

const tabs = [{
    title: '1 Hour',
    value: '1hour',
    span: 30,
    interval: 2,
    intervalType: 'minutes',
    dateFormat: 'h:mma'
},{
    title: '1 Day',
    value: '1day',
    span: 24,
    interval: 1,
    intervalType: 'hour',
    dateFormat: 'h:mma'
},{
    title: '7 Days',
    value: '7days',
    span: 30,
    interval: 1,
    intervalType: 'day',
    dateFormat: 'M/D'
}];

const PerformanceLine = () => {

    const { demo, data } = useContext(DataContext);

    const [duration, setDuration] = useState(tabs[0]);
    const [lineData, setLineData] = useState({});

    useEffect(() => {

        const emptyArr = Array.apply(null, Array(duration.span));

        const labels = emptyArr.map((val, idx) => {
            return moment().subtract(duration.interval * idx, duration.intervalType).format(duration.dateFormat).toUpperCase();
        }).reverse();

        setLineData(demo ? {
            ...data.performanceLine,
            labels
        } : {
            labels
        });

    }, [duration, data.performanceLine, demo]);

    
    return (
        <React.Fragment>
             <div className="d-flex justify-content-between mb-2 align-items-center">
                <h5 className="card-title">Token Performance</h5>
                <div className="btn-group btn-group-sm" role="group" aria-label="Performance Tabs">
                    {
                        tabs.map(tab => (
                            <button key={tab.value} type="button" className={`btn btn-light ${duration.value === tab.value ? 'active' : ''}`} onClick={() => setDuration(tab)}>{tab.title}</button>
                        ))
                    }
                </div>
             </div>
             <Card padding="20px">
             <Line data={lineData} options={{
                 scaleShowVerticalLines: false,
                 legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            padding: 25,
                            mirror: true,
                            beginAtZero: true,
                            display: true,
                            drawBorder: false,
                            fontColor: 'rgba(127, 143, 164, 0.5)',
                            fontFamily: 'Sofia Pro',
                            userCallback: function(value, index, values) {
                                return `${value.toFixed(1)}%`
                            }
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            drawBorder: false,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            padding: 20,
                            fontColor: 'rgba(127, 143, 164, 0.5)',
                            fontFamily: 'Sofia Pro',
                            autoSkip: true,
                            maxTicksLimit: 20
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false,
                            drawBorder: false,
                        }
                    }]
                }
             }} />
             </Card>
        </React.Fragment>
    )

};

export default PerformanceLine;
