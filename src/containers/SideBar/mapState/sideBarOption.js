const mapStateToProps = (state, ownProps) => ({
  active: ownProps.children === state.activeOptionFilter
})

export default mapStateToProps
