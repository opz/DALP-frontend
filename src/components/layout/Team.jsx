import React from "react";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  topAlign,
  allCenter,
  full,
} from "../../Constants/alignments";
import cn from "classnames";
import will from "../../assets/images/team-will.jpeg";
import sunil from "../../assets/images/team-sunil.jpeg";

const Team = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <Row className={cn(full, "my-2", noMarginPad, topAlign)}>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={will} alt="will" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Will Shahda</b>
            <br />
            CEO & Solidity Developer
          </p>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={sunil} alt="sunil" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Sunil Srivatsa</b>
            <br />
            DeFi Strategy Advisor
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
