import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { connect } from "react-redux";

// css
import '../../styles/home/home.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

// js
import { renderPage } from "../../js/actions/home/home";

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
            text : "Press button to continue......"
        };
      }
      
    render() {
        return (
                
            <div className="container">
                

            </div>


        )
    }
}

const MainHomex = connect(mapStateToProps, mapDispatchToProps)(MainHome);
export default MainHomex