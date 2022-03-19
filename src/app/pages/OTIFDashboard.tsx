import React from 'react'
import SmallCard from '../modules/otif/SmallCard'
import MiniCard from '../modules/otif/MiniCard'

export function OTIFDashboard() {
  return (
    <div className='d-flex flex-column flex-row-auto h-600px w-1200px'>
      <div className='d-flex flex-row flex-column-auto h-100px w-1200px justify-content-evenly'>
        <div className='d-flex flex-column flex-row-fluid w-320px'>
          <SmallCard title='Envious' content='350,547' />
        </div>

        <div className='d-flex flex-column flex-row-fluid w-320px'>
          <SmallCard title='Puntos Accumulados' content='50,997' />
        </div>

        <div className='d-flex flex-column flex-row-fluid w-320px'>
          <SmallCard title='Tempos Promedious' content='500,807' />
        </div>

        <div className='d-flex flex-column-auto flex-row-auto'>
          <MiniCard />
        </div>
      </div>

      <div className='d-flex flex-row flex-column-auto h-300px w-1200px justify-content-evenly'>
        <div className='d-flex flex-column flex-row-fluid w-400px bg-primary'>
          <span className='text-white'>Envious</span>
        </div>

        <div className='d-flex flex-column flex-row-fluid w-400px bg-primary'>
          <span className='text-white'>Puntos Accumulados</span>
        </div>

        <div className='d-flex flex-column flex-row-fluid w-400px bg-primary'>
          <span className='text-white'>Tempos Promedious</span>
        </div>

      </div>

      <div className='d-flex flex-row flex-column-auto h-200px w-1200px justify-content-evenly'>
        <div className='d-flex flex-column flex-row-fluid w-800px bg-primary'>
          <span className='text-white'>Envious</span>
        </div>

        <div className='d-flex flex-column flex-row-fluid w-400px bg-primary'>
          <span className='text-white'>Puntos Accumulados</span>
        </div>
      </div>
    </div>
  )
}