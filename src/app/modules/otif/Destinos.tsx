import React from 'react'

class Destinos extends React.Component<any, any> {
  render() {
    const data = [['USA', '65%']]
    return <div>
      <div>
        <div>
          <p>USA</p>
          <p>65%</p>
        </div>
        <div>
          <div>Progress</div>
        </div>
      </div>
    </div>
  }
}

export default Destinos