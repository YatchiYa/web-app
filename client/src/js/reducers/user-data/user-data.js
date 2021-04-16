
import { GET_DATA, SET_DATA, HANDLE_CHANGE, VIEW_DATA } from "../../constants/user-data/user-data";
import axios from 'axios'
import {server, port } from '../../../config'
import {getUserDataInit, viewDataInfo} from '../../../js-outils/API'


const initialState = {
    userID : '',
    username : 'anonymous',
    email : '',
    expValue : 0,
    level : 1,
    wallet : 0,
    grades : 'Vagabon',
    guilde : 'N/A'
  };



  function authR(state = initialState, action) {
      switch(action.type){
          case GET_DATA:
            var data = getUserDataInit()
            var id = data.userID
            axios
                .post('/api/users/view', {
                    id
                })
                .then(response => {
                    state.loading = false
                    sessionStorage.setItem('user_info', JSON.stringify({
                        userID : response.data.userID,
                        username : response.data.username,
                        grades : response.data.grades,
                        guilde : response.data.guilde,
                        rank : response.data.rank,
                        expValue : response.data.expValue,
                        level : response.data.level,
                    }))
                })
                .catch(err => {
                    console.log(err)
                })

            return state;

        case SET_DATA:
            var data = getUserDataInit()
            var data2 = viewDataInfo()
            return {
                ...state,
                username : data2.username,
                grades: data2.grades,
                rank: data2.rank,
                expValue: data2.expValue,
                level: data2.level,
                guilde: data2.guilde,
            };
            
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