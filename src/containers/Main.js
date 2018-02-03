import styled from 'styled-components'
import createMainWrapper from './styled/MainWrapper_'

export default React => () => {
  const MainWrapper_ = createMainWrapper(styled)
  return (
    <MainWrapper_>
      <div>Main</div>
    </MainWrapper_>
  )
}
