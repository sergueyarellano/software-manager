import { connect } from 'react-redux'
import styled from 'styled-components'
import createClientsTable from './style'
import createClientTableHeader from '../ClientTableHeader'
import createClientList from '../ClientList'
import mapStateToProps from './mapState/clientList'

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
