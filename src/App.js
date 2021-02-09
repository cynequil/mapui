import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/inputComponent";
import Info from "./components/infoComponent";
import Header from "./components/Header";
import Sider from "./components/Sider";
import Footer from "./components/Footer";
import Map from "./components/mapComponent";

function App() {
  // sider toogle state imported using useSelector hook
  const toggle = useSelector((state) => state.toggle);
  return (
    <Layout>
      {/* toogle is used to add/remove sider from DOM on menu's click */}
      {toggle && <Sider class="sidenav" />}
      <Layout>
        <Header />
        <Map />
        <Input />
        <Info />
        <Footer />
      </Layout>
    </Layout>
  );
}

export default App;
