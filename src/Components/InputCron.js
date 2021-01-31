import React, {Component} from 'react';
import { Divider, Row, Col, Typography, Input } from 'antd';
import Expression from './Expression';
const { Title } = Typography;

class InputsCron extends Component {

  state = {
    cron: '',
    message: '',
  }

  constructor(props) {
    super(props);
    this.state.expression = {convertExpression: new Expression()};
    // this.time = this.time.bind(this);
  }

  time = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  handleExpression = (event) => {
    this.time(event);
    console.log(event.target.value);
    this.setState({ message: this.state.expression.convertExpression.expression(String(event.target.value)) })
  }

  render() {
    const {cron, message} = this.state;

    return (
      <>
        <Divider orientation="center">CRON INPUT</Divider>
        <Row justify="center" gutter={16}>
          <Col className="gutter-row" span={4}>
            <Input 
              placeholder="* * * * * *"
              name="cron"
              value={cron}
              style={{ textAlign: 'center' }}
              onChange={this.handleExpression}
            />
          </Col>
        </Row>
        <Row justify="center" gutter={16}>
          <Title level={2}>{message}</Title>
        </Row>
      </>
    )
  }
}

export default InputsCron;
