
import Main from "./components/Main";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./components/data.json";
import SelectedBeast from "./components/SelectedBeast";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: null,
      url: null,
      des: null,
      count: 0,
    };
  }

  modalData = (title,des, url,count) => {
    this.setState({
      title: title,
      url: url,
      des: des,
      count: count
    });
  };

  updateVisible= () =>  {
    this.setState({
        visible : !this.state.visible
    });
  }
  
  
  render() {
    return (
    <div>
      <SelectedBeast
          visible={this.state.visible}
          title={this.state.title}
          url={this.state.url}
          des={this.state.des}
          count={this.state.count}
          updateVisible={this.updateVisible}
      modalData={this.modalData}

          
        />
      <Header />
      <Main 
      data={data}
      updateVisible={this.updateVisible}
      modalData={this.modalData}
      />
      <Footer/>
    </div>
    );
  }
}
export default App;
