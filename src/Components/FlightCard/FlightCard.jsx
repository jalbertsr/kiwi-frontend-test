import React from 'react'
import moment from 'moment'
import styles from './FlightCard.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Icon, Row, Col } from 'antd'

const FlightCard = ({ loading, title, description, departure, returning, index }) => {
  const parsedDeparture = departure.replace('/', '-').replace('/', '-')
  const parsedReturn = returning.replace('/', '-').replace('/', '-')
  return (
    <Link to={`/flight/flyFrom=${description.flyFrom}&flyTo=${description.flyTo}&departure=${parsedDeparture}&returning=${parsedReturn}&fly=${index}`}>
      <Card loading={loading} title={title} className={styles.spaceBetween}>
        <Row>
          <Col xs={8} sm={12} md={16}>
            <h4> <Icon type='rocket' /> {description.flyFrom} to {description.flyTo}</h4>
            <h4> <Icon type='calendar' /> Departure: {moment(departure, 'DD/MM/YYYY').format('MMM Do YY')} </h4>
            <h4> <Icon type='calendar' /> Returning: {moment(returning, 'DD/MM/YYYY').format('MMM Do YY')} </h4>
          </Col>
          <Col offset={3} xs={4} md={5}>
            <div className={styles.priceTitle}>
              <h3>Price:</h3>
              <h4>{description.price} €</h4>
            </div>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

export default FlightCard

FlightCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  returning: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  description: PropTypes.shape({
    flyFrom: PropTypes.string.isRequired,
    flyTo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
}
