import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
import { render } from 'react-dom'
import { SparklineAreaData } from '../../data/dummy';

class SparkLine extends React.PureComponent{
  render() {
  return (<SparklineComponent id='sparkline' height='80px' width='150px' color='blue' dataSource={[
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
]} 
  xName='x' yName='yval'
  type='Column'
  tooltipSettings={{
    visible: true,
    format: '${x} : data ${yval}',
    trackLineSettings: {
      visible: true
    }
}}>
  {/* Inject enables tooltip features */}
<Inject services={ [SparklineTooltip] }/>
</SparklineComponent>);
  }
}

export default SparkLine