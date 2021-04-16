import React, { Component } from 'react';
import { MDBIcon, MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

import { connect } from "react-redux";

// css
import '../../styles/presentation/presentation.scss'
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

    renderToPage(){
        this.props.history.push({
            pathname: '/new-presentation'
        })
    }

    render() {
        return (
            <MDBContainer>
            <MDBRow className="row-pres-3">
                <MDBCol md="12" className="NewT" 
                    onClick={() => {
                        this.renderToPage()
                    }}
                ><em> New Topic </em></MDBCol>
                <MDBCol className="col-3" md="7">Subject</MDBCol>
                <MDBCol className="col-3" md="2">Response</MDBCol>
                <MDBCol className="col-3" md="1">Vues</MDBCol>
                <MDBCol className="col-3" md="2">Author</MDBCol>
            </MDBRow>

            <MDBRow  className="row-pres-4">
                <MDBCol className="col-4" md="1">Icon</MDBCol>
                <MDBCol className="col-4 cdc" md="6">Presentation du Mr Freezer</MDBCol>
                <MDBCol className="col-4" md="2">0</MDBCol>
                <MDBCol className="col-4" md="1">1</MDBCol>
                <MDBCol className="col-4 csx" md="2"><strong>Freezer</strong></MDBCol>
            </MDBRow>
            </MDBContainer>
        )
    }
}

const Profilex = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profilex;