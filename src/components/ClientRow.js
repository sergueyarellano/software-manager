import styled from 'styled-components'
import createClientRow from './styled/ClientRow_'

export default React => ({ client }) => {
  const ClientRow_ = createClientRow(styled)
  return (
    <ClientRow_>
      <div>{client.code}</div>
      <div>{client.name}</div>
      <div>{client.address}</div>
      <div>{client.postalCode}</div>
      <div>{client.phone1}</div>
      <div>{client.phone2}</div>
      <div>{client.email}</div>
    </ClientRow_>
  )
}
