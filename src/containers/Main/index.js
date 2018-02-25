import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import mapStateToProps from './mapState/header'
import createMain from './style'
import createHeader from '../Header'
import createContent from '../Content'
import createContentSales from '../sales/ContentSales'

export default React => () => {
  const Main_ = createMain(styled)
  const ConnectedHeader = createHeader(React)
  const Header = connect(mapStateToProps)(ConnectedHeader)
  const Content = createContent(React)
  const ContentSales = createContentSales(React)

  return (
    <Switch>
      <Route exact path='/' render={() => (
        <Main_>
          <Header />
        </Main_>
        )} />
      <Route exact path='/:subhome' render={({match}) => (
        <Main_>
          <Header type={[match.params.subhome]} />
          <Content type={match.params.subhome} />
        </Main_>
      )} />
      <Route path='/ventas/Clientes' render={({match}) => (
        <Main_>
          <Header type={['ventas', '>', 'Clientes']} />
          <ContentSales />
        </Main_>
      )} />
    </Switch>
  )
}
