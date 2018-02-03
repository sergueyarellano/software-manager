const activeOptionFilter = (state = 'NONE', action) => {
  switch (action.type) {
    case 'SET_ACTIVEOPTION_FILTER':
      return action.filter
    default:
      return state
  }
}

export default activeOptionFilter
