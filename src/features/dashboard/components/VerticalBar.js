import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at"],
  datasets: [
    {
      label: '# of Attendances',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(9 93 121)',
      ],
      borderColor: [
        'rgba(0, 0, 0, 0.25)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};


const VerticalBar = () => (
  <>
    <Bar data={data} options={options} />
  </>
);

export default VerticalBar;