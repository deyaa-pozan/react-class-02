  
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from 'react-awesome-modal';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false,
      count: 0,
  }
}

openModal= () =>  {
  this.setState({
      visible : true
  });
}

closeModal= () =>  {
  this.setState({
      visible : false
  });
}
CounterPlus = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

render() {
  return (
      <section>
                 
          <div>
            <Col >
            <Card style={{ width: '100%' ,height: '27rem',textAlign: 'center'}}>
  
  <Card.Img style={{ width: '100%', height: '21rem' }} variant="top" onClick={() => this.openModal()} src={this.props.url}
                alt={this.props.alt}
                title={this.props.title} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>

    <Button onClick={this.CounterPlus}>favorited : {this.state.count} ❤</Button>
  </Card.Body>
</Card>
            </Col>
          </div>
       
          <Modal 
              visible={this.state.visible}
              width="700"
              height="600"
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}
          >
              <Card style={{ width: '100%', height: '75%' ,textAlign: 'center'}}>
  
    <Card.Img style={{ width: '100%', height: '100%' }} variant="top" onClick={() => this.openModal()} src={this.props.url}
                  alt={this.props.alt}
                   title={this.props.title} />
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
     {this.props.des}
      </Card.Text>
      <Button onClick={this.CounterPlus}>favorited : {this.state.count} ❤</Button>
      
      <Button variant="danger" onClick={() => this.closeModal()} > close</Button>
     
     </Card.Body>
   </Card>
          </Modal>
      </section>
  );
}
}

// class HornedBeast extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         count: 0,
//     };
//   }

//   CounterPlus = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (

//         <Row>
//           <div>
//             <Col md="0.5">
//             <Card style={{ width: '100%' ,textAlign: 'center'}}>
  
//   <Card.Img variant="top" onClick={() => this.openModal()} src={this.props.url}
//                 alt={this.props.alt}
//                 title={this.props.title} />
//   <Card.Body>
//     <Card.Title>{this.props.title}</Card.Title>
//     <Card.Text>
//     {this.props.des}
//     </Card.Text>
//     <Button onClick={this.CounterPlus}>favorited : {this.state.count} ❤</Button>
//   </Card.Body>
// </Card>
//             </Col>
//           </div>
//         </Row>
     
//     );
//   }
// }

export default HornedBeast;