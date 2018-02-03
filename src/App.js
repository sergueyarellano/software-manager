import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import createWrapper from './Wrapper_'
import createSideBar from './containers/SideBar'
import createMain from './containers/Main'

export default React => () => {
  const Wrapper_ = createWrapper(styled)
  const SideBar = createSideBar(React)
  const Main = createMain(React)

  return (
    <Router>
      <Wrapper_>
        <SideBar />
        <Main />
      </Wrapper_>
    </Router>
  )
}
