import React from "react";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  topAlign,
  topLeft,
  leftCenter,
  rightCenter,
  topRight,
  allCenter,
  full,
} from "../../Constants/alignments";
import cn from "classnames";
import magnify from "../../assets/images/magnify.svg";
import gold from "../../assets/images/gold.svg";
import bars from "../../assets/images/bars.svg";

const Features = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={gold} alt="gold" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(rightCenter, noMarginPad)}>
          <div className={cn(full, topRight, noMarginPad)}>
            <h4 className={cn("text-right")}>Maximum APY</h4>
            <p className={cn("text-right")}>
              The APY.Finance platform automatically routes your funds to the most cutting edge yield farming opportunities.
            </p>
          </div>
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-5", noMarginPad)}>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>APY Analytics</h4>
            <p>Track your profits with analytics across all APY.Finance strategies.</p>
          </div>
        </Col>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={magnify} alt="magnify" className={cn("features-graphic")} />
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={bars} alt="bars" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>Decentralized and Community Owned</h4>
            <p>Vote on new proposals for APY.Finance with the APY token to keep it aligned with the community.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
