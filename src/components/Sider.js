import React from "react";
import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const siderComponent = () => {
  return (
    <Sider>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          User
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Video
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Upload
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Add User
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default siderComponent;
