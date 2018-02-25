import styled from 'styled-components'
import createHeader from './style'

export default React => ({userName, type}) => {
  const Header_ = createHeader(styled)
  if (type && type.length === 1) {
    return (
      <Header_>
        <h1>{type[0]}</h1>
      </Header_>
    )
  }
  if (type && type.length > 1) {
    return (
      <Header_>
        <h1>{type[0]}</h1>
        <h2>{type[1]}</h2>
        <h2>{type[2]}</h2>
      </Header_>
    )
  }
  return (
    <h1 style={{alignSelf: 'start'}}>Bienvenido {userName}!</h1>
  )
}
