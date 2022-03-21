import React from 'react'

class SmallCard extends React.Component<any, any> {
  constructor(props: object) {
    super(props)
  }

  render() {
    return <div className='card card-custom card-flush sm-card'>
      <div className='card-header'>
        <div className='sm-card-header-container'>
          <h3 className='card-title'>{this.props.title}</h3>
          <div className='card-toolbar'>
            <button type='button' className='btn btn-sm btn-#fafafa' style={{fontSize: '20px'}}>
              ...
            </button>
          </div>
        </div>
      </div>
      <div className='sm-card-content-container'>
        <div className='card-body py-5'>
          {this.props.content}
        </div>
        <div className='card-footer'>
          {this.props.footer}
        </div>
      </div>
    </div>
  }
}

export default SmallCard
