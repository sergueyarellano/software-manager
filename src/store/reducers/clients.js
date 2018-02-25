const activeOptionFilter = (state = [], action) => {
  switch (action.type) {
    case 'CLIENT_FETCH_SUCCEEDED':
      return action.clients
    case 'SET_ACTIVE_CLIENT':
      return state.filter(client => {
        return client.code === action.clientCode
      })
    default:
      return state
  }
}

export default activeOptionFilter
