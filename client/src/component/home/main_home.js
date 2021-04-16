import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { connect } from "react-redux";
import axios from 'axios'

// css
import '../../styles/home/home.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { renderPage } from "../../js/actions/home/home";
import {server, port } from '../../config'

const mapStateToProps = state => {
    return { articles: state.articles };
  };

function mapDispatchToProps(dispatch) {
    return {
        renderPage: () => dispatch(renderPage())
    };
  }
  

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

class MainHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text : "Press button to continue......",
            sound : true
        };
      }
    componentDidMount(props){
    }

    handlechange = () => {
        this.setState({
           text : 'Loading ...',
           sound : false
        })
        setTimeout(() => {
            this.props.history.push({
                pathname : '/home'
            })
        },2000)
    }

    render() {
        return (
            <div className="container_main">
            <MDBRow className="text-mdl" > 
                <MDBCol className='ti-1'> Welcome to Sky Breaker </MDBCol>
            </MDBRow>
                <MDBRow className="text-mdl" > 
                    <MDBBtn className="btn-continue first" color="danger"
                        onClick={() => {
                            this.handlechange()
                        }}
                    >
                    {this.state.sound ? 
                        <>  {this.state.text}    </>
                    :
                        <> {this.state.text} <LinearProgress color="secondary" /> </>
                    }</MDBBtn> 
                </MDBRow>
            </div>
        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex