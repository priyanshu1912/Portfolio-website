import React from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart() {

            const series = [60, 75, 80, 60]
            
            const options = {
              chart: {
                height: 300,
                type: 'radialBar',
                fontFamily: 'Poppins'
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '24px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'MERN stack'
                    }
                  }
                }
              },
              labels: ['Mongodb', 'Express', 'React', 'Node'],
            }
          
  return (
    <ReactApexChart options={options} series={series} type="radialBar" height={300} />
    
  )
}

export default Chart