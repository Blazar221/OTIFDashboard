import React from 'react'

export class OTIFTable extends React.Component<any, any> {

  render() {
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
    </div>
  }
}