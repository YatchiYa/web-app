import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { connect } from "react-redux";

// css
import '../../styles/landing-page/landing-page-home.scss'
import '../../styles/landing-page/landing-body.scss'
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
import Progress from './progress-bar'
import ModalCnx from './modal-cnx'
import BodyP from './landing-body-page'
import Chat from '../chat-normal/chat-normal'

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
        localStorage.setItem('path_cnx_redirect', 'home');
        
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
            <MDBContainer className="container-landing">
                {this.state.modal14 && <ModalCnx {...this.props}/>}
                <MDBRow>
                    <MDBCol md="2" className="col1">
                        <Profile {...this.props} />
                    </MDBCol>
                    
                    <MDBCol md="10" className="col2">
                        <Progress {...this.props} />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="row2">
                    <BodyP {...this.props}/>
                </MDBRow>
                <MDBRow>
                    <Chat {...this.props} />
                </MDBRow>
            </MDBContainer>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex