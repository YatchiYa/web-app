import { SIGN_IN, SIGN_UP, HANDLE_CHANGE } from "../../constants/auth/auth";

export function registerUser(payload) {
    return { type: SIGN_UP, payload }
  };

  
export function loginUser(payload) {
    return { type: SIGN_IN, payload }
  };
  
export function handleChange(payload) {
  return { type: HANDLE_CHANGE, payload }
};