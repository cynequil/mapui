import React from "react";
import { Layout, Button } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { toggle } from "../actions";

const { Header } = Layout;

const headComponet = () => {
  const dispatch = useDispatch();
  return (
    <Header className="head-top">
      <div className="left">
        <MenuOutlined
          className="header-icons"
          onClick={() => dispatch(toggle())}
        />
      </div>
      <div className="right">
        {/* <Switch className="switch" /> */}
        <Button type="primary" shape="round" size="large">
          Login
        </Button>
        <UserOutlined className="header-icons" />
      </div>
    </Header>
  );
};

export default headComponet;
