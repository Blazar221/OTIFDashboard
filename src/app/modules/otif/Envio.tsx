import React from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

class Envio extends React.Component<any, any> {

  componentDidMount() {
    let options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }

  render() {
    return (
      <div>
        <div id='chart' />
      </div>
    )
  }
}

export default Envio