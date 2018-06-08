import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import mySaga from './sagas/fetch'
import { logger } from 'redux-logger'

let middlewares = []

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(mySaga)

export default store
