import { SIGN_IN, SIGN_UP, HANDLE_CHANGE } from "../../constants/auth/auth";
import axios from 'axios'
import {server, port } from '../../../config'
import {getPort} from '../../../js-outils/API'

const initialState = {
    userID : '',
    username : '',
    email : '',
    password : '',
    mode : true,
    loading : true
  };



  function authR(state = initialState, action) {
      switch(action.type){
          case SIGN_IN:
                var {password, username} = state
                axios
                    .post('/api/auth/login', {
                        username, password
                    })
                    .then(response => {
                        console.log("TRY TO LOG")
                        state.loading = false
                        sessionStorage.setItem('data_user', JSON.stringify({
                            userID : response.data.userID,
                            token : response.data.token,
                            username : response.data.username
                        }))
                    })
                    .catch(err => {
                        alert('auth failled')
                        console.log(err)
                    })

            return state;

        case SIGN_UP:
            var {password, username, email} = state
                axios
                    .post('/api/auth/register', {
                        username, email, password
                    })
                    .then(response => {
                        state.loading = false
                        sessionStorage.setItem('data_user', JSON.stringify({
                            userID : response.data.userID,
                            token : response.data.token,
                            username : response.data.username
                        }))
                    })
                    .catch(err => {
                        console.log(err)
                    })

            return state;
            
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.payload.ref] : action.payload.data
            };
               
        default:
            return state;
      }
  };
  export default authR;