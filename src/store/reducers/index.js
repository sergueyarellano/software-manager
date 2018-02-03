import { combineReducers } from 'redux'
import user from './user'
import activeOptionFilter from './activeOptionFilter'

const appReducer = combineReducers({
  user,
  activeOptionFilter
})

export default appReducer
