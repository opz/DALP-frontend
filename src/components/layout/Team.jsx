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
import mitch from "../../assets/images/team-mitch.jpeg";
import seb from "../../assets/images/team-seb.jpeg";
import will from "../../assets/images/team-will.jpeg";
import michael from "../../assets/images/team-michael.jpeg";

const Team = () => {
  return (
    <div className={cn(full, topCenter, noMarginPad)}>
      <Row className={cn(full, "my-2", noMarginPad, topAlign)}>
        <Col xs="6" md="3" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={will} alt="will" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-1")}>Will Shahda</p>
        </Col>
        <Col xs="6" md="3" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={michael} alt="michael" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-1")}>Michael Cohen</p>
        </Col>
        <Col xs="6" md="3" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={seb} alt="seb" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-1")}>Sebastian</p>
        </Col>
        <Col xs="6" md="3" className={cn(topCenter, noMarginPad)}>
          <div className={cn(full, allCenter, noMarginPad)}>
            <img src={mitch} alt="mitch" className={cn("team-graphic")} />
          </div>
          <p className={cn("mt-1")}>Mitchell Opatowsky</p>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
