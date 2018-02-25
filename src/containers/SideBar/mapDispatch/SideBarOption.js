import { setActiveOptionFilter } from '../../../store/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setActiveOptionFilter(ownProps.children))
  }
})

export default mapDispatchToProps
