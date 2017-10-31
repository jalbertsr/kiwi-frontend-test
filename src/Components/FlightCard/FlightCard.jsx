import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Card, Icon, Row, Col } from 'antd'

const FlightCard = ({ loading, title, description }) => (
  <Link to={`flights/${23}`}>
    <Card loading={loading} title={title}>
      <Row>
        <Col span={12}>
          <h4> <Icon type='rocket' /> {description.flyFrom} to {description.flyTo}</h4>
          <h4> <Icon type='schedule' /> {moment().format('DD/MM/YYYY')} </h4>
        </Col>
        <Col offset={4} span={8}>
          <h3>Price:</h3>
          <h4>{description.price}</h4>
        </Col>
      </Row>
    </Card>
  </Link>
)

export default FlightCard
