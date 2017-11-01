import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Service from '../../Services/flightService'
import FlightMap from '../Map/Map'

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
    return (
      <Row>
        <Col span={8} offset={1}>
          <p>hola</p>
          { this.state.result.route && <FlightMap
            latFrom={this.state.result.route['0'].latFrom}
            latTo={this.state.result.route['0'].latTo}
            lngFrom={this.state.result.route['0'].lngFrom}
            lngTo={this.state.result.route['0'].lngTo}
            />
          }
        </Col>
        <Col span={12} offset={1}>
          <h1>{this.state.name}</h1>
          <hr />
          <strong> Description: </strong>
          <p>{this.state.description}</p>
          <hr />
          <div className='genere'>
            <span className='genereTitle'>
              <strong>Generes: </strong>
            </span>
          </div>
          <hr />
          <div className='trailer'>
            <strong> Trailer: </strong>
          </div>
        </Col>
      </Row>
    )
  }
}
