import React from 'react'

export class OTIFTable extends React.Component<any, any> {

  render() {
    const data = [
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'En Transito'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Salio de Cento'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
      ['00986455', 'OC00995', 'Monterrey', 'Oaxaca', 'Redpack', '11/03/2022', '12/03/2022', 'Entregado'],
    ]

    return <div>
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
        <div className='ra-header-container'>
          <div className='ra-header'>
            <p>No. of Referencia</p>
            <p>No. of Rastreo</p>
            <p>Origen</p>
            <p>Destino</p>
            <p>Paqueteria</p>
            <p>Fecha Recoleccion</p>
            <p>Fecha De Entrega</p>
            <p>Estatus</p>
          </div>
        </div>
        <div>
          {data.map((item, i) => {
            return (<div className='ra-line' key={i}>
              <p>{item[0]}</p>
              <p>{item[1]}</p>
              <p>{item[2]}</p>
              <p>{item[3]}</p>
              <p>{item[4]}</p>
              <p>{item[5]}</p>
              <p>{item[6]}</p>
              <p>{item[7]}</p>
            </div>)
          })}
        </div>
      </div>
    </div>
  }
}