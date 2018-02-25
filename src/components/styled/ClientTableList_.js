export default styled => styled.div`
  display: grid;
  overflow: scroll;
  /* align-items: start; */
  grid-template-rows: repeat(auto-fill, minmax(23px, 1fr));
  border: 1px solid var(--boneDark);
  padding: 0 10px;
`
