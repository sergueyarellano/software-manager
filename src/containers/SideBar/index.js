import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import mapStateToProps from './mapState/sideBarOption'
import mapDispatchToProps from './mapDispatch/SideBarOption'
import styled from 'styled-components'
import createSideBarWrapper from './style'
import createSideBarOption from '../../components/SideBarOption'
import createSideBarSettings from '../../components/SideBarSettings'

export default React => () => {
  const SideBarWrapper_ = createSideBarWrapper(styled)
  const ConnectedSideBarOption = createSideBarOption(React)
  const SideBarOption = connect(mapStateToProps, mapDispatchToProps)(ConnectedSideBarOption)
  const SideBarSettings = createSideBarSettings(React)
  return (
    <SideBarWrapper_>
      <SideBarSettings />
      <Link to='/ventas' className='sidebar__link'>
        <SideBarOption icon='fas fa-bolt fa-2x'>Ventas</SideBarOption>
      </Link>
      <Link to='/compras' className='sidebar__link'>
        <SideBarOption icon='fas fa-cart-plus fa-2x'>Compras</SideBarOption>
      </Link>
      <Link to='/almacen' className='sidebar__link'>
        <SideBarOption icon='fas fa-cubes fa-2x'>Almacén</SideBarOption>
      </Link>
    </SideBarWrapper_>
  )
}
