import React from "react";

class Footer extends React.Component {
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
      <footer onClick = {this.color}  style={{ width: '100%' ,textAlign: 'center',background: this.state.color}}>
        <h1>&copy; Made by: Deyaa Pozan 💻</h1>
      </footer>
    );
  }
}

export default Footer;