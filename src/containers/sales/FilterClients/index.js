import { connect } from 'react-redux'
import styled from 'styled-components'
import createFilterClients from './style'
import createSearch from '../../../components/Search'
import mapDispatchToProps from './mapDispatch/search'

export default React => ({type}) => {
  const FilterClients_ = createFilterClients(styled)
  const ConnectedSearch = createSearch(React)
  const Search = connect(null, mapDispatchToProps)(ConnectedSearch)
  return (
    <FilterClients_>
      <Search ph='código, nombre...' />
    </FilterClients_>
  )
}
