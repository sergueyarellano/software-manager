export default styled => styled.div`
  background: var(--grey);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr repeat(4, 80px) 5fr;
  min-height: 100vh;
  color: var(--white);
`
