import { fetchClients } from '../../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (pattern) => {
    dispatch(fetchClients(pattern))
  }
})

export default mapDispatchToProps
