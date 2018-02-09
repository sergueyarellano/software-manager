import styled from 'styled-components'
import createClientTableList from './styled/ClientTableList_'
import createClientRow from './ClientRow'

export default React => ({clients}) => {
  const ClientList_ = createClientTableList(styled)
  const ClientRow = createClientRow(React)

  return (
    <ClientList_>
      {clients.map(client => (
        <ClientRow key={client.code} client={client} />
      ))}
    </ClientList_>
  )
}
