import React from "react";

import HornedBeasts from "./HornedBeast";

import data from "./data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

class Main extends React.Component {
  render() {
    return (
        <Container>
      <main>
        {data.map( (element) =>{
          return (
            <HornedBeasts
              title={element.title}
              des={element.description}
              url={element.image_url}
              alt={element.keyword}
            />
          );
        })}
      </main>
      </Container>
    );
  }
}

export default Main;