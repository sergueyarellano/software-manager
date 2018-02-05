import styled from 'styled-components'
import createHeader from './styled/Header_'

const types = {
  ventas: 'Ventas',
  compras: 'Compras',
  almacen: 'Almacén'
}
export default React => ({userName, type}) => {
  const Header_ = createHeader(styled)
  if (type && type.length === 1) {
    return (
      <Header_>
        <h1 style={{alignSelf: 'start'}}>{types[type[0]]}</h1>
      </Header_>
    )
  }
  if (type && type.length > 1) {
    return (
      <Header_>
        <h3 style={{alignSelf: 'start'}}>{types[type[0]]}</h3>
        <h1 style={{alignSelf: 'start'}}>{type[1]}</h1>
      </Header_>
    )
  }
  return (
    <h1 style={{alignSelf: 'start'}}>Bienvenido {userName}!</h1>
  )
}
