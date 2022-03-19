import React from 'react'

class Clientas extends React.Component<any, any> {
  render() {
    return (
      <div className='inner-card-container'>
        <div className='inner-card'>
          <div className='inner-card-content'>15,074</div>
          <div className='inner-card-sub'>Activa Clientas</div>
        </div>
        <div className='inner-card'>
          <div className='inner-card-content'>456</div>
          <div className='inner-card-sub'>Inctiva Clientas</div>
        </div>
        <div className='inner-card'>
          <div className='inner-card-content'>175</div>
          <div className='inner-card-sub'>Cuenta Inactiva</div>
        </div>
        <div className='inner-card'>
          <div className='inner-card-content'>5,000</div>
          <div className='inner-card-sub'>Nuevas Clientas</div>
        </div>
      </div>
    )
  }
}

export default Clientas