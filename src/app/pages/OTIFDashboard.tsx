import React from 'react'
import SmallCard from '../modules/otif/SmallCard'
import MiniCard from '../modules/otif/MiniCard'
import MediumCard from '../modules/otif/MediumCard'
import LargeCard from '../modules/otif/LargeCard'
import HistorialTable from '../modules/otif/HistorialTable'
import Envio from '../modules/otif/Envio'
import Clientas from '../modules/otif/Clientas'
import Enviar from '../modules/otif/Enviar'
import Destinos from '../modules/otif/Destinos'
import {PageTitle} from '../../_metronic/layout/core'

export function OTIFDashboard() {
  return (
    <>
      <PageTitle>{'COTIZAR ENVIO'}</PageTitle>
      <div className='all-card-container'>
        <div className='line-container'>
          <SmallCard title='Envious' content='350,547'
                     footer={<div className='sm-card-footer'><p style={{fontSize: '1px'}}>Last 30
                       Days:</p><p style={{color: 'green'}}>↑3.16%</p>
                     </div>} />
          <SmallCard title='Puntos Accumulados' content='50,997'
                     footer={<div className='sm-card-footer'><p style={{color: 'red'}}>↓4.36%</p>
                     </div>} />
          <SmallCard title='Tempos Promedious' content='500,807'
                     footer={<div className='sm-card-footer'><p style={{fontSize: '1px'}}>Yesterday:</p><p
                       style={{color: 'green'}}>↑4.36%</p>
                     </div>} />
          <MiniCard />
        </div>

        <div
          className='line-container'>
          <MediumCard title='Historial De Envios' content={<HistorialTable />} />
          <MediumCard title='Clientas' content={<Clientas />} />
          <MediumCard title='Envio Totales' content={<Envio />} />
        </div>

        <div className='line-container'>
          <LargeCard title='Enviar Anuales' content={<Enviar />} />

          <MediumCard title='Destinos Frecuentes' content={<Destinos />} />
        </div>
      </div>
    </>
  )
}