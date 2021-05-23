import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
 
const options = {
  title: {
    text: 'My stock chart'
  },
  series: [
    { data: [Math.random() * 5, 10, 7, 13, 1, 20]}
  ]
}
 
const MyStockChart = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
  allowChartUpdate = { true }
/>
 
export default MyStockChart