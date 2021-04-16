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
                        <span className="t1"></span>
                        <span className="t2"></span>
                        <MDBIcon fab icon="optin-monster" className="t14" />
                        <MDBCardTitle className="ti-card">{this.props.userR.username}</MDBCardTitle>
                        <img className="img-fluid" src="https://www.seekpng.com/png/detail/17-175297_jouissance-the-king-s-avatar-zhou-zekai-discord.png" />
                        </MDBCardBody>
                    </MDBCard>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;