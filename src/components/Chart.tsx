import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bill, Person } from '../types';

interface ChartProps {
  bills: Bill[];
  persons: Person[];
}

const Chart: React.FC<ChartProps> = ({ bills, persons }) => {
  const data = {
    labels: bills.map(bill => bill.period), // Assuming 'period' is a property in Bill
    datasets: persons.map(person => ({
      label: person.name, // Assuming 'name' is a property in Person
      data: bills.map(bill => bill.expenses[person.id] || 0), // Assuming expenses is an object with person IDs
      fill: false,
      backgroundColor: getRandomColor(),
      borderColor: getRandomColor(),
    })),
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      <h2>Spese e Consumi</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;