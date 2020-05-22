import React, { useState, useEffect } from "react";

const DataContext = React.createContext();
const DataConsumer = DataContext.Consumer;

const DataProvider = props => {
  const [demo, setDemo] = useState(false);
  
  const data = {
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
    }]
  };

  return (
    <DataContext.Provider value={{ demo, setDemo, data }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataConsumer, DataProvider };
