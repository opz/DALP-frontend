import React, { useContext } from "react";
import styled from "styled-components";
import { Card } from "../styled";
import { DataContext } from "../../providers/data";

const StyledRow = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  margin-bottom: 20px;

  padding-bottom: 10px;
  :last-child {
    border-bottom: none;
    margin-bottom: 0px;
  }
`;

const PoolAllocation = ({ }) => {

    const { demo, data } = useContext(DataContext);

    const pools = demo ? data.pools : [{
        name: 'Uniswap',
        allocation: 0
      }, {
        name: 'Balancer',
        allocation: 0
      }, {
        name: 'Bancor',
        allocation: 0
      }, {
        name: 'Curve',
        allocation: 0
      }];

    return (
        <React.Fragment>
             <h5 className="card-title">Pool Allocation</h5>
            <Card>
              <div className="card-body">
              {
                pools.map(pool => (
                  <StyledRow className="row">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                      <h2>{pool.name}</h2>
                      <h3>{pool.allocation}%</h3>
                    </div>
                  </StyledRow>
                ))
              }
              </div>
            </Card>
        </React.Fragment>
    )

};

export default PoolAllocation;