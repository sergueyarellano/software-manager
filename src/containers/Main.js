import { Route } from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import mapStateToProps from '../store/connect/mapState/header'
import createMainWrapper from './styled/MainWrapper_'
import createHeader from './Header'
import createContent from './Content'

export default React => () => {
  const MainWrapper_ = createMainWrapper(styled)
  const ConnectedHeader = createHeader(React)
  const Header = connect(mapStateToProps)(ConnectedHeader)
  const Content = createContent(React)

  return (
    <div style={{display: 'grid'}}>
      <Route exact path='/' render={() => (
        <MainWrapper_>
          <Header />
          <Content />
        </MainWrapper_>
        )} />
      <Route exact path='/sales' render={() => (<div>Sales</div>)} />
      <Route exact path='/sales/clients' render={() => (<div>Clients</div>)} />
    </div>
  )
}
