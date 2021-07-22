import React from "react";
import HornedBeasts from "./HornedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
        <Container>
      <main>
        <Row xs ={1} md = {4}>
        {this.props.data.map( (element) =>{
          return (
            <HornedBeasts
              title={element.title}
              des={element.description}
              url={element.image_url}
              alt={element.keyword}
              updateVisible={this.props.updateVisible}
              modalData={this.props.modalData}
            />
            
          );
        })}
        </Row>
      </main>
      </Container>
    );
  }
}

export default Main;