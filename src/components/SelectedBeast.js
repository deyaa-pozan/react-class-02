import React from "react";
import Modal from 'react-awesome-modal';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
    render() {
      return (
 <Modal 
 visible={this.props.visible}
 width="700"
 height="600"
 effect="fadeInUp"
 onClickAway={this.props.updateVisible}
>
 <Card style={{ width: '100%', height: '70%' ,textAlign: 'center'}}>

<Card.Img style={{ width: '100%', height: '100%' }} variant="top" src={this.props.url} onClick={this.props.updateVisible} 
     alt={this.props.alt}
      title={this.props.title} />
<Card.Body>
<Card.Title>{this.props.title}</Card.Title>
<Card.Text>
{this.props.des}
</Card.Text>
<Card.Title>favorited : {this.props.count} ❤</Card.Title>

<Button variant="danger" onClick={this.props.updateVisible} > close</Button>

</Card.Body>
</Card>
</Modal>

);
}
}
export default SelectedBeast;
