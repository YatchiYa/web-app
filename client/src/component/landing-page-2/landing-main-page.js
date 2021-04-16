import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { connect } from "react-redux";

// css
import '../../styles/landing-page/landing-page-home2.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import {getUserDataInit } from '../../js-outils/API'
import { set_data, view_data, handle_change } from "../../js/actions/user-data/user-data";
import Profile from './profile-card'

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function mapDispatchToProps(dispatch) {
    return {
        handle_change: (ref,data) => dispatch(handle_change({ref: ref, data:data})),
        set_data: () => dispatch(set_data()),
        view_data: () => dispatch(view_data()),
    };
  }
  

class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal14 : null
        };
      }
    componentDidMount(props){
        var data = getUserDataInit()
        if (!data)
        {
            this.setState({
                modal14 : true
            })
        }
        else{
            this.props.set_data()
        }
    }

    render() {
        return (
            <MDBContainer className="container-landing-v2">
                <MDBRow>
                    <MDBCol md="4"></MDBCol>
                    <MDBCol md="3">
                        <MDBContainer className="midll-container">
                            <Profile className="midl-profile" {...this.props} />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex