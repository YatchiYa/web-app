import { VIEW_PRE, CHANGE_MODE, ADD_PRES } from "../../constants/presentation/presentation-main";
import {getUserDataInit, viewDataInfo} from '../../../js-outils/API'
import axios from 'axios'

const initialState = {
    authentificate: true,
    added: true
  };



  function homeR(state = initialState, action) {
      switch(action.type){
          case VIEW_PRE:
            return state;

          case CHANGE_MODE:
            return {
              ...state,
              authentificate : !state.authentificate
            };
          
          case ADD_PRES:
            var user = viewDataInfo().username
            var title = action.payload.title
            var desc = action.payload.desc
            var ad = false
            console.log(user + title + desc)

            axios
              .post('/api/pres/new', {
                user, title, desc
              })
              .then(response => {
                ad = true
              })
              .catch(err => {
                console.log("error")
              })
          setTimeout(() => {

            return {
              ...state,
              added : ad
            };
          }, 500)
            
        default:
            return state;
      }
  };
  export default homeR;