import React from 'react'

class MediumCard extends React.Component<any, any> {
  constructor(props: object) {
    super(props)
  }

  render() {
    return <div className='card card-custom card-flush md-card'>
      <div className='card-header'>
        <div className='header-container'>
          <h3 className='card-title'>{this.props.title}</h3>
        </div>
      </div>
      <div>
        {this.props.content}
      </div>
      <div className='card-footer'>
        {this.props.footer}
      </div>
    </div>
  }
}

export default MediumCard
