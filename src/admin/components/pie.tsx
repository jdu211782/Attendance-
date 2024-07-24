import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface PieChartData {
  value: number;
  color: string;
}

const data: PieChartData[] = [
  {  value: 70, color: 'rgba(7, 100, 230, 1)' },
  {  value: 20, color: 'rgba(170, 0, 0, 1)' },
  {  value: 10, color: 'rgba(213, 181, 0, 1)' },
];

const TOTAL = data.reduce((a, b) => a + b.value, 0);

const getArcLabel = (params: any) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 120,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
        background: "#fff"
      }}
      width={280}
      height={280}
    />
  );
}

export default PieChartWithCustomizedLabel;