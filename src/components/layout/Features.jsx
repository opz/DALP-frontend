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
import governance from "../../assets/images/governance.svg";

const Features = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={gold} alt="gold" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(rightCenter, noMarginPad)}>
          <div className={cn(full, topRight, noMarginPad)}>
            <h4 className={cn("text-right")}>Next-Generation Yield Farming</h4>
            <p className={cn("text-right")}>
              APY.Finance connects DeFi money legos together to innovate high APY strategies with diversified smart contract risk.
            </p>
            <p>Auto-swap liquidity mining rewards to compound APY.</p>
            <p>Customize by asset choice and risk tolerance.</p>
          </div>
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-5", noMarginPad)}>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>APY Analytics</h4>
            <p>Track your profits with analytics across all APY.Finance strategies.</p>
            <p>Keep up-to-date on the latest DeFi smart contract risk factors.</p>
          </div>
        </Col>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={magnify} alt="magnify" className={cn("features-graphic")} />
        </Col>
      </Row>
      <Row className={cn(full, topAlign, "mt-3", noMarginPad)}>
        <Col xs="6" className={cn(allCenter, noMarginPad)}>
          <img src={governance} alt="bars" className={cn("features-graphic")} />
        </Col>
        <Col xs="6" className={cn(leftCenter, noMarginPad)}>
          <div className={cn(full, topLeft, noMarginPad)}>
            <h4>Decentralized and Community-Owned</h4>
            <p>Users are incentivized with the APY governance token to keep strategy models up-to-date with the latest DeFi developements.</p>
            <p>Fully community-owned. Propose and vote on any system parameter.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
