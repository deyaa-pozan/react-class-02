import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#fff",
        };
      }
    
      color = () => {
        this.setState({
          color : "#"+Math.floor(Math.random()*16777215).toString(16),
        });
      };
  render() {
    return (
      <header onClick = {this.color} style={{ width: '100%' ,textAlign: 'center',background: this.state.color}}>
        <h1>horned beast</h1>
      </header>
    );
  }
}

export default Header;