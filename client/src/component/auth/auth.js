import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { connect } from "react-redux";

// css
import '../../styles/auth/auth.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { registerUser, loginUser, handleChange } from "../../js/actions/auth/auth";
import Login from './login'
import Register from './register'

const mapStateToProps = state => {
    return {
             homeR: state.homeR,
             authR: state.authR
            };
  };

function mapDispatchToProps(dispatch) {
    return {
        registerUser: () => dispatch(registerUser()),
        loginUser: () => dispatch(loginUser()),
        handleChange: (ref,data) => dispatch(handleChange({ref: ref, data: data}))
    };
  }
  

class Aut extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    componentDidMount(props){
    }

    render() {
        return (
            <MDBContainer className="auth-container">
                <MDBRow className="auth-row">
                    <MDBCol md="3"></MDBCol>
                    <MDBCol md="5" className="auth-col">
                        {this.props.authR.mode ?
                             <Login {...this.props} />
                             :
                             
                            <Register {...this.props} />
                        
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const Autx = connect(mapStateToProps, mapDispatchToProps)(Aut);
export default Autx;