import React, { useState } from "react";
import { Select, Button } from "antd";
import { useDispatch } from "react-redux";
import { changeMap, changeInfo } from "../actions";

const { Option } = Select;
const inputComponent = () => {
  const [map, setMap] = useState("india");

  const dispatch = useDispatch();

  function loadMap() {
    dispatch(changeMap(map));
    dispatch(changeInfo(map));
  }
  return (
    <div className="input">
      <Select
        defaultValue={map}
        onChange={(value) => setMap(value)}
        className="select"
      >
        <Option className="option" value="states">
          United States
        </Option>
        <Option className="option" value="india">
          India
        </Option>
        <Option className="option" value="uk">
          United Kingdom
        </Option>
      </Select>
      <Button type="primary" className="input-btn" onClick={loadMap}>
        Load
      </Button>
    </div>
  );
};

export default inputComponent;
