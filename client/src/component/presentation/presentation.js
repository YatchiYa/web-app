import React, { Component } from 'react';
import { MDBIcon, MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { connect } from "react-redux";
import {getUserDataInit} from '../../js-outils/API'

// css
import '../../styles/presentation/presentation.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { switch_mode } from "../../js/actions/presentation/presentation-main";
import BodyPre from './presentation-body'

const mapStateToProps = state => {
    return { userR: state.userR,
            preR : state.preR };
  };

function mapDispatchToProps(dispatch) {
    return {
        switch_mode: () => dispatch(switch_mode())
    };
  }
  

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    componentDidMount(props){
        var data = getUserDataInit();
        if (data){
            this.props.switch_mode()
        }
    }

    render() {
        return (
            <MDBContainer className="container-pres">
                <MDBRow className="row-pres">
                    <MDBCol className="col-pres-1">
                        <img className="welcome-gg-hh" src={require('../../assets/imgs/presentation/top.png')} alt="welcome" />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row-pres-2">
                    <MDBCol md="4"></MDBCol>
                    <MDBCol md="1" className="col-pres-0 clp">
                        <Link to={{
                            pathname: '/home'
                        }} >Home</Link>
                    </MDBCol>
                    <MDBCol md="1" className="col-pres-1 clp">
                        Forum
                    </MDBCol>
                    <MDBCol md="1" className="col-pres-2 clp">
                        Search
                    </MDBCol>
                    {this.props.preR.authentificate ?
                        <MDBCol md="1" className="col-pres-3 clp">
                            <Link to={{
                                pathname: '/authentification'
                            }} >Sign In</Link>
                        </MDBCol>
                        :
                        <MDBCol md="1" className="col-pres-3 clp">
                            <Link to={{
                                pathname: '/home'
                            }} >Profile</Link>
                        </MDBCol>

                    }
                </MDBRow>
                
                <BodyPre {...this.props} />
            </MDBContainer>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;