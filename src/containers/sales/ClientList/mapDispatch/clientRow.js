import { setActiveClient } from '../../../../store/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (code) => {
    dispatch(setActiveClient(code))
  }
})

export default mapDispatchToProps
