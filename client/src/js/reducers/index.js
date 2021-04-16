import { combineReducers } from 'redux'
import homeConfig from './home/home.js'
import authConfig from './auth/auth'
import userConfig from './user-data/user-data'
import chatConfig from './chat/chat-normal'
import presentationConfig from './presentation/presentation-main'

export default combineReducers({
  homeR : homeConfig,
  authR : authConfig,
  userR : userConfig,
  preR  : presentationConfig,
  chatR : chatConfig
})