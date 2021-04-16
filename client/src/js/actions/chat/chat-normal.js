
import { SET_MSG, GET_MSG, HANDLE_CHANGE, SOCKET_DATA_RECIEVE } from "../../constants/chat/chat-normal";

export function view_msgs(payload) {
    return { type: GET_MSG, payload }
  };
  export function set_msgs(payload) {
      return { type: SET_MSG, payload }
    };
    export function handle_change(payload) {
        return { type: HANDLE_CHANGE, payload }
      };
      export function handle_change_socket_data_recieve(payload) {
          return { type: SOCKET_DATA_RECIEVE, payload }
        };