import React from 'react'
import {ReactComponent as CircleGreen} from './circle-green.svg'
import {ReactComponent as CircleBlue} from './circle-blue.svg'
import {ReactComponent as CircleGray} from './circle-gray.svg'
import {ReactComponent as Down} from './pull-down.svg'
import {PageTitle} from '../../_metronic/layout/core'

export class OTIFTable extends React.Component<any, any> {

  render() {
    const data = [
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '0'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '0'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Salio de Cento', '2'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado', '1'],
    ]

    return <>
      <PageTitle>{'RASTREO'}</PageTitle>
      <div>
        <div className='input-container'>
          <input
            type='text'
            className='form-control'
            style={{width: '320px'}}
            placeholder='Numero de rastreo'
          />
          <a href='#' className='btn btn-input'>Rastrer</a>
          <input
            type='date'
            className='form-control'
            style={{width: '180px', marginLeft: 'auto', marginRight: '10px', position: 'relative', top: '10px'}}
          />
        </div>
        <div className='ra-table'>
          <div className='ra-line' id='ra-header'>
            <p style={{width: '17%'}}>No. of Referencia</p>
            <p>No. of Rastreo</p>
            <p style={{width: '12%'}}>Origen</p>
            <p>Destino</p>
            <p>Paqueteria</p>
            <p style={{width: '18%'}}>Fecha Recoleccion</p>
            <p style={{width: '18%'}}>Fecha De Entrega</p>
            <p style={{width: '18%'}}>Estatus</p>
          </div>
          <div>
            {data.map((item, i) => {
              return <div className='ra-line' key={i}>
                <p>{item[0]}</p>
                <p>{item[1]}</p>
                <p>{item[2]}</p>
                <p>{item[3]}</p>
                <p>{item[4]}</p>
                <p>{item[5]}</p>
                <p>{item[6]}</p>
                <p style={{width: '18%'}}>
                  {(item[8] === '0') ? <CircleGreen style={{width: '10px', height: '10px'}} /> :
                    (item[8] === '1') ? <CircleBlue style={{width: '10px', height: '10px'}} /> :
                      <CircleGray style={{width: '10px', height: '10px'}} />
                  }
                  {item[7]}<Down style={{width: '14px', height: '14px'}} />
                </p>
              </div>
            })}
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <a href='#' className='btn-download'>Download stats</a>
        </div>
      </div>
    </>
  }
}