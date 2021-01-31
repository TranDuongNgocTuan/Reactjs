import React, {Component} from 'react'
import { Row, Col, Divider } from 'antd';

class Header extends Component {
  render() {
    return (
      <>
        <Divider orientation="left">sub-element align center</Divider>
        <Row justify="center">
          <Col span={4} id="green">Crontab Spring Batch</Col>
        </Row>
        <Row justify="center">
          <Col span={8} style="color: #ffffff">Describe simple from expression to the sentence.</Col>
        </Row>
      </>
    )
  };
}

export default Header;