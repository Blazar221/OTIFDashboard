import React from 'react'
import ApexCharts, {ApexOptions} from 'apexcharts'

class Enviar extends React.Component<any, any> {

  componentDidMount() {
    var options = {
      colors: ['#b4acf5', '#5bd2e6'],
      series: [{
        name: 'series1',
        data: [31000, 40000, 28000, 51000, 42000, 109000, 100000],
      }, {
        name: 'series2',
        data: [11000, 32000, 45000, 32000, 34000, 52000, 41000],
      }],
      legend: {
        show: false,
      },
      chart: {
        height: 230,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      yaxis: {
        labels: {
          formatter: (val: number) => {
            return (val / 1000) + 'k'
          },
        },
      },
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-10-19T01:30:00.000Z', '2018-11-19T02:30:00.000Z', '2018-12-19T03:30:00.000Z', '2019-01-19T04:30:00.000Z', '2019-02-19T05:30:00.000Z', '2019-03-19T06:30:00.000Z'],
        //categories: ["2021-08", "2021-09", "2021-10", "2021-11", "2021-12", "2022-01"],
        labels: {
          format: 'MMMM',
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    }

    var chart = new ApexCharts(document.querySelector('#area-chart'), options)
    chart.render()
  }

  render() {
    return (
      <div className='area-chart-container'>
        <div className='card-toolbar' style={{position: 'absolute', right: '10px', top: '10px'}} data-kt-buttons='true'>
          <a
            className='btn btn-sm px-4 me-1'
            id='kt_charts_widget_3_year_btn'
            style={{background: '#b4acf5'}}
          >
            24h
          </a>

          <a
            className='btn btn-sm px-4 me-1'
            id='kt_charts_widget_3_month_btn'
            style={{background: '#b4acf5'}}
          >
            7d
          </a>

          <a
            className='btn btn-sm px-4 me-1'
            id='kt_charts_widget_3_week_btn'
            style={{background: '#b4acf5'}}
          >
            14d
          </a>

          <a
            className='btn btn-sm px-4 me-1'
            id='kt_charts_widget_3_week_btn'
            style={{background: '#b4acf5'}}
          >
            30d
          </a>
        </div>
        <div id='area-chart' />
      </div>
    )
  }
}

export default Enviar