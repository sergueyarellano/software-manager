import { connect } from 'react-redux'
import mapStateToProps from '../store/connect/mapState/sideBarOption'
import mapDispatchToProps from '../store/connect/mapDispatch/SideBarOption'
import styled from 'styled-components'
import createSideBarWrapper from './styled/SideBarWrapper_'
import createSideBarOption from '../components/SideBarOption'
import createSideBarSettings from '../components/SideBarSettings'

export default React => () => {
  const SideBarWrapper_ = createSideBarWrapper(styled)
  const ConnectedSideBarOption = createSideBarOption(React)
  const SideBarOption = connect(mapStateToProps, mapDispatchToProps)(ConnectedSideBarOption)
  const SideBarSettings = createSideBarSettings(React)
  return (
    <SideBarWrapper_>
      <SideBarSettings />
      <SideBarOption icon='fas fa-bolt fa-2x'>Ventas</SideBarOption>
      <SideBarOption icon='fas fa-cart-plus fa-2x'>Compras</SideBarOption>
      <SideBarOption icon='fas fa-cubes fa-2x'>Almacén</SideBarOption>
      <SideBarOption icon='fas fa-address-book fa-2x'>Clientes</SideBarOption>
      <SideBarOption />
    </SideBarWrapper_>
  )
}
