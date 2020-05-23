import React, { useState } from "react";
const DataContext = React.createContext();
const DataConsumer = DataContext.Consumer;

const DataProvider = props => {
  const [demo, setDemo] = useState(false);
  
  const emptyArr = Array.apply(null, Array(30));

  const data = {
    balance: 39.24,
    supply: 516.09,
    pools: [{
      name: 'Uniswap',
      allocation: 59
    }, {
      name: 'Balancer',
      allocation: 22
    }, {
      name: 'Bancor',
      allocation: 17
    }, {
      name: 'Curve',
      allocation: 2
    }],
    performanceLine: {
      datasets: [
        {
          label: 'Add Label',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(0, 74, 215, .9)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(0, 74, 215, 1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: emptyArr.map(val => (Math.random() * 8 + 1).toFixed(1))
        }
      ]
    } 
  };

  return (
    <DataContext.Provider value={{ demo, setDemo, data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataConsumer, DataProvider };
