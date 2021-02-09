import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";

const infoComponent = () => {
  const countryInfo = useSelector((state) => state.countryInfo);
  return (
    <div className="info">
      <Card title="Country's Information">
        <p>
          Country:
          {countryInfo.name}
        </p>
        <p>
          Currency:
          {countryInfo.currency}
        </p>
        <p>
          Speed Unit:
          {countryInfo.speed}
        </p>
        <p>
          Distance Unit:
          {countryInfo.distance}
        </p>
        <p>
          Volume Unit:
          {countryInfo.volume}
        </p>
        <p>
          Time Zone:
          {countryInfo.timezone}
        </p>
      </Card>
    </div>
  );
};

export default infoComponent;
