"use client"

import React from 'react';
import styles from './chart.module.css';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Alice',
    totalLoan: 500000,   // Total loan amount sanctioned
    amountPaid: 150000,  // Amount already repaid
    remaining: 350000,   // Outstanding balance
  },
  {
    name: 'Bob',
    totalLoan: 300000,
    amountPaid: 100000,
    remaining: 200000,
  },
  {
    name: 'Charlie',
    totalLoan: 450000,
    amountPaid: 250000,
    remaining: 200000,
  },
  {
    name: 'Diana',
    totalLoan: 600000,
    amountPaid: 400000,
    remaining: 200000,
  },
  {
    name: 'Ethan',
    totalLoan: 250000,
    amountPaid: 50000,
    remaining: 200000,
  },
  {
    name: 'Fiona',
    totalLoan: 700000,
    amountPaid: 300000,
    remaining: 400000,
  },
  {
    name: 'George',
    totalLoan: 350000,
    amountPaid: 200000,
    remaining: 150000,
  },
];


const chart = () => {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalLoan" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="amountPaid" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default chart