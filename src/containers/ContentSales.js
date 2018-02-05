import styled from 'styled-components'
import createContent from './styled/Content_'
import createSeparator from './styled/Separator_'
import createFilterClients from './FilterClients'
import createClientsTable from './ClientsTable'

export default React => ({type}) => {
  const Content_ = createContent(styled)
  const Separator_ = createSeparator(styled)
  const FilterClients = createFilterClients(React)
  const ClientsTable = createClientsTable(React)

  return (
    <Content_>
      <FilterClients />
      <Separator_ />
      <ClientsTable />
    </Content_>
  )
}
