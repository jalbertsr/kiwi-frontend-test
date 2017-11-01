import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Service from '../../Services/flightService'
import FlightMap from '../Map/Map'
import styles from './ShowFlight.css'

export default class ShowFlight extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: {}
    }

    console.log(this.props.match.params.query)
  }

  componentDidMount () {
    if (this.props.match.params.query) {
      const [flyFrom, flyTo, departure, returning] =
      this.props.match.params.query.split('&').map(query => query.split('=')[1])

      Service.getFlights(flyFrom, flyTo, departure.replace('-', '/').replace('-', '/'), returning.replace('-', '/').replace('-', '/'))
        .then(data => {
          this.setState({
            result: data.data.slice(0, 1)[0]
          })
          console.log(this.state)
        })
    }
  }
  render () {
    const result = this.state.result
    return (
      <div className={styles.flightContainer}>
        <Row>
          <Col span={8} offset={1}>
            { result.route && <FlightMap
              latFrom={result.route['0'].latFrom}
              latTo={result.route['0'].latTo}
              lngFrom={result.route['0'].lngFrom}
              lngTo={result.route['0'].lngTo}
              />
            }
          </Col>
          <Col span={12} offset={1}>
            { result.route &&
              <div>
                <h1>Fly for {result.price} EUR</h1>
                <hr />
                <strong> Flight Description: </strong>
                <p>From: {result.cityFrom}</p>
                <p>To: {result.cityTo}</p>
                <p>Flight duration: {result.fly_duration} </p>
                <p>Flight ID: {result.id} </p>
                <hr />
                <div >
                  <span>
                    <strong>Flight Description: </strong>
                    <p> Bags price:</p>
                    <ul>
                      {Object.keys(result.bags_price).map((bag, i) =>
                        <li key={i}>{`${i + 1} Bag${(i + 1) <= 1 ? '' : 's'} → ${result.bags_price[i + 1]} EUR`} </li>) }
                    </ul>
                    <p> Fly Distance: </p>
                    {`${result.distance} Km`}
                  </span>
                </div>
                <hr />
              </div>
            }
          </Col>
        </Row>
      </div>
    )
  }
}
