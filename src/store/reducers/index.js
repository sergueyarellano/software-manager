import { combineReducers } from 'redux'
import user from './user'
import clients from './clients'
import activeOptionFilter from './activeOptionFilter'

const appReducer = combineReducers({
  user,
  activeOptionFilter,
  clients
})

export default appReducer
