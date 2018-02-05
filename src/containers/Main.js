import { Route } from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import mapStateToProps from '../store/connect/mapState/header'
import createMainWrapper from './styled/MainWrapper_'
import createHeader from './Header'
import createContent from './Content'
import createContentSales from './ContentSales'

export default React => () => {
  const MainWrapper_ = createMainWrapper(styled)
  const ConnectedHeader = createHeader(React)
  const Header = connect(mapStateToProps)(ConnectedHeader)
  const Content = createContent(React)
  const ContentSales = createContentSales(React)

  return (
    <div style={{display: 'grid'}}>
      <Route exact path='/' render={() => (
        <MainWrapper_>
          <Header />
        </MainWrapper_>
        )} />
      <Route exact path='/:subhome' render={({match}) => (
        <MainWrapper_>
          <Header type={[match.params.subhome]} /><Content type={match.params.subhome} />
        </MainWrapper_>
      )} />
      <Route exact path='/:subhome/:item' render={({match}) => (
        <MainWrapper_>
          <Header type={[match.params.subhome, match.params.item]} />
          <ContentSales />
        </MainWrapper_>
      )} />
    </div>
  )
}
