export default React => ({ph}) => {
  return (
    <div className='search'>
      <span className='fa fa-search' />
      <input style={{width: '100%', height: '30px'}} placeholder={ph} />
    </div>
  )
}
