import React from 'react'

class LargeCard extends React.Component<any, any> {
  constructor(props: object) {
    super(props)
  }

  render() {
    return <div className='card card-custom card-flush lg-card'>
      <div className='card-header'>
        <div className='header-container'>
          <h3 className='card-title'>{this.props.title}</h3>
        </div>
      </div>
      <div>
        {this.props.content}
      </div>
      <div className='c-footer'>
        <p>...</p>
      </div>
    </div>
  }
}

export default LargeCard