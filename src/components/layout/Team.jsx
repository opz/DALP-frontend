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
import dina from "../../assets/images/team-dina.jpg";
import shun from "../../assets/images/team-shun.jpeg";
import pascal from "../../assets/images/team-pascal.jpeg";
import chanho from "../../assets/images/team-chanho.jpg"

const Team = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <h2>Team</h2>
      <Row className={cn(full, noMarginPad, topAlign)}>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={will} alt="will" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Will Shahda</b>
            <br />
            CEO & Solidity Engineer
          </p>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={chanho} alt="sunil" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Chan-Ho Suh</b>
            <br />
            Solidity Engineer
          </p>
        </Col>
      </Row>
      <Row className={cn(full, noMarginPad, topAlign)}>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={shun} alt="shun" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Shun Bhark</b>
            <br />
            Full-Stack Engineer 
          </p>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={dina} alt="dina" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Dina Deljanin</b>
            <br />
            Front-End Engineer
          </p>
        </Col>
      </Row>
      <h2 className="mt-5">Advisors</h2>
      <Row className={cn(full, "my-2", noMarginPad, topAlign)}>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={sunil} alt="sunil" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Sunil Srivatsa</b>
            <br />
            DeFi Strategy Advisor
            <br />
            <small>Co-Founder of Urza DAO</small>
          </p>
        </Col>
        <Col xs="6" md="4" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={pascal} alt="pascal" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-3", "text-center")}>
            <b>Pascal Tallarida</b>
            <br />
            Advisor
            <br />
            <small>Founder of Jarvis</small>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
