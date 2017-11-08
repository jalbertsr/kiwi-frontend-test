import React, { Component } from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'
import FlightDescription from '../FlightDescription/FlightDescription'

import Service from '../../Services/flightService'
import FlightMap from '../Map/Map'
import styles from './ShowFlight.css'

export default class ShowFlight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: {}
    }
  }

  componentDidMount () {
    if (this.props.match.params.query) {
      const [flyFrom, flyTo, departure, returning, index] =
      this.props.match.params.query.split('&').map(query => query.split('=')[1])
      const parsedDeparture = departure.replace('-', '/').replace('-', '/')
      const parsedReturn = returning.replace('-', '/').replace('-', '/')

      Service.getFlights(flyFrom, flyTo, parsedDeparture, parsedReturn)
        .then(data => {
          this.setState({
            result: data.data[index]
          })
        })
    }
  }

  render () {
    const result = this.state.result
    return (
      <div className={styles.flightContainer}>
        <Row>
          <Col xs={18} md={8} offset={1}>
            { result.route && <FlightMap
              latFrom={result.route['0'].latFrom}
              latTo={result.route['0'].latTo}
              lngFrom={result.route['0'].lngFrom}
              lngTo={result.route['0'].lngTo}
            />
            }
          </Col>
          <Col xs={18} md={12} offset={1}>
            {
              result.route &&
              <FlightDescription {...result} />
            }
          </Col>
        </Row>
      </div>
    )
  }
}

ShowFlight.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      query: PropTypes.string.isRequired
    })
  })
}
