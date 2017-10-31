import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const FlightCard = ({ loading, title }) => (
  <Link to={`flights/${23}`}>
    <Card loading={loading} title={title}>
      Whatever content
    </Card>
  </Link>
)

export default FlightCard
