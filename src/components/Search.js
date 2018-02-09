export default React => ({ph, onChange}) => {
  return (
    <div className='search'>
      <span className='fa fa-search' />
      <input 
        onChange={(e) => onChange(e.target.value) }
        onKeyUp={(e) => onChange(e.target.value)}
        style={{width: '100%', height: '30px'}} placeholder={ph} />
    </div>
  )
}
