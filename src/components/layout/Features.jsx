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
  rightRight,
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
      <Row className={cn(full, topAlign, "mt-5", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={magnify} alt="magnify" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>Dashboard Analytics</h4>
            <p>Get profit/loss and 30 day historic reviews of performance.</p>
          </div>
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(rightCenter, noMarginPad)}>
          <div className={cn(full, topRight, noMarginPad)}>
            <h4 className={cn("text-right")}>Transfer Liquidity </h4>
            <p className={cn("text-right")}>
              Reduce impermanent loss between pools in the same or different
              AMMs.
            </p>
          </div>
        </Col>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={gold} alt="gold" className={cn("features-graphic")} />
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={bars} alt="bars" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>Buy DALP / Redeem ETH</h4>
            <p>Easily transfer in and out of the DALP token.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
