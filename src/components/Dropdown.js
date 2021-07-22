

import React from "react";
import Form from 'react-bootstrap/Form'
class Dropdown extends React.Component {

    
      filterHorns = (e) => {
        e.preventDefault()
          let selectHorns =  e.target.value;
          this.props.chooseNumHorns(selectHorns)
          console.log(this.props.horns);
        
      };
  render() {
    return (
      <div>
       <>
  <Form.Select onChange={this.filterHorns} size="lg">
  <option value={-1}>All Horned Beast </option>
  {this.props.hornsNumbers.map((element) =>{
          return (
            <option>{element.horns}</option>
          );
        })}
  </Form.Select>
  <br />
  
</>
      </div>
    );
  }
}

export default Dropdown;