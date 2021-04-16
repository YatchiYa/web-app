import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBCol, MDBRow } from "mdbreact";

import { MDBCard,MDBIcon,MDBInput , MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';

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
import { registerUser, loginUser, handleChange } from "../../js/actions/auth/auth";
import { get_data } from "../../js/actions/user-data/user-data";

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
        handleChange: (ref,data) => dispatch(handleChange({ref: ref, data: data})),
        get_data: () => dispatch(get_data()),
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
    handleRegister = () => {
        this.props.registerUser();
        setTimeout(() => {
            this.props.get_data()
            this.setState({
                authx : this.props.authR.loading
            })
        },1500)
        setTimeout(() => {
            if (!this.props.authR.loading){
                this.props.history.push({
                    pathname : '/home'
                })
            }
        },3000)
    }

    render() {
        return (
                    <MDBCard className="card-builder">
                       <MDBCardBody>
                             <MDBCardTitle>Create your acount <MDBIcon fab icon="jedi-order" /> ! </MDBCardTitle>
                                <MDBInput 
                                    label="Username" 
                                    icon="user"
                                    value={this.props.authR.username}  
                                    type='text'
                                    onChange={(e) => {
                                        this.props.handleChange('username', e.target.value)
                                    }}
                                    />
                                <MDBInput 
                                    label="email" 
                                    icon="envelope"
                                    value={this.props.authR.email}  
                                    type='text'
                                    onChange={(e) => {
                                        this.props.handleChange('email', e.target.value)
                                    }}
                                    />
                                <MDBInput label="Password" icon="key"
                                    type="password"
                                    value={this.props.authR.pasword}  
                                    onChange={(e) => {
                                        this.props.handleChange('password', e.target.value)
                                    }}
                                    />
                            <MDBBtn 
                            gradient="aqua"
                            onClick={() => {
                                this.handleRegister()
                            }}>
                                {this.props.authR.loading ? 
                                 <>  Sign Up    </>
                                :
                                    <> loading <LinearProgress 
                                    gradient="aqua" /> </>
                                }
                            </MDBBtn>
                            <label className="create-ac" onClick={(e) => {
                                this.props.handleChange('mode', true)
                            }}> <em>Sign In to your acount ? :)</em></label>
                        </MDBCardBody>
                    </MDBCard>
        )
    }
}

const Autx = connect(mapStateToProps, mapDispatchToProps)(Aut);
export default Autx;