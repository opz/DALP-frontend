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
            <h4 className={cn("text-right")}>Cutting edge yield farming strategies</h4>
            <p className={cn("text-right")}>
              Yield farm the way whales do it. Let the DALP manage your liquidity and maximize your APY.
            </p>
          </div>
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-5", noMarginPad)}>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>Yield Analytics</h4>
            <p>Get analytics for average APYs and P&L across all yield farming strategies.</p>
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
            <h4>Decentralized and Permissionless</h4>
            <p>Add or remove liquidity from The DALP whenever you want with no KYC.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
