import React from 'react'
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill
} from 'react-icons/bs'

import {
  BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Jan', sales: 400, users: 240 },
  { name: 'Feb', sales: 300, users: 139 },
  { name: 'Mar', sales: 500, users: 380 },
  { name: 'Apr', sales: 200, users: 190 },
  { name: 'May', sales: 278, users: 250 },
]

const Home = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      {/* CARDS */}
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      {/* CHARTS */}
      <div className='charts'>
        {/* BAR CHART */}
        <div className='chart'>
          <h3>Monthly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* LINE CHART */}
        <div className='chart'>
          <h3>User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  )
}

export default Home
