
import { GET_DATA, SET_DATA, HANDLE_CHANGE, VIEW_DATA } from "../../constants/user-data/user-data";

export function view_data(payload) {
    return { type: VIEW_DATA, payload }
  };

  
export function set_data(payload) {
  return { type: SET_DATA, payload }
}; 
export function get_data(payload) {
  return { type: GET_DATA, payload }
};

export function handle_change(payload) {
  return { type: HANDLE_CHANGE, payload }
};
