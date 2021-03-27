import { useState } from "react";
import AuthForm from "./authForm";
import "firebase/auth";
import { useUser } from "reactfire";
import cx from "classnames";

import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

const Auth = () => {
  const user = useUser();
  console.log(user);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      {!user.data && (
        <div className="card p-5 w-auto">
          <Nav tabs className="w-auto">
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={cx({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Register
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <AuthForm />
            </TabPane>
            <TabPane tabId="2">
              <AuthForm type="register" />
            </TabPane>
          </TabContent>
        </div>
      )}
    </>
  );
};

export default Auth;
