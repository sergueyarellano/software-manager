export const setActiveOptionFilter = filter => ({
  type: 'SET_ACTIVEOPTION_FILTER',
  filter
})
export const fetchClients = pattern => ({
  type: 'FETCH_REQUESTED',
  pattern
})

export const setActiveClient = clientCode => ({
  type: 'SET_ACTIVE_CLIENT',
  clientCode
})
