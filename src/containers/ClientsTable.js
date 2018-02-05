import styled from 'styled-components'
import createClientsTable from './styled/ClientsTable_'
import createClientTableHeader from '../components/ClientTableHeader'
import createClientList from '../components/ClientList'

export default React => ({type}) => {
  const ClientsTable_ = createClientsTable(styled)
  const Header = createClientTableHeader(React)
  const ClientList = createClientList(React)

  return (
    <ClientsTable_>
      <Header />
      <ClientList />
    </ClientsTable_>
  )
}
