import React from "react";
import { Row, Col } from "reactstrap";
import BeatLoader from "react-spinners/BeatLoader";
import {
  noMarginPad,
  topCenter,
  allCenter,
  rightCenter,
  leftCenter,
  full,
} from "../../../Constants/alignments";
import cn from "classnames";
import * as yup from "yup";

// const schema = yup.object({
//   name: yup.string().required("Missing name"),
//   email: yup.string().email().required("Missing email address"),
//   message: yup.string(),
// });

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      sending: false,
      sent: false,
    };
  }

  submitForm = () => {
    this.form.current.submit();
  };

  submitContact = (data) => {
    this.setState(
      {
        sending: true,
      },
      async () => {
        try {
          await this.props.submitContact(data);
          this.setState({
            sending: false,
            sent: true,
          });
        } catch (e) {
          this.form.current.addError(e.message, "message", "", "string");
          this.setState({
            sending: false,
          });
        }
      }
    );
  };

  render() {
    if (this.state.sent) {
      return (
        <div className={cn(full, allCenter, noMarginPad)}>
          <Row className={cn(full, noMarginPad, allCenter)}>
            <span className={cn("thanks")}>
              Thank you for contacting us, someone will reach out within the
              next 24 hours!
            </span>
          </Row>
        </div>
      );
    }
    return (
      <Row
        className={cn(
          "form_container",
          full,
          topCenter,
          "px-3",
          "px-md-0",
          noMarginPad
        )}
      >
        <Col xs="12" className={cn(topCenter, noMarginPad)}>
          <div className={cn("form_field_div", full, leftCenter, noMarginPad)}>
            <input
              type="text"
              name="name"
              label="name"
              placeholder="Your name here"
              className={cn("form_field_input")}
            />
          </div>

          <div
            className={cn(
              "form_field_div",
              full,
              leftCenter,

              noMarginPad,
              "mt-3"
            )}
          >
            <input
              type="email"
              name="email"
              label="email"
              placeholder="youremail@gmail.com"
              className={cn("form_field_input")}
            />
          </div>

          <div className={cn(full, topCenter, "mt-3", noMarginPad)}>
            <button
              type="submit"
              text="Submit"
              onClick={this.submitForm}
              className={cn("contact-submit-btn", "button_margin")}
            >
              {this.state.sending ? (
                <BeatLoader size={12} />
              ) : (
                <span>Submit</span>
              )}
            </button>
          </div>
        </Col>
      </Row>
    );
  }
}
