import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBInput, MDBCol, MDBRow } from "mdbreact";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";

// css
import '../../styles/chat/chat.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

// js
import { set_msgs, handle_change, view_msgs, handle_change_socket_data_recieve } from "../../js/actions/chat/chat-normal";

const mapStateToProps = state => {
    return { chatR: state.chatR,
             userR: state.userR
            };
  };

function mapDispatchToProps(dispatch) {
    return {
        set_msgs: (user) => dispatch(set_msgs(user)),
        handle_change: (ref,data) => dispatch(handle_change({ref: ref, data: data})),
        view_msgs: () => dispatch(view_msgs()),
        handle_change_socket_data_recieve: (username, msg) => dispatch(handle_change_socket_data_recieve({username: username, msg: msg})),
    };
  }
  

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgs: [
                {
                    user : 'Yatchi',
                    msg : 'Hello'
                },
                {
                    user : 'Xenos',
                    msg : 'Hi !'
                },
            ]
        };
      }
    componentDidMount(props){
        const socket = socketIOClient();

        socket.on('user-says', (data) => {
            if (data.user != this.props.userR.username)
            {
                this.props.handle_change_socket_data_recieve(data.user, data.msg)
            }
        })
    }
    componentDidUpdate(props){

    }

    handleMsgAdd = (e) => {
        if (e.keyCode === 13 && (e.target.value != ""))
        {
            this.props.set_msgs(this.props.userR.username)
        }
    }

    render() {
        return (
            <>
                <MDBContainer className="chat-container">
                    <MDBRow  className="chat-row-1">
                        <MDBCol  className="chat-col">
                            {this.props.chatR.msgs.map(element => 
                                <span key={element.id}>
                                    <strong>{element.user} :  </strong> <em>{element.msg}</em> <br />
                                </span>
                                )}
                        </MDBCol>
                    </MDBRow>

                    <MDBRow  className="chat-row2">
                        <MDBCol  className="chat-col">
                            <MDBInput
                             onKeyUp={this.handleMsgAdd} 
                             label={this.props.userR.username}
                             value={this.props.chatR.msgUser}
                             onChange={(e) => {
                                 this.props.handle_change('msgUser', e.target.value)
                             }}
                             outline />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }
}

const Chatx = connect(mapStateToProps, mapDispatchToProps)(Chat);
export default Chatx