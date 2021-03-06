import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import fetch from 'cross-fetch'

function fetchAPI (url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(async res => {
      resolve(await res.json())
    })
  })
}

function * fetchClient ({pattern}) {
  yield delay(170)
  try {
    if (pattern) {
      if (pattern === '*') pattern = '.*'

      const clients = yield call(fetchAPI, `http://localhost:3001/api/clients/${pattern}`)
      console.log('clients: ', clients)

      yield put({ type: 'CLIENT_FETCH_SUCCEEDED', clients: clients })
    }
  } catch (e) {
    console.log(e)
  }
}

function * mySaga () {
  yield takeLatest('FETCH_REQUESTED', fetchClient)
}

export default mySaga
