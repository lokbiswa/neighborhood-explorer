import React, { useEffect } from 'react';
import { useState } from 'react';
import { useStoreContext } from '../../app-store/app-store';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Barchart = () => {
  const { state } = useStoreContext();
  const { selectedNeighborhood } = state;
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'bar',
      height: '300',
    },
    title: {
      text: 'Commute Data Bar Chart',
    },
    xAxis: {
      categories: [],
      title: {
        text: 'Commute Types',
      },
      accessibility: {
        enable: true,
        description: 'The X-axis (horizontal) represents the commuting methods',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population',
      },
      accessibility: {
        description:
          'The Y-axis (vertical) represents the population count. The colors are used for visual distinction but are not essential for understanding the data.',
      },
    },
    series: [
      {
        name: 'Population',
        data: [],
      },
    ],
  });
  useEffect(() => {
    const categories = ['drive Alone', 'Carpool', 'Public Transit', 'Walk'];

    const data = [
      selectedNeighborhood['pop-commute-drive_alone'],
      selectedNeighborhood['pop-commute-drive_carpool'],
      selectedNeighborhood['pop-commute-public_transit'],
      selectedNeighborhood['pop-commute-walk'],
    ];

    setChartOptions((currentChartData) => {
      return {
        ...currentChartData,
        xAxis: {
          ...currentChartData.xAxis,
          categories: categories,
        },
        series: {
          ...currentChartData.series,
          data: data,
        },
      };
    });
  }, [selectedNeighborhood]);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default Barchart;
