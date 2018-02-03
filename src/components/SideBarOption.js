import styled from 'styled-components'
import createSideBarOption from './styled/SideBarOption_'
import createSideBarOptionActive from './styled/SideBarOptionActive_'
import createCaption from './styled/Caption_'

export default React => ({children, icon, active, onClick}) => {
  const SideBarOption_ = createSideBarOption(styled)
  const SideBarOptionActive_ = createSideBarOptionActive(styled)
  const Caption_ = createCaption(styled)

  if (active) {
    return (
      <SideBarOptionActive_>
        <i className={icon} style={{alignSelf: 'end'}} />
        <Caption_>{children}</Caption_>
      </SideBarOptionActive_>
    )
  }
  return (
    <SideBarOption_ onClick={onClick}>
      <i className={icon} style={{alignSelf: 'end'}} />
      <Caption_>{children}</Caption_>
    </SideBarOption_>
  )
}
