import { RENDER_PAGE } from "../../constants/home/home";

const initialState = {
    articles: []
  };



  function homeR(state = initialState, action) {
      switch(action.type){
          case RENDER_PAGE:
            return state;
            
        default:
            return state;
      }
  };
  export default homeR;