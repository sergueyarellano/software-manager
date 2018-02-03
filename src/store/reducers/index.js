import { combineReducers } from 'redux'
import root from './root'
import activeOptionFilter from './activeOptionFilter'

const appReducer = combineReducers({
  root,
  activeOptionFilter
})

export default appReducer
