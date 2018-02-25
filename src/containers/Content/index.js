import styled from 'styled-components'
import createContent from './style'
import createSubhomeItems from '../styled/SubhomeItems_'
import createSeparator from '../styled/Separator_'
import { Link } from 'react-router-dom'

const types = {
  ventas: [
    'Clientes',
    'Tarifas de precios',
    '-',
    'Factura de cliente',
    'Diario de facturación',
    'Emisión rango de facturas',
    '--',
    'TPV',
    'Traspaso a contabilidad',
    '---',
    'Estadísticas'
  ],
  compras: [
    'Pedidos a proveedor',
    '-',
    'Recepción de albaranes',
    'Diario de compras',
    'Etiquetas de artículos',
    '--',
    'Estadísticas'
  ],
  almacen: [
    'Movimientos de almacén',
    'Histórico de movimientos',
    'Etiquetas de artículos',
    '-',
    'Inventario (existencias)',
    'Bajo Mínimos',
    '--',
    'Inventario físico',
    'Escandallos'
  ]
}
export default React => ({type}) => {
  const Content_ = createContent(styled)
  const SubhomeItems_ = createSubhomeItems(styled)
  const Separator_ = createSeparator(styled)
  return (
    <Content_>
      <SubhomeItems_>
        {types[type].map(item => {
          if (/-/.test(item)) {
            return <div key={item} style={{borderBottom: '1px dotted var(--boneDark)', margin: '5px 0 20px'}} />
          }
          return (
            <Link to={`/${type}/${item}`} key={item}>{item}</Link>
          )
        })}
      </SubhomeItems_>
      <Separator_ />
      <div style={{background: 'white'}}>Content here!</div>
    </Content_>
  )
}
