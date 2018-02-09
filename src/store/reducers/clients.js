const activeOptionFilter = (state = [], action) => {
  switch (action.type) {
    case 'CLIENT_FETCH_SUCCEEDED':
      return action.clients
    default:
      return state
  }
}

export default activeOptionFilter
