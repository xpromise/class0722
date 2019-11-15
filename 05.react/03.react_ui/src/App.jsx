import React, { Component } from "react";
import moment from "moment";
// 引入antd组件
import { Button, DatePicker, Carousel } from "antd";
// 引入样式
// import "antd/dist/antd.css";
import "./index.css";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">按钮~~</Button>
        <Button type="primary" icon="download" size="large" shape="round">
          Download~~
        </Button>
        <RangePicker
          defaultValue={[
            moment("2015/01/01", dateFormat),
            moment("2019/01/01", dateFormat)
          ]}
          format={dateFormat}
        />

        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
