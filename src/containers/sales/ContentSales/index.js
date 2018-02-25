import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import createContent from './style'
import createSeparator from '../../styled/Separator_'
import createFilterClients from '../FilterClients'
import createClientsTable from '../ClientsTable'
import qs from 'query-string'

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

  const Prueba = ({match, location}) => {
    console.log(match, qs.parse(location.search))
    return (
      <Content_>
        <div>heeeeo</div>
      </Content_>
    )
  }

  return (
    <Switch>
      <Route path='/ventas/Clientes/ficha' component={Prueba} />
      <Route path='/ventas/Clientes' component={Clients} />
    </Switch>
  )
}
