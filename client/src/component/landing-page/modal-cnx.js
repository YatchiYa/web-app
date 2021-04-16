import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import '../../styles/landing-page/landing-body.scss'

class ModalPage extends Component {
state = {
  modal14: true
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}


render() {
  return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal14} centered>
          <MDBModalBody className="container-modla">
           <img className="mg-alerte" src='https://www.radioego.com/files/5139/img/medium/27174.jpg' /> <em>Alerte</em> <br/>
            if you don't create your acount, all your data will be lost after closing the game and/or the website :(
          </MDBModalBody>
          <MDBModalFooter>
             <Link to={{
              pathname : '/authentification'
            }} > <MDBBtn gradient="blue"> Create my acount </MDBBtn>  
             </Link> 
            
            <MDBBtn onClick={this.toggle(14)} 
            gradient="aqua">Countinue anonyymously</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;