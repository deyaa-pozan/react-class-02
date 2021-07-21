  
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
    };
  }

  CounterPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (

        <Row>
          <div>
            <Col md="0.5">
            <Card style={{ width: '100%' ,textAlign: 'center'}}>
  
  <Card.Img variant="top"  src={this.props.url}
                alt={this.props.alt}
                title={this.props.title} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.des}
    </Card.Text>
    <Button onClick={this.CounterPlus}>favorited : {this.state.count} ❤</Button>
  </Card.Body>
</Card>
            </Col>
          </div>
        </Row>
     
    );
  }
}



export default HornedBeast;