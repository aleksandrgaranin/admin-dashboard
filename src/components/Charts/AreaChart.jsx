import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective, Inject,
  DateTime, Legend, Tooltip, SplineAreaSeries
} from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { Header } from '../../components'

import { useStateContext } from '../../context/contextProvider'

const AreaChart = () => {
  const { currentMode } = useStateContext()

  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend ]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaChart