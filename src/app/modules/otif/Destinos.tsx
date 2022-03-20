import React from 'react'

class Destinos extends React.Component<any, any> {
  render() {
    const data: Array<any> = [['USA', 0.65, '#b4acf5'],
      ['Spain', 0.08, '#b4acf5'],
      ['Ukraine', 0.11, '#5bd2e6'],
      ['China', 0.15, '#b4acf5'],
      ['Otros Paises', 0.01, '#5bd2e6']]
    return <div className='progress-container'>
      {data.map(item => {
        return <div className='progress-content'>
          <div className='progress-title'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <p>{item[0]}</p>
              <p>{(item[1] * 100).toString() + '%'}</p>
            </div>
          </div>
          <div className='progress-back'>
            <div className='progress-val' style={{width: (item[1] * 100).toString() + '%', background: item[2], height: 'inherit'}} />
          </div>
        </div>
      })}
    </div>
  }
}

export default Destinos