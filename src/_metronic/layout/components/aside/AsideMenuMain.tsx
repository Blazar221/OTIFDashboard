/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import {MenuItem} from '../header/MenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem to='/otif-dashboard' title='Cotizar Envio' />
      <AsideMenuItem to='/error' title='Agender Envio' />
      <AsideMenuItem to='/error' title='Analitica' />
      <AsideMenuItem to='/error' title='Ofertas Del Dia' />
      <AsideMenuItem to='/error' title='Genera Puntos' />
      <AsideMenuItem to='/error' title='Envios  Masivos' />
      <AsideMenuItem to='/otif-table' title='Rastreos' />
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1'></div>
        </div>
      </div>
      <AsideMenuItem to='/error' title='Historial' />
      <AsideMenuItem to='/error' title='Usuarios' />
      <AsideMenuItem to='/error' title='Cartera' />
    </>
  )
}
