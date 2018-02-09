import styled from 'styled-components'
import createClientTableHeader from './styled/ClientTableHeader_'

const headerItems = [
  'Código',
  'Nombre',
  'Domicilio',
  'CP',
  'Tlf',
  'Tlf2',
  'Email'
]
export default React => () => {
  const ClientTableHeader = createClientTableHeader(styled)
  return (
    <ClientTableHeader>
      {headerItems.map(item => (
        <h4>{item}</h4>
      ))}
    </ClientTableHeader>
  )
}
