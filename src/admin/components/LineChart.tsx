import React from 'react';
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

function LineChartComponent() {
  const daysOfWeek: string[] = ['1 Jul', '2 Jul', '3 Jul', '4 Jul', '5 Jul', '6 Jul', '7 Jul', '8 Jul', '9 Jul'];
  const attendanceData: number[] = [64, 55, 74, 90, 66, 77, 10, 0, 92,];


  return (
    <LineChart
      xAxis={[
        {
          scaleType: 'point',
          data: daysOfWeek,
        }
        
      ]}
      yAxis={[{
        colorMap: {
          type: 'continuous',
          min: -30,
          max: 100,
          color: ['transparent', 'rgba(51, 84, 244, 0.6)'],
        }}]}
      series={[
        {
          data: attendanceData,
          area: true,
          color: "rgba(51, 84, 244, 1)",
        }
      ]}
      sx={{
        backgroundColor: '#fff', 
      }}
      width={900}
      height={300}
    />
  );
}

export default LineChartComponent;

