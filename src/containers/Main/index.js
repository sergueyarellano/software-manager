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

  const Home = () => (
    <Main_>
      <Header />
    </Main_>
  )
  const Clients = () => (
    <Main_>
      <Header type={['ventas', '>', 'Clientes']} />
      <ContentSales />
    </Main_>
  )
  const Subhome = ({match}) => (
    <Main_>
      <Header type={[match.params.subhome]} />
      <Content type={match.params.subhome} />
    </Main_>
  )
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/ventas/Clientes' component={Clients} />
      <Route path='/:subhome' component={Subhome} />
    </Switch>
  )
}
