
import { VIEW_PRE, CHANGE_MODE, ADD_PRES} from "../../constants/presentation/presentation-main";

export function switch_mode(payload) {
  return { type: CHANGE_MODE, payload }
};
export function add_pres(payload) {
    return { type: ADD_PRES, payload }
  };

  export function view_pres(payload) {
    return { type: VIEW_PRE, payload }
  };