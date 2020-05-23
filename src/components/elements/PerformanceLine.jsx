import React, { useContext } from "react";
import { Card } from "../styled";
import { DataContext } from "../../providers/data";
import { Line } from 'react-chartjs-2';
import moment from "moment";

const PerformanceLine = () => {

    const { demo, data } = useContext(DataContext);
    const emptyArr = Array.apply(null, Array(30));
    const labels = emptyArr.map((val, idx) => moment().subtract(idx, 'days').format('M/D').toUpperCase());

    const lineData = demo ? {
        ...data.performanceLine,
        labels
    } : {
        labels
    };

    return (
        <React.Fragment>
             <h5 className="card-title">30-Day Performance</h5>
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
