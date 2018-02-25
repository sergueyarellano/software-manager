import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import createContent from './style'
import createSeparator from '../../styled/Separator_'
import createFilterClients from '../FilterClients'
import createClientsTable from '../ClientsTable'

export default React => ({type}) => {
  const Content_ = createContent(styled)
  const Separator_ = createSeparator(styled)
  const FilterClients = createFilterClients(React)
  const ClientsTable = createClientsTable(React)

  const Clients = () => (
    <Content_>
      <FilterClients />
      <Separator_ />
      <ClientsTable />
    </Content_>
  )

  const Prueba = () => (
    <Content_>
      <div>heeeeo</div>
    </Content_>
  )

  return (
    <Switch>
      <Route path='/ventas/Clientes' component={Clients} />
      <Route path='/ventas/Clientes/:ficha' component={Prueba} />
    </Switch>
  )
}
