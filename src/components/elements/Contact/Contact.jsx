import React from "react";
import { Row, Col } from "reactstrap";
import {
  noMarginPad,
  topCenter,
  allCenter,
  full,
} from "../../../Constants/alignments";
import cn from "classnames";

import Form from "./Form";

const Contact = (props) => {
  return (
    <Row
      className={cn("contact_container", topCenter, full, "pt-3", noMarginPad)}
    >
      <Col xs="12" className={cn(topCenter, noMarginPad)}>
        <Form {...props} />
      </Col>
    </Row>
  );
};

export default Contact;
