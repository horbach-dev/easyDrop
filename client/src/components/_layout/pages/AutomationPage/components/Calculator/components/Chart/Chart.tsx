import React from 'react'
import { StyledEngineProvider } from '@mui/material/styles'
import { PieChart } from '@mui/x-charts/PieChart'

interface IProps {
  pieData: any,
  className?: string,
  onClickHandler?: any
}

const Chart = ({ pieData, className = 'calculator', onClickHandler }: IProps) => {

  return (
    <div className={`${className}__pie-container`}>
      <span/>
      <span/>
      <span/>
      <div className={`${className}__pie`}>
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
            onClick={onClickHandler}
            legend={{ hidden: true }}
          />
        </StyledEngineProvider>
      </div>
    </div>
  )
}

export default Chart
