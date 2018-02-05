import styled from 'styled-components'
import createClientTableHeader from './styled/ClientTableHeader_'
export default React => () => {
  const ClientTableHeader = createClientTableHeader(styled)
  return (
    <ClientTableHeader>
      <div>hey</div>
      <div>hey</div>
      <div>heylkjaslkjsdlfkjlksdflksdjflkj</div>
      <div>hey</div>
      <div>hey</div>
      <div>hey</div>
    </ClientTableHeader>
  )
}
