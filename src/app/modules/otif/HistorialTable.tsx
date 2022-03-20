import React from 'react'

class HistorialTable extends React.Component<any, any> {
  render() {
    const data = [
      ['John Wayne', '#23544', '27/09/22', '$40,000'],
      ['Medical Center', '#27589', '27/09/22', '$4,000'],
      ['James Jamison', '#25362', '26/09/22', '$700'],
      ['Harnold Heyes', '#24478', '26/09/22', '$440'],
      ['Ress Media', '#24435', '26/09/22', '$4,340'],
      ['Cultural Pop', '#23456', '26/09/22', '$945'],
      ['Tasty Mom Meals', '#23490', '26/09/22', '$676']]
    return <div className='his-table'>
      <div className='his-line' id='his-header'>
        <p>Name</p>
        <p>Order</p>
        <p>Date</p>
        <p style={{width: "30%"}}>Amount Paid</p>
      </div>
      <div>
        {data.map((item, i) => {
          return <div className='his-line' key={i}>
            <p style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{item[0]}</p>
            <p>{item[1]}</p>
            <p>{item[2]}</p>
            <p style={{width: "30%", fontWeight: 'bold'}}>{item[3]}</p>
          </div>
        })}
      </div>
    </div>
  }
}

export default HistorialTable