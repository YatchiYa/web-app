import React, { Component } from 'react';
import { MDBIcon, MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { connect } from "react-redux";

// css
import '../../styles/landing-page/landing-page-home.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { renderPage } from "../../js/actions/home/home";

const mapStateToProps = state => {
    return { userR: state.userR };
  };

function mapDispatchToProps(dispatch) {
    return {
        renderPage: () => dispatch(renderPage())
    };
  }
  

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    componentDidMount(props){
        
    }

    render() {
        return (
                    <MDBCard className="card-builder">
                        <MDBCardBody>
                        <img className="img-fluid" src="https://www.seekpng.com/png/detail/17-175297_jouissance-the-king-s-avatar-zhou-zekai-discord.png" />
                        <label className="cont-ff">
                          <MDBCardTitle className="ti-card tt"> <MDBIcon icon="chess-queen" /> {this.props.userR.username}</MDBCardTitle>
                          <MDBCardTitle className="ti-card tx"> <span className="ref"> <MDBIcon fab icon="galactic-republic" /> Level:</span> <span className="desc">{this.props.userR.level} - {this.props.userR.expValue}%</span></MDBCardTitle>
                          <MDBCardTitle className="ti-card tx"><span className="ref"> <MDBIcon icon="award" /> Grades:</span> <span className="desc">{this.props.userR.grades}</span></MDBCardTitle>
                          <MDBCardTitle className="ti-card tx"><span className="ref"> <MDBIcon icon="award" /> Guilde:</span> <span className="desc">{this.props.userR.guilde}</span></MDBCardTitle>
                        </label>
                        </MDBCardBody>
                    </MDBCard>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;