import { setActiveOptionFilter } from '../../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setActiveOptionFilter(ownProps.children))
  }
})

export default mapDispatchToProps
