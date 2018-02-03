import styled from 'styled-components'
import createSideBarSettings from './styled/SideBarSettings_'
import createCaption from './styled/Caption_'

export default React => () => {
  const SideBarSettings_ = createSideBarSettings(styled)
  const Caption = createCaption(styled)
  return (
    <SideBarSettings_>
      <i className='fas fa-camera-retro fa-lg' style={{alignSelf: 'end'}} />
      <Caption>Ajustes</Caption>
    </SideBarSettings_>
  )
}
