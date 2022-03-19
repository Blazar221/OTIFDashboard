import React from 'react'

class HistorialTable extends React.Component<any, any> {
  render() {
    const data = [
      ['John', '#23544', '27/09/22', '$40,000'],
      ['Medical', '#27589', '27/09/22', '$4,000'],
      ['James', '#25362', '26/09/22', '$700'],
      ['Harnold', '#24478', '26/09/22', '$440'],
      ['Ress', '#24435', '26/09/22', '$4,340'],
      ['Cultural', '#23456', '26/09/22', '$945'],
      ['Tasty', '#23490', '26/09/22', '$676']]
    return <table className='his-table'>
      <thead>
      <tr>
        <th style={{width: "60px"}}>Name</th>
        <th>Order</th>
        <th>Date</th>
        <th>AmountPaid</th>
      </tr>
      </thead>
      <tbody>
      {data.map(item => {
        return (<tr>
          <td style={{overflow: "hidden"}}>{item[0]}</td>
          <td>{item[1]}</td>
          <td>{item[2]}</td>
          <td>{item[3]}</td>
        </tr>)
      })}
      </tbody>
    </table>
  }
}

export default HistorialTable