import { connect } from 'react-redux'
import styled from 'styled-components'
import createClientTableList from './style'
import createClientRow from '../ClientRow'
import mapDispatchToProps from './mapDispatch/clientRow'

export default React => ({clients}) => {
  const ClientList_ = createClientTableList(styled)
  const ConnectedClientRow = createClientRow(React)
  const ClientRow = connect(null, mapDispatchToProps)(ConnectedClientRow)
  return (
    <ClientList_>
      {clients.map(client => (
        <ClientRow key={client.code} client={client} />
      ))}
    </ClientList_>
  )
}
