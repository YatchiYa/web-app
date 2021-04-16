import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import { MDBProgress } from 'mdbreact';

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
          <>
          <MDBCard className="card-builder dse">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4">
                    <em className="intro">Rank</em> :  <em className="desc">{this.props.userR.wallet}  <MDBIcon icon="trophy" /> </em>
                  </MDBCol>
                  <MDBCol md="4">
                   <em className="intro">Grades</em> : <em className="desc">{this.props.userR.grades}</em>
                  </MDBCol>
                  <MDBCol md="4">
                    <em className="intro">Guilde</em> : <em className="desc">{this.props.userR.guilde}</em>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="row2x">
                  <MDBCol md='12' clas>
                    <MDBProgress value={this.props.userR.expValue} className="my-2" >
                      <em className={this.props.userR.expValue > 10 ? 'plus25' : 'moins25'}>
                        Level : {this.props.userR.level} - {this.props.userR.expValue}%</em>
                    </MDBProgress>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
          </MDBCard>
          
          <MDBCard className="card-builder dsx">
              <MDBCardTitle className="ti-card" > Enter to Sky World (not available yet ! ) </MDBCardTitle>
          </MDBCard>
          </>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;