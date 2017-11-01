import React from 'react'
import moment from 'moment'
import styles from './FlightCard.css'
import { Link } from 'react-router-dom'
import { Card, Icon, Row, Col } from 'antd'

const FlightCard = ({ loading, title, description, departure, returning }) => {
  console.log(description)
  return (
    <Link to={`/flight/flyFrom=${description.flyFrom}&flyTo=${description.flyTo}&departure=${departure.replace('/', '-').replace('/', '-')}&returning=${returning.replace('/', '-').replace('/', '-')}`}>
      <Card loading={loading} title={title} className={styles.spaceBetween}>
        <Row>
          <Col span={15}>
            <h4> <Icon type='rocket' /> {description.flyFrom} to {description.flyTo}</h4>
            <h4> <Icon type='calendar' /> Departure: {moment(departure, 'DD/MM/YYYY').format('MMM Do YY')} </h4>
            <h4> <Icon type='calendar' /> Returning: {moment(returning, 'DD/MM/YYYY').format('MMM Do YY')} </h4>
          </Col>
          <Col offset={4} span={5}>
            <h3>Price:</h3>
            <h4>{description.price} €</h4>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default FlightCard
