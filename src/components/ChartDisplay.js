import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const ChartDisplay = ({ overview }) => {
  const options = {
    chart: {
      background: 'f8f9fd',
      foreColor: '#49d991',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: overview.map(entry => entry.month)
    },
    fill: {
      colors: ['#49d991'],
    },
  };

  const series = [
    {
      name: 'Review',
      data: overview.map(entry => entry.rating)
    }
  ]

  return(
    <Chart 
      options={options}
      series={series}
      type='area'
      height='200'
      width='100%'
    />
  )
}

ChartDisplay.propTypes = {
  overview: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    month: PropTypes.string,
    rating: PropTypes.number,
  }))
}

export default ChartDisplay;