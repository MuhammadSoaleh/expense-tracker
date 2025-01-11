import React from 'react'

import { BarChart } from '@mui/x-charts/BarChart';
function Workout() {
  return (
    <div className='container-fluid bg-dark'>
      <h1 className='text-center ' style={{fontFamily:'monospace',color:'yellow'}}>Workout</h1>
      <div class="container text-center">
  <div class="row text-white">
    <div class="col bg-body-tertiary">
    <BarChart
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </div>
    <div class="col bg-body-tertiary">
      2 of 2
    </div>
  </div>
  </div>
    </div>
  )
}

export default Workout
