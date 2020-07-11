import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
} from "reactstrap";
import cn from "classnames";

import BuyForm from "./BuyForm";
import RedeemForm from "./RedeemForm";

const ActionForms = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Card>
      <Nav tabs>
        <NavItem className={cn("form-actions-tab")}>
          <NavLink
            className={cn(
              { active: activeTab === "1" },
              "form-actions-navlink"
            )}
            onClick={() => {
              toggle("1");
            }}
          >
            Buy APT
          </NavLink>
        </NavItem>
        <NavItem className={cn("form-actions-tab")}>
          <NavLink
            className={cn(
              { active: activeTab === "2" },
              "form-actions-navlink"
            )}
            onClick={() => {
              toggle("2");
            }}
          >
            Redeem ETH
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <div className="card-body">
            <BuyForm />
          </div>
        </TabPane>
        <TabPane tabId="2">
          <div className="card-body">
            <RedeemForm />
          </div>
        </TabPane>
      </TabContent>
    </Card>
  );
};

ActionForms.defaultProps = {
  amount: 0,
};

export default ActionForms;
