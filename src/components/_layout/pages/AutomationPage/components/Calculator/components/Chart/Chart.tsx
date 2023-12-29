import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { PieChart } from '@mui/x-charts/PieChart'

interface IProps {
  pieData: any
}

const Chart = ({ pieData }: IProps) => {

  return (
    <div className='calculator__pie-container'>
      <span/>
      <span/>
      <span/>
      <div className='calculator__pie'>
        <StyledEngineProvider>
          <PieChart
            series={[
              {
                paddingAngle: 6,
                innerRadius: 70,
                outerRadius: 120,
                cornerRadius: 5,
                data: pieData,
              },
            ]}
            margin={{ right: 5 }}
            width={300}
            height={300}
            legend={{ hidden: true }}
          />
        </StyledEngineProvider>
      </div>
    </div>
  )
}

export default Chart
