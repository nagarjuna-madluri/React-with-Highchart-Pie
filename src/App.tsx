import * as React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
const options = {
  title: {
    text: 'Browser market shares in May, 2020',
    align: 'left',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  chart: {
    type: 'pie',
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 70.67,
          sliced: true,
          selected: true,
        },
        {
          name: 'Edge',
          y: 14.77,
        },
        {
          name: 'Firefox',
          y: 4.86,
        },
        {
          name: 'Safari',
          y: 2.63,
        },
        {
          name: 'Internet Explorer',
          y: 1.53,
        },
        {
          name: 'Opera',
          y: 1.4,
        },
        {
          name: 'Sogou Explorer',
          y: 0.84,
        },
        {
          name: 'QQ',
          y: 0.51,
        },
        {
          name: 'Other',
          y: 2.6,
        },
      ],
    },
  ],
};

export default function App() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
