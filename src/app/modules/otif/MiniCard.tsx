import React from 'react'

class MiniCard extends React.Component<any, any> {
  constructor(props: object) {
    super(props)
  }

  render() {
    return <div className='card card-custom card-flush mini-card'>
      <button type='button' className='mini-button btn-lg btn-#fafafa'>
        +
      </button>
    </div>
  }
}

export default MiniCard