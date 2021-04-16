import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
// css
import '../../styles/landing-page/landing-body.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { renderPage } from "../../js/actions/home/home";
import Profile from './profile-card'
import Progress from './progress-bar'

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function mapDispatchToProps(dispatch) {
    return {
        renderPage: () => dispatch(renderPage())
    };
  }
  

class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    componentDidMount(props){
        
    }

    renderPre = () => {
        this.props.history.push({
            pathname: '/presentation'
        })
        localStorage.setItem('path_cnx_redirect', 'presentation');
    }
    render() {
        return (
            <>
                <MDBCol md="4" className="col-x" onClick={()=> {this.renderPre()}}> 
                
                    <MDBCard className="card-builder c1">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col">
                                <img className="img" src='data:image/jpeg;base64,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' />
                                Do you want to say something about yourself ? </MDBCardTitle>
                            <MDBCardText>
                                A small description of you, maybe ? :3 <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                
                <MDBCol md="4" className="col-x"> 
                <div className="bg">
                    <h4> Not available yet !</h4>
                </div>
                
                    <MDBCard className="card-builder c2">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col">
                                 <img className="img" src='https://images-eu.ssl-images-amazon.com/images/I/41EpGHYVvkL.png' />
                                 Forum </MDBCardTitle>
                            <MDBCardText>
                            <br /> hum... hum... hum... <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                
                <MDBCol md="4" className="col-x"> 
                <div className="bg">
                    <h4> Not available yet !</h4>
                </div>
                
                    <MDBCard className="card-builder c3">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col"> 
                            <img className="img" src='https://i.skyrock.net/0868/82420868/pics/3080829335_1_3_FUrIXNRs.png' />
                                Mangas </MDBCardTitle>
                            <MDBCardText>
                            Top mangas that i watched O_O <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                
                <MDBCol md="6" className="col-x"> 
                <div className="bg bgx">
                    <h4> Not available yet !</h4></div>
                
                    <MDBCard className="card-builder c4">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col"> 
                            <img className="img" src='https://www.nicepng.com/png/detail/17-170447_hand-drawn-cartoon-treasure-chest-transparent-transparent-background.png' />
                               Taverne </MDBCardTitle>
                            <MDBCardText>
                                surprise !!  <br />
                                some of softwares i développed, learn & fun ! <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
                <MDBCol md="6" className="col-x"> 
                <div className="bg bgx">
                    <h4> Not available yet !</h4></div>
                
                    <MDBCard className="card-builder c5">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col"> 
                                 <img className="img" src='https://images-eu.ssl-images-amazon.com/images/I/41EpGHYVvkL.png' />
                                Contact us </MDBCardTitle>
                            <MDBCardText>
                               do you want to contact us ? <br />
                               we will be a pleasur to respond everything you ask ! <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
                <MDBCol md="12" className="col-x"> 
                <div className="bg bgzx">
                    <h4> Not available yet !</h4></div>
                
                    <MDBCard className="card-builder c6">
                        <MDBCardBody>
                            <MDBCardTitle className="forum-col">
                                 <img className="img" src='https://img2.freepng.es/20180214/qjq/kisspng-horn-loudspeaker-icon-speaker-5a84173bc21815.6135812115186061397951.jpg' />
                                 We are hiring !! </MDBCardTitle>
                            <MDBCardText>
                               do you want to learn new things ? <br />
                               do you want to dévelop your skills ? <br />
                               we will be happy to help you ! <br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex;