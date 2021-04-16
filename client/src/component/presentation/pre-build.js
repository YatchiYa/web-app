import React, { Component } from 'react';
import {  MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MDBCard,MDBIcon,MDBInput , MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { connect } from "react-redux";
import {getUserDataInit} from '../../js-outils/API'

// css
import '../../styles/presentation/pre-build.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { add_pres } from "../../js/actions/presentation/presentation-main";
import BodyPre from './presentation-body'

const mapStateToProps = state => {
    return { userR: state.userR,
            preR : state.preR };
  };

function mapDispatchToProps(dispatch) {
    return {
        add_pres: (title, desc) => dispatch(add_pres({title: title, desc: desc}))
    };
  }
  

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: " ",
            desc: " "
        };
      }
    componentDidMount(props){
    }

    onSubmit = () => {
        this.props.add_pres(this.state.title, this.state.desc)
        setTimeout(() => {
            
            if (this.props.preR.added){
                this.props.history.push({
                    pathname: '/presentation'
                })
            }
        },1000)
    }

    render() {
        return (
            <MDBContainer className="pres-build">
                <MDBCol md="12">
                    <h4> Do you wana share some informations about you ? :3 </h4>
                </MDBCol>
                <MDBRow>
                    <MDBCol md="12">
                        <MDBInput 
                                    label="A small title maybe ? :) " 
                                    value={this.state.title}  
                                    type='text'
                                    onChange={(e) => {
                                        this.setState({
                                            title: e.target.value
                                        })
                                    }}
                        />
                    </MDBCol>
                    <MDBCol md="12">

                    <div class="md-form">
                                        <textarea 
                                        value={this.state.desc}
                                        onChange={(e) => {
                                            this.setState({
                                                desc: e.target.value
                                            })
                                        }}
                                        id="form7" class="md-textarea form-control" rows="3"></textarea>
                                        <label for="form7">Become a philosopher and impress yourself ? :3 </label>
                                    </div>
                    </MDBCol>
                    <MDBCol md="12">
                        <MDBBtn
                            color="gradien"
                            onClick={() => {
                                this.onSubmit()
                            }}
                        >
                            Submit
                        </MDBBtn>
                    </MDBCol>
                    
                </MDBRow>
            </MDBContainer>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;