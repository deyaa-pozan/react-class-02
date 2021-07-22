import React from "react";
import HornedBeasts from "./HornedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Dropdown from "./Dropdown";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: 0,
      data : this.props.data,
      hornsNumbers:this.props.data
    };
  }

  chooseNumHorns = (chooseHorns) => {
    this.setState({
      horns : chooseHorns,
      data : this.props.data.filter(word =>{
        if (parseInt(chooseHorns) === -1) {
          return typeof word === "object";
        }
       return word.horns ===parseInt(chooseHorns)
      })
    });
  };
  render() {
    return (
      <div>
           <Container>
           <Dropdown 
           chooseNumHorns = {this.chooseNumHorns}
           horns = {this.state.horns}
           hornsNumbers = {this.state.hornsNumbers.reduce((acc, current) => {
            const x = acc.find(item => item.horns === current.horns);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, [])}

           />
      <main>
        <Row xs ={1} md = {4}>
        {this.state.data.map( (element) =>{
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
      </Container >
      </div>
    );
  }
}

export default Main;