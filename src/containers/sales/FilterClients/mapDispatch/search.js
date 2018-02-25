import { fetchClients } from '../../../../store/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (pattern) => {
    dispatch(fetchClients(pattern))
  }
})

export default mapDispatchToProps
