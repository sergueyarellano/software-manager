import { connect } from 'react-redux'
import styled from 'styled-components'
import createClientsTable from './styled/ClientsTable_'
import createClientTableHeader from '../components/ClientTableHeader'
import createClientList from '../components/ClientList'
import mapStateToProps from '../store/connect/mapState/clientList'

export default React => ({type}) => {
  const ClientsTable_ = createClientsTable(styled)
  const Header = createClientTableHeader(React)
  const ConnectedClientList = createClientList(React)
  const ClientList = connect(mapStateToProps)(ConnectedClientList)

  return (
    <ClientsTable_>
      <Header />
      <ClientList />
    </ClientsTable_>
  )
}
