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
      <div className='d-flex flex-column flex-row-auto h-700px w-1200px'>
        <div className='d-flex flex-row flex-column-auto h-100px w-1200px justify-content-evenly'>
          <div className='d-flex flex-column flex-row-fluid w-320px'>
            <SmallCard title='Envious' content='350,547'
                       footer={<div className='sm-card-footer'><p style={{fontSize: '1px'}}>Last 30
                         Days:</p><p style={{color: 'green'}}>↑3.16%</p>
                       </div>} />
          </div>

          <div className='d-flex flex-column flex-row-fluid w-320px'>
            <SmallCard title='Puntos Accumulados' content='50,997'
                       footer={<div className='sm-card-footer'><p style={{color: 'red'}}>↓4.36%</p>
                       </div>} />
          </div>

          <div className='d-flex flex-column flex-row-fluid w-320px'>
            <SmallCard title='Tempos Promedious' content='500,807'
                       footer={<div className='sm-card-footer'><p style={{fontSize: '1px'}}>Yesterday:</p><p
                         style={{color: 'green'}}>↑4.36%</p>
                       </div>} />
          </div>

          <div className='d-flex flex-column-auto flex-row-auto'>
            <MiniCard />
          </div>
        </div>

        <div
          className='d-flex flex-row flex-column-auto h-300px w-1200px justify-content-between align-content-between'>
          <MediumCard title='Historial De Envios' content={<HistorialTable />} />
          <MediumCard title='Clientas' content={<Clientas />} />
          <MediumCard title='Envio Totales' content={<Envio />} />
        </div>

        <div className='d-flex flex-row flex-column-auto h-300px w-1200px justify-content-between'>
          <LargeCard title='Enviar Anuales' content={<Enviar />} />

          <MediumCard title='Destinos Frecuentes' content={<Destinos />} />
        </div>
      </div>
    </>
  )
}