import { SET_MSG, GET_MSG, HANDLE_CHANGE, SOCKET_DATA_RECIEVE } from "../../constants/chat/chat-normal";
import {getUserDataInit, viewDataInfo} from '../../../js-outils/API'
import socketIOClient from "socket.io-client";


const socket = socketIOClient();

const initialState = {
    msgs: [
      {
        user: 'Chat bot',
        msg: 'welcome to general chat'
      }
    ],
    msgValue: '',
    msgUser: ''
  };



  function homeR(state = initialState, action) {
      switch(action.type){
        
        case SOCKET_DATA_RECIEVE:
          var list = state.msgs
          list.push({
            user: action.payload.username,
            msg: action.payload.msg
          })
          return {
            ...state,
            msgs: list
          }
        
        case HANDLE_CHANGE:
          return {
              ...state,
              [action.payload.ref] : action.payload.data
          };

        case SET_MSG:
          var username = action.payload
          var list = state.msgs


          socket.emit('user-says', {
            user: username,
            msg: state.msgUser
          })
          list.push({
            user: username,
            msg: state.msgUser,
          })
          return {
            ...state,
            msgs: list,
            msgUser: ''
          }
                      
        default:
            return state;
      }
  };
  export default homeR;