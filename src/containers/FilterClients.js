import styled from 'styled-components'
import createFilterClients from './styled/FilterClients_'
import createSearch from '../components/Search'

export default React => ({type}) => {
  const FilterClients_ = createFilterClients(styled)
  const Search = createSearch(React)
  return (
    <FilterClients_>
      <Search ph='código, nombre...' />
    </FilterClients_>
  )
}
