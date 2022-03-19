import React from 'react'

class SmallCard extends React.Component<any, any> {
  constructor(props: object) {
    super(props)
  }

  render() {
    return <div className='card card-custom card-flush'>
      <div className='card-header'>
        <h3 className='card-title'>{this.props.title}</h3>
        <div className='card-toolbar'>
          <button type='button' className='btn btn-sm btn-light'>
            Action
          </button>
        </div>
      </div>
      <div className='card-body py-5'>
        {this.props.content}
      </div>
      <div className='card-footer'>
        Footer
      </div>
    </div>
  }
}

export default SmallCard
