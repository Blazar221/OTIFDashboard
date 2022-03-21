import React from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

class Envio extends React.Component<any, any> {

  componentDidMount() {
    let options = {
      series: [20, 23, 25],
      colors: ['#4c38ee', '#b4acf5', '#5bd2e6'],
      labels: ['Aire Envio', 'Bote Envio', 'Camion Envio'],
      chart: {
        type: 'donut',
        height: '300px',
        width: '300px',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'left',
      },
    }

    let chart = new ApexCharts(document.querySelector('#chart'), options)
    chart.render()
  }

  render() {
    return (
      <div className='donut-chart-container'>
        <div id='chart' />
        <div>
          <p className='donut-chart-title'>47,769,700</p>
          <p className='donut-chart-sub'>Envio Total Realizado</p>
        </div>
      </div>
    )
  }
}

export default Envio